import React, { useEffect, useRef } from "react";
// import third party
import { gsap } from "gsap";
import { Link, useHistory } from "react-router-dom";
// import components
import Nav from "./Nav";
// import images
import panImage from "../../assets/pan.svg";

const Home = () => {
  const history = useHistory();
  let homeInspireRef = useRef(null);
  let homeImageRef = useRef(null);
  const navRef = React.createRef(null);
  const tl = new gsap.timeline();
  const changeFromHomeToAny = (destination) => (e) => {
    e.preventDefault();
    tl.reverse();
    setTimeout(() => {
      history.push(destination);
    }, 1600);
  };
  useEffect(() => {
    tl.from(navRef.current, { yPercent: -100, duration: 1 });
    tl.to(homeInspireRef, { opacity: 1, duration: 0.5 });
    tl.to(homeImageRef, { opacity: 1, duration: 0.5 }, 1);
  }, [tl, navRef]);
  return (
    <div className="container-fluid">
      <Nav
        ref={navRef}
        changeFromAnyPageToRegister={changeFromHomeToAny("/register")}
        changeFromAnyPageToLogin={changeFromHomeToAny("/login")}
      />
      <div ref={(el) => (homeInspireRef = el)} className="home-inspire">
        <div className="home-inspire_header">Create, Track</div>
        <div className="home-inspire_header">Cook!</div>
        <div className="home-inspire_info">
          With our system and your help we are tracking your food and
          recommanding you the most delicious recipes out there for you!
        </div>
        <div className="home-inspire_button-group">
          <Link to="/register" className="empty-link home-btn home-btn_bg">
            Get started
          </Link>
          <Link to="/features" className="empty-link home-btn">
            Learn more
          </Link>
        </div>
      </div>
      <div ref={(el) => (homeImageRef = el)} className="home-image_container">
        <img className="home-image" src={panImage} alt="pan_img" />
      </div>
    </div>
  );
};

export default Home;
