import React, { useState, useEffect, useRef, useCallback } from "react";
// import components
import Sidenav from "./Sidenav";
import FoodCard from "./FoodCard";
import SpinnerDots from "../../../ui/SpinnerDots";
import SpinnerCircle from "../../../ui/SpinnerCircle";
const Feed = (props) => {
  const [currentData, setCurrentData] = useState([]);
  const [currentDataDisplayNumber, setCurrentDataDisplayNumber] = useState(5);
  const [loading, setLoading] = useState(true);
  const [refLoading, setRefLoading] = useState(false);
  const observer = useRef();
  const lastCardElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (currentDataDisplayNumber !== 15) {
            setRefLoading(true);
            setTimeout(() => {
              setRefLoading(false);
              setCurrentDataDisplayNumber((previusState) => {
                return previusState + 5;
              });
            }, 1000);
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [currentDataDisplayNumber, loading]
  );
  useEffect(() => {
    let tempCurrentData = [];
    props.userFoodData.forEach((data, i) => {
      if (i < currentDataDisplayNumber) {
        tempCurrentData.push(data);
      }
    });
    setCurrentData(tempCurrentData);
    setLoading(false);
  }, [props.userFoodData, currentDataDisplayNumber]);

  return (
    <>
      {loading === true ? (
        <SpinnerDots />
      ) : (
        <div>
          <Sidenav setError={props.setError} />
          <div className="container">
            {currentData.map((recipe, i) => {
              if (currentData.length === i + 1) {
                return (
                  <div key={i}>
                    <div className="feed-card">
                      <FoodCard
                        ref={lastCardElementRef}
                        bgImage={recipe.recipe.image}
                        recipeLabel={recipe.recipe.label}
                        recipeCalories={recipe.recipe.calories}
                        recipeUrl={recipe.recipe.url}
                      />
                    </div>
                    {refLoading && <SpinnerCircle />}
                  </div>
                );
              } else {
                return (
                  <div className="feed-card" key={i}>
                    <FoodCard
                      bgImage={recipe.recipe.image}
                      recipeLabel={recipe.recipe.label}
                      recipeCalories={recipe.recipe.calories}
                      recipeUrl={recipe.recipe.url}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Feed;
