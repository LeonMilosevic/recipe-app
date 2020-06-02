import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser === null ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/dashboard"} />
        )
      }
    />
  );
};

export default PrivateRoute;
