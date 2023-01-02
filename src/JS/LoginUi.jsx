import "../CSS/LoginUi.css";
import logo from "../images/netflixlogin.png";
import pass from "../images/pass.png";
import email from "../images/email.png";
import { Link } from "react-router-dom";
import React from "react";

function LoginUi() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={logo} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <br />
            <div>
              <img src={email} alt="email" className="email" />
              <h5>Email</h5>
              <input type="text" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <h3>Password</h3>
              <input type="password" className="name" />
            </div>
            <Link to="/main">
              <div className="login-button">
                <button className="button">
                  <span style={{ font: "poppins" }}>Log in</span>
                </button>
              </div>
            </Link>
            {/* <p className="link">
                  <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
                </p> */}
          </div>
        </div>
      </div>
    </div>
    // </form>
  );
}

export default LoginUi;
