import React from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext.js";
import "./BuyActionWindow.css";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState("");
  const [error, setError] = useState("");
  const { closeBuyWindow, setOrderUpdate } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/newOrder`,
        {
          name: uid,
          qty: stockQuantity,
          price: Number(stockPrice),
          mode: "BUY",
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      );
      setOrderUpdate((prev) => prev + 1);
      closeBuyWindow();
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(event) => {
                setStockQuantity(event.target.value);
              }}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(event) => {
                setStockPrice(event.target.value);
              }}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      {error && <p className="text-danger">{error}</p>}
      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;