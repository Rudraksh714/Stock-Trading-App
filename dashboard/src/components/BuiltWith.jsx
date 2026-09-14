import React from "react";
import "./BuiltWith.css";

const BuiltWith = () => {
  return (
    <div className="builtwith-container">
      <div className="builtwith-header">
        <h3>Built With</h3>
        <p>Technologies and architecture behind the platform</p>
      </div>

      <div className="builtwith-card">
        <div className="tech-section">
          <h5>Frontend</h5>
          <div className="tech-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="tech-section">
          <h5>Backend</h5>
          <div className="tech-list">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>REST APIs</span>
          </div>
        </div>

        <div className="tech-section">
          <h5>Database</h5>
          <div className="tech-list">
            <span>MongoDB</span>
            <span>Mongoose</span>
          </div>
        </div>

        <div className="tech-section">
          <h5>Architecture</h5>
          <div className="tech-list">
            <span>MVC Structure</span>
            <span>Cookie-based Authentication</span>
            <span>Axios</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuiltWith;