import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import robohand from "../assets/Robo_hand (1).png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
        <div
          className="text-white d-flex align-items-center mt-3 position-relative hero-section"
          style={{
            width: "100%",
            background:
              "linear-gradient(to right, hsla(190, 90%, 19%, 0.89), hsla(184, 88%, 77%, 1.00))",
            overflow: "visible", // allow overflow outside this div
          }}
        >
<Container fluid className="py-5 hero-container">
  <Row className="align-items-end min-vh-60">
    <Col
      md={7}
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "100%" }}
    >
      <h2 className="fw-bold mb-2" style={{ fontFamily: "Red Rose" }}>
        OUR CASE STUDIES
      </h2>
      <h3 className="fw-light mb-2 fs-5" style={{ fontFamily: "Red Rose" }}>
        Explore how our robotics solutions have transformed industries — <br />
        delivering efficiency, innovation, and measurable success.
      </h3>
      <h4
        className="fw-light mb-2"
        style={{ fontFamily: "Red Rose", fontSize: "16px" }}
      >
        At Fortune Robotics, every project is a story of innovation meeting impact.
        From hospitality and retail to events and education, our robots have been
        deployed to solve real challenges, enhance customer experience, and drive
        business growth.
      </h4>
      <p className="fw-light mb-4" style={{ fontFamily: "Red Rose" }}>
        Discover the industries we’ve transformed and the results we’ve delivered.
      </p>
      <Button
        type="button"
        className="w-50 rounded-0 small"
        style={{
          fontFamily: "Red Rose",
          backgroundColor: "white",
          color: "hsla(211, 100%, 50%, 1)",
          border: "0px",
        }}
        onClick={() => navigate("/casestudies")}
      >
        Explore Case Studies
      </Button>
    </Col>

    {/* Image only visible on md and larger screens */}
    <img
      src={robohand}
      alt="Futuristic robot"
      className="hero-image d-none d-md-block"
    />
  </Row>

  {/* Inline CSS */}
  <style jsx>{`
    .min-vh-60 {
      min-height: 20vh; /* hero height */
    }
    .hero-image-col {
      min-height: 300px; /* column height for image */
    }

    .hero-image {
      position: absolute;
      bottom: 0; /* stick to bottom */
      left: 76%;
      transform: translateX(-50%);
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 100%;
      object-fit: contain;
    }
  `}</style>
</Container>
</div>

  );
};

export default HeroSection;
