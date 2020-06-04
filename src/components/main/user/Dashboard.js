import React, { useContext, useState, useEffect } from "react";
// import helpers
import { AuthContext } from "../../context/auth/AuthContext";
// import Axios from "axios";
import { firebaseApp } from "../../utils/firebase";
import FormDisplay from "./FormDisplay";
import Feed from "./Feed";
const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [userDataPreferences, setUserDataPreferences] = useState(null);
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
          const userPreferences = doc.data().userPreferences;

          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    // const APP_ID = process.env.REACT_APP_FOOD_APP_ID;
    // const APP_KEY = process.env.REACT_APP_FOOD_APP_API_KEY;
    // const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    // const getData = async () => {
    //   const results = await Axios.get(url);
    //   console.log(results);
    // };
    // getData();
  }, [currentUser.uid]);
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : userDataPreferences !== null ? (
        <Feed />
      ) : (
        <FormDisplay />
      )}
    </>
  );
};

export default Dashboard;
