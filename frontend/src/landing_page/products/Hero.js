import React from 'react';


function Hero() {
    return (
      <div
        className="container border-bottom mb-5"
        style={{ borderColor: "rgba(245, 246, 248, 0.14)" }}
      >
        <div className="text-center mt-5 p-3">
          <h1 style={{ color: "#f5f6f8" }}>Invest with Intent</h1>
          <h3 className="mt-3 fs-4" style={{ color: "#c8cbd4" }}>
            Designed to turn market complexity into clarity, speed, and control.
          </h3>
          <p className="mt-4 mb-5" style={{ color: "#c8cbd4" }}>
            Explore our{" "}
            <a
              href="/signup"
              style={{ textDecoration: "none", color: "#7C8CFF" }}
            >
              investment solutions{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </p>
        </div>
      </div>
    );
}

export default Hero;