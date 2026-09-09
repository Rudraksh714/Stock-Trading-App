import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-md bg-body-tertiary border-bottom sticky-top"
      data-bs-theme="light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >

          {/* Navbar Links - right side */}
          <div className="navbar-nav ms-auto me-5">
            <form className="d-flex" role="search">
              <ul className="navbar-nav gap-4">
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">
                    Signup
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/products">
                    Products
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/pricing">
                    Pricing
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default NavBar;