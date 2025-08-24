import { Button, Card, Col, Container, Row } from "react-bootstrap";
import image from "../assets/img1.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PaginationComponents from "../components/PaginationComponents";
import { useState } from "react";
import ModalComponets from "../components/ModalComponets";

const Blog = () => {
  const isMobile = useMediaQuery("(max-width:576px)");
  const isTablet = useMediaQuery("(max-width:768px)");
  const isPad = useMediaQuery("(max-width:1024px)");

  const getFontSize = () => {
    if (isMobile) return "10px";
    if (isTablet) return "16px";
    if (isPad) return "15px";
    return "16px";
  };
  const buttons = [
    "View All",
    "Industry Trends",
    "Robotics in Action",
    "Event Highlights",
    "Technology Insights",
    "Company News",
  ];

  const [modalShow, setModalShow] = useState(false);
  const [modalcontent, setModalContent] = useState([]);

  const handleDataFromChild = (data) => {
    setModalContent(data);
  };
  const modalshow = (val) => {
    setModalShow(val);
  };

  return (
    <>
      <div className="text-center mb-5 mt-4">
        <h2
          className="fw-bold"
          style={{
            fontFamily: "Red Rose",
            fontSize: "56px",
          }}
        >
          News and insights
        </h2>
        <p
          className="text-muted"
          style={{
            fontSize: "18px",
            fontFamily: "Red Rose",
          }}
        >
          Learn about cryptocurrency, NFTs, and blockchain, discover our latest
          product
          <br />
          updates, partnership announcements, user stories, and more
        </p>
      </div>
      <Container className="my-2 d-flex justify-content-center align-items-center mb-5">
        <div className="border border-secoundary p-2 d-inline-block rounded-1">
          <div
            className="btn-group gx-1 gx-sm-2 gx-md-3 overflow-auto"
            role="group"
            style={{ fontFamily: "Red Rose" }}
          >
            {buttons.map((btn, index) => (
              <button
                key={index}
                type="button"
                className={`btn ${
                  btn === "View All"
                    ? "btn-primary text-white rounded-1"
                    : "rounded-0 text-black"
                }`}
                style={{
                  fontSize: getFontSize(),
                }}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </Container>

      <Container>
        <Row>
          <Container className="my-3">
            <Col xs={12} md={12}>
              <Col xs={12} sm={6} md={12}>
                <Card className="w-100 rounded-0 h-100 d-flex ">
                  <Row className="g-0 flex-grow-1">
                    {/* Image Column */}
                    <Col
                      xs={12}
                      sm={6}
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
                    <Col xs={12} sm={6} className="d-flex gx-5">
                      <Card.Body className="d-flex flex-column justify-content-between w-100">
                        <div className="mb-5">
                          <Container className="my-2 d-flex ">
                            <div className="p-0 d-inline-block">
                              <div className="btn-group" role="group">
                                <button
                                  type="button"
                                  className="btn btn-primary text-white rounded-0 btn-sm"
                                >
                                  Industry Trends
                                </button>

                                <button
                                  type="button"
                                  className="btn rounded-0 text-black btn-sm"
                                >
                                  Aug 07 , 2025
                                </button>
                              </div>
                            </div>
                          </Container>
                        </div>
                        <div
                          className=""
                          style={{
                            fontFamily: "Red Rose",
                          }}
                        >
                          <Card.Title className="fs-1 fw-semibold">
                            AIGA Design <br /> Conference
                          </Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Dui nunc mattis enim ut tellus.
                            Sem integer vitae justo eget magna fermentum
                            iaculis. Viverra justo nec ultrices dui. Et
                            malesuada fames ac turpis egestas sed.
                          </Card.Text>
                        </div>

                        <div className="mt-auto">
                          <Button // 'variant="rounded-0"' is not valid, use 'light' or primary etc.
                            className="d-flex align-items-center justify-content-between rounded-0 p-3"
                            variant="rounded-0"
                            style={{
                              border: "1px solid hsla(0, 0%, 11%, 1.00)",
                              borderRadius: "0px",
                              color: "hsla(240, 1%, 27%, 1.00)",
                              fontSize: "15px",
                              height: "38px",
                              lineHeight: "1.5",
                            }}
                          >
                            <span>Read More</span>
                            <span className="d-flex justify-content-center align-items-center ms-3">
                              <ArrowForwardIosIcon
                                sx={{ fontSize: "14px" }}
                                className="text-dark"
                              />
                            </span>
                          </Button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Col>
          </Container>
        </Row>
      </Container>
      <Container>
        <PaginationComponents
          onDataSend={handleDataFromChild}
          modalshows={modalshow}
        />
      </Container>
      <ModalComponets
        modalShow={modalShow}
        setModalShow={setModalShow}
        modalcontent={modalcontent}
      />
    </>
  );
};

export default Blog;
