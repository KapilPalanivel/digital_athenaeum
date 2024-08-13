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
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    navigate("/");
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
      </div>
      <p className="login-bottom-p">
        <span>Don't have an account?</span> <a href="/" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>Sign-Up</a>
      </p>
    </>
  );
};

export default Login;
