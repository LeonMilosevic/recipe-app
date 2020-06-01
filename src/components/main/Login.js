import React, { useContext, useEffect, useState } from "react";
import { firebaseApp } from "../utils/firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebaseApp.auth().signInWithEmailAndPassword(email, password);

      console.log("success");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container-fluid">
      <div className="reg-form">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleEmail}
            name="email"
            type="email"
            placeholder="email"
          />
          <input
            onChange={handlePassword}
            name="password"
            type="password"
            placeholder="password"
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
