import React from "react";
import { Switch } from "react-router-dom";
// import component
import PrivateRoute from "../main/auth/PrivateRoute";
import OpenRoute from "../main/auth/OpenRoute";
import Home from "../main/Home";
import GetStarted from "../main/auth/GetStarted";
import Login from "../main/auth/Login";
import Signout from "../main/auth/Signout";
import Features from "../main/Features";
import Dashboard from "../main/user/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/signout" component={Signout} />
      <OpenRoute exact path={"/"} component={Home} />
      <OpenRoute exact path={"/register"} component={GetStarted} />
      <OpenRoute exact path={"/login"} component={Login} />
      <OpenRoute exact path={"/features"} component={Features} />
    </Switch>
  );
};

export default Routes;
