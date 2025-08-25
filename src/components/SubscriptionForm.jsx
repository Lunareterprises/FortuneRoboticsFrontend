// import { bottom } from "@popperjs/core";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Toast } from "react-bootstrap";

const SubscriptionForm = ({ image }) => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing with email:", email);
    setShowToast(true); // show toast
    setEmail(""); // reset input
  };

  return (
    <div
      className="text-white d-flex align-items-center mt-3 position-relative"
      style={{
        height: "40vh",
        width: "100%",
        background: "linear-gradient(to bottom, #303944ff, #424951ff",
        overflow: "visible", // allow overflow outside this div
      }}
    >
      <Container fluid style={{ overflow: "visible" }}>
        <Row className="align-items-center" style={{ overflow: "visible" }}>
          {/* Text & Form */}
          <Col md={7} className="mb-4 mb-md-0">
            <h2
              className="fw-bold mb-1"
              style={{
                fontSize: "2rem",
                fontFamily: "Red Rose",
                textAlign: "center",
              }}
            >
              JOIN 5,000+ ROBOTICS PROFESSIONALS.
            </h2>
            <h3
              className="fw-light mb-4"
              style={{
                fontSize: "2rem",
                fontFamily: "Red Rose",
                textAlign: "center",
              }}
            >
              GET TRENDS, NEWS & OFFERS.
            </h3>

            <Form
              onSubmit={handleSubmit}
              className="d-flex flex-column align-items-center"
            >
              <div className="position-relative w-50 mb-3">
                <Form.Label
                  className="position-absolute top-0 start-0 translate-middle-y px-1 small text-white"
                  style={{
                    fontSize: "12px",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    borderRadius: "0px",
                    padding: "0 6px",
                    marginLeft: "6px",
                  }}
                >
                  Enter your Email
                </Form.Label>
                <Form.Control
                  disabled
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-center bg-transparent border border-white rounded-1 small text-white no-focus"
                />
              </div>

              <Button
                variant="primary"
                type="submit"
                className="w-50 rounded-1 small"
                style={{ fontFamily: "Red Rose" }}
              >
                SUBSCRIBE
              </Button>
            </Form>
          </Col>
          <img
            src={image}
            alt="Futuristic robot"
            className="hero-image d-none d-md-block"
          />

          {/* Right Side Image */}
        </Row>

        {/* Media Queries */}
        <style jsx>{`
          .min-vh-60 {
            min-height: 25vh; /* hero height */
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
            max-height: 120%;
            object-fit: contain;
          }
        `}</style>
      </Container>
    </div>
  );
};

export default SubscriptionForm;
