import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, #3a4054 0%, #2b3040 45%, #262a35 100%)",
        color: "#f5f6f8",
        borderTop: "1px solid rgba(245, 246, 248, 0.14)",
      }}
    >
      <div className="container border-top mt-4">
        <div className="row mt-5">
          {/* BRAND */}
          <div className="col">
            <img
              src="media/images/logo.jpg"
              style={{ width: "20%" }}
              alt="Equinox Trade logo"
            />

            <p style={{ color: "#c8cbd4" }}>
              &copy; 2026, Equinox Trade Pvt. Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="f-info-socials d-flex gap-3">
              <i
                className="fa-brands fa-square-facebook"
                style={{ fontSize: "20px", color: "#b8bcc4" }}
              ></i>

              <i
                className="fa-brands fa-square-twitter"
                style={{ fontSize: "20px", color: "#b8bcc4" }}
              ></i>

              <i
                className="fa-brands fa-square-instagram"
                style={{ fontSize: "20px", color: "#b8bcc4" }}
              ></i>
            </div>
          </div>

          {/* INVEST */}
          <div className="col d-flex flex-column" style={{ gap: "1px" }}>
            <p className="fw-bold" style={{ color: "#f5f6f8" }}>
              Invest
            </p>

            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Open account
            </Link>
            <br />

            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Stocks & ETFs
            </Link>
            <br />

            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Futures & Options
            </Link>
            <br />

            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Currency Trading
            </Link>
            <br />

            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              IPOs
            </Link>
            <br />

            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Mutual Funds
            </Link>
            <br />

            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Bonds & Securities
            </Link>
          </div>

          {/* SUPPORT */}
          <div className="col d-flex flex-column" style={{ gap: "1px" }}>
            <p className="fw-bold" style={{ color: "#f5f6f8" }}>
              Support
            </p>

            <Link
              to="/support"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Contact us
            </Link>
            <br />

            <Link
              to="/support"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Support portal
            </Link>
            <br />

            <Link
              to="/support"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              How to file a complaint?
            </Link>
            <br />

            <a
              href="https://www.nseindia.com/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Exchange Bulletins
            </a>
            <br />

            <a
              href="https://www.sebi.gov.in/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Regulatory Circulars
            </a>
            <br />

            <a
              href="https://www.moneycontrol.com/news/business/markets/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Market Insights
            </a>
            <br />

            <Link
              to="/support"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Downloads
            </Link>
          </div>

          {/* COMPANY */}
          <div className="col d-flex flex-column" style={{ gap: "1px" }}>
            <p className="fw-bold" style={{ color: "#f5f6f8" }}>
              Company
            </p>

            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Our Mission
            </Link>
            <br />

            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              How It Works
            </Link>
            <br />

            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Our Features
            </Link>
            <br />

            <Link
              to="/privacy"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Security & Privacy
            </Link>
            <br />

            <Link
              to="/terms"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Terms of Use
            </Link>
            <br />

            <Link
              to="/privacy"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Privacy Policy
            </Link>
            <br />

            <Link
              to="/risk-disclosure"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Risk Disclosure
            </Link>
          </div>

          {/* EXPLORE */}
          <div className="col d-flex flex-column" style={{ gap: "1px" }}>
            <p className="fw-bold" style={{ color: "#f5f6f8" }}>
              Explore
            </p>

            <a
              href="https://www.nseindia.com/market-data/ipo"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Upcoming IPOs
            </a>
            <br />

            <Link
              to="/pricing"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Trading Charges
            </Link>
            <br />

            <a
              href="https://www.nseindia.com/resources/exchange-communication-holidays"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Market Holidays
            </a>
            <br />

            <a
              href="https://economictimes.indiatimes.com/markets"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Economic & Market Updates
            </a>
            <br />

            <a
              href="https://www.moneycontrol.com/personal-finance/calculators"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Investment Calculators
            </a>
            <br />

            <a
              href="https://www.reuters.com/markets/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Live Markets
            </a>
            <br />

            <Link
              to="/apps"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Market Resources
            </Link>
            <br />

            <a
              href="https://www.reuters.com/markets/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#c8cbd4" }}
            >
              Global Markets
            </a>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div
          className="mt-5 text-small"
          style={{ fontSize: "14px", color: "#c8cbd4" }}
        >
          <p>
            Equinox Trade is a project and educational trading platform.
            Information displayed on the platform may include simulated trading
            data and should not be considered investment advice or a
            recommendation to buy or sell any financial instrument.
          </p>

          <p>
            Trading and investments involve market risks. The value of financial
            instruments can rise or fall, and users may lose part or all of
            their invested capital.
          </p>

          <p>
            Users are advised to keep their account credentials, OTPs, and other
            confidential information secure and never share them with anyone.
          </p>

          <p>
            Market information and educational resources provided through
            external websites are subject to the respective terms and policies
            of those websites.
          </p>

          <p>
            For assistance or platform-related concerns, please contact us
            through the official support channels available on this platform.
          </p>
        </div>
      </div>

      {/* BOTTOM LINKS */}
      <div className="d-flex flex-row justify-content-center gap-5 mt-4 mb-4 flex-wrap">
        <a
          href="https://www.nseindia.com/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#b8bcc4" }}
        >
          NSE
        </a>

        <a
          href="https://www.bseindia.com/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#b8bcc4" }}
        >
          BSE
        </a>

        <Link to="/terms" style={{ textDecoration: "none", color: "#b8bcc4" }}>
          Terms & Conditions
        </Link>

        <Link
          to="/policies"
          style={{ textDecoration: "none", color: "#b8bcc4" }}
        >
          Policies & Procedures
        </Link>

        <Link
          to="/privacy"
          style={{ textDecoration: "none", color: "#b8bcc4" }}
        >
          Privacy Policy
        </Link>

        <Link
          to="/risk-disclosure"
          style={{ textDecoration: "none", color: "#b8bcc4" }}
        >
          Disclosure
        </Link>
      </div>
    </footer>
  );
}

export default Footer;