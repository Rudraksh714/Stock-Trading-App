import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useContext } from "react";
import "./Funds.css";

const Funds = () => {
  const [availableCash, setAvailableCash] = useState(0);
  const { orderUpdate, setOrderUpdate } = useContext(GeneralContext);
  const [addAmount, setAddAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("${process.env.REACT_APP_API_URL}/funds", {
        withCredentials: true,
      })
      .then((res) => {
        setAvailableCash(res.data.availableCash);
      });

    axios
      .get("${process.env.REACT_APP_API_URL}/fundTransactions", {
        withCredentials: true,
      })
      .then((res) => {
        setTransactions(res.data);
      });
  }, [orderUpdate]);

  const handleAddFunds = async () => {
    try {
      await axios.post(
        "${process.env.REACT_APP_API_URL}/addFunds",
        {
          amount: Number(addAmount),
        },
        {
          withCredentials: true,
        },
      );

      setAddAmount("");
      setOrderUpdate((prev) => prev + 1);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleWithdrawFunds = async () => {
    try {
      await axios.post(
        "${process.env.REACT_APP_API_URL}/withdrawFunds",
        {
          amount: Number(withdrawAmount),
        },
        {
          withCredentials: true,
        },
      );

      setWithdrawAmount("");
      setOrderUpdate((prev) => prev + 1);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      {/* Fund Transfer */}
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>

        <div className="d-flex gap-2 align-items-center">
          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            value={addAmount}
            onChange={(e) => setAddAmount(e.target.value)}
          />

          <button className="btn btn-green" onClick={handleAddFunds}>
            Add funds
          </button>

          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />

          <button className="btn btn-blue" onClick={handleWithdrawFunds}>
            Withdraw
          </button>
        </div>
      </div>

      {/* Equity Summary */}
      <div className="row">
        <div className="col">
          <span>
            <p>Equity Summary</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">₹{availableCash.toFixed(2)}</p>
            </div>

            <div className="data">
              <p>Used margin</p>
              <p className="imp">₹0.00</p>
            </div>

            <div className="data">
              <p>Opening Balance</p>
              <p className="imp">₹1,00,000.00</p>
            </div>

            <div className="data">
              <p>Available cash</p>
              <p className="imp">₹{availableCash.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fund Activity */}
      {transactions.length === 0 ? (
        <div className="funds-empty-state">
          <p>No fund transactions yet</p>
          <span>Your fund deposits and withdrawals will appear here.</span>
        </div>
      ) : (
        <div className="fund-transactions">
          {transactions.map((transaction, index) => (
            <div className="fund-transaction" key={index}>
              <div>
                <p>
                  {transaction.type === "ADD"
                    ? "Funds Added"
                    : "Funds Withdrawn"}
                </p>

                <span>{new Date(transaction.createdAt).toLocaleString()}</span>
              </div>

              <strong
                className={
                  transaction.type === "ADD" ? "fund-add" : "fund-withdraw"
                }
              >
                {transaction.type === "ADD" ? "+" : "-"}₹
                {transaction.amount.toFixed(2)}
              </strong>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Funds;
