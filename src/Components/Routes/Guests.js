import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const GuestRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("user-token");

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/dashboard' />
        )
      }
    />
  );
};
