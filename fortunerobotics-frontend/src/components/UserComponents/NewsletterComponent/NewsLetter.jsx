// Newsletter.jsx
import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter-wrapper">
            {/* Placeholder background image and overlay */}
            <div className="newsletter-bg">
                {/* You can replace with <img src="background.jpg" /> if you have a real image */}
                <div className="newsletter-bg-image">
                    {/* Background placeholder: stylized DNA strand */}
                    <span className="bg-dna">🧬</span>
                </div>
                <div className="newsletter-bg-overlay"></div>
            </div>

            {/* Main newsletter area (flex layout) */}
            <div className="newsletter-content">
                <div className="newsletter-info">
                    <h2 className="newsletter-title">
                        JOIN 5,000+ ROBOTICS PROFESSIONALS.
                    </h2>
                    <div className="newsletter-desc">
                        GET TRENDS, NEWS & OFFERS.
                    </div>
                    {/* Signup form */}
                    <form className="newsletter-form" autoComplete="off">
                        <input
                            type="email"
                            className="newsletter-input"
                            placeholder="Enter your email"
                            aria-label="Email address"
                            required
                        />
                        <button className="newsletter-btn button-primary" type="submit">
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
                {/* Robot image placeholder */}
                <div className="newsletter-robot">
                    {/* Replace with actual image if available */}
                    <div className="robot-placeholder">🤖</div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
