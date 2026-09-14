import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 style={{ color: "#f5f6f8" }}>Built Beyond Trading</h1>

        <p style={{ color: "#c8cbd4" }}>
          Go beyond the core platform with a growing ecosystem of tools
          <br />
          designed to support smarter investing, deeper market understanding,
          and better decisions.
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/Images/smallcaseLogo.png"
            style={{
              width: "180px",
              maxHeight: "60px",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
            }}
            alt="Smallcase"
          />

          <p className="mt-3" style={{ fontSize: "15px", color: "#c8cbd4" }}>
            Curated investment ideas and diversified stock baskets designed to
            help you build a balanced portfolio with greater simplicity and
            control.
          </p>

          <img
            src="media/Images/zerodhaFundhouse.png"
            style={{
              width: "180px",
              maxHeight: "60px",
              objectFit: "contain",
              marginTop: "40px",
              filter: "brightness(0) invert(1)",
            }}
            alt="Zerodha Fund House"
          />

          <p className="mt-3" style={{ fontSize: "15px", color: "#c8cbd4" }}>
            Thoughtful investment strategies designed to help you allocate,
            diversify, and grow your capital with a clear long-term perspective.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/Images/streakLogo.png"
            style={{
              width: "160px",
              maxHeight: "60px",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
            }}
            alt="Streak"
          />

          <p className="mt-3" style={{ fontSize: "15px", color: "#c8cbd4" }}>
            Thoughtful investment strategies designed to help you allocate,
            diversify, and grow your capital with a clear long-term perspective.
          </p>

          <img
            src="media/Images/goldenpiLogo.png"
            style={{
              width: "160px",
              maxHeight: "60px",
              objectFit: "contain",
              marginTop: "40px",
              filter: "brightness(0) invert(1)",
            }}
            alt="GoldenPi"
          />

          <p className="mt-3" style={{ fontSize: "15px", color: "#c8cbd4" }}>
            A focused platform designed to help you discover, evaluate, and
            trade bonds with greater clarity, transparency, and control.
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/Images/sensibullLogo.svg"
            style={{
              width: "180px",
              maxHeight: "60px",
              objectFit: "contain",
              marginBottom: "20px",
              filter: "brightness(0) invert(1)",
            }}
            alt="Sensibull"
          />

          <p className="mt-3" style={{ fontSize: "15px", color: "#c8cbd4" }}>
            A powerful options platform for building strategies, analyzing
            positions, and tracking key market signals to make more informed
            trading decisions.
          </p>

          <img
            src="media/Images/dittoLogo.png"
            style={{
              width: "140px",
              maxHeight: "60px",
              objectFit: "contain",
              marginTop: "40px",
              filter: "brightness(0) invert(1)",
            }}
            alt="Ditto"
          />

          <p className="mt-3" style={{ fontSize: "15px", color: "#c8cbd4" }}>
            Simple insurance guidance designed to help you understand, compare,
            and choose coverage with greater clarity without the noise or
            pressure.
          </p>
        </div>

        <Link
          to="/signup"
          className="p-2 btn fs-5 mb-5"
          style={{
            width: "20%",
            margin: "0 auto",
            background: "linear-gradient(135deg, #4C5FD5 0%, #5B3FE0 100%)",
            border: "1px solid rgba(76, 95, 213, 0.4)",
            color: "#ffffff",
            fontWeight: "600",
            boxShadow: "0 6px 18px rgba(76, 95, 213, 0.35)",
          }}
        >
          Sign up Now
        </Link>
      </div>
    </div>
  );
}

export default Universe;
