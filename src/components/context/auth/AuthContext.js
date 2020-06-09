import React, { useEffect, useState } from "react";
import { firebaseApp } from "../../utils/firebase";
import SpinnerDots from "../../ui/SpinnerDots";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }

      setPending(false);
    });
  }, []);

  if (pending) {
    return <SpinnerDots />;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
