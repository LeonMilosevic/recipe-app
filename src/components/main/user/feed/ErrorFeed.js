import React from "react";
import Sidenav from "./Sidenav";

const ErrorFeed = (props) => {
  return (
    <div>
      <Sidenav />
      <div className="container">
        <div className="display_error">{props.error}</div>
      </div>
    </div>
  );
};

export default ErrorFeed;
