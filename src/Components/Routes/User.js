import React from "react";
import { Route, Redirect } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { SwitchColor } from "../../Hooks/SwitchColor";

export const UserRoute = ({ component: Component, ...rest }) => {
  //const isAuthenticated = !!localStorage.getItem("user-token");
  const isAuthenticated = true;
  const [lightMode, setLightMode] = SwitchColor();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <Sidebar lightMode={lightMode} setLightMode={setLightMode} />
            <Component {...props} />
          </>
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};
