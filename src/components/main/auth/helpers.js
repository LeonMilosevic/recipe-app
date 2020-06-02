import React from "react";
// passing the function to google auth if the email exists in db already
export const promptUserForPassword = (handlePassword) => (
  <div className="reg-form">
    <input type="password" name="password" onChange={handlePassword} />
  </div>
);
