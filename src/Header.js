// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import apzImage from './assets/apz.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={apzImage} alt="Logo" className="navbar-logo-img" />
                    </Link>
                    <button className="navbar-toggle" onClick={toggleMenu}>
                        <span className="navbar-toggle-icon">&#9776;</span>
                    </button>
                    <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                        <button className="navbar-close" onClick={toggleMenu}>&times;</button>
                        <li className="navbar-item">
                            <Link to="/about" className="navbar-link">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/paintingservices" className="navbar-link">Painting Services</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/remedialservices" className="navbar-link">Remedial Service</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/cleaningservices" className="navbar-link">Cleaning Services</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contact" className="navbar-link">Contact</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contact" className="navbar-button">Get Free Quote</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
