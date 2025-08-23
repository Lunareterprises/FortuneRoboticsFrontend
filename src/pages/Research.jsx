import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { innovation, currentproject } from "../products/products";
import image from "../assets/img1.jpg";
import video from "../assets/myVideo.mp4";
import CaseStudy from "../components/CaseStudy";

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
      <Row className="roadmap-row mb-5">
        <div className="text-center mb-4 mt-4">
          <h2
            className="fw-bold"
            style={{
              fontFamily: "Red Rose",
              fontWeight: "bold",
              fontSize: "36px",
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

        <Container className="col-lg-1"></Container>
        <Container className="timeline-wrapper col-lg-8">
          <div className="timeline-container">
            <div className="timeline" style={{ fontFamily: "Red Rose" }}>
              <div className="year-label">2025-2026</div>
              <div className="year-label">2027-2028</div>
              <div className="year-label">2029-2030</div>
              <div className="year-label">Beyond 2030</div>
            </div>

            <div className="dashed-line dashed-line-1"></div>
            <div className="dashed-line dashed-line-2"></div>
            <div className="dashed-line dashed-line-3"></div>

            <div className="timeline-box box-1">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h3
                  style={{
                    fontSize: "1rem",
                    margin: 0,
                    fontFamily: "Red Rose",
                  }}
                >
                  AI-Enhanced Navigation
                </h3>
                <Badge
                  bg="primary"
                  className="rounded-0 text-truncate"
                  style={{
                    maxWidth: "170px", // adjust width
                    fontSize: "0.65rem",
                  }}
                >
                  PROTOTYPE IN FIELD TESTING
                </Badge>
              </div>
              <p style={{ fontFamily: "Red Rose", fontSize: "0.85rem" }}>
                Implementing deep learning algorithms for obstacle avoidance and
                adaptive route optimization in dynamic urban environments.
              </p>
            </div>

            <div className="timeline-box box-2">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h3
                  style={{
                    fontSize: "1rem",
                    margin: 0,
                    fontFamily: "Red Rose",
                  }}
                >
                  Multi-Environment Robots
                </h3>
                <Badge
                  bg="primary"
                  className="rounded-0 text-truncate"
                  style={{
                    maxWidth: "170px", // adjust width
                    fontSize: "0.65rem",
                  }}
                >
                  DESIGN PHASE
                </Badge>
              </div>
              <p style={{ fontFamily: "Red Rose", fontSize: "0.79rem" }}>
                Robots capable of seamlessly transitioning between indoor and
                outdoor operations using hybrid locomotion systems.
              </p>
            </div>

            <div className="timeline-box box-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h3
                  style={{
                    fontSize: "1rem",
                    margin: 0,
                    fontFamily: "Red Rose",
                  }}
                >
                  Energy-Efficient Robotics
                </h3>
                <Badge
                  bg="primary"
                  className="rounded-0 text-truncate"
                  style={{
                    maxWidth: "170px", // adjust width
                    fontSize: "0.65rem",
                  }}
                >
                  RESEARCH IN PROGRESS
                </Badge>
              </div>
              <p style={{ fontFamily: "Red Rose" }}>
                Integrating renewable energy modules and advanced battery tech
                for extended operational hours.
              </p>
            </div>

            <div className="timeline-box box-4">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h3
                  style={{
                    fontSize: "1rem",
                    margin: 0,
                    fontFamily: "Red Rose",
                  }}
                >
                  Multi-Environment Robots
                </h3>
                <Badge
                  bg="primary"
                  className="rounded-0 text-truncate"
                  style={{
                    maxWidth: "170px", // adjust width
                    fontSize: "0.65rem",
                  }}
                >
                  Design Phase
                </Badge>
              </div>
              <p style={{ fontFamily: "Red Rose" }}>
                Robots capable of seamlessly transitioning between indoor and
                outdoor operations using hybrid locomotion systems.
              </p>
            </div>
          </div>
        </Container>
        <Container className="col-lg-3"></Container>

        <style jsx>{`
          .roadmap-row {
            position: relative;
            overflow: visible;
            padding: 10px 0;
            background: #fff;
            z-index: 1; /* content above backgrounds */
          }

          /* Radial circle gradient (existing) */
          .roadmap-row::before {
            content: "";
            position: absolute;
            top: 64%;
            left: 52%;
            transform: translate(-59%, -50%);
            width: 1500px;
            height: 620px;
            filter: blur(20px);
            background: radial-gradient(
                circle at center,
                rgba(15, 107, 220, 0.6) 0%,
                rgba(15, 107, 220, 0.3) 20%,
                transparent 35%
              ),
              radial-gradient(
                circle at center,
                rgba(15, 107, 220, 0.25) 0%,
                rgba(15, 107, 220, 0.15) 45%,
                transparent 60%
              );
            z-index: 0; /* behind content */
            pointer-events: none;
          }

          /* Grid / net background */
          .roadmap-row::after {
            content: "";
            position: absolute;
            top: 30%;
            left: 21%;
            width: 45%;
            height: 65%;
            z-index: -1; /* behind radial gradient */
            pointer-events: none;

            background-image: repeating-linear-gradient(
                0deg,
                /* horizontal lines */ transparent,
                transparent 39px,
                rgba(59, 59, 59, 0.11) 39px,
                rgba(59, 59, 59, 0.11) 40px
              ),
              repeating-linear-gradient(
                90deg,
                /* vertical lines */ transparent,
                transparent 39px,
                rgba(59, 59, 59, 0.11) 39px,
                rgba(59, 59, 59, 0.11) 40px
              );
            background-size: 150px 150px; /* grid cell size */
          }

          .timeline-container {
            position: relative;
            min-height: 550px;
            width: 100%;
          }

          .timeline {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 30px;
          }

          .year-label {
            width: 25%;
            text-align: center;
            color: #333;
            padding: 10px 0;
            border-right: 1px dashed #ccc;
            z-index: 1;
            box-sizing: border-box;
          }

          .year-label:last-child {
            border-right: none;
          }

          .dashed-line {
            position: absolute;
            top: 0;
            width: 1px;
            height: 95%;
            z-index: 0;

            /* vertical dashed line with custom dash length */
            background-image: repeating-linear-gradient(
              to bottom,
              #999,
              /* dash color */ #99999953 15px,
              /* dash length */ transparent 10px,
              /* gap start */ transparent 30px /* gap end */
            );
          }

          .dashed-line-1 {
            left: 25%;
          }
          .dashed-line-2 {
            left: 50%;
          }
          .dashed-line-3 {
            left: 75%;
          }

          .timeline-box {
            position: absolute;
            background-color: #f8d7da;
            border-style: solid none none solid; /* top right bottom left */
            border-width: 1px 1px 0 0;
            border-color: #3d3df0ff;
            padding: 10px;
            box-sizing: border-box;
            transition: transform 0.3s ease;
            z-index: 1;
            border-radius: 1px;
            width: 400px;
            max-width: 90%;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .timeline-box:hover {
            transform: scale(1.02);
          }

          .box-1 {
            left: 10%;
            top: 80px;
            width: 400px;
          }
          .box-2 {
            left: 30%;
            top: 188px;
            width: 400px;
          }
          .box-3 {
            left: 55%;
            top: 274px;
            width: 400px;
          }
          .box-4 {
            left: 70%;
            top: 358px;
            width: 400px;
          }

          .timeline-box h3 {
            margin: 0 0 7px 0;
            font-size: 16px;
            color: #333;
            text-align: center;
            font-weight: bold;
          }

          .timeline-box p {
            margin: 0;
            font-size: 12px;
            line-height: 1.4;
            color: #333;
            text-align: left;
          }

          .status {
            display: inline-block;
            margin-top: 10px;
            padding: 5px 8px;
            background-color: #0066cc;
            color: white;
            font-size: 12px;
            font-weight: bold;
            border-radius: 3px;
            text-transform: uppercase;
            float: right;
          }

          /* Responsive adjustments */
          @media (max-width: 1200px) {
            .timeline-box {
              width: 300px;
            }
            .box-1 {
              left: 5%;
            }
            .box-2 {
              left: 28%;
            }
            .box-3 {
              left: 55%;
            }
            .box-4 {
              left: 72%;
            }
          }

          @media (max-width: 992px) {
            .timeline-box {
              width: 220px;
            }
            .box-1 {
              left: 5%;
              top: 60px;
            }
            .box-2 {
              left: 28%;
              top: 180px;
            }
            .box-3 {
              left: 55%;
              top: 300px;
            }
            .box-4 {
              left: 72%;
              top: 420px;
            }
          }

          @media (max-width: 768px) {
            .timeline-box {
              width: 180px;
            }
            .box-1 {
              left: 5%;
              top: 50px;
            }
            .box-2 {
              left: 28%;
              top: 150px;
            }
            .box-3 {
              left: 55%;
              top: 250px;
            }
            .box-4 {
              left: 72%;
              top: 350px;
            }
          }

          @media (max-width: 576px) {
            .timeline-box {
              width: 140px;
            }
            .box-1 {
              left: 5%;
              top: 40px;
            }
            .box-2 {
              left: 28%;
              top: 120px;
            }
            .box-3 {
              left: 55%;
              top: 200px;
            }
            .box-4 {
              left: 72%;
              top: 280px;
            }
          }
        `}</style>
      </Row>

      <Row>
        <div className="text-center">
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
        <Container className="my-1">
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
                              className="rounded-0 mt-3 align-self-start w-75 text-uppercase fw-semibold"
                              style={{ fontSize: "11px" }}
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
                  className="custom-card position-relative overflow-hidden"
                  style={{
                    borderRadius: "0px",
                    maxWidth: "284px",
                    height: "445px",
                    boxShadow: "0 4px 5px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div
                    className="position-absolute  bottom-0 start-0  d-flex flex-column justify-content-center align-items-center text-center text-white p-3"
                    style={{ fontFamily: "Red Rose" }}
                  >
                    <h6 className="mb-2">Concept & Design stage</h6>
                    <p className="mb-0" style={{ fontSize: "12px" }}>
                      Your description goes here
                    </p>
                  </div>
                  <div
                    className="position-absolute start-0 d-flex flex-column gap-1 align-items-start"
                    style={{ bottom: "130px" }}
                  >
                    <Badge
                      bg="primary"
                      className="rounded-0 text-start"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Engineers Soldering Circuits
                    </Badge>

                    <Badge
                      bg="primary"
                      className="rounded-0 text-start"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Assembling Robotic Arms
                    </Badge>

                    <Badge
                      bg="primary"
                      className="rounded-0 text-start"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Installing Sensors
                    </Badge>
                  </div>
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
                  className="custom-card position-relative overflow-hidden"
                  style={{
                    borderRadius: "0px",
                    maxWidth: "284px",
                    height: "445px",
                    boxShadow: "0 4px 5px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div
                    className="position-absolute  bottom-0 start-0  d-flex flex-column justify-content-center align-items-center text-center text-white p-3"
                    style={{ fontFamily: "Red Rose" }}
                  >
                    <h6 className="mb-2">Testing & Evaluation stage</h6>
                    <p className="mb-0" style={{ fontSize: "12px" }}>
                      Your description goes here
                    </p>
                  </div>
                  <div
                    className="position-absolute start-0 d-flex flex-column gap-1 align-items-start"
                    style={{ bottom: "130px" }}
                  >
                    <Badge
                      bg="primary"
                      className="rounded-0 text-start"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Engineers Soldering Circuits
                    </Badge>

                    <Badge
                      bg="primary"
                      className="rounded-0 text-start"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Assembling Robotic Arms
                    </Badge>

                    <Badge
                      bg="primary"
                      className="rounded-0 text-start"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Installing Sensors
                    </Badge>
                  </div>
                </Card>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={4}
                className="mb-2 d-flex justify-content-center"
              >
                <Card
                  className="custom-card position-relative overflow-hidden rounded-0 shadow-sm"
                  style={{ maxWidth: "284px", height: "445px" }}
                >
                  {/* Video Background */}
                  <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 text-center text-white p-3">
                    <h6 className="mb-1">Concept &amp; Design stage</h6>
                    <p className="mb-0 fs-6">Your description goes here</p>
                  </div>
                  <div className="position-absolute bottom-0 start-0 w-100 text-center text-white p-3">
                    <h6 className="mb-1">Concept &amp; Design stage</h6>
                    <p className="mb-0 fs-6">Your description goes here</p>
                  </div>
                  <div
                    className="position-absolute start-0 d-flex flex-column gap-1 align-items-start"
                    style={{ bottom: "130px" }}
                  >
                    <Badge
                      bg="primary"
                      className="rounded-0 text-start"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Engineers Soldering Circuits
                    </Badge>

                    <Badge
                      bg="primary"
                      className="rounded-0 text-start"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Assembling Robotic Arms
                    </Badge>

                    <Badge
                      bg="primary"
                      className="rounded-0 text-start"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Installing Sensors
                    </Badge>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={2} sm={1}></Col>
        </Container>
      </Row>
      <Row className="mb-4">
        <div
          className="text-white d-flex align-items-center mt-3 position-relative hero-section"
          style={{
            width: "100%",
            background: "linear-gradient(to bottom, #1e2a3b, #152049)",
            overflow: "visible", // allow overflow outside this div
          }}
        >
          <CaseStudy />
        </div>
      </Row>
      <Row>
        <Container>
          <div className="text-center">
            <h2
              className="fw-bold"
              style={{
                fontFamily: "Red Rose",
                fontWeight: "bold",
                fontSize: "44px",
              }}
            >
              Robotics Trends You Need To Know
            </h2>
            <p
              className="text-muted"
              style={{
                fontSize: "18px",
                fontFamily: "Red Rose",
              }}
            >
              Stay ahead with data-driven insights and future predictions from
              the world of robotics
            </p>
          </div>
        </Container>
        <Row className="justify-content-center">
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={8}>
            <Row className="gy-3 gx-3 justify-content-center">
                <Col xs={12} sm={6} md={6} >
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
                        
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
            </Row>
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
      </Row>
    </div>
  );
};

export default Research;
