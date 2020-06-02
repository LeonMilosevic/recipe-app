import React from "react";
import { withRouter } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const BackButton = ({ history }) => {
  return (
    <div onClick={() => history.goBack()} className="back-button">
      <FaArrowLeft style={{ fontSize: "48px", color: "white" }} />
    </div>
  );
};

export default withRouter(BackButton);
