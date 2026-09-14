import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="/media/Images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
          style={{
            opacity: "0.9",
          }}
        />

        <h1
          className="mt-5"
          style={{
            color: "#f5f6f8",
            fontWeight: "600",
          }}
        >
          Invest in everything
        </h1>

        <p
          style={{
            color: "#c8cbd4",
            lineHeight: "1.7",
          }}
        >
          Online platform to invest in stocks, derivatives, mutual funds and
          more.
        </p>

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

export default Hero;
