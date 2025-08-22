import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { innovation } from "../products/products";

const Research = () => {
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
        setProducts(innovation);

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
      <div className="text-center mb-2 mt-4">
        <h2
          className="fw-bold"
          style={{
            fontFamily: "Red Rose",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          R&D Roadmap – Future of <br /> Robotics @ Fortune
        </h2>
        <p
          className="text-muted"
          style={{
            fontSize: "17px",
            fontFamily: "Red Rose",
          }}
        >
          From conceptual innovation to real-world deployment, discover how
          Fortune <br />
          Robotics is engineering tomorrow.
        </p>
      </div>

      <Row>
        <div className="col-lg-10 timeline-row">
          <div className="timeline-item">
            2025–2026
            <div className="vertical-line"></div>
          </div>

          <div className="timeline-item">
            2027–2028
            <div className="vertical-line"></div>
          </div>

          <div className="timeline-item">
            2029–2030
            <div className="vertical-line"></div>
          </div>

          <div className="timeline-item">Beyond 2030</div>

          <style jsx>{`
            .timeline-row {
              display: flex;
              justify-content: space-around;
              align-items: stretch; /* make children full height */
              height: 300px; /* fixed row height */
              overflow: hidden;
              position: relative;
            }

            .timeline-item {
              position: relative;
              flex: 1;
              text-align: center;
              height: 100%; /* ensure item fills row height */
            }

            .vertical-line {
              position: absolute;
              right: -10px;
              top: 0;
              width: 2px;
              height: 100%; /* now matches full row height */
              border-left: 2px dotted #6c757d;
            }

            .timeline-item:last-child .vertical-line {
              display: none;
            }
          `}</style>
        </div>
      </Row>
      <Row>
        <div className="text-center pt-5">
          <h2
            className="fw-bold"
            style={{ fontFamily: "Red Rose", fontSize: "35px" }}
          >
            Innovation in Navigation, AI & Vision
          </h2>
          <p
            className="text-muted"
            style={{ fontFamily: "Red Rose", fontSize: "15px" }}
          >
            Empowering robots to think, see, and move with unmatched precision.
          </p>
        </div>
        <Container className="my-5">
          <div className="col-lg-2"></div>
          {isLoading ? (
            <div className="text-center">Loading products...</div>
          ) : error ? (
            <div className="text-center text-danger">{error}</div>
          ) : (
            <Container className="d-flex my-5">
              <Col md={1} sm={1}></Col>
              <Col className="row gy-3 gx-3 justify-content-center" md={10}>
                {products?.map((product, index) => (
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
                      <div className="card-image-wrapper position-relative">
                        <Card.Img
                          variant="top"
                          src={product?.image}
                          className="img-fluid"
                        />

                        {/* Badge container */}
                        <div className="badge-container position-absolute bottom-0 start-0 w-100 p-1 d-flex flex-wrap">
                          {product?.tags?.slice(0, 3).map((tag, idx) => (
                            <Badge
                              key={idx}
                              bg="primary"
                              className="rounded-0 text-truncate"
                              style={{
                                maxWidth: "calc(93% - 1px)",
                                fontSize: "0.75rem",
                              }}
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
                          {product?.title}
                        </Card.Title>

                        <Card.Text
                          style={{ fontSize: "13px" }}
                          className="mb-1"
                        >
                          {product.text}
                        </Card.Text>
                        <p
                          className="text-bold mb-1"
                          style={{ fontSize: "13px", fontWeight: "bold" }}
                        >
                          Key Highlights :
                        </p>
                        <ul className="mb-3 flex-grow-1 custom-bullets">
                          {product.highlights.map((item, idx) => (
                            <li key={idx} style={{ fontSize: "13px" }}>
                              {item}
                            </li>
                          ))}
                        </ul>

                        <style jsx>{`
                          .custom-bullets li::marker {
                            color: hsla(211, 100%, 50%, 1); /* bullet color */
                            font-size: 1.2em; /* makes bullet bigger (thicker visually) */
                          }
                        `}</style>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Col>
              {/* <Col md={1}></Col> */}
            </Container>
          )}
        </Container>
      </Row>
      <Row>
        <div className="text-center">
          <h2
            className="fw-bold"
            style={{ fontFamily: "Red Rose", fontSize: "35px" }}
          >
            OUR PROJECTS
          </h2>
        </div>
        {/* <Container className="my-2">
          <Row className="my-5 justify-content-center">
            <Col xs={12} sm={6} md={4} className="mb-3">
              <Card className="w-100">
                <Row className="g-0">
                  <Col md={4}>
                    <Card.Img
                      variant="left"
                      src="your-image.jpg"
                      className="h-100"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        This is some example text next to the image.
                      </Card.Text>
                      <Card.Text>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col xs={12} sm={6} md={4} className="mb-3">
              <Card className="w-100">
                <Row className="g-0">
                  <Col md={4}>
                    <Card.Img
                      variant="left"
                      src="your-image.jpg"
                      className="h-100"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        This is some example text next to the image.
                      </Card.Text>
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-80 rounded-1 small"
                        style={{ fontFamily: "Red Rose" }}
                      >
                        View Case Study
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container> */}

        <Container className="my-5">
          <Row className="justify-content-center">
            <Col md={2} sm={1}></Col>

            {/* 2 Cards in the center */}
            <Col md={8}>
              <Row className="gy-3 gx-3">
                {/* First Card */}
                <Col xs={12} sm={6} md={6}>
                  <Card className="w-100 h-100">
                    <Row className="g-0">
                      <Col md={4}>
                        <Card.Img
                          variant="left"
                          src="your-image.jpg"
                          className="h-100"
                        />
                      </Col>
                      <Col md={8}>
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            This is some example text next to the image.
                          </Card.Text>
                          <Button
                            variant="primary"
                            type="submit"
                            className="w-100 rounded-1 small"
                            style={{ fontFamily: "Red Rose" }}
                          >
                            View Case Study
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>

                {/* Second Card */}
                <Col xs={12} sm={6} md={6}>
                  <Card className="w-100 h-100">
                    <Row className="g-0">
                      <Col md={4}>
                        <Card.Img
                          variant="left"
                          src="your-image.jpg"
                          className="h-100"
                        />
                      </Col>
                      <Col md={8}>
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            This is another example text next to the image.
                          </Card.Text>
                          <Button
                            variant="primary"
                            type="submit"
                            className="w-100 rounded-1 small"
                            style={{ fontFamily: "Red Rose" }}
                          >
                            View Case Study
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col md={2} sm={1}></Col>
          </Row>
        </Container>
      </Row>
    </div>
  );
};

export default Research;
