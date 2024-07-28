import React, { useContext, useState } from "react";
import Login from "./Sign-In";
import SignUp from "./Sign-Up";
import ForgotPassword from "./ForgotPassword";
import "./ClientLogin.css";
import { isLoggedin } from "./LoginContext";
import { Link } from "react-router-dom";

const ClientLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedin);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  return (
    <>
      {!isLoggedIn ? (
        <div className="login-main">
          <div className="login-left">
            <img
              src="https://img.freepik.com/free-photo/top-view-books-with-flowers-arrangement_23-2149871464.jpg"
              alt=""
            />
          </div>
          <div className="login-right">
            <div className="login-right-container">
              {isForgotPassword ? (
                <ForgotPassword
                  setIsLogin={setIsLogin}
                  setIsForgotPassword={setIsForgotPassword}
                />
              ) : isLogin ? (
                <Login
                  setIsLogin={setIsLogin}
                  setIsForgotPassword={setIsForgotPassword}
                />
              ) : (
                <SignUp setIsLogin={setIsLogin} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="already-logged">
          Already LoggedIn Mate!<Link to={"/"}>Home</Link>
        </p>
      )}
    </>
  );
};

export default ClientLogin;
