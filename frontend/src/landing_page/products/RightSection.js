import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  contentTopOffset = 0,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div
          className={`col-6 p-5 ${contentTopOffset === 0 ? "mt-5" : ""}`}
          style={{ marginTop: `${contentTopOffset}px` }}
        >
          <h2 style={{ color: "#f5f6f8" }}>{productName}</h2>

          <p
            className="fs-5 mt-3"
            style={{ lineHeight: "1.8", color: "#c8cbd4" }}
          >
            {productDescription}
          </p>
        </div>

        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
