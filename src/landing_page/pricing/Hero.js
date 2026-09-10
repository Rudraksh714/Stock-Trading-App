import React from 'react';


function Hero() {
    return (
      <div className="container">
        <div className="row p-5 mt-5 text-center">
          <h1 className="fw-normal">Costs &amp; Charges</h1>
          <h3 className="text-muted mt-3 fs-4 fw-normal">
            Simple, transparent pricing with no hidden costs.
          </h3>
        </div>
        <div className="row p-5 mt-3 text-center">
          <div className="col-4 p-4">
            <img
              src="media/Images/pricingEquity.svg"
              style={{ height: "200px", objectFit: "contain" }}
            />
            <h2 className="fw-normal mt-4">Free Equity Delivery</h2>
            <p
              className="text-muted mt-3 mx-auto"
              style={{ fontSize: "18px", maxWidth: "320px", lineHeight: "1.7" }}
            >
              Build your equity portfolio with ₹0 brokerage on delivery trades
              across NSE and BSE.
            </p>
          </div>
          <div className="col-4 p-4">
            <img
              src="media/Images/intradayTrades.svg"
              style={{ height: "200px", objectFit: "contain" }}
            />
            <h2 className="fw-normal mt-4"> Intraday &amp; F&amp;O</h2>
            <p
              className="text-muted mt-3 mx-auto"
              style={{ fontSize: "18px", maxWidth: "320px", lineHeight: "1.7" }}
            >
              Competitive pricing for intraday and F&O trades, with brokerage
              capped at ₹20 per executed order.
            </p>
          </div>
          <div className="col-4 p-4">
            <img
              src="media/Images/pricingEquity.svg"
              style={{ height: "200px", objectFit: "contain" }}
            />
            <h2 className="fw-normal mt-4">Direct Mutual Funds</h2>
            <p
              className="text-muted mt-3 mx-auto"
              style={{ fontSize: "18px", maxWidth: "320px", lineHeight: "1.7" }}
            >
              Invest in direct mutual funds with ₹0 commission and no DP
              charges.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Hero;