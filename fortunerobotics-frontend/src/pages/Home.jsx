import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import sampleVideo from "../assets/myVideo.mp4";
import robo from "../assets/robo.jpeg";
import ProductCard from "../components/ProductCard";
import SubscriptionForm from "../components/SubscriptionForm";
import image from "../assets/alone.png"; // Assuming you have a robot image
import '../carrousal.css'



const mockProducts = [
  {
    image: "https://placehold.co/400x300/e9e9e9/000000?text=YOUBOT+L-Series",
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
    image: "https://placehold.co/400x300/e9e9e9/000000?text=Amy+Deliverer",
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
    image: "https://placehold.co/400x300/e9e9e9/000000?text=D2+Delivery+Robot",
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
    image: "https://placehold.co/400x300/e9e9e9/000000?text=YOUBOT+L-Series",
    tags: ["Warehouses", "Factories", "Logistics Hubs"],
    title: "YOUBOT L-Series (AMR)",
    highlights: [
      "Reliable navigation",
      "Easy branding",
      "High demand across UAE",
    ],
  },
  {
    image: "https://placehold.co/400x300/e9e9e9/000000?text=Amy+Deliverer",
    tags: ["Cafes", "Clinics", "Co-working Spaces"],
    title: "Amy Deliverer",
    highlights: [
      "Reliable navigation",
      "Easy branding",
      "High demand across UAE",
    ],
  },
  {
    image: "https://placehold.co/400x300/e9e9e9/000000?text=D2+Delivery+Robot",
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
            style={{ fontFamily: "'Red Rose', cursive" }}
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
            style={{ fontFamily: "'Red Rose', cursive", fontSize: "17px" }}
          >
            Empowering businesses in the UAE and beyond with intelligent <br />{" "}
            service & industrial robots designed for the future.
          </p>
        </div>

        <div className="row align-items-center">
          {/* Left Column - Text */}
          <div className="col-lg-6">
            <p>
              At Fortune Robotics, we’re redefining automation across
              hospitality, healthcare, logistics, and corporate industries.
              Headquartered in Dubai, our solutions combine global innovation
              with local support — offering both purchase and rental options
              tailored to business needs.
            </p>
            <p>
              To revolutionize service and industrial sectors by making advanced
              robotics accessible, adaptable, and efficient — empowering
              businesses to thrive in the age of automation.
            </p>
            <p>
              To become the Middle East’s most trusted robotics partner by
              leading in innovation, research, and customer-focused solutions.
            </p>
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
            >
              Request a Quote
            </button>
          </div>
        </div>
      </Container>
      <Container className="my-5">
        {isLoading ? (
          <div className="text-center">Loading products...</div>
        ) : error ? (
          <div className="text-center text-danger">{error}</div>
        ) : (
          <Row className="d-flex justify-content-center">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                buttonText={`${product.price} | Buy Now`}
              />
            ))}
          </Row>
        )}
        <div className="text-center mt-4">
          <Button variant="outline-primary rounded-0" className="btn">
            View All
          </Button>
        </div>
      </Container>

      {/* Flexible Robot Rentals Section */}
      <Container className="my-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ fontFamily: "'Red Rose', cursive" }}>
            FLEXIBLE ROBOT RENTALS FOR EVENTS, <br /> BUSINESSES & MORE
          </h2>
          <p
            className="text-muted"
            style={{
              fontSize: "17px",
              fontFamily: "'Red Rose', cursive",
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
          <Row className="d-flex justify-content-center">
            {rentals.map((rental, index) => (
              <ProductCard key={index} product={rental} buttonText="Rent Now" />
            ))}
          </Row>
        )}
        <div className="text-center mt-4">
          <Button variant="outline-primary rounded-0">View All</Button>
        </div>
      </Container>
      {/* client section  */}
      <Container className="my-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ fontFamily: "'Red Rose', cursive" }}>
            WHAT OUT CLIENT SAYS
          </h2>
          <p
            style={{
              fontSize: "17px",
              fontFamily: "'Red Rose', cursive",
            }}
          >
            Real stories from business that transformed their
            <br />
            operation with robotics.
          </p>
        </div>
        {/* carrousal  */}
        <div
          id="multiCardCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="200">
              <div class="row g-2">
                <div class="col-md-3">
                  <div class="card">
                    <img
                      src="https://picsum.photos/200/150?random=1"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card 1</h5>
                      <p class="card-text">Some text here.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card">
                    <img
                      src="https://picsum.photos/200/150?random=2"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card 2</h5>
                      <p class="card-text">Some text here.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card">
                    <img
                      src="https://picsum.photos/200/150?random=3"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card 3</h5>
                      <p class="card-text">Some text here.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card">
                    <img
                      src="https://picsum.photos/200/150?random=4"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card 4</h5>
                      <p class="card-text">Some text here.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row g-2">
                <div class="col-md-3">
                  <div class="card">
                    <img
                      src="https://picsum.photos/200/150?random=5"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card 5</h5>
                      <p class="card-text">Some text here.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card">
                    <img
                      src="https://picsum.photos/200/150?random=6"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card 6</h5>
                      <p class="card-text">Some text here.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card">
                    <img
                      src="https://picsum.photos/200/150?random=7"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card 7</h5>
                      <p class="card-text">Some text here.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card">
                    <img
                      src="https://picsum.photos/200/150?random=8"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Card 8</h5>
                      <p class="card-text">Some text here.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* carrousal end */}

        <div className="text-center mt-4">
          <Button variant="outline-primary rounded-0">View All</Button>
        </div>
      </Container>

      <SubscriptionForm image={image} />
    </>
  );
};

export default Home;
