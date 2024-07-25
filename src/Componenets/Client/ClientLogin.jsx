import React, { useEffect, useState } from "react";
// import Image from "../assets/image.png";
// import Logo from "../assets/logo.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import './ClientLogin.css';


const ClientLogin = () => {
  const [ showPassword, setShowPassword ] = useState(false);


  return (
    <div className="login-main">
      <div className="login-left">
        <img src="https://img.freepik.com/free-photo/top-view-books-with-flowers-arrangement_23-2149871464.jpg" alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            {/* <img src={Logo} alt="" /> */}
          </div>
          <div className="login-center">
            <h2 className="welcome">Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              {/* <div className="login-center-buttons">
                <button type="button">Log In</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div> */}
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;