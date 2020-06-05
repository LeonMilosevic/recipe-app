import React, { useEffect, useState } from "react";
// import { firebaseApp } from "../../utils/firebase";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [userPreferences, setUserPreferences] = useState({
    main: "",
    diet: [],
    health: [],
  });

  useEffect(() => {}, []);

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
