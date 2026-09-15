import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import BuiltWith from "./BuiltWith";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "https://stock-trading-app-rho.vercel.app/login";
      return;
    }

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/auth/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } },
      )
      .then((res) => {
        console.log("AUTH RESPONSE:", res.data);
        if (!res.data.status) {
          window.location.href =
            "https://stock-trading-app-rho.vercel.app/login";
          return;
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("AUTH ERROR:", err.response?.data);
        localStorage.removeItem("token");
        window.location.href = "https://stock-trading-app-rho.vercel.app/login";
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/built-with" element={<BuiltWith />} />
          </Routes>
        </div>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;