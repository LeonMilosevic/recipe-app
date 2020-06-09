import React, { useContext, useState, useEffect } from "react";
// import helpers
import { UserContext } from "../../context/user/UserContext";
import Axios from "axios";
// import components
import FormDisplay from "./FormDisplay";
import Feed from "./feed/Feed";
const Dashboard = () => {
  const [userFoodData, setUserFoodData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      // Axios.get(url)
      //   .then((response) => {
      //     setUserFoodData(response.data.hits);
      //     setLoading(false);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     setLoading(false);
      //   });
      setLoading(false);
    }
  }, [userPreferences]);
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : userPreferences.main !== "" ? (
        <Feed userFoodData={userFoodData} />
      ) : (
        <FormDisplay />
      )}
    </>
  );
};

export default Dashboard;
