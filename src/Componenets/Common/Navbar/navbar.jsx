import React, { useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const NavRef = useRef();

    const toggleNavbar = () => {
        NavRef.current.classList.toggle('nav-open');
        NavRef.current.classList.toggle('nav-close');
    };

    useEffect(() => {
        const header = document.querySelector('.header');

        const handleMouseMove = (e) => {
            const x = e.pageX - header.getBoundingClientRect().left;
            const y = e.pageY - header.getBoundingClientRect().top;

            header.style.setProperty('--x', `${x}px`);
            header.style.setProperty('--y', `${y}px`);
        };

        header.addEventListener('mousemove', handleMouseMove);

        return () => {
            header.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <header className="header">
            <Link to="/" className="logo-name"><h3>Digital Athenaeum</h3></Link>
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
            <button className="nav-btn" onClick={toggleNavbar}>
                <FaBars />
            </button>
        </header>
    );
};

export default Navbar;
