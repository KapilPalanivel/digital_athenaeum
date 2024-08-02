import React, { useContext, useRef, useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
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
          <div>
            <Link to="/profile" className="profile-ico">
              <FaUserCircle />
            </Link>
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
