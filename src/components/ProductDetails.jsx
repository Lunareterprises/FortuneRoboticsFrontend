import { Button, Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import image from "../assets/img1.jpg";

const ProductDetails = () => {
  return (
    <>
      <Container className="p-5">
        <Row>
          <Col xs={12} sm={4} md={2} className="d-flex flex-column gap-2">
            {[...Array(4)].map((_, idx) => (
              <Card
                key={idx}
                className="rounded-0 shadow-sm w-100"
                style={{ aspectRatio: "6 / 4" }} // controls height relative to width
              >
                <Card.Img
                  src={image}
                  className="w-100 h-100 rounded-0"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Card>
            ))}
          </Col>

          <Col xs={12} sm={6} md={9}>
            <Card className="w-100 rounded-0 h-100 d-flex border-0">
              <Row className="g-0 flex-grow-1">
                <Col
                  xs={12}
                  sm={4}
                  md={6}
                  className="d-flex"
                  style={{ minHeight: "150px" }} // minimum height for small content
                >
                  <Card.Img
                    src={image}
                    className="w-100 rounded-0 border-0"
                    style={{
                      objectFit: "cover",
                      height: "100%",
                    }}
                  />
                </Col>
                <Col xs={12} sm={6} md={6} className="d-flex gx-5">
                  <Card.Body className="d-flex flex-column justify-content-between w-100">
                    <div
                      className="mb-3"
                      style={{
                        fontFamily: "Red Rose",
                      }}
                    >
                      <Card.Title className="fs-1 fw-semibold mb-2">
                        Army Deliverer
                      </Card.Title>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        {/* ⭐ Star Rating */}
                        <div className="text-warning small">
                          ★★★★☆ <span className="text-black">157 Reviews</span>
                        </div>
                      </div>
                      <Card.Text className="fs-6">
                        Advanced robotics designed for precision, efficiency,
                        and adaptability in real-world environments.
                      </Card.Text>
                      <h4 className="fw-bold">
                        AED 4200{" "}
                        <span
                          className="fs-0 fw-bold mx-3 text-decoration-line-through text-muted"
                          style={{ fontSize: "1.4rem" }}
                        >
                          AED 8400
                        </span>
                        <p
                          className="text-muted fs-0 fw-normal"
                          style={{ fontSize: "12px" }}
                        >
                          Save 50 % right now
                        </p>
                      </h4>

                      <p
                        className="text-bold mb-2"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        Key Highlights :
                      </p>
                      <ul className="mb-3 flex-grow-1 custom-bullets">
                        <li>Reliable navigation</li>
                        <li>Easy branding</li>
                        <li>High demand across UAE</li>
                      </ul>
                      <style jsx>{`
                        .custom-bullets li::marker {
                          color: hsla(211, 100%, 50%, 1); /* bullet color */
                          font-size: 1.3em; /* makes bullet bigger (thicker visually) */
                        }
                      `}</style>
                    </div>

                    <div className="d-flex flex-column mt-auto gap-2">
                      <Button
                        className="d-flex align-items-center justify-content-center rounded-0"
                        style={{
                          border: "1px solid hsla(211, 100%, 50%, 1)",
                          borderRadius: "0px",
                          color: "hsla(211, 100%, 50%, 1)",
                          fontSize: "15px",
                          height: "45px",
                          lineHeight: "1.5",
                          backgroundColor: " #fff",
                        }}
                      >
                        DOWNLOAD BROCHURE
                      </Button>

                      <Button
                        className="d-flex align-items-center justify-content-center rounded-0"
                        style={{
                          border: "1px solid hsla(211, 100%, 50%, 1)",
                          fontSize: "15px",
                          height: "45px",
                          lineHeight: "1.5",
                          textAlign: "center",
                        }}
                      >
                        4200 AED | BUY NOW
                      </Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3 gap-5"
            variant="underline"
          >
            <Tab eventKey="home" title="Home" tabClassName="text-muted">
              Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="Profile" tabClassName="text-muted">
              Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Contact" tabClassName="text-muted">
              Tab content for Contact
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
