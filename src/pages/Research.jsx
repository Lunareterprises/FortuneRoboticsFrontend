import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { innovation, currentproject } from "../products/products";
import robo from "../assets/robo.jpeg";
import image from "../assets/img1.jpg";

const Research = () => {
  const [products, setProducts] = useState([]);
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This simulates a network request. In a real app, you would fetch from an API.
    const fetchProducts = () => {
      setIsLoading(true);
      try {
        // Simulating a successful fetch with mock data
        setProducts(innovation);
        setProject(currentproject);

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
        <Container className="my-2">
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

        <Container className="my-3">
          <Row className="justify-content-center">
            <Col xs={0} md={2}></Col>
            <Col xs={12} md={8}>
              <Row className="gy-3 gx-3 justify-content-center">
                {project?.map((pr, index) => (
                  <Col xs={12} sm={6} md={6} key={index}>
                    <Card className="w-100 rounded-0 h-100 d-flex">
                      <Row className="g-0 flex-grow-1">
                        {/* Image Column */}
                        <Col
                          xs={12}
                          sm={4}
                          className="d-flex"
                          style={{ minHeight: "150px" }} // minimum height for small content
                        >
                          <Card.Img
                            src={image}
                            className="w-100 rounded-0"
                            style={{
                              objectFit: "cover",
                              height: "100%",
                            }}
                          />
                        </Col>

                        {/* Text Column */}
                        <Col xs={12} sm={8} className="d-flex">
                          <Card.Body className="d-flex flex-column justify-content-between w-100">
                            <div>
                              <Card.Title
                                style={{
                                  fontFamily: "Red Rose",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                {pr.title}
                              </Card.Title>
                              <Card.Text
                                style={{
                                  fontFamily: "Red Rose",
                                  fontSize: "11px",
                                }}
                              >
                                {pr.sub}
                              </Card.Text>
                            </div>

                            <Button
                              variant="primary"
                              type="submit"
                              className="rounded-0 mt-3 align-self-start"
                              style={{
                                fontFamily: "Red Rose",
                                fontSize: "12px",
                                width: "80%",
                              }}
                            >
                              View Case Study
                            </Button>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={0} md={2}></Col>
          </Row>
        </Container>
      </Row>

      <Row>
        <div className="text-center pt-5">
          <h2
            className="fw-bold"
            style={{ fontFamily: "Red Rose", fontSize: "35px" }}
          >
            Behind the Scenes at Fortune Robotics
          </h2>
          <p
            className="text-muted"
            style={{ fontFamily: "Red Rose", fontSize: "15px" }}
          >
            Where ideas transform into intelligent machines.
          </p>
        </div>
        <Container className="d-flex my-5">
          <Col md={2} sm={1}></Col>
          <Col md={8} sm={6}>
            <Row className="gy-3 gx-1 justify-content-center">
              {/* First Card */}
              <Col
                xs={12}
                sm={6}
                md={4}
                className="mb-2 d-flex justify-content-center"
              >
                <Card
                  className="custom-card"
                  style={{
                    borderRadius: "0px",
                    maxWidth: "270px",
                    height: "370px",
                    boxShadow: "0 4px 5px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <Card.Body className="d-flex flex-column"></Card.Body>
                </Card>
              </Col>

              {/* Second Card */}
              <Col
                xs={12}
                sm={6}
                md={4}
                className="mb-2 d-flex justify-content-center"
              >
                <Card
                  className="custom-card"
                  style={{
                    borderRadius: "0px",
                    maxWidth: "270px",
                    height: "370px",
                    boxShadow: "0 4px 5px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <Card.Body className="d-flex flex-column"></Card.Body>
                </Card>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={4}
                className="mb-2 d-flex justify-content-center"
              >
                <Card
                  className="custom-card"
                  style={{
                    borderRadius: "0px",
                    maxWidth: "270px",
                    height: "370px",
                    boxShadow: "0 4px 5px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <Card.Body className="d-flex flex-column"></Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col md={2} sm={1}></Col>
        </Container>
      </Row>
    </div>
  );
};

export default Research;
