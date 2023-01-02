import React from "react";
import LoginUi from "../Componenets/LoginUi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../JS/App";

function Paths() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginUi />} />
          <Route exact path="/main" element={<App />}></Route>={" "}
        </Routes>
      </Router>
    </div>
  );
}

export default Paths;
