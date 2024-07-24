import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const NavRef = useRef();

    const toggleNavbar = () => {
        NavRef.current.classList.toggle('nav-open');
        NavRef.current.classList.toggle('nav-close');
    };

    return (
        <header className="header">
            <Link to="/" className="logo-name"><h3>Digital<br/>Athenaeum</h3></Link>
            <nav ref={NavRef} className="nav-close">
                <Link to="/">Music</Link>
                <Link to="/education">Movies</Link>
                <Link to="#">Books</Link>
                <Link to="#">Forum</Link>
                <Link to="#">About Us</Link>
                <button className="nav-btn nav-close" onClick={toggleNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <div className="left-section">
                <input type="text" className="search-bar" placeholder="Search..." />
                <button className="auth-button">Sign In</button>
            </div>
            <button className="nav-btn" onClick={toggleNavbar}>
                <FaBars />
            </button>
        </header>
    );
};

export default Navbar;
