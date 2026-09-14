import React from "react";
import "./Legal.css";

function Policies() {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>Policies & Procedures</h1>
        <p>Platform guidelines and responsible usage practices</p>
      </div>

      <div className="legal-card">
        <h3>1. Account Security</h3>
        <p>
          Users should keep their account credentials confidential and should
          immediately report any suspected unauthorized access.
        </p>

        <h3>2. Responsible Usage</h3>
        <p>
          The platform must not be used for unlawful activities, unauthorized
          access, disruption of services, or activities that may compromise
          platform security.
        </p>

        <h3>3. Transaction Monitoring</h3>
        <p>
          Users should regularly review their account activity and verify
          transactions to ensure that the information displayed is accurate.
        </p>

        <h3>4. Communication</h3>
        <p>
          Users should verify important account-related communications through
          official platform channels and avoid sharing confidential
          information through unverified sources.
        </p>

        <h3>5. Content Accuracy</h3>
        <p>
          While reasonable efforts are made to maintain accurate information,
          market data and educational content may not always be complete,
          current, or error-free.
        </p>

        <h3>6. Policy Changes</h3>
        <p>
          Policies and procedures may be updated as the platform evolves.
          Users are encouraged to review this page periodically.
        </p>
      </div>
    </div>
  );
}

export default Policies;