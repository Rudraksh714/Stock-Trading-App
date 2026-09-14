import React from "react";
import Menu from "./Menu";

import {
  TrendingUp,
  TrendingDown,
} from "@mui/icons-material";

import "./TopBar.css";

/*
  TOP BAR LAYOUT

  ┌─────────────────────────────────────────────────────────────────────┐
  │                                                                     │
  │  MARKET INDICES                                  NAVIGATION / MENU   │
  │                                                                     │
  │  NIFTY 50   100.2   ↗ 0.42%    SENSEX   100.2   ↗ 0.31%    Menu    │
  │                                                                     │
  └─────────────────────────────────────────────────────────────────────┘

  TopBar
  ├── indices-container
  │   ├── nifty
  │   │   ├── index
  │   │   ├── index-points
  │   │   └── percent
  │   │       ├── TrendingUp / TrendingDown
  │   │       └── change %
  │   │
  │   └── sensex
  │       ├── index
  │       ├── index-points
  │       └── percent
  │           ├── TrendingUp / TrendingDown
  │           └── change %
  │
  └── Menu
*/

const TopBar = () => {
  const nifty = {
    name: "NIFTY 50",
    price: 100.2,
    change: 0.42,
    isUp: true,
  };

  const sensex = {
    name: "SENSEX",
    price: 100.2,
    change: 0.31,
    isUp: true,
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <span className="index">{nifty.name}</span>

          <span className="index-points">
            {nifty.price}
          </span>

          <span
            className={`percent ${
              nifty.isUp ? "text-success" : "text-danger"
            }`}
          >
            {nifty.isUp ? (
              <TrendingUp fontSize="small" />
            ) : (
              <TrendingDown fontSize="small" />
            )}

            <span className="ms-1">
              {nifty.change}%
            </span>
          </span>
        </div>

        <div className="sensex">
          <span className="index">{sensex.name}</span>

          <span className="index-points">
            {sensex.price}
          </span>

          <span
            className={`percent ${
              sensex.isUp ? "text-success" : "text-danger"
            }`}
          >
            {sensex.isUp ? (
              <TrendingUp fontSize="small" />
            ) : (
              <TrendingDown fontSize="small" />
            )}

            <span className="ms-1">
              {sensex.change}%
            </span>
          </span>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;