import React from 'react';

function Brokerage() {
  return (
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="fw-semibold fs-1 mb-2" style={{ color: "#f5f6f8" }}>
          Pricing & Fees
        </h2>

        <p className="fs-4 mb-0" style={{ color: "#c8cbd4" }}>
          Simple, transparent pricing with no hidden costs.
        </p>
      </div>
      <style>{`
        .accordion-button:not(.collapsed) {
          background-color: #3a4054 !important;
          color: #f5f6f8 !important;
          box-shadow: none !important;
          border-left: 4px solid #7C8CFF !important;
        }
        .accordion-button.collapsed {
          background-color: #3a4054 !important;
          color: #f5f6f8 !important;
          border-left: 4px solid transparent !important;
        }
        .accordion-button:hover {
          background-color: #454c63 !important;
        }
        .accordion-button:focus {
          box-shadow: none !important;
        }
        .accordion-button::after {
          filter: invert(1) brightness(1.5);
        }
        .accordion-body {
          background-color: #2b3040 !important;
          color: #c8cbd4 !important;
        }
        .accordion-item {
          border: 1px solid rgba(245, 246, 248, 0.14) !important;
          background-color: #2b3040 !important;
        }
        .accordion-body hr {
          border-color: rgba(245, 246, 248, 0.14) !important;
        }
        .accordion-body strong {
          color: #f5f6f8 !important;
        }
      `}</style>

      <div className="row g-4">
        {/* Left Column */}
        <div className="col-md-6">
          <div className="d-flex flex-column gap-4">
            <div className="accordion" id="accordionExample">
              {/* Equity */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Equity
                  </button>
                </h2>

                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <strong>Delivery</strong>
                        <p className="mb-0">₹0 brokerage</p>
                      </div>
                      <div className="text-end">
                        <strong>Intraday</strong>
                        <p className="mb-0">Up to ₹20 per order</p>
                      </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between mb-2">
                      <span>Brokerage</span>
                      <span>₹0 – ₹20</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>STT</span>
                      <span>Applicable</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Transaction Charges</span>
                      <span>Applicable</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>GST</span>
                      <span>18%</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>SEBI &amp; Stamp Charges</span>
                      <span>Applicable</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intraday & F&O */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Intraday &amp; F&amp;O
                  </button>
                </h2>

                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <strong>Intraday</strong>
                        <p className="mb-0">Up to ₹20 per order</p>
                      </div>
                      <div className="text-end">
                        <strong>Futures &amp; Options</strong>
                        <p className="mb-0">Competitive brokerage</p>
                      </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between mb-2">
                      <span>Brokerage</span>
                      <span>Up to ₹20</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>STT / CTT</span>
                      <span>Applicable</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Transaction Charges</span>
                      <span>Applicable</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>GST</span>
                      <span>18%</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>SEBI &amp; Stamp Charges</span>
                      <span>Applicable</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mutual Funds */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Mutual Funds
                  </button>
                </h2>

                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <strong>Direct Mutual Funds</strong>
                        <p className="mb-0">₹0 commission</p>
                      </div>
                      <div className="text-end">
                        <strong>Investing</strong>
                        <p className="mb-0">No platform commission</p>
                      </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between mb-2">
                      <span>Commission</span>
                      <span>₹0</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Transaction Charges</span>
                      <span>Applicable</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>GST</span>
                      <span>As applicable</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Other Charges</span>
                      <span>As applicable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <div className="d-flex flex-column gap-4">
            <div className="accordion" id="accordionExample2">
              {/* Bonds */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    Bonds
                  </button>
                </h2>

                <div
                  id="collapseFour"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <strong>Bond Investments</strong>
                        <p className="mb-0">Transparent pricing</p>
                      </div>
                      <div className="text-end">
                        <strong>Government Bonds</strong>
                        <p className="mb-0">Easy access</p>
                      </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between mb-2">
                      <span>Brokerage</span>
                      <span>As applicable</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Transaction Charges</span>
                      <span>Applicable</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>GST</span>
                      <span>18%</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Other Charges</span>
                      <span>As applicable</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account & AMC */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Account &amp; AMC
                  </button>
                </h2>

                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <strong>Account Opening</strong>
                        <p className="mb-0">₹0</p>
                      </div>
                      <div className="text-end">
                        <strong>Annual Maintenance</strong>
                        <p className="mb-0">As applicable</p>
                      </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between mb-2">
                      <span>Account Opening</span>
                      <span>₹0</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Demat AMC</span>
                      <span>As applicable</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>GST</span>
                      <span>18%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Services */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Other Services
                  </button>
                </h2>

                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <strong>Trade Support</strong>
                        <p className="mb-0">Transparent charges</p>
                      </div>
                      <div className="text-end">
                        <strong>Additional Services</strong>
                        <p className="mb-0">As applicable</p>
                      </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between mb-2">
                      <span>Call &amp; Trade</span>
                      <span>As applicable</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Payment Gateway</span>
                      <span>As applicable</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>DP Charges</span>
                      <span>As applicable</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Other Services</span>
                      <span>As applicable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;