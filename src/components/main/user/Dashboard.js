import React from "react";
// import helpers
// import Axios from "axios";
// import { firebaseApp } from "../../utils/firebase";
import FormDisplay from "./FormDisplay";

const Dashboard = (props) => {
  React.useEffect(() => {
    // const APP_ID = process.env.REACT_APP_FOOD_APP_ID;
    // const APP_KEY = process.env.REACT_APP_FOOD_APP_API_KEY;
    // const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    // const getData = async () => {
    //   const results = await Axios.get(url);
    //   console.log(results);
    // };
    // getData();
  }, []);
  return (
    <FormDisplay />
    // <div>
    //   Hello from protected dashboard
    //   <button
    //     onClick={() =>
    //       firebaseApp
    //         .auth()
    //         .signOut()
    //         .then(() => {
    //           props.history.push("/signout");
    //         })
    //     }
    //   >
    //     sign out
    //   </button>
    // </div>
  );
};

export default Dashboard;
