import React from "react";
import "./App.scss";
// import router
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes/Routes";
import { AuthProvider } from "./components/context/auth/AuthContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
