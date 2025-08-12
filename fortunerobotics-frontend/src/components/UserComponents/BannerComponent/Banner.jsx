import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner-section">
            {/* Video background placeholder */}
            <div className="banner-bg">
                <div className="video-placeholder">
                    <span className="video-icon">🎬</span>
                    <div className="video-text">Background Video Placeholder</div>
                </div>
                <div className="banner-overlay"></div>
            </div>

            {/* Main banner content */}
            <div className="banner-content">
                <h1>
                    SHAPING THE FUTURE WITH <br />
                    INTELLIGENT MACHINES
                </h1>
                <p className="banner-subtitle">
                    Innovative Service & Industrial Robots for Delivery, Assistance, and Automation.
                </p>
                <div className="banner-buttons">
                    <button className="button-primary">Request a Quote</button>
                    <button className="button-secondary">Buy Now</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
