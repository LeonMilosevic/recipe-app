import React from "react";
import googleBtn from "../../assets/google_btn.svg";

const GoogleBtn = (props) => {
  return (
    <div>
      <button
        className="btn marginX-m btn-google"
        onClick={props.googleRegister}
      >
        <span>
          <img src={googleBtn} alt="logo" />
        </span>
        <span>Sign up with google</span>
      </button>
    </div>
  );
};

export default GoogleBtn;
