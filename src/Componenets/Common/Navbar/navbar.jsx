import React, { useContext, useRef, useState } from "react";
import { FaBars, FaTimes, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
import { isLoggedin } from "../../Client/LoginContext";
import DropdownMenu from "./dropDown";

const Navbar = () => {
  const navRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedin);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    navRef.current.classList.toggle("nav-open");
    navRef.current.classList.toggle("nav-close");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="data:image/jpeg;base64,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" 
        className="rounded-pill"
        style={{height:'40px' , width : '40px' , marginTop : '20px' , backgroundPosition : 'cover'}}
        alt="" />
        <Link to="/" className="logo-name">
          <h3>Digital Athenaeum</h3>
        </Link>
      </div>
      <nav ref={navRef} className="nav-close">
        <button className="nav-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
        <Link to="/music">Music</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/books">Books</Link>
        <Link to="/forum">Forum</Link>
      </nav>
      <div className="right-section">
        <input type="text" className="search-bar" placeholder="Search..." />
        {isLoggedIn ? (
          <div className="profile-container">
            <div className="profile-icon" onClick={toggleDropdown}>
              <FaUserCircle />
              <FaCaretDown />
            </div>
            <DropdownMenu isOpen={isDropdownOpen} />
          </div>
        ) : (
          <Link to="/clientlogin">
            <button className="auth-button">Sign In</button>
          </Link>
        )}
        <button className="nav-btn" onClick={toggleNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
