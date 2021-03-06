import React, { useEffect, useState, useContext } from "react";
import { firebaseApp } from "../../utils/firebase";
import { AuthContext } from "../auth/AuthContext";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [userPreferences, setUserPreferences] = useState({
    main: "",
    diet: [],
    health: [],
  });

  useEffect(() => {
    if (currentUser !== null) {
      firebaseApp
        .firestore()
        .collection("preferences")
        .doc(currentUser.uid)
        .onSnapshot((doc) => {
          if (doc.data() !== undefined) {
            setUserPreferences(doc.data().userPreferences);
          }
        });
    }
  }, [currentUser]);

  return (
    <UserContext.Provider
      value={{
        userPreferences,
        setUserPreferences,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
