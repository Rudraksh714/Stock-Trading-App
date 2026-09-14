import React from "react";
import "./Apps.css";

const Apps = () => {
  return (
    <div className="explore-container">
      <div className="explore-header">
        <h3>Explore</h3>
        <p>Market resources, insights and project details</p>
      </div>

      <div className="explore-grid">
        <div className="explore-section">
          <h5>Market & Learning</h5>

          <a
            href="https://www.moneycontrol.com/news/business/markets/"
            target="_blank"
            rel="noreferrer"
            className="explore-item"
          >
            <div>
              <strong>Market News</strong>
              <span>Latest stock market updates</span>
            </div>
            <span>↗</span>
          </a>

          <a
            href="https://economictimes.indiatimes.com/markets"
            target="_blank"
            rel="noreferrer"
            className="explore-item"
          >
            <div>
              <strong>Trading Articles</strong>
              <span>Guides and market insights</span>
            </div>
            <span>↗</span>
          </a>

          <a
            href="https://www.reuters.com/markets/"
            target="_blank"
            rel="noreferrer"
            className="explore-item"
          >
            <div>
              <strong>Global Market News</strong>
              <span>Global financial market updates</span>
            </div>
            <span>↗</span>
          </a>

          <a
            href="https://www.nseindia.com/"
            target="_blank"
            rel="noreferrer"
            className="explore-item"
          >
            <div>
              <strong>Market Resources</strong>
              <span>NSE, BSE & SEBI resources</span>
            </div>
            <span>↗</span>
          </a>
        </div>

        <div className="explore-section">
          <h5>Project</h5>

          <a href="/built-with" className="explore-item">
            <div>
              <strong>Built With</strong>
              <span>React · Node.js · Express · MongoDB</span>
            </div>
            <span>→</span>
          </a>

          <a
            href="https://www.linkedin.com/in/rudraksh-mishra-85302031b?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noreferrer"
            className="explore-item"
          >
            <div>
              <strong>About Developer</strong>
              <span>Connect with the developer</span>
            </div>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Apps;
