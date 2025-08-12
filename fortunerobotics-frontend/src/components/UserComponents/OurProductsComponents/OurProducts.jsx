import React, { useState } from 'react';
import './OurProducts.css';

const products = [
    {
        name: "D2 Delivery Robot",
        description: "The long barrow was built on land previously inhabited...",
        highlights: [
            "Reliable navigation",
            "Easy branding",
            "High demand across UAE"
        ],
        tags: ["Restaurants", "Malls", "Hospitals"],
        imageType: "delivery"
    },
    {
        name: "Temi Robot",
        description: "This innovative trash disposal solution is designed...",
        highlights: [
            "Reliable navigation",
            "Easy branding",
            "High demand across UAE"
        ],
        tags: ["Healthcare", "Offices", "Retail Showrooms"],
        imageType: "temi"
    },
    {
        name: "Alice Pro",
        description: "Equipped with state-of-the-art navigation technology...",
        highlights: [
            "Reliable navigation",
            "Easy branding",
            "High demand across UAE"
        ],
        tags: ["Corporate Receptions", "Events", "Exhibitions"],
        imageType: "alice"
    }
];

const imagePlaceholders = {
    delivery: "🚚",
    temi: "🤖",
    alice: "👾"
};

const OurProducts = () => {
    const [activeTab, setActiveTab] = useState("products"); // "products" or "quote"

    const handleToggle = (tab) => setActiveTab(tab);

    return (
        <section className="our-products">
            {/* Two buttons side by side at the top */}
            <div className="products-toggle-row">
                <button
                    className={`top-toggle-btn button-primary${activeTab === "products" ? " active" : ""}`}
                    onClick={() => handleToggle("products")}
                >
                    Our Products
                </button>
                <button
                    className={`top-toggle-btn button-secondary${activeTab === "quote" ? " active" : ""}`}
                    onClick={() => handleToggle("quote")}
                >
                    Request a Quote
                </button>
            </div>

            {activeTab === "quote" ? (
                <div className="request-quote-area">
                    <div className="products-list">
                        {products.map(product => (
                            <div className="product-card" key={product.name}>
                                <div className="product-image">
                                    <span className={`product-placeholder ${product.imageType}`}>
                                        {imagePlaceholders[product.imageType]}
                                    </span>
                                </div>
                                <div className="product-info">
                                    <div className="product-tags">
                                        {product.tags.map(tag => (
                                            <span className="product-tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="product-name">{product.name}</h3>
                                    <ul className="product-highlights">
                                        {product.highlights.map(item => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                    {/* Back to Products button */}
                                    <button
                                        className="product-quote-btn button-secondary"
                                        onClick={() => setActiveTab("products")}
                                    >
                                        Back to Products
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    <h2 className="products-title">Our Products</h2>
                    <div className="products-list">
                        {products.map(product => (
                            <div className="product-card" key={product.name}>
                                <div className="product-image">
                                    <span className={`product-placeholder ${product.imageType}`}>
                                        {imagePlaceholders[product.imageType]}
                                    </span>
                                </div>
                                <div className="product-info">
                                    <div className="product-tags">
                                        {product.tags.map(tag => (
                                            <span className="product-tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-desc">{product.description}</p>
                                    <ul className="product-highlights">
                                        {product.highlights.map(item => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                    <button
                                        className="product-quote-btn button-primary"
                                        onClick={() => setActiveTab("quote")}
                                    >
                                        Request a Quote
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default OurProducts;
