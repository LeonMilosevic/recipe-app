import React from "react";
import "./App.scss";
// import router
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes/Routes";
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
