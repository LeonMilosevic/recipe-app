import React from "react";
import { firebaseApp } from "../../utils/firebase";
const Dashboard = (props) => {
  React.useEffect(() => {}, []);
  return (
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
  );
};

export default Dashboard;
