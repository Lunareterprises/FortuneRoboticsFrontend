// Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo Section */}
                <div className="header-logo">
                    <img src='' />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                {/* Navigation Menu */}
                <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#about" className="nav-link">Product & Services</a></li>
                        <li><a href="#products" className="nav-link">Case Studies</a></li>
                        <li><a href="#services" className="nav-link">Research</a></li>
                        <li><a href="#contact" className="nav-link">Blog</a></li>
                        <li><a href="#contact" className="nav-link">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
