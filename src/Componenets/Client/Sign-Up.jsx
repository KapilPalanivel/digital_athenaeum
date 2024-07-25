import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import './ClientLogin.css';

const SignUp = ({ setIsLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="login-center">
        <h2 className="welcome">Create an Account</h2>
        <p>Please enter your details</p>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <div className="pass-input-div">
            <input type={showPassword ? "text" : "password"} placeholder="Password" />
            {showPassword ? <FaEyeSlash onClick={() => setShowPassword(!showPassword)} /> : <FaEye onClick={() => setShowPassword(!showPassword)} />}
          </div>
          <button class="button-27" role="submit">Register</button>
        </form>
      </div>
      <p className="login-bottom-p">
        <p>Already have an account?</p> <a href="/" onClick={() => setIsLogin(true)}>Log In</a>
      </p>
    </>
  );
};

export default SignUp;