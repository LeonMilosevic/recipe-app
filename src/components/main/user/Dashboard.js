import React, { useContext, useState, useEffect } from "react";
// import helpers
import { UserContext } from "../../context/user/UserContext";
import Axios from "axios";
// import components
import FormDisplay from "./FormDisplay";
import Feed from "./feed/Feed";
import SpinnerDots from "../../ui/SpinnerDots";
import ErrorFeed from "./feed/ErrorFeed";
const Dashboard = () => {
  const [userFoodData, setUserFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { userPreferences } = useContext(UserContext);

  useEffect(() => {
    if (userPreferences.main !== "") {
      // extract the strings from preferences arrays and combine them for an api call
      let healthCombined = "";
      let dietCombined = "";
      let health = userPreferences.health;
      let diet = userPreferences.diet;
      health.forEach((healthItem) => {
        healthCombined += `&health=${healthItem}`;
      });
      diet.forEach((dietItem) => {
        dietCombined += `&diet=${dietItem}`;
      });
      const url = `https://api.edamam.com/search?q=${userPreferences.main}&app_id=${process.env.REACT_APP_FOOD_APP_ID}&app_key=${process.env.REACT_APP_FOOD_APP_API_KEY}&from=0&to=15${healthCombined}${dietCombined}`;
      Axios.get(url)
        .then((response) => {
          if (response.data.hits.length === 0) {
            setError("There was no match for your food preferences");
          }
          setUserFoodData(response.data.hits);
          setLoading(false);
        })
        .catch(() => {
          setError("There was a problem with the API");
          setLoading(false);
        });
      setLoading(false);
    }
  }, [userPreferences]);
  return (
    <>
      {loading ? (
        <SpinnerDots />
      ) : userPreferences.main !== "" && error === "" ? (
        <Feed setError={setError} userFoodData={userFoodData} />
      ) : error !== "" ? (
        <ErrorFeed error={error} />
      ) : (
        <FormDisplay />
      )}
    </>
  );
};

export default Dashboard;
