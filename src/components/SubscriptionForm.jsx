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
        background: "linear-gradient(to bottom, #1e2a3b, #152049)",
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

          {/* Right Side Image */}
          <Col md={5} className="d-none d-md-block position-relative hero-col">
            <img src={image} alt="Futuristic robot" className="hero-image" />
          </Col>
        </Row>

        {/* Media Queries */}
        <style jsx>{`
          /* Default Desktop */
          .hero-col {
            min-height: 302px;
          }
          .hero-image {
            position: absolute;
            object-fit: cover;
            bottom: 0;
            height: 140%;
            right: 100px;
            z-index: 0;
          }

          /* iPad Pro Landscape (1200px - 1366px) */
          @media (max-width: 1366px) and (min-width: 1200px) {
            .hero-col {
              min-height: 400px;
              flex: 0 0 45%; /* shrink col width */
              max-width: 45%;
            }
            .hero-image {
              height: 160%;
              right: 80px;
            }
          }

          /* iPad Pro Portrait & Tablets (≤1199px) */
          @media (max-width: 1199px) {
            .hero-col {
              min-height: 496px;
              flex: 0 0 40%; /* smaller col */
              max-width: 40%;
            }
            .hero-image {
              height: 120%;
              right: 10px;
            }
          }

          @media (max-width: 912px) {
            .hero-col {
              min-height: 547px;
              flex: 0 0 40%; /* smaller col */
              max-width: 40%;
            }
            .hero-image {
              height: 120%;
              right: -40px;
            }
          }

          /* Mobile screens (≤575px) */
          @media (max-width: 575px) {
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
  );
};

export default SubscriptionForm;
