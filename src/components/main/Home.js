import React from "react";
import { Link } from "react-router-dom";
// import components
import Nav from "./Nav";
// import images
import panImage from "../../assets/pan.svg";

const Home = (props) => {
  return (
    <div className="container-fluid">
      <Nav />
      <div className="home-inspire">
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
      <div className="home-image_container">
        <img className="home-image" src={panImage} alt="pan_img" />
      </div>
    </div>
  );
};

export default Home;
