import { Children, createContext, useState } from "react";

const isLoggedin=createContext();
const Login= () =>{
    const[loggedIn,setLoggedIn] =useState(false);
    return(
        <isLoggedin.Provider value={{loggedIn,setLoggedIn}}>
            {Children}
        </isLoggedin.Provider>
    );
};
export {isLoggedin,Login};