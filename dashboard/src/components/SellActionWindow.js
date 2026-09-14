import React from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext.js";
import "./BuyActionWindow.css";
import { useContext, useState } from "react";
import axios from "axios";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState("");
  const [error, setError] = useState("");

  const { closeSellWindow, setOrderUpdate } = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      await axios.post(
        "${process.env.REACT_APP_API_URL}/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: Number(stockPrice),
          mode: "SELL",
        },
        {
          withCredentials: true,
        },
      );

      setOrderUpdate((prev) => prev + 1);
      closeSellWindow();
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              value={stockQuantity}
              onChange={(event) => {
                setStockQuantity(event.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={stockPrice}
              onChange={(event) => {
                setStockPrice(event.target.value);
              }}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        {error && <p className="text-danger">{error}</p>}

        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>

          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
