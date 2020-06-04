import React from "react";
import "./App.scss";
import "materialize-css/dist/css/materialize.min.css";
// import router
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes/Routes";
import { AuthProvider } from "./components/context/auth/AuthContext";
import { UserProvider } from "./components/context/user/UserContext";
function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
