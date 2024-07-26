import React, { useState } from "react";
import "./ClientLogin.css";

const ForgotPassword = ({ setIsLogin, setIsForgotPassword }) => {
  return (
    <>
      <div className="login-center">
        <h2 className="welcome">Reset Password</h2>
        <p>Please enter your email to reset your password</p>
        <form>
          <input type="email" placeholder="Email" />
          <button className="button-27" role="button">
            Reset Password
          </button>
        </form>
      </div>
      <p className="login-bottom-p">
        <span>Remember your password?</span>{" "}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setIsForgotPassword(false);
            setIsLogin(true);
          }}
        >
          Log In
        </a>
      </p>
    </>
  );
};

export default ForgotPassword;
