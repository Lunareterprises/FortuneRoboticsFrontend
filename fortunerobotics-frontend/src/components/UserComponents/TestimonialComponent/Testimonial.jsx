// Testimonial.jsx
import React from 'react';
import './Testimonial.css';

const testimonialsTop = [
    {
        name: "Dr. Huda Karim",
        role: "Al Noor Hospital, Abu Dhabi",
        text:
            '“Temi Robot has completely changed the way we manage patient interaction in our lobby. Visitors are impressed, and our team saves time.”',
        rating: 5,
    },
    {
        name: "Dr. Huda Karim",
        role: "Al Noor Hospital, Abu Dhabi",
        text:
            '“Temi Robot has completely changed the way we manage patient interaction in our lobby. Visitors are impressed, and our team saves time.”',
        rating: 5,
    },
];

const testimonialsBottom = [
    {
        name: "Nadeem Ali, Event Manager",
        role: "FusionX Events",
        text:
            '“We rented Alice Pro for a corporate event in Dubai — it was a huge hit! Guests loved the interactive greetings and photo ops.”',
        rating: 4.8,
    },
    {
        name: "Nadeem Ali, Event Manager",
        role: "FusionX Events",
        text:
            '“We rented Alice Pro for a corporate event in Dubai — it was a huge hit! Guests loved the interactive greetings and photo ops.”',
        rating: 4.8,
    },
    {
        name: "Sunil Mehra, Operations Lead",
        role: "Emirates Logistic Tech",
        text:
            "“YOUIBOT AMRs helped us automate transport inside our facility. Integration was smooth and the local support was top-notch.”",
        rating: 5,
    },
    {
        name: "Sunil Mehra, Operations Lead",
        role: "Emirates Logistic Tech",
        text:
            "“YOUIBOT AMRs helped us automate transport inside our facility. Integration was smooth and the local support was top-notch.”",
        rating: 5,
    }
];

const Testimonial = () => {
    return (
        <section className="testimonial-section">
            {/* Upper testimonial marquee - right to left */}
            <div className="testimonial-marquee marquee-right-left">
                <div className="marquee-track">
                    {testimonialsTop.map((t, idx) => (
                        <div className="testimonial-card" key={idx}>
                            <div className="testimonial-content">
                                <div className="testimonial-rating">
                                    <span className="star">★</span> {t.rating}
                                </div>
                                <div className="testimonial-text">{t.text}</div>
                                <div className="testimonial-author">
                                    <span className="author-name">{t.name}</span>
                                    <span className="author-role">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Lower testimonial marquee - left to right */}
            <div className="testimonial-marquee marquee-left-right">
                <div className="marquee-track">
                    {testimonialsBottom.map((t, idx) => (
                        <div className="testimonial-card" key={idx}>
                            <div className="testimonial-content">
                                <div className="testimonial-rating">
                                    <span className="star">★</span> {t.rating}
                                </div>
                                <div className="testimonial-text">{t.text}</div>
                                <div className="testimonial-author">
                                    <span className="author-name">{t.name}</span>
                                    <span className="author-role">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
