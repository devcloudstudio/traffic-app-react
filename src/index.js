import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";
import "./extension.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import decode from "jwt-decode";
import { USER_LOGGED_IN } from "./Redux/actions/types";

function persisterUser() {
  if (localStorage.getItem("user-token")) {
    const userInfo = decode(localStorage.getItem("user-token"));
    const user = {
      token: localStorage.getItem("user-token"),
      email: userInfo.email,
    };
    store.dispatch({
      type: USER_LOGGED_IN,
      payload: user,
    });
  }
}

persisterUser();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
