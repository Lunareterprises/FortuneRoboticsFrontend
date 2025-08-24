import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { caseStudies } from "../products/products";
import CustomPagination from "./Pagination";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PaginationComponents = ({ onDataSend, modalshows }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [casestudies, setCaseStudies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(casestudies?.length / itemsPerPage);
  const currentItems = casestudies?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const fetchCaseStudies = () => {
      setIsLoading(true);
      try {
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

  const sendDataToParent = (val) => {
    onDataSend(val);
    modalshows(true);
  };

  return (
    <div>
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
              {currentItems?.map((study, index) => (
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
                        className="mb-4 text-muted"
                      >
                        {study?.place}
                      </Card.Text>
                      <div className="gap-2 mt-auto">
                        <Button // 'variant="rounded-0"' is not valid, use 'light' or primary etc.
                          className="d-flex align-items-center justify-content-between rounded-0 p-3"
                          variant="rounded-0"
                          //   className="btn cursor-pointer"
                          style={{
                            border: "1px solid hsla(0, 0%, 11%, 1.00)",
                            borderRadius: "0px",
                            color: "hsla(240, 1%, 27%, 0.76)",
                            padding: "4px 10px",
                            fontSize: "12px",
                            height: "30px",
                            lineHeight: "1.2",
                          }}
                          onClick={() => sendDataToParent(study)}
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
                  </Card>
                </Col>
              ))}
            </Col>
          </Container>
        )}
      </Container>
      <Row className="mt-4">
        <Col className="d-flex justify-content-center">
          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </Col>
      </Row>
    </div>
  );
};

export default PaginationComponents;
