import React from "react";
import "./App.scss";
import Nav from "./components/main/Nav";
// import router
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/routes/Routes";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
