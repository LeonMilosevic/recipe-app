import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-center-links">
        <NavLink className="nav-link-left empty-link nav-link" to="/features">
          Features
        </NavLink>
        <NavLink className="nav-link-left empty-link nav-link" to="/about">
          About
        </NavLink>
      </div>
      <div className="nav-right-links">
        <NavLink className="nav-link-right empty-link nav-link" to="/register">
          Get started
        </NavLink>
        <NavLink className="nav-link-right empty-link nav-link" to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
