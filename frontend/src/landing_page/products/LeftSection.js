import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>

        <div className="col-6 p-5 mt-3">
          <h2 style={{ color: "#f5f6f8" }}>{productName}</h2>

          <p
            className="fs-5 mt-3"
            style={{ lineHeight: "1.8", color: "#c8cbd4" }}
          >
            {productDescription}
          </p>

          <div className="p-3 d-flex gap-4">
            <a
              href={tryDemo}
              style={{ textDecoration: "none", color: "#7C8CFF" }}
            >
              Start trading <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a
              href={learnMore}
              style={{ textDecoration: "none", color: "#7C8CFF" }}
            >
              Learn more <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
