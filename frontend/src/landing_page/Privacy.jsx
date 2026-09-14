import React from "react";
import "./Legal.css";

function Privacy() {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>Privacy Policy</h1>
        <p>How Equinox Trade handles user information</p>
      </div>

      <div className="legal-card">
        <h3>1. Information We Collect</h3>
        <p>
          Depending on the features being used, the platform may collect basic
          account information required for registration, authentication, and
          providing platform functionality.
        </p>

        <h3>2. How Information Is Used</h3>
        <p>
          Information may be used to authenticate users, maintain accounts,
          provide platform features, improve the user experience, and maintain
          platform security.
        </p>

        <h3>3. Data Security</h3>
        <p>
          Reasonable technical measures are used to protect information
          handled by the platform. However, no internet-based system can
          guarantee absolute security.
        </p>

        <h3>4. Cookies</h3>
        <p>
          The platform may use cookies or similar mechanisms for authentication
          and maintaining user sessions.
        </p>

        <h3>5. Third-Party Services</h3>
        <p>
          Certain features may rely on third-party services or external
          resources. Their respective privacy policies and terms may apply
          when those services are used.
        </p>

        <h3>6. User Responsibility</h3>
        <p>
          Users should keep passwords, authentication information, and other
          confidential details secure and should not share them with others.
        </p>

        <h3>7. Policy Updates</h3>
        <p>
          This privacy policy may be updated periodically to reflect changes
          in the platform or its functionality.
        </p>
      </div>
    </div>
  );
}

export default Privacy;