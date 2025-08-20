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
              <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>
                JOINS 5000+ ROBOTICS PROFESSIONALS.
              </h2>
              <h3 className="fw-light mb-4" style={{ fontSize: "1.5rem" }}>
                GET TRENDS, NEWS & OFFERS.
              </h3>

              <Form
                onSubmit={handleSubmit}
                className="d-flex flex-column flex-sm-row gap-2"
              >
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-0"
                  style={{ flex: 1 }}
                  required
                />
                <Button
                  variant="primary"
                  type="submit"
                  className="rounded-0 px-4 mt-2 mt-sm-0"
                >
                  SUBSCRIBE
                </Button>
              </Form>
            </Col>

            {/* Right Side Image */}
            <Col
              md={5}
              className="d-none d-md-block position-relative"
              style={{ minHeight: "300px", overflow: "visible" }}
            >
              <img
                src={image}
                alt="Futuristic robot"
                className="position-absolute"
                style={{
                  height: "140%", // bigger than container
                  objectFit: "cover",
                  right: "100px", // overflow to right
                  top: "-40%", // overflow top
                  zIndex: 0, // behind text
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default SubscriptionForm;
