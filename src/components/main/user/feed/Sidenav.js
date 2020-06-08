import React, { useEffect, useContext } from "react";
// import helpers
import { UserContext } from "../../../context/user/UserContext";
import M from "materialize-css/dist/js/materialize.min.js";
import { firebaseApp } from "../../../utils/firebase";
import { useHistory } from "react-router-dom";
const Sidenav = () => {
  const { userPreferences, setUserPreferences } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }, []);

  const handleChangeFoodPreferences = (e) => {
    e.preventDefault();
    setUserPreferences({ ...userPreferences, main: "" });
  };
  const handleChangeLogOut = (e) => {
    e.preventDefault();
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        history.push("/signout");
      });
  };
  return (
    <>
      <nav className="dashboard-nav">
        <a href="!#" className="brand-logo center">
          Logo
        </a>
        <ul id="nav-mobile" className="right">
          <a
            href="!#"
            data-target="slide-out"
            className="sidenav-trigger show-on-large"
          >
            <i className="material-icons">menu</i>
          </a>
        </ul>
      </nav>
      <ul id="slide-out" className="sidenav sidenav-close">
        <li>
          <a
            href="!#"
            onClick={handleChangeFoodPreferences}
            className="sidenav-li-links no-style-btn"
          >
            Change food preferences
          </a>
        </li>
        <li>
          <a
            href="!#"
            className="sidenav-li-links no-style-btn"
            onClick={handleChangeLogOut}
          >
            Sign out
          </a>
        </li>
      </ul>
    </>
  );
};

export default Sidenav;
