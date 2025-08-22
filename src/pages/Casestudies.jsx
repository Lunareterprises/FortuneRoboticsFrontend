import { useEffect, useState } from "react";
import {
  Badge,
  Card,
  Col,
  Container,
  Button,
  Row,
  Modal,
} from "react-bootstrap";
import { caseStudies } from "../products/products";
import CustomPagination from "../components/Pagination";
import image from "../assets/img1.jpg";

const Casestudies = () => {
  const [casestudies, setCaseStudies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(casestudies?.length / itemsPerPage);
  const currentItems = casestudies?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // modal open

  const [modalShow, setModalShow] = useState(false);
  const [modalcontent, setModalContent] = useState([]);

  const handleModal = (val) => {
    setModalShow(true);
    setModalContent(val);
  };

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
                        <Button
                          variant="rounded-0"
                          className="btn cursor-pointer"
                          style={{
                            border: "1px solid hsla(0, 0%, 11%, 1.00)",
                            borderRadius: "0px",
                            color: "hsla(240, 1%, 27%, 1.00)",
                            padding: "4px 10px",
                            fontSize: "12px",
                            height: "30px",
                            lineHeight: "1.2",
                          }}
                          onClick={() => handleModal(study)}
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
      <Row className="mt-4">
        <Col className="d-flex justify-content-center">
          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </Col>
      </Row>

      {/* modal   */}

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="position-relative">
          <button
            type="button"
            className="btn btn-sm btn-primary rounded-circle position-absolute top-0 end-0 m-2 d-flex align-items-center justify-content-center"
            style={{ width: "10x", height: "19px" }}
            onClick={() => setModalShow(false)}
          >
            <span aria-hidden="true" className="text-white fw-bold">
              &times;
            </span>
          </button>

          <div className="row mt-2">
            <div className="col-lg-8 d-flex justify-content-end">
              <div
                className="position-relative mb-4"
                style={{ width: "380px", height: "180px" }}
              >
                <img
                  src={image}
                  alt=""
                  className="w-100 h-100"
                  style={{ objectFit: "cover", display: "block" }}
                />

                <div className="position-absolute bottom-0 start-3 mx-1 d-flex">
                  {modalcontent?.badges?.slice(0, 3).map((tag, idx) => (
                    <Badge key={idx} bg="primary" className="me-1 rounded-0">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-2 d-flex flex-column justify-content-end">
              <div className="mb-4">
                <p className="mb-1 fw-bold small">Client</p>
                <p className="mb-0 small red-rose">{modalcontent.client}</p>
              </div>
            </div>
          </div>

          <div className="red-rose">
            <h4 className="fw-bold fs-6 mb-1">{modalcontent.title}</h4>
            <p className="fs-10 small mb-0">{modalcontent.subtittle}</p>
          </div>
        </Modal.Body>
      </Modal>

      {/* modal end  */}
    </div>
  );
};

export default Casestudies;
