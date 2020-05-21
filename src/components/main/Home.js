import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = () => {
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
          <Link className="empty-link home-btn home-btn_bg">Get started</Link>
          <Link className="empty-link home-btn">Learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
