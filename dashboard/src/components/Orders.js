import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/allOrders`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const buyOrders = orders.filter((order) => order.mode === "BUY").length;
  const sellOrders = orders.filter((order) => order.mode === "SELL").length;

  const totalOrderValue = orders.reduce(
    (total, order) => total + order.qty * order.price,
    0,
  );

  return (
    <div className="orders">
      {loading ? (
        <div></div>
      ) : orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <div className="order-summary">
            <div className="order-summary-card">
              <span>Total Orders</span>
              <strong>{orders.length}</strong>
            </div>

            <div className="order-summary-card">
              <span>Buy Orders</span>
              <strong>{buyOrders}</strong>
            </div>

            <div className="order-summary-card">
              <span>Sell Orders</span>
              <strong>{sellOrders}</strong>
            </div>

            <div className="order-summary-card">
              <span>Total Order Value</span>
              <strong>₹{totalOrderValue.toFixed(2)}</strong>
            </div>
          </div>

          <div className="orders-header">
            <div>
              <h5>Order History</h5>
              <p>Your recent trading activity</p>
            </div>

            <span className="orders-count">{orders.length} orders</span>
          </div>

          <div className="orders-table-wrapper">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Type</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td className="stock-name">{order.name}</td>

                    <td>{order.qty}</td>

                    <td>₹{order.price}</td>

                    <td>
                      <span
                        className={
                          order.mode === "BUY"
                            ? "order-type buy"
                            : "order-type sell"
                        }
                      >
                        {order.mode}
                      </span>
                    </td>

                    <td>₹{(order.qty * order.price).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;