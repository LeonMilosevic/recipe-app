import React from "react";
// import third party
import { firebaseApp } from "../../utils/firebase";
const Feed = (props) => {
  return (
    <div>
      {props.userFoodData.map((recipe, i) => (
        <div key={i}>{recipe.recipe.label}</div>
      ))}
      <div>
        Hello from protected dashboard
        <button
          onClick={() =>
            firebaseApp
              .auth()
              .signOut()
              .then(() => {
                props.history.push("/signout");
              })
          }
        >
          sign out
        </button>
      </div>
    </div>
  );
};

export default Feed;
