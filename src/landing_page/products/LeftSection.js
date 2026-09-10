import React from 'react';


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
          <h2>{productName}</h2>
          <p className="fs-5 text-muted mt-3" style={{ lineHeight: "1.8" }}>
            {productDescription}
          </p>
          <div className="p-3 d-flex gap-4">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Start trading <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className=" d-flex gap-4">
            <a href={googlePlay}>
              <img src="media/Images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/Images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;