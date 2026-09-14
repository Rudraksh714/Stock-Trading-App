import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <style>{`
        .support-card {
          background: linear-gradient(145deg, rgba(74, 80, 95, 0.65), rgba(58, 64, 84, 0.75)) !important;
          border: 1px solid rgba(245, 246, 248, 0.14) !important;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .support-card .card-title {
          color: #f5f6f8 !important;
          font-weight: 600;
        }

        .support-card .card-text {
          color: #c8cbd4 !important;
        }

        .support-card .card-link {
          color: #7C8CFF !important;
          display: inline-block;
          margin-bottom: 6px;
        }

        .support-card .card-link:hover {
          text-decoration: underline !important;
        }
      `}</style>

      <div className="row p-5 mt-5 mb-5">
        <div className="row g-4">
          {/* 1. Account & Profile */}
          <div className="col-md-6">
            <div className="card support-card">
              <div className="card-body">
                <h5 className="card-title">Account & Profile</h5>

                <p className="card-text">
                  Get help with account setup, profile details, and
                  account-related settings.
                </p>

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Resident Individual
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Minor Account
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Non-Resident Indian (NRI)
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Business & Partnership Accounts
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Investment Glossary
                </a>
              </div>
            </div>
          </div>

          {/* 2. Trading */}
          <div className="col-md-6">
            <div className="card support-card">
              <div className="card-body">
                <h5 className="card-title">Your Investment Account</h5>

                <p className="card-text">
                  Find answers about orders, trades, positions, and market
                  execution.
                </p>

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Your Profile
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Account Settings
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Account Documents & Details
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Nomination & Beneficiaries
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Securities Transfer
                </a>
              </div>
            </div>
          </div>

          {/* 3. Equinox Trade */}
          <div className="col-md-6">
            <div className="card support-card">
              <div className="card-body">
                <h5 className="card-title">Equinox Trade</h5>

                <p className="card-text">
                  Get guidance on deposits, withdrawals, payments, and managing
                  funds across your account.
                </p>

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  IPO
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Trading FAQs
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Margins & MTF
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Charts & Orders
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Alerts & Insights
                </a>
              </div>
            </div>
          </div>

          {/* 4. Portfolio */}
          <div className="col-md-6">
            <div className="card support-card">
              <div className="card-body">
                <h5 className="card-title">Portfolio Insights</h5>

                <p className="card-text">
                  Understand your holdings, investments, performance, and
                  portfolio activity.
                </p>

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Portfolio Overview
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Corporate Actions
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Funds & Statements
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Reports & Analytics
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Profile & Preferences
                </a>
              </div>
            </div>
          </div>

          {/* 5. Platform & Tools */}
          <div className="col-md-6">
            <div className="card support-card">
              <div className="card-body">
                <h5 className="card-title">InvestX</h5>

                <p className="card-text">
                  Get assistance with trading tools, charts, features, and
                  platform functionality.
                </p>

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Mutual Funds
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Payments & Orders
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Fixed Deposits
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  InvestX Features
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Investing Basics
                </a>
              </div>
            </div>
          </div>

          {/* 6. Security */}
          <div className="col-md-6">
            <div className="card support-card">
              <div className="card-body">
                <h5 className="card-title">Security</h5>

                <p className="card-text">
                  Find guidance on account security, privacy, authentication,
                  and keeping your account safe.
                </p>

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Security & Privacy
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Account Security
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Login & Authentication
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Data & Privacy
                </a>
                <br />

                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="card-link"
                >
                  Troubleshooting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
