import React from "react";
// import { holdings } from "../data/data";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useContext } from "react";
import { VerticalGraph } from "./VerticalGraph";
import "./Holdings.css";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const { orderUpdate } = useContext(GeneralContext);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/allHoldings`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setAllHoldings(res.data);
      });
  }, [orderUpdate]);

  const totalInvestment = allHoldings.reduce(
    (total, stock) => total + stock.avg * stock.qty,
    0,
  );

  const currentValue = allHoldings.reduce(
    (total, stock) => total + stock.price * stock.qty,
    0,
  );

  const totalPnl = currentValue - totalInvestment;

  return (
    <div className="holdings-container">
      {/* Header */}
      <div className="holdings-header">
        <div>
          <h3 className="holdings-title">Holdings</h3>
          <p className="holdings-subtitle">Your current investment portfolio</p>
        </div>

        <span className="holdings-count">{allHoldings.length} holdings</span>
      </div>

      {/* Summary Cards */}
      <div className="holdings-summary">
        <div className="holdings-summary-card">
          <span>Total Investment</span>
          <strong>₹{totalInvestment.toFixed(2)}</strong>
        </div>

        <div className="holdings-summary-card">
          <span>Current Value</span>
          <strong>₹{currentValue.toFixed(2)}</strong>
        </div>

        <div className="holdings-summary-card">
          <span>Total P&amp;L</span>
          <strong className={totalPnl >= 0 ? "profit" : "loss"}>
            {totalPnl >= 0 ? "+" : ""}₹{totalPnl.toFixed(2)}
          </strong>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="holdings-table-card">
        <div className="holdings-table-header">
          <div>
            <p>Portfolio Holdings</p>
            <span>Current position details</span>
          </div>
        </div>

        <div className="holdings-table-wrapper">
          <table className="holdings-table">
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. cost</th>
                <th>LTP</th>
                <th>Cur. val</th>
                <th>P&amp;L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
              </tr>
            </thead>

            <tbody>
              {allHoldings.map((stock, index) => {
                const currValue = stock.price * stock.qty;
                const isProfit = currValue - stock.avg * stock.qty >= 0.0;

                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                const investment = stock.avg * stock.qty;
                const pnl = currValue - investment;

                const pnlPercent =
                  investment === 0 ? 0 : (pnl / investment) * 100;

                return (
                  <tr key={index}>
                    <td className="instrument-name">{stock.name}</td>

                    <td>{stock.qty}</td>

                    <td>₹{stock.avg.toFixed(2)}</td>

                    <td>₹{stock.price.toFixed(2)}</td>

                    <td>₹{currValue.toFixed(2)}</td>

                    <td className={profClass}>
                      {pnl >= 0 ? "+" : ""}₹{pnl.toFixed(2)}
                    </td>

                    <td>
                      <span className={`change-badge ${profClass}`}>
                        {pnlPercent >= 0 ? "+" : ""}
                        {pnlPercent.toFixed(2)}%
                      </span>
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

      {/* Graph - unchanged */}
      <div className="holdings-graph">
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Holdings;