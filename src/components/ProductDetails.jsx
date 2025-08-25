import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
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
        <Row className="p-1">
          <Tabs
            defaultActiveKey="Description"
            transition={false}
            id="noanim-tab-example"
            className="mb-3 gap-5  flex-wrap"
            variant="underline"
          >
            <Tab
              eventKey="Description"
              title="Description"
              tabClassName="text-muted"
              className="p-0"
            >
              <p className="text-black fs-6 m-0">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. <br /> The standard chunk of Lorem Ipsum
                used since the 1500s is reproduced below for those interested.
                Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                Malorum" by Cicero are also reproduced in their exact original
                form, accompanied by English versions from the 1914 translation
                by H. Rackham.
              </p>
            </Tab>
            <Tab eventKey="Reviews" title="Reviews" tabClassName="text-muted">
              <Col sm={12} md={12} lg={6}>
                <Card
                  className="px-1 py-1 border-0 mb-3"
                  style={{ width: "90%" }}
                >
                  <div className="d-flex align-items-start">
                    <Card.Img
                      src={image}
                      className="rounded-circle me-3"
                      style={{
                        width: "50px", // 👈 small size
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body className="p-0">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="text-warning ">★★★★☆</div>
                      </div>
                      <Card.Text style={{ fontSize: "16px" }}>
                        You made it so simple. My new site is so much faster and
                        easier to work with than my old site. I just choose the
                        page, make the changes.
                      </Card.Text>
                      <h3 className="fs-6">Kristin Watson</h3>
                      <h6 className="text-muted" style={{ fontSize: "13px" }}>
                        March 14 2021
                      </h6>
                    </Card.Body>
                  </div>
                </Card>
                <hr class="border border-1 border-gray-500" />
              </Col>
              <Col sm={12} md={12} lg={6}>
                <Card
                  className="px-1 py-1 border-0 mb-3"
                  style={{ width: "90%" }}
                >
                  <div className="d-flex align-items-start">
                    <Card.Img
                      src={image}
                      className="rounded-circle me-3"
                      style={{
                        width: "50px", // 👈 small size
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body className="p-0">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="text-warning ">★★★★☆</div>
                      </div>
                      <Card.Text style={{ fontSize: "16px" }}>
                        You made it so simple. My new site is so much faster and
                        easier to work with than my old site. I just choose the
                        page, make the changes.
                      </Card.Text>
                      <h3 className="fs-6">Jenny Wilson</h3>
                      <h6 className="text-muted" style={{ fontSize: "13px" }}>
                        January 28 2021
                      </h6>
                    </Card.Body>
                  </div>
                </Card>
                <hr class="border border-1 border-gray-500" />
              </Col>
            </Tab>
            <Tab
              eventKey="Technical Specifications"
              title="Technical Specifications"
              tabClassName="text-muted"
            >
              <Col md={6}>
                <Table responsive="sm" className="table-spaced">
                  <thead>
                    <tr style={{ fontSize: "14px" }}>
                      <th style={{ paddingRight: "100px" }}>Specifications</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dimensions</td>
                      <td>1.2m x 0.5 x 0.5m</td>
                    </tr>
                    <tr>
                      <td>Maximum Speed</td>
                      <td>1.5 m/s</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>Upto 12 Hour</td>
                    </tr>
                    <tr>
                      <td>Charging Time</td>
                      <td>2.5 Hour</td>
                    </tr>
                    <tr>
                      <td>Sensor</td>
                      <td>LIDAR,3D Camara, Ultrasonic Sensors</td>
                    </tr>
                    <tr>
                      <td>Connectivity</td>
                      <td>Wi-Fi,Bluetooth,4G LTE</td>
                    </tr>
                    <tr>
                      <td>Material</td>
                      <td>Aerospace-grade aluminum + ABS Polymer</td>
                    </tr>
                  </tbody>
                </Table>
                <style>{`
    .table-spaced {
      border-collapse: separate !important;
      border-spacing: 0 25px;
      margin-top: 0 !important;
    }
        .table-spaced tbody td {
    vertical-align: middle;
  }
  `}</style>
              </Col>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
