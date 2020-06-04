import React from "react";
// import third party
import { firebaseApp } from "../../utils/firebase";
const Feed = (props) => {
  return (
    <div>
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
