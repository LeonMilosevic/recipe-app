import React from "react";
import "./App.scss";
// import router
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes/Routes";
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
