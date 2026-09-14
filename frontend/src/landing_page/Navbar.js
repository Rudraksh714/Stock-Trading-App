// import React from "react";
// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <nav
//       className="navbar navbar-expand-md bg-body-tertiary border-bottom sticky-top"
//       data-bs-theme="light"
//       style={{ backgroundColor: "#e3f2fd" }}
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           <img
//             src="media/images/logo.jpg"
//             alt="logo"
//             style={{ width: "10%" }}
//           />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           {/* Navbar Links - right side */}
//           <div className="navbar-nav ms-auto me-5">
//             <form className="d-flex" role="search">
//               <ul className="navbar-nav gap-4">
//                 <li className="nav-item">
//                   <Link className="nav-link active" to="/signup">
//                     Signup
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link className="nav-link active" to="/about">
//                     About
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link className="nav-link active" to="/products">
//                     Products
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link className="nav-link active" to="/pricing">
//                     Pricing
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link className="nav-link active" to="/support">
//                     Support
//                   </Link>
//                 </li>
//               </ul>
//             </form>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-md border-bottom sticky-top"
      data-bs-theme="dark"
      style={{
        background: "linear-gradient(180deg, #3a4054 0%, #2b3040 100%)",
        borderColor: "rgba(245, 246, 248, 0.14)",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="/media/Images/logo.jpg"
            alt="logo"
            style={{
              width: "55px",
              height: "55px",
              objectFit: "contain",
              display: "block",
            }}
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
          style={{
            borderColor: "rgba(245, 246, 248, 0.25)",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto me-5">
            <form className="d-flex" role="search">
              <ul className="navbar-nav gap-4">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/signup"
                    style={{ color: "#7C8CFF" }}
                  >
                    Signup
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/about"
                    style={{ color: "#7C8CFF" }}
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/products"
                    style={{ color: "#7C8CFF" }}
                  >
                    Products
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/pricing"
                    style={{ color: "#7C8CFF" }}
                  >
                    Pricing
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/support"
                    style={{ color: "#7C8CFF" }}
                  >
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
