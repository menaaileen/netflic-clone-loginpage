import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./JS/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginUi from "./JS/LoginUi";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginUi />} />
        <Route exact path="/main" element={<App />}></Route>={" "}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
