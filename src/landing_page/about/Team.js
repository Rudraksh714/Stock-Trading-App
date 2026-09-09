import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center mt-5">The Intent</h1>
      </div>
      <div
        className="row p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/IMG_6363.JPG"
            style={{ width: "70%", borderRadius: "10%" }}
          />
          <br />
          <br />
          <h4>Rudraksh Mishra</h4>
        </div>
        <div
          className="col-6 p-5"
          style={{ lineHeight: "1.8", fontSize: "1.1em" }}
        >
          <p>
            Driven by a deep interest in both technology and financial markets,
            the focus has always been on understanding the real problems
            investors face and turning those problems into practical digital
            solutions. Every part of the platform — from the interface to the
            tools behind it — is shaped by one belief: powerful technology
            doesn’t have to feel complicated.
          </p>

          <p>
            The journey is still being built. New ideas are constantly being
            explored, experiences are continuously refined, and the platform
            evolves alongside the changing needs of modern investors.
          </p>
          <p>
            Beyond the platform :{" "}
            <a href="" style={{ textDecoration: "none" }}>
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Github
            </a>
          </p>

          <br />
        </div>
      </div>
    </div>
  );
}

export default Team;
