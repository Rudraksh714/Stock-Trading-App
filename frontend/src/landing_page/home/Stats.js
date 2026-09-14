import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1
            className="fs-2 mb-5"
            style={{
              color: "#f5f6f8",
              fontWeight: "600",
            }}
          >
            Invest with confidence
          </h1>

          <h2
            className="fs-4"
            style={{
              color: "#f5f6f8",
              fontWeight: "500",
            }}
          >
            Built for investors
          </h2>

          <p
            style={{
              color: "#c8cbd4",
              lineHeight: "1.7",
            }}
          >
            A simple and reliable platform trusted by investors to manage their
            portfolios, explore opportunities, and make informed investment
            decisions.
          </p>

          <h2
            className="fs-4"
            style={{
              color: "#f5f6f8",
              fontWeight: "500",
            }}
          >
            No distractions, just trading
          </h2>

          <p
            style={{
              color: "#c8cbd4",
              lineHeight: "1.7",
            }}
          >
            No unnecessary gimmicks or distracting notifications. Enjoy a clean,
            focused experience that lets you trade and invest at your own pace.
          </p>

          <h2
            className="fs-4"
            style={{
              color: "#f5f6f8",
              fontWeight: "500",
            }}
          >
            Your complete investment platform
          </h2>

          <p
            style={{
              color: "#c8cbd4",
              lineHeight: "1.7",
            }}
          >
            Access everything you need in one place — from stocks and ETFs to
            IPOs, mutual funds, bonds, and market insights.
          </p>

          <h2
            className="fs-4"
            style={{
              color: "#f5f6f8",
              fontWeight: "500",
            }}
          >
            Make smarter financial decisions
          </h2>

          <p
            style={{
              color: "#c8cbd4",
              lineHeight: "1.7",
            }}
          >
            Get useful insights, portfolio analytics, and tools designed to help
            you understand the market and manage your investments more
            effectively.
          </p>
        </div>

        <div className="col-6 p-5">
          <img
            src="/media/Images/ecosystem.png"
            style={{
              width: "90%",
              opacity: "0.9",
            }}
          />

          <div className="text-center">
            <a
              href=""
              className="mx-5"
              style={{
                textDecoration: "none",
                color: "#c8ccd4",
                fontWeight: "500",
              }}
            >
              Explore our platform{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#c8ccd4",
                fontWeight: "500",
              }}
            >
              Try our trading demo{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
