import image from "../assets/img1.jpg";
import { Badge, Modal } from "react-bootstrap";

const ModalComponets = ({ modalShow, setModalShow, modalcontent }) => {
  return (
    <>
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
            style={{ width: "2x", height: "13px" }}
            onClick={() => setModalShow(false)}
          >
            <span aria-hidden="true" className="text-white fw-bold">
              &times;
            </span>
          </button>

          <div className="row mt-4">
            <div className="col-lg-8 d-flex justify-content-end mb-3">
              <div
                className="position-relative mb-4"
                style={{ width: "400px", height: "220px" }}
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

            <div className="col-lg-2 d-flex flex-column justify-content-end mb-3">
              <div className="mb-4">
                <p className="mb-1 fw-bold small">Client</p>
                <p className="mb-0 small red-rose">{modalcontent.client}</p>
              </div>
            </div>
          </div>

          <div style={{ fontFamily: "Red Rose" }}>
            <h4 className="fw-bold fs-5 mb-2">{modalcontent.title}</h4>
            <p className="fs-10 small">{modalcontent.subtittle}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponets;
