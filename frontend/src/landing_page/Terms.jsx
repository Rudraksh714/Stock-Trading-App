import React from "react";
import "./Legal.css";

function Terms() {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>Terms & Conditions</h1>
        <p>Terms governing the use of Equinox Trade</p>
      </div>

      <div className="legal-card">
        <h3>1. About the Platform</h3>
        <p>
          Equinox Trade is a trading and investment platform project designed
          to provide users with a simple interface for exploring financial
          markets and managing simulated trading activities.
        </p>

        <h3>2. Use of the Platform</h3>
        <p>
          Users are expected to use the platform responsibly and only for its
          intended purposes. Any attempt to misuse, disrupt, or gain
          unauthorized access to the platform is prohibited.
        </p>

        <h3>3. Trading Information</h3>
        <p>
          Information displayed on the platform may be simulated or provided
          for educational purposes. It should not be treated as a guarantee of
          actual market performance or financial returns.
        </p>

        <h3>4. User Responsibility</h3>
        <p>
          Users are responsible for reviewing the information available to
          them and understanding the risks associated with financial markets
          before making any real-world investment decision.
        </p>

        <h3>5. Platform Availability</h3>
        <p>
          We aim to keep the platform available and functional, but continuous
          availability cannot be guaranteed. Features may be modified,
          updated, or discontinued when required.
        </p>

        <h3>6. Limitation of Liability</h3>
        <p>
          Equinox Trade is not responsible for losses, damages, or decisions
          arising from reliance on information presented through this
          educational platform.
        </p>

        <h3>7. Changes to These Terms</h3>
        <p>
          These terms may be updated from time to time. Continued use of the
          platform after changes indicates acceptance of the updated terms.
        </p>
      </div>
    </div>
  );
}

export default Terms;