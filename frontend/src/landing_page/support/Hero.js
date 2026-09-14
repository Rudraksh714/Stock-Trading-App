import React from "react";

const popularTopics = [
  "How do I open my Account?",
  "KYC issues",
  "Fund withdrawal",
  "Add bank account",
  "Reset password",
  "Order rejected",
];

const popularArticles = [
  { title: "Why is my order getting rejected?", category: "Trading" },
  { title: "How to complete my KYC verification?", category: "Account" },
  { title: "How long does fund withdrawal take?", category: "Funds" },
  { title: "How to add or change my bank account?", category: "Account" },
  { title: "Understanding brokerage and other charges", category: "Charges" },
];

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <style>{`
        #supportHero input::placeholder {
          color: #c8cbd4 !important;
          opacity: 1;
        }
      `}</style>

      <div className="row p-5 mb-5" id="supportWrapper">
        <div className="col-8 p-5 mt-5 mb-5">
          <h1 style={{ color: "#f5f6f8", fontWeight: "700" }}>
            Support Portal
          </h1>

          <div className="input-group mt-4" style={{ maxWidth: "650px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Eg: How do i open my Account?"
              style={{
                padding: "14px 18px",
                fontSize: "16px",
                border: "2px solid #7C8CFF",
                backgroundColor: "rgba(43, 48, 64, 0.6)",
                color: "#f5f6f8",
              }}
            />
          </div>

          <div className="d-flex">
            <a
              href=""
              className="btn mt-4 d-flex align-items-center gap-2"
              style={{
                background: "linear-gradient(135deg, #4C5FD5 0%, #5B3FE0 100%)",
                color: "#fff",
                padding: "10px 20px",
                border: "1px solid rgba(76, 95, 213, 0.4)",
                textDecoration: "none",
                width: "fit-content",
                boxShadow: "0 6px 18px rgba(76, 95, 213, 0.35)",
              }}
            >
              <i className="fa-solid fa-ticket me-2"></i>
              Track Tickets
            </a>
          </div>

          <div className="mt-3">
            <h6
              className="mb-3"
              style={{
                fontSize: "13px",
                letterSpacing: "1px",
                color: "#c8cbd4",
              }}
            >
              POPULAR TOPICS
            </h6>

            <div className="row g-3">
              {popularTopics.map((topic, index) => (
                <div className="col-6" key={index}>
                  <div
                    className="card"
                    style={{
                      backgroundColor: "rgba(58, 64, 84, 0.65)",
                      border: "1px solid rgba(245, 246, 248, 0.12)",
                      cursor: "pointer",
                    }}
                  >
                    <div className="card-body py-3 px-3">
                      <p
                        className="card-text mb-0"
                        style={{ color: "#e4e6ea", fontSize: "14px" }}
                      >
                        {topic}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="card mt-4"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="card-body">
                <h6 className="card-title" style={{ color: "#f5f6f8" }}>
                  Need more help?
                </h6>

                <p className="card-text mb-3" style={{ color: "#c8cbd4" }}>
                  Reach out to us directly.
                </p>

                <div className="d-flex gap-4">
                  <a
                    href=""
                    className="card-link"
                    style={{
                      textDecoration: "none",
                      color: "#7C8CFF",
                    }}
                  >
                    <i className="fa-solid fa-envelope me-2"></i>
                    Email
                  </a>

                  <a
                    href=""
                    className="card-link"
                    style={{
                      textDecoration: "none",
                      color: "#7C8CFF",
                    }}
                  >
                    <i className="fa-brands fa-linkedin me-2"></i>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4 p-5 mt-5 mb-5">
          <h2 style={{ color: "#f5f6f8" }}>Quick Links</h2>

          <div className="d-flex flex-column gap-4 mt-4">
            <a href="" style={{ textDecoration: "none", color: "#c8cbd4" }}>
              <i className="fa-regular fa-user me-3"></i>
              Account Opening
            </a>

            <a href="" style={{ textDecoration: "none", color: "#c8cbd4" }}>
              <i className="fa-solid fa-chart-line me-3"></i>
              Equinox Trade
            </a>

            <a href="" style={{ textDecoration: "none", color: "#c8cbd4" }}>
              <i className="fa-solid fa-chart-pie me-3"></i>
              Portfolio Insights
            </a>

            <a href="" style={{ textDecoration: "none", color: "#c8cbd4" }}>
              <i className="fa-solid fa-arrow-trend-up me-3"></i>
              InvestX
            </a>

            <a href="" style={{ textDecoration: "none", color: "#c8cbd4" }}>
              <i className="fa-solid fa-ticket me-3"></i>
              Learn how to create a ticket
            </a>
          </div>

          <div style={{ marginTop: "70px" }}>
            <h6
              className="mb-3"
              style={{
                fontSize: "13px",
                letterSpacing: "1px",
                color: "#c8cbd4",
              }}
            >
              POPULAR ARTICLES
            </h6>

            <div
              className="card"
              style={{
                backgroundColor: "rgba(58, 64, 84, 0.65)",
                border: "1px solid rgba(245, 246, 248, 0.12)",
              }}
            >
              <div className="list-group list-group-flush">
                {popularArticles.map((article, index) => (
                  <a
                    key={index}
                    href=""
                    className="list-group-item d-flex justify-content-between align-items-center"
                    style={{
                      backgroundColor: "transparent",
                      color: "#e4e6ea",
                      border: "none",
                      borderBottom:
                        index !== popularArticles.length - 1
                          ? "1px solid rgba(245, 246, 248, 0.12)"
                          : "none",
                      padding: "14px 4px",
                    }}
                  >
                    <span>{article.title}</span>

                    <span
                      style={{
                        fontSize: "13px",
                        color: "#8b8f9a",
                      }}
                    >
                      {article.category}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
