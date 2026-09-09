import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Start Your Investment Journey</h1>
        <p>
          Get access to a modern trading platform with powerful tools,
          <br />
          transparent pricing, and a seamless experience for investing and
          trading.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          {" "}
          Get Started{" "}
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
