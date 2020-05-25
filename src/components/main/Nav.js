import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <NavLink className="empty-link nav-link" to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          activeClassName="active-link"
          className="empty-link nav-link"
          to="/features"
        >
          Features
        </NavLink>
        <NavLink
          activeClassName="active-link"
          className="empty-link nav-link"
          to="/about"
        >
          About
        </NavLink>
      </div>
      <div>
        <NavLink
          activeClassName="active-link"
          className="empty-link nav-link"
          to="/get-started"
        >
          Get started
        </NavLink>
        <NavLink
          activeClassName="active-link"
          className="empty-link nav-link"
          to="/login"
        >
          Log in
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
