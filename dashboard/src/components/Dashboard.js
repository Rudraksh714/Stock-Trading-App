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
  //2. Loading state add ki, Matlab auth verify hone se pehle dashboard render nahi hoga.

  //1. Auth check add kiya
  useEffect(() => {
    console.log("AUTH CHECK STARTED");

    axios
      .post(
        "${process.env.REACT_APP_API_URL}/auth/",
        {},
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log("AUTH RESPONSE:", res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("AUTH ERROR:", err);
        console.log("AUTH ERROR RESPONSE:", err.response);
        setLoading(false);
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
