import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Menu.css";
import screen from "./screen.jpg";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleisProfileDropdownOpen = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3002/auth/logout",
        {},
        {
          withCredentials: true,
        },
      );

      window.location.href = "http://localhost:3001/login";
    } catch (error) {
      console.log(error);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu Selected";

  return (
    <div className="menu-container">
      <img src={screen} style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/" end>
              {({ isActive }) => (
                <p className={isActive ? activeMenuClass : menuClass}>
                  Dashboard
                </p>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink style={{ textDecoration: "none" }} to="/orders">
              {({ isActive }) => (
                <p className={isActive ? activeMenuClass : menuClass}>Orders</p>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink style={{ textDecoration: "none" }} to="/holdings">
              {({ isActive }) => (
                <p className={isActive ? activeMenuClass : menuClass}>
                  Holdings
                </p>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink style={{ textDecoration: "none" }} to="/positions">
              {({ isActive }) => (
                <p className={isActive ? activeMenuClass : menuClass}>
                  Positions
                </p>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink style={{ textDecoration: "none" }} to="/funds">
              {({ isActive }) => (
                <p className={isActive ? activeMenuClass : menuClass}>Funds</p>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink style={{ textDecoration: "none" }} to="/apps">
              {({ isActive }) => (
                <p className={isActive ? activeMenuClass : menuClass}>
                  Explore
                </p>
              )}
            </NavLink>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleisProfileDropdownOpen}>
          <div className="avatar">RM</div>
          <p className="username">USERID</p>
        </div>

        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <div className="dropdown-item">
              <NavLink to="/" className="dropdown-item">
                Profile
              </NavLink>
            </div>
            <button className="dropdown-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
