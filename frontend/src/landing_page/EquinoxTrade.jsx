import React from "react";
import { Link } from "react-router-dom";
import "./EquinoxTrade.css";

function EquinoxTrade() {
  return (
    <div className="equinox-trade-page">
      <section className="equinox-hero">
        <div className="equinox-hero-content">
          <span className="equinox-label">EQUINOX TRADE</span>

          <h1>
            A focused platform for
            <br />
            modern trading.
          </h1>

          <p>
            Equinox Trade brings trading, portfolio tracking, order management,
            and market monitoring together in one simple and focused
            experience.
          </p>

          <Link to="/signup" className="equinox-cta">
            Try Equinox Trade
          </Link>
        </div>
      </section>

      <section className="equinox-overview">
        <div className="equinox-section-heading">
          <h2>Everything you need to trade</h2>
          <p>
            A clean and structured experience designed around the essential
            parts of managing your trades and portfolio.
          </p>
        </div>

        <div className="equinox-feature-grid">
          <div className="equinox-feature-card">
            <span>01</span>
            <h3>Market Watch</h3>
            <p>
              Monitor selected instruments and keep important market
              information within easy reach.
            </p>
          </div>

          <div className="equinox-feature-card">
            <span>02</span>
            <h3>Order Management</h3>
            <p>
              Place buy and sell orders through a straightforward trading
              interface and review your order history.
            </p>
          </div>

          <div className="equinox-feature-card">
            <span>03</span>
            <h3>Portfolio Tracking</h3>
            <p>
              Track your holdings, investment value, current portfolio value,
              and overall profit or loss.
            </p>
          </div>

          <div className="equinox-feature-card">
            <span>04</span>
            <h3>Positions</h3>
            <p>
              Keep an overview of active positions with quantity, average
              price, current price, and P&amp;L information.
            </p>
          </div>

          <div className="equinox-feature-card">
            <span>05</span>
            <h3>Funds</h3>
            <p>
              Manage available trading funds and review deposits and
              withdrawals from a centralized account section.
            </p>
          </div>

          <div className="equinox-feature-card">
            <span>06</span>
            <h3>Dashboard Insights</h3>
            <p>
              Get a quick overview of your account, holdings, available funds,
              and portfolio performance from one dashboard.
            </p>
          </div>
        </div>
      </section>

      <section className="equinox-highlight">
        <div>
          <span className="equinox-label">DESIGNED FOR CLARITY</span>
          <h2>Simple tools. Focused experience.</h2>
        </div>

        <p>
          Equinox Trade is designed to keep the trading experience clear and
          organized, giving users the information they need without
          unnecessary complexity.
        </p>
      </section>

      <section className="equinox-bottom">
        <h2>Ready to explore Equinox Trade?</h2>
        <p>
          Create an account and experience the platform yourself.
        </p>

        <Link to="/signup" className="equinox-cta">
          Start Trading
        </Link>
      </section>
    </div>
  );
}

export default EquinoxTrade;