import React from "react";
import { NavLink } from "react-router-dom";

const Nav = React.forwardRef((props, navRef) => {
  return (
    <nav ref={navRef} className="my-nav">
      <div>
        <NavLink
          activeClassName="active-link"
          className="empty-link nav-link"
          onClick={props.changeFromAnyPageToRegister}
          to="/register"
        >
          Get started
        </NavLink>
        <NavLink
          activeClassName="active-link"
          className="empty-link nav-link"
          onClick={props.changeFromAnyPageToLogin}
          to="/login"
        >
          Log in
        </NavLink>
      </div>
    </nav>
  );
});

export default Nav;
