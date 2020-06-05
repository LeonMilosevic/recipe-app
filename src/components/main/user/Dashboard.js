import React, { useContext, useState, useEffect } from "react";
// import helpers
import { AuthContext } from "../../context/auth/AuthContext";
import Axios from "axios";
import { firebaseApp } from "../../utils/firebase";
// import components
import FormDisplay from "./FormDisplay";
import Feed from "./Feed";
const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [userDataPreferences, setUserDataPreferences] = useState(null);
  const [userFoodData, setUserFoodData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebaseApp
      .firestore()
      .collection("preferences")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.data() === undefined) {
          setUserDataPreferences(null);
          setLoading(false);
        } else {
          // assign preferences of the meal from db
          const userPreferences = doc.data().userPreferences;
          setUserDataPreferences(userPreferences);
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

          const url = `https://api.edamam.com/search?q=${userPreferences.main}&app_id=${process.env.REACT_APP_FOOD_APP_ID}&app_key=${process.env.REACT_APP_FOOD_APP_API_KEY}&from=0&to=5${healthCombined}${dietCombined}`;

          Axios.get(url)
            .then((response) => {
              setUserFoodData(response.data.hits);
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            });
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [currentUser.uid]);
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : userDataPreferences !== null ? (
        <Feed userFoodData={userFoodData} />
      ) : (
        <FormDisplay />
      )}
    </>
  );
};

export default Dashboard;
