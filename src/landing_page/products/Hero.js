import React from 'react';


function Hero() {
    return (
      <div className="container border-bottom mb-5">
        <div className="text-center mt-5 p-3">
          <h1>Invest with Intent</h1>
          <h3 className="text-muted mt-3 fs-4">
            Designed to turn market complexity into clarity, speed, and control.
          </h3>
          <p className="mt-4 mb-5">
            Explore our{" "}
            <a href="" style={{ textDecoration: "none" }}>
              investment solutions <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </p>
        </div>
      </div>
    );
}

export default Hero;