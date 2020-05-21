import React from "react";
import { Switch, Route } from "react-router-dom";
// import component
import Home from "../main/Home";
import About from "../main/About";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
};

export default Routes;
