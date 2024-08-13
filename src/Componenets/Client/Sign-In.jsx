import React, { useContext, useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import './ClientLogin.css';
import { isLoggedin } from "./LoginContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = ({ setIsLogin, setIsForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedin);
  const navigate = useNavigate();

  useEffect(() => {
    // Check login state when the component mounts
    const loginState = localStorage.getItem('isLoggedIn');
    if (loginState === 'true') {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setIsForgotPassword(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic (e.g., API call to authenticate)
    // For now, we'll just set the isLoggedIn state to true
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Save login state to localStorage
    navigate("/");

    // Optionally, redirect to another page or perform other actions upon successful login
  };

  return (
    <>
      <div className="login-center">
        <h2 className="welcome">Welcome back!</h2>
        <p>Please enter your details</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            style={{ fontSize: "15px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="pass-input-div">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              style={{ fontSize: "15px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {showPassword ? (
              <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <FaEye onClick={() => setShowPassword(!showPassword)} />
            )}
          </div>
          <div className="login-center-options">
            <a href="/" className="forgot-pass-link" onClick={handleForgotPasswordClick}>
              Forgot password?
            </a>
          </div>
          <button type="submit" className="button-27">Login</button>
        </form>
        <div className="d-flex justify-content-center mt-3">

        <div className="bg-dark row  text-center border border-warning-subtle  rounded " style={{width:'60%' , height : '50px' , fontSize : '12px' , marginTop : '5px'}}>
            {/* <div className="col-md-6 mt-2">Login Using Github</div> */}
            
              <a className="col-md-6 mt-3 fw-bold text-decoration-none text-light" href="http://localhost:8080/login"> Google</a>
              <a className="col-md-6 mt-3 fw-bold text-decoration-none text-light" href="http://localhost:8080/login"> GitHub</a>
           
        </div>
        </div>
      </div>
      <p className="login-bottom-p">
        <span>Don't have an account?</span> <a href="/" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>Sign-Up</a>
      </p>
    </>
  );
};

export default Login;
