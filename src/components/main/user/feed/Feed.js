import React from "react";
// import components
import Sidenav from "./Sidenav";
import FoodCard from "./FoodCard";
const Feed = (props) => {
  return (
    <div>
      <Sidenav />
      <div className="container">
        {props.userFoodData.map((recipe, i) => (
          <div className="feed-card" key={i}>
            <FoodCard
              bgImage={recipe.recipe.image}
              recipeLabel={recipe.recipe.label}
              recipeCalories={recipe.recipe.calories}
              recipeUrl={recipe.recipe.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
