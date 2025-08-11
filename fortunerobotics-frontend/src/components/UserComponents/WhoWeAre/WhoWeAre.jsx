// WhoWeAre.js
import React from 'react';
import './WhoWeAre.css';

const WhoWeAre = () => {
    return (
        <section className="who-we-are">
            <div className="who-we-are-container">
                {/* Header Section */}
                <div className="who-we-are-header">
                    <h2 className="section-title">WHO WE ARE</h2>
                    <p className="section-subtitle">
                        Empowering businesses in the UAE and beyond with intelligent
                        service & industrial robots designed for the future.
                    </p>
                </div>

                {/* Content Layout */}
                <div className="who-we-are-content">
                    {/* Text Content */}
                    <div className="content-text">
                        <div className="text-block">
                            <p>
                                At Fortune Robotics, we're redefining automation across hospitality,
                                healthcare, logistics, and corporate industries. Headquartered in
                                Dubai, our solutions combine global innovation with local support —
                                offering both purchase and rental options tailored to business needs.
                            </p>
                        </div>

                        <div className="text-block">
                            <p>
                                To revolutionize service and industrial sectors by making advanced
                                robotics accessible, adaptable, and efficient — empowering
                                businesses to thrive in the age of automation.
                            </p>
                        </div>

                        <div className="text-block">
                            <p>
                                To become the Middle East's most trusted robotics partner by leading
                                in innovation, research, and customer-focused solutions.
                            </p>
                        </div>
                    </div>

                    {/* Robot Images Grid */}
                    <div className="content-images">
                        <div className="robot-card robot-1">
                            <div className="robot-image">
                                <div className="robot-placeholder humanoid">
                                    🤖
                                </div>
                            </div>
                        </div>

                        <div className="robot-card robot-2">
                            <div className="robot-image">
                                <div className="robot-placeholder service">
                                    🦾
                                </div>
                            </div>
                        </div>

                        <div className="robot-card robot-3">
                            <div className="robot-image">
                                <div className="robot-placeholder assistant">
                                    📱
                                </div>
                            </div>
                        </div>

                        <div className="robot-card robot-4">
                            <div className="robot-image">
                                <div className="robot-placeholder vacuum">
                                    🔵
                                </div>
                            </div>
                        </div>

                        <div className="robot-card robot-5">
                            <div className="robot-image">
                                <div className="robot-placeholder delivery">
                                    🚚
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
