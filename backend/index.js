require("dotenv").config();
const authRoute = require("./server/Routes/AuthRoute");
const { userVerification } = require("./server/Middlewares/AuthMiddleware");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const { FundsModel } = require("./models/FundsModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "http://localhost:3000",
      "https://stock-trading-app-rho.vercel.app",
      "https://stock-trading-app-1re2-nu.vercel.app",
    ],
    credentials: true,
  }),
);

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.json());

app.use("/auth", authRoute);
console.log("AUTH ROUTE LOADED");

app.get("/allHoldings", userVerification, async (req, res) => {
  const allHoldings = await HoldingsModel.find({
    userId: req.userId,
  });

  res.json(allHoldings);
});

app.get("/allPositions", userVerification, async (req, res) => {
  const allPositions = await PositionsModel.find({
    userId: req.userId,
  });

  res.json(allPositions);
});

app.post("/newOrder", userVerification, async (req, res) => {
  const qty = Number(req.body.qty);
  const price = Number(req.body.price);
  const mode = req.body.mode;

  // Basic validation
  if (
    !Number.isFinite(qty) ||
    !Number.isFinite(price) ||
    qty <= 0 ||
    price <= 0
  ) {
    return res.status(400).json({
      message: "Invalid quantity or price",
    });
  }

  if (mode !== "BUY" && mode !== "SELL") {
    return res.status(400).json({
      message: "Invalid order mode",
    });
  }

  const orderValue = qty * price;

  // Get funds for current user
  let funds = await FundsModel.findOne({
    userId: req.userId,
  });

  if (!funds) {
    funds = new FundsModel({
      userId: req.userId,
      availableCash: 100000,
    });

    await funds.save();
  }

  // =========================
  // BUY
  // =========================
  if (mode === "BUY") {
    // Check funds BEFORE changing holdings/positions
    if (funds.availableCash < orderValue) {
      return res.status(400).json({
        message: "Insufficient funds",
      });
    }

    // Deduct money
    funds.availableCash -= orderValue;
    await funds.save();

    // Update Holdings
    let holding = await HoldingsModel.findOne({
      userId: req.userId,
      name: req.body.name,
    });

    if (!holding) {
      holding = new HoldingsModel({
        userId: req.userId,
        name: req.body.name,
        qty: qty,
        avg: price,
        price: price,
        net: "0.00%",
        day: "0.00%",
        isLoss: false,
      });
    } else {
      const totalValue = holding.avg * holding.qty + price * qty;
      const totalQty = holding.qty + qty;

      holding.avg = totalValue / totalQty;
      holding.qty = totalQty;
      holding.price = price;
    }

    await holding.save();

    // Update Positions
    let position = await PositionsModel.findOne({
      userId: req.userId,
      name: req.body.name,
    });

    if (!position) {
      position = new PositionsModel({
        userId: req.userId,
        product: "CNC",
        name: req.body.name,
        qty: qty,
        avg: price,
        price: price,
        net: "0.00",
        day: "0.00%",
        isLoss: false,
      });
    } else {
      const totalValue = position.avg * position.qty + price * qty;
      const totalQty = position.qty + qty;

      position.avg = totalValue / totalQty;
      position.qty = totalQty;
      position.price = price;
    }

    await position.save();
  }

  // =========================
  // SELL
  // =========================
  if (mode === "SELL") {
    const holding = await HoldingsModel.findOne({
      userId: req.userId,
      name: req.body.name,
    });

    if (!holding) {
      return res.status(400).json({
        message: "You don't own this stock",
      });
    }

    if (holding.qty < qty) {
      return res.status(400).json({
        message: "Insufficient quantity",
      });
    }

    const position = await PositionsModel.findOne({
      userId: req.userId,
      name: req.body.name,
    });

    if (!position) {
      return res.status(400).json({
        message: "You don't have a position in this stock",
      });
    }

    if (position.qty < qty) {
      return res.status(400).json({
        message: "Insufficient quantity",
      });
    }

    // Update Holdings
    holding.qty -= qty;

    if (holding.qty === 0) {
      await HoldingsModel.deleteOne({
        _id: holding._id,
      });
    } else {
      await holding.save();
    }

    // Update Positions
    position.qty -= qty;
    position.price = price;

    if (position.qty === 0) {
      await PositionsModel.deleteOne({
        _id: position._id,
      });
    } else {
      await position.save();
    }

    // Add money from SELL
    funds.availableCash += orderValue;
    await funds.save();
  }

  // Save Order
  const newOrder = new OrdersModel({
    userId: req.userId,
    name: req.body.name,
    qty: qty,
    price: price,
    mode: mode,
  });

  await newOrder.save();

  res.send("Order saved!");
});

app.get("/funds", userVerification, async (req, res) => {
  let funds = await FundsModel.findOne({
    userId: req.userId,
  });

  if (!funds) {
    funds = new FundsModel({
      userId: req.userId,
      availableCash: 100000,
    });

    await funds.save();
  }

  res.json(funds);
});

app.post("/addFunds", userVerification, async (req, res) => {
  const amount = Number(req.body.amount);

  if (!Number.isFinite(amount) || amount <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  let funds = await FundsModel.findOne({ userId: req.userId });

  if (!funds) {
    funds = new FundsModel({
      userId: req.userId,
      availableCash: 100000,
    });
  }

  funds.availableCash += amount;

  funds.transactions.push({
    type: "ADD",
    amount: amount,
  });

  await funds.save();

  res.json({
    message: "Funds added successfully",
    availableCash: funds.availableCash,
  });
});

app.post("/withdrawFunds", userVerification, async (req, res) => {
  const amount = Number(req.body.amount);

  if (!Number.isFinite(amount) || amount <= 0) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  let funds = await FundsModel.findOne({ userId: req.userId });

  if (!funds) {
    return res.status(400).json({
      message: "Funds account not found",
    });
  }

  if (funds.availableCash < amount) {
    return res.status(400).json({
      message: "Insufficient funds",
    });
  }

  funds.availableCash -= amount;

  funds.transactions.push({
    type: "WITHDRAW",
    amount: amount,
  });

  await funds.save();

  res.json({
    message: "Funds withdrawn successfully",
    availableCash: funds.availableCash,
  });
});

app.get("/fundTransactions", userVerification, async (req, res) => {
  const funds = await FundsModel.findOne({ userId: req.userId });

  if (!funds) {
    return res.json([]);
  }

  const transactions = [...funds.transactions].reverse();

  res.json(transactions);
});

app.get("/allOrders", userVerification, async (req, res) => {
  const allOrders = await OrdersModel.find({
    userId: req.userId,
  });

  res.json(allOrders);
});

app.listen(PORT, () => {
  console.log("app started!");

  mongoose.connect(uri);

  console.log("db started!");
});
