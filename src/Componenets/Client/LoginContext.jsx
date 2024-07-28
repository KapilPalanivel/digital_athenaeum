import React, { createContext, useState } from "react";

const isLoggedin = createContext();

const LoginContext = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <isLoggedin.Provider value={[loggedIn, setLoggedIn]}>
      {children}
    </isLoggedin.Provider>
  );
};

export { isLoggedin, LoginContext };
