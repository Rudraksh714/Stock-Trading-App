import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We’re redefining investing through technology.
          <br />
          Built to make every investment decision simpler and smarter
        </h1>
      </div>
      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            We set out with a clear purpose: to make investing simpler, smarter,
            and more accessible through technology. The idea was to build a
            platform where investors could access the markets without being
            overwhelmed by complicated processes, hidden costs, or outdated
            tools.
          </p>
          <p>
            From the very beginning, we have focused on removing friction from
            the investing journey. Our platform combines intuitive design,
            transparent pricing, powerful technology, and meaningful market
            insights to create an experience that feels simple on the surface
            while remaining powerful underneath.
          </p>
          <p>
            Today, our platform brings trading, investing, portfolio management,
            market insights, and educational resources together in one connected
            ecosystem. Built with a technology-first approach, it is designed to
            keep pace with the evolving needs of modern investors while
            maintaining the simplicity that makes the experience effortless.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            Every feature is designed with a purpose — to reduce friction,
            improve decision-making, and give investors a clearer understanding
            of the markets. From discovering opportunities to tracking portfolio
            performance, the experience is built around clarity, speed, and
            control.
          </p>
          <br />
          <p>
            We are constantly exploring new ideas, refining our technology, and
            experimenting with better ways to make financial markets more
            approachable. What you see today is only the beginning of what we
            aim to build.
          </p>

          <br />

          <p className="fs-5">
            <b>
              We are not just building another trading platform. We are building
              the technology layer for a smarter investing experience.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
