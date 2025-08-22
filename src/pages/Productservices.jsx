import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import sampleVideo from "../assets/myVideo.mp4";
import ProductCard from "../components/ProductCard";
import robohand from "../assets/Robo_hand (1).png";
import { mockProducts, mockRentals } from "../products/products";

const Productservices = () => {
  const [activeButton, setActiveButton] = useState("products");

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
        console.log(mockProducts, "mock");

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
    <div>
      <div
        className="position-relative"
        style={{ height: "75vh", overflow: "hidden" }}
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
            className="animated-text text-center"
            style={{
              fontFamily: "Red Rose",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            EMPOWERING BUSINESSES WITH <br />
            CUTTING-EDGE ROBORTICS
          </h1>
          <p
            className="animated-subtext text-center"
            style={{
              fontFamily: "Red Rose",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            From event atractions to individual automation - Fortune Robotics
            devlivers
            <br />
            innovative robortic solutions for every need
          </p>
        </div>
      </div>
      {/* our products  */}
      <Container className="d-flex justify-content-center align-items-center mt-5">
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
          // <Row className="d-flex justify-content-center g-4 p-5">

          <div className="d-flex mt-3">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="row gy-3 gx-3 justify-content-center">
                {products?.map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
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
            </div>
            <div className="col-lg-2"></div>
          </div>
          // </Row>
        )}
      </Container>

      <Container className="my-5 mb-4">
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
          // <Row className="d-flex justify-content-center g-3 p-4">
          <div className="d-flex mt-3">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="row gy-3 gx-3 justify-content-center">
                {rentals.map((rental, index) => (
                  <ProductCard
                    key={index}
                    product={rental}
                    buttonText={{ name: "Rent Now" }}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-2"></div>
            {/* </Row> */}
          </div>
        )}
      </Container>

      <div
        className="text-white d-flex align-items-center mt-3 position-relative hero-section"
        style={{
          width: "100%",
          background: "linear-gradient(to bottom, #1e2a3b, #152049)",
          overflow: "visible", // allow overflow outside this div
        }}
      >
        <Container fluid style={{ overflow: "visible" }} className="p-5">
          <Row className="align-items-center" style={{ overflow: "visible" }}>
            {/* Text & Form */}
            <Col md={8} className="mb-4 mb-md-0">
              <h2
                className="fw-bold mb-1"
                style={{
                  fontSize: "2rem",
                  fontFamily: "Red Rose",
                  textAlign: "center",
                }}
              >
                OUR CASE STUDIES
              </h2>
              <h3
                className="fw-light mb-4"
                style={{
                  fontSize: "0.99rem",
                  fontFamily: "Red Rose",
                  textAlign: "center",
                }}
              >
                Explore how our robotics solutions have transformed industries —{" "}
                <br />
                delivering efficiency, innovation, and measurable success.
              </h3>
              <h4
                className="fw-light mb-4 mx-5"
                style={{
                  fontSize: "0.99rem",
                  fontFamily: "Red Rose",
                  textAlign: "left", // changed from "center" to "right"
                }}
              >
                At Fortune Robotics, every project is a story of innovation
                meeting impact. From hospitality and retail to events and
                education, our robots have been deployed to solve real
                challenges, enhance customer experience, and drive business
                growth.
              </h4>
              <p
                className="fw-light mb-4 mx-5"
                style={{
                  fontSize: "0.99rem",
                  fontFamily: "Red Rose",
                  textAlign: "left",
                }}
              >
                Discover the industries we’ve transformed and the results we’ve
                delivered.
              </p>

              <Button
                type="button"
                className="w-50 rounded-1 small"
                style={{ fontFamily: "Red Rose" }}
              >
                Explore Case Studies
              </Button>
            </Col>

            {/* Right Side Image */}
            <Col
              md={4}
              className="d-none d-md-block position-relative hero-col"
            >
              <img
                src={robohand}
                alt="Futuristic robot"
                className="hero-image"
              />
            </Col>
          </Row>

          {/* Media Queries */}
          <style jsx>{`
            .hero-section {
              height: 58vh; /* default height */
            }
            .hero-col {
              position: relative;
              min-height: 285px;
              overflow: visible; /* allow overflow */
            }

            .hero-image {
              position: absolute;
              top: 19px;
              right: 180px;
              height: 120%; /* overflow top */
              object-fit: cover;
              z-index: 0;

              /* Dissolve effect at the bottom */
              -webkit-mask-image: linear-gradient(
                to top,
                rgba(0, 0, 0, 1) 70%,
                rgba(0, 0, 0, 0) 100%
              );
              -webkit-mask-repeat: no-repeat;
              -webkit-mask-size: cover;
              mask-image: linear-gradient(
                to top,
                rgba(0, 0, 0, 1) 70%,
                rgba(0, 0, 0, 0) 100%
              );
              mask-repeat: no-repeat;
              mask-size: cover;
            }

            /* Responsive adjustments */
            @media (max-width: 1199px) {
              .hero-section {
                height: 39vh; /* default height */
              }
              .hero-image {
                height: 128%;
                right: -70px;
              }
            }

            @media (max-width: 912px) {
              .hero-image {
                height: 137%;
                left: 1px;
              }
            }

            @media (max-width: 575px) {
              .hero-section {
                height: 72vh; /* default height */
              }
              .hero-col {
                min-height: 250px;
                flex: 0 0 100%; /* full width col */
                max-width: 100%;
              }
              .hero-image {
                height: 90%;
                right: 20px;
              }
            }
          `}</style>
        </Container>
      </div>
    </div>
  );
};

export default Productservices;
