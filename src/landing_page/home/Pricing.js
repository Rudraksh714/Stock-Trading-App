import React from "react";
function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-4">
          <h2 className="mb-3 fs-2">Simple & Transparent Pricing</h2>
          <p>
            Trade and invest with straightforward pricing designed to keep
            things simple. No complicated hidden charges.
          </p>
          <a href='' style={{textDecoration: "none"}}>View pricing <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
            <div className="row text-center">
                <div className="col-4 p-4 border">
                    <h1 className="mb-3">₹0</h1>
                    <p>Start trading for free</p>
                </div>
                <div className="col-4 p-4 border">
                    <h1 className="mb-3">₹0</h1>
                    <p>Zero-cost stock delivery</p>
                </div>
                <div className="col-4 p-4 border">
                    <h1 className="mb-3">₹20</h1>
                    <p>Intraday & F&O trading</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
