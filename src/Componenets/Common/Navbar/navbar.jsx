import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const navRef = useRef();

    const toggleNavbar = () => {
        // Toggle the classes for opening and closing the navbar
        navRef.current.classList.toggle('nav-open');
        navRef.current.classList.toggle('nav-close');
    };

    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/a" className="logo-name">
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
                <Link to = "/clientlogin">
                <button className="auth-button">Sign In</button>
                </Link>
                <button className="nav-btn" onClick={toggleNavbar}>
                    <FaBars />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
