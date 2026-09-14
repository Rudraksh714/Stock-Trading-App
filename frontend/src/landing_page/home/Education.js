import React from "react";

function Education() {
  return (
    <div className="container mt-7">
      <div className="row">
        <div className="col-6">
          <img
            src="/media/Images/education.svg"
            style={{
              width: "70%",
              position: "relative",
              top: "-40px",
              opacity: "0.9",
            }}
          />
        </div>

        <div className="col-6">
          <h2
            className="mb-3 fs-2"
            style={{
              color: "#f5f6f8",
              fontWeight: "600",
            }}
          >
            Learn. Explore. Trade Smarter.
          </h2>

          <p
            style={{
              color: "#c8cbd4",
              lineHeight: "1.7",
            }}
          >
            Access practical market education designed for everyone, from
            beginners taking their first steps to experienced traders looking to
            sharpen their skills.
          </p>

          <a
            href=""
            style={{
              textDecoration: "none",
              color: "#7C8CFF",
              fontWeight: "500",
            }}
          >
            Explore learning resources{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <p
            style={{
              color: "#c8cbd4",
              lineHeight: "1.7",
              marginTop: "28px",
            }}
          >
            Explore market insights, trading concepts, investment strategies,
            and answers to common questions to make more informed decisions.
          </p>

          <a
            href=""
            style={{
              textDecoration: "none",
              color: "#7C8CFF",
              fontWeight: "500",
            }}
          >
            Join the trading community{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
