// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Company Info Section */}
                <div className="footer-section footer-company">
                    <div className="footer-logo">
                        <h3>FORTUNE ROBOTICS</h3>
                    </div>
                    <p className="footer-description">
                        At Fortune Robotics, we're redefining automation across hospitality, healthcare,
                        logistics, and corporate industries.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#products">Our Products</a></li>
                        <li><a href="#research">Research</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact us</a></li>
                    </ul>
                </div>

                {/* Contact Info Section */}
                <div className="footer-section footer-contact">
                    <h4>Contact Information</h4>
                    <div className="contact-item">
                        <span className="contact-icon">📞</span>
                        <span>+91 12345 6789</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">✉️</span>
                        <span>robo@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">📍</span>
                        <span>3517 W. Gray St. Utica, Pennsylvania 57867</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">📍</span>
                        <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="footer-section footer-social">
                    <h4>Follow us</h4>
                    <div className="social-links">
                        <a href="#facebook" className="social-link" aria-label="Facebook">
                            <span className="social-icon">📘</span>
                        </a>
                        <a href="#instagram" className="social-link" aria-label="Instagram">
                            <span className="social-icon">📷</span>
                        </a>
                        <a href="#twitter" className="social-link" aria-label="Twitter">
                            <span className="social-icon">🐦</span>
                        </a>
                        <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                            <span className="social-icon">💼</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <div className="footer-container">
                    <p>&copy; 2025 Lunar Enterprises All rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
