import React, { Fragment, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import { SwitchColor } from "../../Hooks/SwitchColor";

export const UserRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("user-token");
  const [lightMode, setLightMode] = SwitchColor();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Fragment>
            <Sidebar lightMode={lightMode} setLightMode={setLightMode} />
            <Component {...props} />
          </Fragment>
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};
