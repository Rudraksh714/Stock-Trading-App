import React from 'react';


function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  contentTopOffset = 0,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div
          className={'col-6 p-5 ${contentTopOffset === 0 ? "mt-5" : ""}'}
          style={{ marginTop: `${contentTopOffset}px` }}
        >
          <h2>{productName}</h2>
          <p className="fs-5 text-muted mt-3" style={{ lineHeight: "1.8" }}>
            {productDescription}
          </p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;