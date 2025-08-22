import React, { useEffect, useState } from "react";
import { Badge, Card, Col, Container, Button } from "react-bootstrap";
import { caseStudies } from "../products/products";

const Casestudies = () => {
  const [casestudies, setCaseStudies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This simulates a network request. In a real app, you would fetch from an API.
    const fetchCaseStudies = () => {
      setIsLoading(true);
      try {
        // Simulating a successful fetch with mock data
        setCaseStudies(caseStudies);
        console.log(caseStudies, "mock");

        setError(null);
      } catch (e) {
        console.error("Failed to fetch products:", e);
        setError("Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);
  return (
    <div>
      <div className="text-center pt-5">
        <h2 className="fw-bold">
          Innovative Solutions: A Collection of Case Studies.
        </h2>
        <p
          className="text-muted"
          style={{ fontFamily: "Red Rose", fontSize: "17px" }}
        >
          Real-World Applications and Transformative Outcomes.
        </p>
      </div>
      <Container className="my-2">
        <div className="col-lg-2"></div>
        {isLoading ? (
          <div className="text-center">Loading products...</div>
        ) : error ? (
          <div className="text-center text-danger">{error}</div>
        ) : (
          <Container className="d-flex my-4">
            <Col md={1} sm={1}></Col>
            <Col className="row gy-3 gx-3" md={10}>
              {casestudies?.map((study, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  className="mb-2 d-flex justify-content-center"
                >
                  <Card
                    className="h-100 custom-card"
                    style={{
                      borderRadius: "0px",
                      maxWidth: "480px",
                      boxShadow: "0 4px 5px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <Card.Img variant="top" src={study?.image} />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0px",
                          left: "10px",
                        }}
                      >
                        {study?.badges?.slice(0, 3).map((tag, idx) => (
                          <Badge
                            key={idx}
                            bg="primary"
                            className="me-1 rounded-0"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Card.Body className="d-flex flex-column">
                      <Card.Title
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          fontFamily: "Red Rose",
                        }}
                      >
                        {study?.title?.length > 50
                          ? study.title.substring(0, 32) + "..."
                          : study?.title}
                      </Card.Title>

                      <Card.Text
                        style={{ fontSize: "13px", fontFamily: "Red Rose" }}
                        className="mb-1"
                      >
                        {study?.subtittle}
                      </Card.Text>

                      <p
                        className="text-bold mb-1"
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        Client
                      </p>
                      <Card.Text
                        style={{ fontSize: "12px", fontFamily: "Red Rose" }}
                        className="mb-1"
                      >
                        {study?.client}
                      </Card.Text>
                      <Card.Text
                        style={{ fontSize: "11px", fontFamily: "Red Rose" }}
                        className="mb-1 text-muted"
                      >
                        {study?.place}
                      </Card.Text>
                      <div className="mt-3">
                        <Button
                          variant="rounded-0"
                          className="btn cursor-pointer"
                          style={{
                            border: "1px solid hsla(0, 0%, 11%, 1.00)",
                            borderRadius: "0px",
                            color: "hsla(240, 1%, 27%, 1.00)",
                            padding: "4px 10px", // reduce vertical and horizontal padding
                            fontSize: "12px", // smaller text
                            height: "30px", // optional: fix height
                            lineHeight: "1.2", // optional: text alignment
                          }}
                        >
                          Read More &rarr;
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Col>
            {/* <Col md={1}></Col> */}
          </Container>
        )}
      </Container>
    </div>
  );
};

export default Casestudies;
