import React from "react";

const FoodCard = (props) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${props.bgImage})` }}
        className="feed-card-image"
      ></div>
      <div className="feed-card-text">
        <div>{props.recipeLabel}</div>
        <div>{props.recipeCalories.toFixed(2)} Calories</div>
        <div>
          <a
            className="feed-card-link"
            rel="noopener noreferrer"
            target="_blank"
            href={props.recipeUrl}
          >
            view more
          </a>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
