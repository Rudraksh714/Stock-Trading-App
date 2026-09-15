import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./Summary.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Summary = () => {
  const [availableCash, setAvailableCash] = useState(0);
  const [allHoldings, setAllHoldings] = useState([]);

  const { orderUpdate } = useContext(GeneralContext);

  useEffect(() => {
    const authHeader = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}/funds`, authHeader)
      .then((res) => {
        setAvailableCash(res.data.availableCash);
      });

    axios
      .get(`${process.env.REACT_APP_API_URL}/allHoldings`, authHeader)
      .then((res) => {
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

  const totalPnL = currentValue - totalInvestment;

  const totalPnLPercent =
    totalInvestment === 0 ? 0 : (totalPnL / totalInvestment) * 100;

  const pnlClass = totalPnL >= 0 ? "profit-value" : "loss";

  return (
    <div className="summary-container">
      <div className="summary-header d-flex justify-content-between align-items-center">
        <div>
          <h5 className="summary-title">Overview</h5>
          <p className="summary-subtitle">
            Everything about your portfolio, in one place
          </p>
        </div>

        <span className="badge market-badge">Market Open</span>
      </div>

      <div className="summary-header-line"></div>

      <div className="summary-primary-grid">
        <div className="card summary-card">
          <div className="card-header summary-card-header">
            <div>
              <p className="summary-card-title">Equity</p>
              <span className="summary-card-meta">Available</span>
            </div>
          </div>

          <div className="card-body">
            <div className="summary-value">₹{availableCash.toFixed(2)}</div>
            <p className="summary-description">Margin available</p>
          </div>

          <ul className="list-group list-group-flush summary-list">
            <li className="list-group-item d-flex justify-content-between">
              <span>Margins used</span>
              <strong>₹0</strong>
            </li>

            <li className="list-group-item d-flex justify-content-between">
              <span>Opening balance</span>
              <strong>₹{availableCash.toFixed(2)}</strong>
            </li>
          </ul>
        </div>

        <div className="card summary-card">
          <div className="card-header summary-card-header">
            <div>
              <p className="summary-card-title">Holdings</p>
              <span className="summary-card-meta">
                {allHoldings.length} holdings
              </span>
            </div>
          </div>

          <div className="card-body">
            <div className="holding-value-row">
              <div className={`summary-value ${pnlClass}`}>
                {totalPnL >= 0 ? "+" : ""}₹{totalPnL.toFixed(2)}
              </div>

              <span
                className={`badge ${
                  totalPnL >= 0 ? "profit-badge" : "loss-badge"
                }`}
              >
                {totalPnL >= 0 ? "+" : ""}
                {totalPnLPercent.toFixed(2)}%
              </span>
            </div>

            <p className="summary-description">P&amp;L</p>
          </div>

          <ul className="list-group list-group-flush summary-list">
            <li className="list-group-item d-flex justify-content-between">
              <span>Current value</span>
              <strong>₹{currentValue.toFixed(2)}</strong>
            </li>

            <li className="list-group-item d-flex justify-content-between">
              <span>Investment</span>
              <strong>₹{totalInvestment.toFixed(2)}</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="card snapshot-card">
        <div className="card-header snapshot-header">
          <div>
            <p className="snapshot-title">Account snapshot</p>
            <span className="snapshot-subtitle">Current account position</span>
          </div>
        </div>

        <ul className="list-group list-group-horizontal snapshot-list">
          <li className="list-group-item snapshot-item">
            <span>Available margin</span>
            <strong>₹{availableCash.toFixed(2)}</strong>
          </li>

          <li className="list-group-item snapshot-item">
            <span>Margins used</span>
            <strong>₹0</strong>
          </li>

          <li className="list-group-item snapshot-item">
            <span>Opening balance</span>
            <strong>₹{availableCash.toFixed(2)}</strong>
          </li>
        </ul>
      </div>

      <div className="card holdings-overview">
        <div className="card-header holdings-overview-header">
          <div>
            <p className="holdings-overview-title">Financial Overview</p>
            <span className="holdings-overview-meta">
              A quick view of your funds, holdings &amp; P&amp;L
            </span>
          </div>

          <div className="overview-value-group">
            <strong className={pnlClass}>
              {totalPnL >= 0 ? "+" : ""}₹{totalPnL.toFixed(2)}
            </strong>

            <span
              className={`badge ${
                totalPnL >= 0 ? "profit-badge" : "loss-badge"
              }`}
            >
              {totalPnL >= 0 ? "+" : ""}
              {totalPnLPercent.toFixed(2)}%
            </span>
          </div>
        </div>

        <div className="card-body holdings-overview-body chart-body">
          <Bar
            data={{
              labels: ["Available margin", "Investment", "Current value"],
              datasets: [
                {
                  label: "Amount (₹)",
                  data: [availableCash, totalInvestment, currentValue],
                  backgroundColor: ["#3f6fa8", "#d9a441", "#20b978"],
                  borderRadius: 6,
                  barThickness: 42,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: { enabled: true },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: { callback: (val) => `₹${val}` },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;