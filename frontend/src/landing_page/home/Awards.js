import React from "react";

function Awards() {
  return (
    <div
      className="container mt-5"
      style={{
        color: "#f5f6f8",
      }}
    >
      <div className="row">
        <div className="col-6 p-5 d-flex align-items-center justify-content-center">
          <img
            src="media/images/largestBroker.svg"
            style={{
              width: "90%",
            }}
          />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1
            style={{
              color: "#f5f6f8",
              fontWeight: "600",
            }}
          >
            Trade Smarter. Invest Better.
          </h1>

          <p
            className="mb-5"
            style={{
              color: "#c8cbd4",
              lineHeight: "1.7",
            }}
          >
            A powerful platform built to help you trade and invest across
            multiple financial products with ease:
          </p>

          <div className="row">
            <div className="col-6 p-3">
              <ul>
                <li>
                  <p style={{ color: "#c8cbd4" }}>Stocks & ETFs</p>
                </li>
                <li>
                  <p style={{ color: "#c8cbd4" }}>Futures and Options</p>
                </li>
                <li>
                  <p style={{ color: "#c8cbd4" }}>Currency Trading</p>
                </li>
              </ul>
            </div>

            <div className="col-6 p-3">
              <ul>
                <li>
                  <p style={{ color: "#c8cbd4" }}>IPOs</p>
                </li>
                <li>
                  <p style={{ color: "#c8cbd4" }}>Mutual funds</p>
                </li>
                <li>
                  <p style={{ color: "#c8cbd4" }}>Bonds & Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              background: "#f5f6f8",
              borderRadius: "10px",
              padding: "20px 24px",
              display: "inline-block",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img
              src="media/images/pressLogos.png"
              style={{
                width: "100%",
                maxWidth: "420px",
                opacity: "0.9",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
