import { Button, Col, Container, Row } from "react-bootstrap";
import robohand from "../assets/Robo_hand (1).png";
import { useNavigate } from "react-router-dom";
const CaseStudy = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container fluid style={{ overflow: "visible" }} className="p-5">
        <Row
          className="align-items-center"
          style={{ overflow: "visible", minHeight: "100vh" }}
        >
          <Col
            md={8}
            className="d-flex flex-column justify-content-center align-items-center text-center"
          >
            <h2
              className="fw-bold mb-1"
              style={{
                fontSize: "2rem",
                fontFamily: "Red Rose",
              }}
            >
              OUR CASE STUDIES
            </h2>
            <h3
              className="fw-light mb-4"
              style={{
                fontSize: "0.99rem",
                fontFamily: "Red Rose",
              }}
            >
              Explore how our robotics solutions have transformed industries —{" "}
              <br />
              delivering efficiency, innovation, and measurable success.
            </h3>
            <h4
              className="fw-light mb-4"
              style={{
                fontSize: "0.99rem",
                fontFamily: "Red Rose",
              }}
            >
              At Fortune Robotics, every project is a story of innovation
              meeting impact. From hospitality and retail to events and
              education, our robots have been deployed to solve real challenges,
              enhance customer experience, and drive business growth.
            </h4>
            <p
              className="fw-light mb-4"
              style={{
                fontSize: "0.99rem",
                fontFamily: "Red Rose",
              }}
            >
              Discover the industries we’ve transformed and the results we’ve
              delivered.
            </p>

            <Button
              type="button"
              className="w-50 rounded-0 small"
              style={{
                fontFamily: "Red Rose",
                backgroundColor: "white",
                color: "hsla(211, 100%, 50%, 1)",
                border: "0px solid hsla(211, 100%, 50%, 1)", // optional, looks cleaner
              }}
              onClick={() => navigate("/casestudies")}
            >
              Explore Case Studies
            </Button>
          </Col>

          {/* Right Side Image */}
          <Col md={4} className="d-none d-md-block position-relative hero-col">
            <img src={robohand} alt="Futuristic robot" className="hero-image" />
          </Col>
        </Row>

        {/* Media Queries */}
        <style jsx>{`
          .hero-section {
            height: 48vh; /* default height */
          }
          .hero-col {
            position: relative;
            min-height: 285px;
            overflow: visible; /* allow overflow */
          }

          .hero-image {
            position: absolute;
            top: -1px;
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
              height: 32vh; /* default height */
            }
            .hero-image {
              height: 126%;
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
              height: 62vh; /* default height */
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
  );
};

export default CaseStudy;
