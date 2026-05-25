import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul style={{ display: "flex", gap: "7px", listStyle: "none" }}>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "";
            }}
            to=""
          >
            <li>home</li>
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "";
            }}
            to="/about"
          >
            <li>About</li>
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "red" : "";
            }}
            to="/login"
          >
            <li>Login</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
