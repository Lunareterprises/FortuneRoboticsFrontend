// FlexibleRobotComponent.jsx
import React from 'react';
import './FlexibleRobotComponent.css';

const robots = [
    {
        name: "YOUIBOT L-Series (AMR)",
        description:
            "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s",
        highlights: [
            "Reliable navigation",
            "Easy branding",
            "High demand across UAE",
        ],
        tags: ["Warehouses", "Factories", "Logistics Hubs"],
        imageType: "youibot",
    },
    {
        name: "Amy Deliverer",
        description:
            "This innovative trash disposal solution is designed to minimize waste in urban areas, promoting recycling and reducing l.",
        highlights: [
            "Reliable navigation",
            "Easy branding",
            "High demand across UAE",
        ],
        tags: ["Cafes", "Clinics", "Co-working Spaces"],
        imageType: "amy",
    },
    {
        name: "D2 Delivery Robot",
        description:
            "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s",
        highlights: [
            "Reliable navigation",
            "Easy branding",
            "High demand across UAE",
        ],
        tags: ["Restaurants", "Malls", "Hospitals"],
        imageType: "d2",
    },
];

const imagePlaceholders = {
    youibot: "🧹",
    amy: "🤖",
    d2: "🚚",
};

const FlexibleRobotComponent = () => {
    return (
        <section className="flexible-robots">
            <div className="robots-header">
                <h2>FLEXIBLE ROBOT RENTALS FOR EVENTS, BUSINESSES & MORE</h2>
                <p>
                    From smart assistants to delivery bots, Fortune Robotics offers UAE-wide rental services with local support and setup.
                </p>
            </div>
            <div className="robots-list">
                {robots.map((robot) => (
                    <div className="robot-card" key={robot.name}>
                        <div className="robot-image">
                            <span className={`robot-placeholder ${robot.imageType}`}>
                                {imagePlaceholders[robot.imageType]}
                            </span>
                        </div>
                        <div className="robot-tags">
                            {robot.tags.map((tag) => (
                                <span className="robot-tag" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="robot-name">{robot.name}</h3>
                        <p className="robot-description">{robot.description}</p>
                        <ul className="robot-highlights">
                            {robot.highlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <button className="robot-rent-btn button-primary">Rent Now</button>
                    </div>
                ))}
            </div>
            <div className="robots-action-row">
                <button className="view-all-btn button-secondary">View All</button>
            </div>
        </section>
    );
};

export default FlexibleRobotComponent;
