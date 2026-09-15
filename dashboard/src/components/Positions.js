import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./Positions.css";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const { orderUpdate } = useContext(GeneralContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/allPositions`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setAllPositions(res.data);
      });
  }, [orderUpdate]);

  const positionValue = allPositions.reduce(
    (total, stock) => total + stock.price * stock.qty,
    0,
  );

  const totalPnl = allPositions.reduce(
    (total, stock) => total + (stock.price * stock.qty - stock.avg * stock.qty),
    0,
  );

  return (
    <div className="positions-container">
      <div className="positions-header">
        <div>
          <h3 className="positions-title">Positions</h3>
          <p className="positions-subtitle">Your current open positions</p>
        </div>

        <span className="positions-count">{allPositions.length} positions</span>
      </div>

      <div className="positions-summary">
        <div className="positions-summary-card">
          <span>Open Positions</span>
          <strong>{allPositions.length}</strong>
        </div>

        <div className="positions-summary-card">
          <span>Position Value</span>
          <strong>₹{positionValue.toFixed(2)}</strong>
        </div>

        <div className="positions-summary-card">
          <span>Total P&amp;L</span>
          <strong className={totalPnl >= 0 ? "profit" : "loss"}>
            {totalPnl >= 0 ? "+" : ""}₹{totalPnl.toFixed(2)}
          </strong>
        </div>
      </div>

      <div className="positions-table-card">
        <div className="positions-table-header">
          <div>
            <p>Current Positions</p>
            <span>Details of your active trades</span>
          </div>
        </div>

        <div className="positions-table-wrapper">
          <table className="positions-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&amp;L</th>
                <th>Chg.</th>
              </tr>
            </thead>

            <tbody>
              {allPositions.map((stock, index) => {
                const currValue = stock.price * stock.qty;
                const pnl = currValue - stock.avg * stock.qty;

                const isProfit = pnl >= 0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={index}>
                    <td>
                      <span className="product-badge">{stock.product}</span>
                    </td>

                    <td className="instrument-name">{stock.name}</td>

                    <td>{stock.qty}</td>

                    <td>₹{stock.avg.toFixed(2)}</td>

                    <td>₹{stock.price.toFixed(2)}</td>

                    <td className={profClass}>
                      {pnl >= 0 ? "+" : ""}₹{pnl.toFixed(2)}
                    </td>

                    <td>
                      <span className={`change-badge ${dayClass}`}>
                        {stock.day}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Positions;
