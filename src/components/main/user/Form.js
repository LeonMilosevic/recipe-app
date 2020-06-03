import React from "react";

export const Form = (props) => {
  return (
    <form className="form-fullscreen">
      <div className="form-header">{props.formHeader}</div>
      <div className="form-body">{props.formBody}</div>
      <button onClick={props.handleClickChangeForm}>Next</button>
    </form>
  );
};
