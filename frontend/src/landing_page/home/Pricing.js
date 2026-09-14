import React from "react";

function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-4">
          <h2
            className="mb-3 fs-2"
            style={{
              color: "#f5f6f8",
              fontWeight: "600",
            }}
          >
            Simple & Transparent Pricing
          </h2>

          <p
            style={{
              color: "#c8cbd4",
              lineHeight: "1.7",
            }}
          >
            Trade and invest with straightforward pricing designed to keep
            things simple. No complicated hidden charges.
          </p>

          <a
            href=""
            style={{
              textDecoration: "none",
              color: "#7C8CFF",
              fontWeight: "500",
            }}
          >
            View pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="col-2"></div>

        <div className="col-6 mb-5">
          <div className="row text-center">
            <div
              className="col-4 p-4"
              style={{
                border: "1px solid rgba(245, 246, 248, 0.18)",
                background:
                  "linear-gradient(145deg, rgba(74, 80, 95, 0.65), rgba(58, 64, 84, 0.75))",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h1
                className="mb-3"
                style={{
                  color: "#f5f6f8",
                  fontWeight: "600",
                }}
              >
                ₹0
              </h1>
              <p style={{ color: "#c8cbd4" }}>Start trading for free</p>
            </div>

            <div
              className="col-4 p-4"
              style={{
                border: "1px solid rgba(245, 246, 248, 0.18)",
                background:
                  "linear-gradient(145deg, rgba(74, 80, 95, 0.65), rgba(58, 64, 84, 0.75))",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h1
                className="mb-3"
                style={{
                  color: "#f5f6f8",
                  fontWeight: "600",
                }}
              >
                ₹0
              </h1>
              <p style={{ color: "#c8cbd4" }}>Zero-cost stock delivery</p>
            </div>

            <div
              className="col-4 p-4"
              style={{
                border: "1px solid rgba(245, 246, 248, 0.18)",
                background:
                  "linear-gradient(145deg, rgba(74, 80, 95, 0.65), rgba(58, 64, 84, 0.75))",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h1
                className="mb-3"
                style={{
                  color: "#f5f6f8",
                  fontWeight: "600",
                }}
              >
                ₹20
              </h1>
              <p style={{ color: "#c8cbd4" }}>Intraday & F&O trading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
