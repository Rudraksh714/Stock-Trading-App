import React from 'react';


function Universe() {
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <h1>Built Beyond Trading</h1>
          <p>
            Go beyond the core platform with a growing ecosystem of tools
            <br />
            designed to support smarter investing, deeper market understanding,
            and better decisions.
          </p>
          <div className="col-4 p-3 mt-5">
            <img
              src="media/Images/smallcaseLogo.png"
              style={{
                width: "180px",
                maxHeight: "60px",
                objectFit: "contain",
              }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "15px" }}>
              Curated investment ideas and diversified stock baskets designed to
              help you build a balanced portfolio with greater simplicity and
              control.
            </p>
            <img
              src="media/Images/zerodhaFundhouse.png"
              style={{
                width: "180px",
                maxHeight: "60px",
                objectFit: "contain",
                marginTop: "40px",
              }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "15px" }}>
              Thoughtful investment strategies designed to help you allocate,
              diversify, and grow your capital with a clear long-term
              perspective.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="media/Images/streakLogo.png"
              style={{
                width: "160px",
                maxHeight: "60px",
                objectFit: "contain",
              }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "15px" }}>
              Thoughtful investment strategies designed to help you allocate,
              diversify, and grow your capital with a clear long-term
              perspective.
            </p>
            <img
              src="media/Images/goldenpiLogo.png"
              style={{
                width: "160px",
                maxHeight: "60px",
                objectFit: "contain",
                marginTop: "40px",
              }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "15px" }}>
              A focused platform designed to help you discover, evaluate, and
              trade bonds with greater clarity, transparency, and control.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="media/Images/sensibullLogo.svg"
              style={{
                width: "180px",
                maxHeight: "60px",
                objectFit: "contain",
                marginBottom: "20px",
              }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "15px" }}>
              A powerful options platform for building strategies, analyzing
              positions, and tracking key market signals to make more informed
              trading decisions.
            </p>
            <img
              src="media/Images/dittoLogo.png"
              style={{
                width: "140px",
                maxHeight: "60px",
                objectFit: "contain",
                marginTop: "40px",
              }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "15px" }}>
              Simple insurance guidance designed to help you understand,
              compare, and choose coverage with greater clarity without the
              noise or pressure.
            </p>
          </div>
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            {" "}
            Sign up Now{" "}
          </button>
        </div>
      </div>
    );
}

export default Universe;