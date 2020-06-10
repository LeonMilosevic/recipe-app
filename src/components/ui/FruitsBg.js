import React from "react";

export const FruitsBg = (props) => {
  return (
    <div style={{ backgroundColor: props.bgColor }} className="fruits-bg">
      <span>
        <img className="fruit_1 stagger" src={props.img1} alt="image_1" />
      </span>
      <span>
        <img className="fruit_2 stagger" src={props.img2} alt="image_1" />
      </span>
      <span>
        <img className="fruit_3 stagger" src={props.img3} alt="image_1" />
      </span>
      <span>
        <img className="fruit_4 stagger" src={props.img4} alt="image_1" />
      </span>
      <span>
        <img className="fruit_5 stagger" src={props.img5} alt="image_1" />
      </span>
      <span>
        <img className="fruit_6" src={props.img6} alt="image_1" />
      </span>
    </div>
  );
};

export default FruitsBg;
