import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import { RegistroApp } from "./RegistroApp";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <RegistroApp />
  </Provider>,
  document.getElementById("root")
);
