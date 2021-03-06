import React, { useState, useEffect, useRef } from "react";
// import helpers
import { firebaseApp } from "../../utils/firebase";
import { googleRegister } from "../../utils/googleSignin";
import { validateEmail } from "../../utils/helpers";
import { promptUserForPassword } from "./helpers";
import { authFruitAnimationPage } from "../../ui/animationHelpers";
// import components
import BackButton from "../../ui/BackButton";
import FruitsBg from "../../ui/FruitsBg";
import raspberry1 from "../../../assets/raspberry_1.svg";
import raspberry2 from "../../../assets/raspberry_2.svg";
import raspberry3 from "../../../assets/raspberry_3.svg";
import strawberry1 from "../../../assets/strawberry_1.svg";
import strawberry2 from "../../../assets/strawberry_2.svg";
import pinkCircle from "../../../assets/pink_circle.svg";
import GoogleBtn from "../../ui/GoogleBtn";
const Login = (props) => {
  const [localEmailDisplay, setLocalEmailDisplay] = useState(false);
  const [localPasswordDisplay, setLocalPasswordDisplay] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let registerFormRef = useRef(null);

  useEffect(() => {
    const fruitsElements = document.querySelectorAll(".stagger");
    let fruitCircle = document.querySelector(".fruit_6");
    let backButton = document.querySelector(".back-button");

    authFruitAnimationPage(
      fruitsElements,
      fruitCircle,
      registerFormRef,
      backButton
    );
  }, []);

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

  const handleSubmitLoginUser = async (e) => {
    e.preventDefault();
    try {
      await firebaseApp.auth().signInWithEmailAndPassword(email, password);
      props.history.push("/dashboard");
    } catch (error) {
      setError("Please try again");
    }
  };

  const displayLocalRegisterEmail = (bgColor) => (
    <div className="reg-form-input">
      <h2 className="input-header">Email</h2>
      <input
        className="input-text"
        style={{ backgroundColor: bgColor }}
        type="email"
        name="email"
        onChange={handleEmail}
      />
      {error && <div className="error-message">{error}</div>}
      {email && (
        <div onClick={handleForwardFromEmailToPassword} className="input-btn">
          Next
        </div>
      )}
    </div>
  );

  const displayLocalRegisterPassword = (bgColor) => (
    <div className="reg-form-input">
      <h2 className="input-header">Password</h2>
      <input
        style={{ backgroundColor: bgColor }}
        className="input-text"
        type="text"
        name="password"
        onChange={handlePassword}
        value={password || ""}
      />
      {error && <div className="error-message">{error}</div>}
      {password && (
        <div onClick={handleSubmitLoginUser} className="input-btn">
          Submit
        </div>
      )}
    </div>
  );

  const displayRegisterButtons = (bgColor) => (
    <div className="reg-form" ref={(el) => (registerFormRef = el)}>
      <div>
        <button
          style={{ backgroundColor: bgColor }}
          className="my-btn btn-custom marginX-m login-btn"
          onClick={() => setLocalEmailDisplay(true)}
        >
          Sign in with email
        </button>
      </div>
      <GoogleBtn
        googleRegister={() =>
          googleRegister(promptUserForPassword(handlePassword))
        }
      />
    </div>
  );
  return (
    <>
      <FruitsBg
        bgColor="#4f86f7"
        img1={raspberry1}
        img2={raspberry2}
        img3={raspberry3}
        img4={strawberry1}
        img5={strawberry2}
        img6={pinkCircle}
      />
      {localEmailDisplay === true && localPasswordDisplay === true
        ? displayLocalRegisterPassword("#4f86f7")
        : localEmailDisplay === true
        ? displayLocalRegisterEmail("#4f86f7")
        : displayRegisterButtons("#4f86f7")}
      <BackButton />
    </>
  );
};

export default Login;
