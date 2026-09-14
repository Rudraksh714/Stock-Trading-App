import React from "react";
import "./Legal.css";

function RiskDisclosure() {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>Risk Disclosure</h1>
        <p>Understanding the risks associated with financial markets</p>
      </div>

      <div className="legal-card">
        <h3>1. Market Risk</h3>
        <p>
          Financial markets are subject to fluctuations. The value of
          securities can increase or decrease based on market conditions and
          other factors.
        </p>

        <h3>2. Loss of Capital</h3>
        <p>
          Investments in financial markets can result in partial or complete
          loss of invested capital. Past performance does not guarantee future
          results.
        </p>

        <h3>3. Derivatives Risk</h3>
        <p>
          Futures and options involve significant risks and may result in
          losses that can occur rapidly. Such instruments should only be used
          after understanding their associated risks.
        </p>

        <h3>4. Volatility</h3>
        <p>
          Prices can change significantly within short periods due to market
          events, economic conditions, company developments, or other factors.
        </p>

        <h3>5. Educational Nature</h3>
        <p>
          Information provided through Equinox Trade is intended for
          educational and informational purposes and should not be considered
          personalized investment advice.
        </p>

        <h3>6. Independent Decision Making</h3>
        <p>
          Users should conduct their own research and consider seeking advice
          from a qualified financial professional before making investment
          decisions.
        </p>
      </div>
    </div>
  );
}

export default RiskDisclosure;