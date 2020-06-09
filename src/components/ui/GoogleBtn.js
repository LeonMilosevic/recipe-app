import React from "react";

const GoogleBtn = (props) => {
  return (
    <div>
      <div className="google-btn" onClick={props.googleRegister}>
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google_btn"
          />
        </div>
        <p className="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
    </div>
  );
};

export default GoogleBtn;
