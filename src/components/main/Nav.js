import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="my-nav">
      <div>
        <NavLink className="empty-link nav-link" to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          activeClassName="active-link"
          className="empty-link nav-link"
          to="/register"
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
