import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import sampleVideo from "../assets/myVideo.mp4";
import ProductCard from "../components/ProductCard";
import robohand from "../assets/Robo_hand (1).png";
import { mockProducts, mockRentals } from "../products/products";
import CaseStudy from "../components/CaseStudy";

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
                          ? `${product.price} | Buy N`
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

      <Row className="mb-4">

          <CaseStudy />
      </Row>
    </div>
  );
};

export default Productservices;
