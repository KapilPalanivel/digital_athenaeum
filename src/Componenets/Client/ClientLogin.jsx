import React, { useState } from "react";
import Login from "./Sign-In";
import SignUp from "./Sign-Up";
import './ClientLogin.css';

const ClientLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-main">
      <div className="login-left">
        <img src="https://img.freepik.com/free-photo/top-view-books-with-flowers-arrangement_23-2149871464.jpg" alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          {isLogin ? <Login setIsLogin={setIsLogin} /> : <SignUp setIsLogin={setIsLogin} />}
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
