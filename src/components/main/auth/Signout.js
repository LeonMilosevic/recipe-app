import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Signout = () => {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    window.location.reload();
    history.push("/");
  };
  return (
    <div className="container center">
      <h2 className="signout-header">Successfull signout</h2>
      <h3 className="signout-subheader">Thank you for usingg our app</h3>
      <div className="signout-link">
        <Link onClick={handleClick} to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Signout;
