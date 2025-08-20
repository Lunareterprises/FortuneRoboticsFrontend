import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import sampleVideo from "../assets/myVideo.mp4";
import robo from "../assets/robo.jpeg";
import ProductCard from "../components/ProductCard";
import SubscriptionForm from "../components/SubscriptionForm";
import image from "../assets/alone.png"; // Assuming you have a robot image

const mockProducts = [
    {
        image: "https://placehold.co/400x300/e9e9e9/000000?text=YOUBOT+L-Series",
        tags: ["Warehouses", "Factories", "Logistics Hubs"],
        title: "YOUBOT L-Series (AMR)",
        highlights: [
            "Reliable navigation",
            "Easy branding",
            "High demand across UAE"
        ],
        price: "4200 AED"
    },
    {
        image: "https://placehold.co/400x300/e9e9e9/000000?text=Amy+Deliverer",
        tags: ["Cafes", "Clinics", "Co-working Spaces"],
        title: "Amy Deliverer",
        highlights: [
            "Reliable navigation",
            "Easy branding",
            "High demand across UAE"
        ],
        price: "4200 AED"
    },
    {
        image: "https://placehold.co/400x300/e9e9e9/000000?text=D2+Delivery+Robot",
        tags: ["Restaurants", "Malls", "Hospitals"],
        title: "D2 Delivery Robot",
        highlights: [
            "Reliable navigation",
            "Easy branding",
            "High demand across UAE"
        ],
        price: "4200 AED"
    }
];

// New mock data for rental products with prices included
const mockRentals = [
    {
        image: "https://placehold.co/400x300/e9e9e9/000000?text=YOUBOT+L-Series",
        tags: ["Warehouses", "Factories", "Logistics Hubs"],
        title: "YOUBOT L-Series (AMR)",
        highlights: [
            "Reliable navigation",
            "Easy branding",
            "High demand across UAE"
        ],
    },
    {
        image: "https://placehold.co/400x300/e9e9e9/000000?text=Amy+Deliverer",
        tags: ["Cafes", "Clinics", "Co-working Spaces"],
        title: "Amy Deliverer",
        highlights: [
            "Reliable navigation",
            "Easy branding",
            "High demand across UAE"
        ],
    },
    {
        image: "https://placehold.co/400x300/e9e9e9/000000?text=D2+Delivery+Robot",
        tags: ["Restaurants", "Malls", "Hospitals"],
        title: "D2 Delivery Robot",
        highlights: [
            "Reliable navigation",
            "Easy branding",
            "High demand across UAE"
        ],
    }
];

const Home = () => {
    const [products, setProducts] = useState([]);
    const [rentals, setRentals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // This simulates a network request. In a real app, you would fetch from an API.
        const fetchProducts = () => {
            setIsLoading(true);
            try {
                // Simulating a successful fetch with mock data
                setProducts(mockProducts);
                setRentals(mockRentals);
                setError(null);
            } catch (e) {
                console.error("Failed to fetch products:", e);
                setError("Failed to load products. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <style>
                {`
                .hero-container {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  text-align: center;
                  color: white;
                }

                .animated-text {
                  font-size: 3rem;
                  font-weight: bold;
                  animation: slideInDown 2s ease-out;
                }

                .animated-subtext {
                  font-size: 1.25rem;
                  margin-bottom: 2rem;
                  animation: fadeIn 3s ease-in;
                }

                /* Animations */
                @keyframes slideInDown {
                  0% { opacity: 0; transform: translateY(-50px); }
                  100% { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeIn {
                  0% { opacity: 0; }
                  100% { opacity: 1; }
                }
                `}
            </style>

            {/* Full-screen hero video section */}
            <div className="position-relative" style={{ height: "100vh", overflow: "hidden" }}>
                {/* Background video */}
                <video
                    src={sampleVideo}
                    autoPlay
                    loop
                    muted
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                />

                {/* Overlay text + buttons together */}
                <div className="position-absolute top-50 start-50 translate-middle hero-container">
                    <h1 className="animated-text">SHAPING THE FUTURE WITH INTELLIGENT MACHINES</h1>
                    <p className="animated-subtext">INNOVATIVE SERVICE & INDUSTRIAL ROBOTS FOR DELIVERY, ASSISTENCE, AND AUTOMATION.</p>

                    <div className="d-flex gap-3">
                        <Button
                            variant="outline-light"
                            className="btn-lg"
                            style={{
                                borderRadius: "0px",
                                padding: "0.75rem 1.5rem",
                                fontWeight: 500,
                                border: "2px solid white",
                            }}
                        >
                            Request a Quest
                        </Button>
                        <Button
                            variant="primary"
                            className="btn-lg"
                            style={{
                                borderRadius: "0px",
                                padding: "0.75rem 1.5rem",
                                fontWeight: 500,
                                backgroundColor: "#007bff",
                                borderColor: "#007bff",
                            }}
                        >
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                {/* Section Heading */}
                <div className="text-center mb-4">
                    <h2 className="fw-bold">WHO WE ARE</h2>
                    <p className="text-muted">
                        Empowering businesses in the UAE and beyond with intelligent
                        service & industrial robots designed for the future.
                    </p>
                </div>

                <div className="row align-items-center">
                    {/* Left Column - Text */}
                    <div className="col-lg-6">
                        <p>
                            At Fortune Robotics, we’re redefining automation across
                            hospitality, healthcare, logistics, and corporate
                            industries. Headquartered in Dubai, our solutions
                            combine global innovation with local support — offering
                            both purchase and rental options tailored to business
                            needs.
                        </p>
                        <p>
                            To revolutionize service and industrial sectors by
                            making advanced robotics accessible, adaptable, and
                            efficient — empowering businesses to thrive in the age
                            of automation.
                        </p>
                        <p>
                            To become the Middle East’s most trusted robotics
                            partner by leading in innovation, research, and
                            customer-focused solutions.
                        </p>
                    </div>

                    {/* Right Column - Single Image */}
                    <div className="col-lg-6 text-center">
                        <img
                            src={robo}
                            alt="Robotics"
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: "400px", objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>

            {/* Product Cards Section */}
            <Container className="my-5">
                <h2 className="text-center fw-bold mb-4">Our Products</h2>
                {isLoading ? (
                    <div className="text-center">Loading products...</div>
                ) : error ? (
                    <div className="text-center text-danger">{error}</div>
                ) : (
                    <Row>
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                product={product}
                                buttonText={`${product.price} | Buy Now`}
                            />))}
                    </Row>
                )}
                <div className="text-center mt-4">
                    <Button variant="outline-primary">View All</Button>
                </div>
            </Container>

            {/* Flexible Robot Rentals Section */}
            <Container className="my-5">
                <div className="text-center mb-4">
                    <h2 className="fw-bold">FLEXIBLE ROBOT RENTALS FOR EVENTS, BUSINESSES & MORE</h2>
                    <p className="text-muted">
                        From smart assistants to delivery bots, Fortune Robotics offers UAE-wide rental services with local support and setup.
                    </p>
                </div>
                {isLoading ? (
                    <div className="text-center">Loading rentals...</div>
                ) : error ? (
                    <div className="text-center text-danger">{error}</div>
                ) : (
                    <Row>
                        {rentals.map((rental, index) => (
                            <ProductCard key={index} product={rental} buttonText="Rent Now" />
                        ))}
                    </Row>
                )}
                <div className="text-center mt-4">
                    <Button variant="outline-primary">View All</Button>
                </div>
            </Container>

            <SubscriptionForm image={image} />
        </>
    );
};

export default Home;
