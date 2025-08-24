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
import PaginationComponents from "../components/PaginationComponents";
import ModalComponets from "../components/ModalComponets";

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



  // modal open

  const [modalShow, setModalShow] = useState(false);
  const [modalcontent, setModalContent] = useState([]);

  const handleDataFromChild = (data) => {
    setModalContent(data);
  };
  const modalshow = (val)=>{
    setModalShow(val)
  }

  console.log(modalcontent, "modaaaalll");

  return (
    <>
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
      <PaginationComponents onDataSend={handleDataFromChild} modalshows={modalshow} />
      <ModalComponets
        modalShow={modalShow}
        setModalShow={setModalShow}
        modalcontent={modalcontent}
      />
    </>
  );
};

export default Casestudies;
