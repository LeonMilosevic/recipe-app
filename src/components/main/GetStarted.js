import React, { useContext, useEffect, useState, useRef } from "react";
// import helpers
import { googleRegister } from "../utils/googleSignin";
import { firebaseApp } from "../utils/firebase";
import { validateEmail } from "../utils/helpers";
// import images
import blueberry1 from "../../assets/blueberry_1.svg";
import blueberry2 from "../../assets/blueberry_2.svg";
import strawberry1 from "../../assets/strawberry_1.svg";
import strawberry2 from "../../assets/strawberry_2.svg";
import raspberry1 from "../../assets/raspberry_1.svg";
import pinkCircle from "../../assets/pink_circle.svg";
import FruitsBg from "../ui/FruitsBg";
import GoogleBtn from "../ui/GoogleBtn";

const GetStarted = () => {
  // declaring states
  const [localEmailDisplay, setLocalEmailDisplay] = useState(false);
  const [localPasswordDisplay, setLocalPasswordDisplay] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // declare refs for gsap animations
  let inputRef = useRef(null);
  let buttonNextRef = useRef(null);
  // passing the function to google auth if the email exists in db already
  const promptUserForPassword = () => (
    <div className="reg-form">
      <input type="password" name="password" onChange={handlePassword} />
    </div>
  );
  // showing and displaying label
  const handleLabelInput = (e) => {
    e.target.style.display = "none";
    inputRef.style.width = "100%";
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // validate email and forward to password section
  const handleForwardFromEmailToPassword = () => {
    if (email !== "") {
      const validEmail = validateEmail(email);
      if (validEmail) {
        setLocalPasswordDisplay(true);
        setError("");
      } else {
        setError("That is not a valid email");
      }
    }
  };

  const handleSubmitRegisterUser = async (e) => {
    e.preventDefault();
    try {
      await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError("That is not a valid email");
    }
  };

  const displayLocalRegisterEmail = () => (
    <div className="reg-form-input">
      <input
        className="input-text"
        type="email"
        name="email"
        onChange={handleEmail}
        ref={(el) => (inputRef = el)}
      />
      <label onClick={handleLabelInput} className="input-text_label">
        Email
      </label>
      {error && <div className="error-message">{error}</div>}
      {email && (
        <div
          onClick={handleForwardFromEmailToPassword}
          ref={(el) => (buttonNextRef = el)}
          className="input-btn"
        >
          Next
        </div>
      )}
    </div>
  );

  const displayLocalRegisterPassword = () => (
    <div className="reg-form-input">
      <input
        className="input-text"
        type="text"
        name="password"
        onChange={handlePassword}
        value={password || ""}
      />
      <label onClick={handleLabelInput} className="input-text_label">
        Password
      </label>
      {error && <div className="error-message">{error}</div>}
      {password && (
        <div
          onClick={handleSubmitRegisterUser}
          ref={(el) => (buttonNextRef = el)}
          className="input-btn"
        >
          Submit
        </div>
      )}
    </div>
  );

  const displayRegisterButtons = () => (
    <div className="reg-form">
      <div>
        <button
          className="btn btn-custom marginX-m"
          onClick={() => setLocalEmailDisplay(true)}
        >
          Sign up with email
        </button>
      </div>
      <GoogleBtn googleRegister={() => googleRegister(promptUserForPassword)} />
    </div>
  );

  return (
    <>
      <FruitsBg
        bgColor="red"
        img1={blueberry1}
        img2={blueberry2}
        img3={strawberry1}
        img4={strawberry2}
        img5={raspberry1}
        img6={pinkCircle}
      />
      {localEmailDisplay === true && localPasswordDisplay === true
        ? displayLocalRegisterPassword()
        : localEmailDisplay === true
        ? displayLocalRegisterEmail()
        : displayRegisterButtons()}
    </>
  );
};

export default GetStarted;
