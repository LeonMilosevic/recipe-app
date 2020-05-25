import React from "react";
import { Route, Switch } from "react-router-dom";
// import component
import Home from "../main/Home";
import About from "../main/About";
import GetStarted from "../main/GetStarted";
import Login from "../main/Login";
import Features from "../main/Features";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/about"} component={About} />
      <Route exact path={"/get-started"} component={GetStarted} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/features"} component={Features} />
    </Switch>
  );
};

export default Routes;
