// src/Navbar.js
import React, { useState } from 'react';
import {Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <h3>Original Pumps, <span style={{ color: "#FFDC4B" }}>Inc.</span> </h3>

                </Link>
            </div>
            <nav className={isMobileMenuOpen ? 'navbar-links-mobile' : 'navbar-links'}>
                <NavLink to="/" className="navItem" end> Home</NavLink>
                <NavLink to="/AboutUs" className="navItem" > About Us</NavLink>
                <NavLink to="/Products" className="navItem" > Products</NavLink>
                <NavLink to="/ContactUs" className="navItem" > Contact Us</NavLink>
            </nav>
            <button className="navbar-toggle" onClick={handleMenuToggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </nav>
    );
};

