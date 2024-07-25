import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import './ClientLogin.css';

const Login = ({ setIsLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="login-center">
        <h2 className="welcome">Welcome back!</h2>
        <p>Please enter your details</p>
        <form>
          <input type="email" placeholder="Email" />
          <div className="pass-input-div">
            <input type={showPassword ? "text" : "password"} placeholder="Password" />
            {showPassword ? <FaEyeSlash onClick={() => setShowPassword(!showPassword)} /> : <FaEye onClick={() => setShowPassword(!showPassword)} />}
          </div>
          <div className="login-center-options">
            <a href="#" className="forgot-pass-link">Forgot password?</a>
          </div>
          <button class="button-27" role="button">Login</button>
        </form>
      </div>
      <p className="login-bottom-p">
        <p> Don't have an account?</p> <a href="/" onClick={() => setIsLogin(false)}>Sign-Up</a>
      </p>    
    </>
  );
};

export default Login;