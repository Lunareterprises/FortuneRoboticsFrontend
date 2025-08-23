import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import sampleVideo from "../assets/myVideo.mp4";
import robo from "../assets/robo.jpeg";
import ProductCard from "../components/ProductCard";
import SubscriptionForm from "../components/SubscriptionForm";
import image from "../assets/alone.png"; // Assuming you have a robot image
import "../carrousal.css";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/img1.jpg";
// import { mockProducts, mockRentals } from "../products/products";

const mockProducts = [
  {
    image: image1,
    tags: ["Warehouses", "Factories", "Logistics Hubs"],
    title: "YOUBOT L-Series (AMR)",
    text: "This innovation trash disposal solution is designed to minimize waste in urban",
    highlights: [
      "Reliable navigation",
      "Easy branding",
      "High demand across UAE",
    ],
    price: "4200 AED",
  },
  {
    image: image1,
    tags: ["Cafes", "Clinics", "Co-working Spaces"],
    title: "Amy Deliverer",
    highlights: [
      "Reliable navigation",
      "Easy branding",
      "High demand across UAE",
    ],
    text: "This innovation trash disposal solution is designed to minimize waste in urban",
    price: "4200 AED",
  },
  {
    image: image1,
    tags: ["Restaurants", "Malls", "Hospitals"],
    title: "D2 Delivery Robot",
    highlights: [
      "Reliable navigation",
      "Easy branding",
      "High demand across UAE",
    ],
    text: "This innovation trash disposal solution is designed to minimize waste in urban",
    price: "4200 AED",
  },
];

// New mock data for rental products with prices included
const mockRentals = [
  {
    image: image1,
    tags: ["Warehouses", "Factories", "Logistics Hubs"],
    title: "YOUBOT L-Series (AMR)",
    highlights: [
      "Reliable navigation",
      "Easy branding",
      "High demand across UAE",
    ],
  },
  {
    image: robo,
    tags: ["Cafes", "Clinics", "Co-working Spaces"],
    title: "Amy Deliverer",
    highlights: [
      "Reliable navigation",
      "Easy branding",
      "High demand across UAE",
    ],
  },
  {
    image: image1,
    tags: ["Restaurants", "Malls", "Hospitals"],
    title: "D2 Delivery Robot",
    highlights: [
      "Reliable navigation",
      "Easy branding",
      "High demand across UAE",
    ],
  },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeButton, setActiveButton] = useState("products");

  useEffect(() => {
    const fetchProducts = () => {
      setIsLoading(true);
      try {
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
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "Card 1",
      text: "This is a description for card 1.",
      img: "https://via.placeholder.com/250x150",
    },
    {
      id: 2,
      title: "Card 2",
      text: "This is a description for card 2.",
      img: "https://via.placeholder.com/250x150",
    },
    {
      id: 3,
      title: "Card 3",
      text: "This is a description for card 3.",
      img: "https://via.placeholder.com/250x150",
    },
    {
      id: 4,
      title: "Card 4",
      text: "This is a description for card 4.",
      img: "https://via.placeholder.com/250x150",
    },
    {
      id: 5,
      title: "Card 5",
      text: "This is a description for card 5.",
      img: "https://via.placeholder.com/250x150",
    },
  ];

  // Duplicate cards for infinite effect
  const sliderCards = [...cards, ...cards];

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
      <div
        className="position-relative"
        style={{ height: "100vh", overflow: "hidden" }}
      >
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
          <h1
            className="animated-text"
            style={{
              fontFamily: "Red Rose",
              fontSize: "48px",
              fontWeight: "bold",
            }}
          >
            SHAPING THE FUTURE WITH INTELLIGENT MACHINES
          </h1>
          <p className="animated-subtext">
            INNOVATIVE SERVICE & INDUSTRIAL ROBOTS FOR DELIVERY, ASSISTENCE, AND
            AUTOMATION.
          </p>

          <div className="d-flex gap-3">
            <Button
              variant="outline-light"
              className="btn-sm"
              //   style={{
              //     borderRadius: "0px",
              //     padding: "0.75rem 1.5rem",
              //     fontWeight: 500,
              //     border: "1px solid white",
              //   }}
              style={{
                borderRadius: "0px",
                height: "40px",
                fontWeight: 500,
                border: "1px solid white",
                padding: "0 1.5rem",
              }}
            >
              Request a Quest
            </Button>
            <Button
              variant="primary"
              className="btn-sm"
              style={{
                borderRadius: "0px",
                fontWeight: 500,
                height: "40px",
                backgroundColor: "#007bff",
                borderColor: "#007bff",
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <div className="container py-3">
        {/* Section Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">WHO WE ARE</h2>
          <p
            className="text-muted"
            style={{ fontFamily: "Red Rose", fontSize: "17px" }}
          >
            Empowering businesses in the UAE and beyond with intelligent <br />{" "}
            service & industrial robots designed for the future.
          </p>
        </div>

        <div className="row align-items-center">
          {/* Left Column - Text */}
          <div className="col-lg-6">
            <div style={{ fontFamily: "Red Rose", fontSize: "17px" }}>
              <p>
                At Fortune Robotics, we’re redefining automation across
                hospitality, healthcare, logistics, and corporate industries.
                Headquartered in Dubai, our solutions combine global innovation
                with local support — offering both purchase and rental options
                tailored to business needs. To revolutionize service and
                industrial sectors by making advanced robotics accessible,
                adaptable, and efficient — empowering businesses to thrive in
                the age of automation.
              </p>
              <p>
                To become the Middle East’s most trusted robotics partner by
                leading in innovation, research, and customer-focused solutions.
              </p>
            </div>
          </div>

          {/* Right Column - Single Image */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div style={{ width: "30rem" }}>
              <img src={robo} className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <Container className="my-2 d-flex justify-content-center align-items-center">
        <div className="border border-primary p-1 d-inline-block">
          <div className="btn-group" role="group">
            <button
              type="button"
              className={`btn rounded-0 ${
                activeButton === "products"
                  ? "btn-primary text-white btn-sm"
                  : "btn-white text-primary btn-sm"
              }`}
              onClick={() => setActiveButton("products")}
              // onClick={() => handleProducts("products")}
            >
              Our Products
            </button>

            <button
              type="button"
              className={`btn rounded-0 ${
                activeButton === "quote"
                  ? "btn-primary text-white btn-sm"
                  : "btn-white text-primary btn-sm"
              }`}
              onClick={() => setActiveButton("quote")}
              // onClick={() => handleProducts("quote")}
            >
              Request a Quote
            </button>
          </div>
        </div>
      </Container>
      <Container className="my-4 mb-3">
        {isLoading ? (
          <div className="text-center">Loading products...</div>
        ) : error ? (
          <div className="text-center text-danger">{error}</div>
        ) : (
          // <Row className="d-flex justify-content-center">
          <div className="d-flex mt-3">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 row gy-3 gx-3">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  // buttonText={`${product.price} | Buy Now`}
                  buttonText={{
                    name:
                      activeButton === "products"
                        ? product.price
                        : "Request Quotes",
                    value: activeButton === "products" ? 1 : 0,
                  }}
                />
              ))}
            </div>
            <div className="col-lg-2"></div>
          </div>
        )}
        <div className="text-center mt-5">
          <Button
            variant="rounded-0"
            className="btn cursor-pointer"
            style={{
              border: "1px solid hsla(211, 100%, 50%, 1)",
              borderRadius: "0px",
              color: "hsla(211, 100%, 50%, 1)",
            }}
            onClick={() => navigate("/products-services")}
          >
            View All
          </Button>
        </div>
      </Container>

      {/* Flexible Robot Rentals Section */}
      <Container className="my-4">
        <div className="text-center mb-2">
          <h2
            className="fw-bold"
            style={{
              fontFamily: "Red Rose",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            FLEXIBLE ROBOT RENTALS FOR EVENTS, <br /> BUSINESSES & MORE
          </h2>
          <p
            className="text-muted"
            style={{
              fontSize: "17px",
              fontFamily: "Red Rose",
            }}
          >
            From smart assistants to delivery bots, Fortune Robotics <br />{" "}
            offers UAE-wide rental services with local support and setup.
          </p>
        </div>
        {isLoading ? (
          <div className="text-center">Loading rentals...</div>
        ) : error ? (
          <div className="text-center text-danger">{error}</div>
        ) : (
          // <Row className="d-flex justify-content-center">
          <div className="d-flex mt-3">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 row gy-3 gx-3 justify-content-center">
              {rentals.map((rental, index) => (
                <ProductCard
                  key={index}
                  product={rental}
                  buttonText={{ name: "Rent Now" }}
                />
              ))}
            </div>
            <div className="col-lg-2"></div>
          </div>
          // </Row>
        )}
        <div className="text-center mt-4">
          <Button
            variant="rounded-0"
            className="btn cursor-pointer"
            style={{
              border: "1px solid hsla(211, 100%, 50%, 1)",
              borderRadius: "0px",
              color: "hsla(211, 100%, 50%, 1)",
            }}
          >
            View All
          </Button>
        </div>
      </Container>
      {/* client section  */}

      <Container fluid className="" style={{ marginBottom: "130px" }}>
        <div className="text-center">
          <h2 className="fw-bold" style={{ fontFamily: "Red Rose" }}>
            WHAT OUT CLIENT SAYS
          </h2>
          <p
            style={{
              fontSize: "17px",
              fontFamily: "Red Rose",
            }}
          >
            Real stories from business that transformed their
            <br />
            operation with robotics.
          </p>
        </div>
        {/* carrousal  */}

        <div className="slider">
          <div className="slider-track left">
            {sliderCards.map((card, index) => (
              <div className="slide" key={index}>
                <div className="card border shadow-sm">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={robo}
                        className="card-img-top"
                        alt={card.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body position-relative">
                        {/* Title + Stars */}
                        <div className="d-flex justify-content-between align-items-start">
                          <h5 className="card-title mb-1">{card.title}</h5>
                          {/* ⭐ Star Rating */}
                          <div className="text-warning small">★★★★☆</div>
                        </div>

                        {/* Paragraph under title */}
                        <p className="card-text">{card.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider">
          <div className="slider-track right">
            {sliderCards.map((card, index) => (
              <div className="slide" key={index}>
                <div className="card border shadow-sm">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={robo}
                        className="card-img-top"
                        alt={card.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body position-relative">
                        {/* Title + Stars */}
                        <div className="d-flex justify-content-between align-items-start">
                          <h5 className="card-title mb-1">{card.title}</h5>
                          {/* ⭐ Star Rating */}
                          <div className="text-warning small">★★★★☆</div>
                        </div>

                        {/* Paragraph under title */}
                        <p className="card-text">{card.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* carrousal end */}
      </Container>

      <SubscriptionForm image={image} />
    </>
  );
};

export default Home;
