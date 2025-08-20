import React from "react";
import { Col, Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router";

const ProductCard = ({ product, buttonText }) => {
  const navigate = useNavigate();
  return (
    <Col xs={12} sm={6} md={3} className="mb-2 d-flex justify-content-center">
      <Card
        className="h-100"
        style={{
          borderRadius: "0px",
          maxWidth: "280px",
          boxShadow: "0 4px 5px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div style={{ position: "relative" }}>
          <Card.Img variant="top" src={product.image} />
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              left: "10px",
            }}
          >
            {product.tags.slice(0, 2).map((tag, idx) => (
              <Badge key={idx} bg="primary" className="me-1 rounded-0">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Card.Body className="d-flex flex-column">
          <Card.Title style={{ fontSize: "15px", fontWeight: "bold" }}>
            {product.title}
          </Card.Title>
          <Card.Text style={{ fontSize: "13px" }} className="mb-1">
            {product.text}
          </Card.Text>
          <p
            className="text-bold mb-1"
            style={{ fontSize: "11px", fontWeight: "bold" }}
          >
            Key Highlights :
          </p>
          <ul className="mb-3 flex-grow-1">
            {product.highlights.map((item, idx) => (
              <li key={idx} style={{ fontSize: "12px" }}>
                {item}
              </li>
            ))}
          </ul>

          <div className="d-grid gap-2 mt-auto">
            <Button
              variant="primary"
              style={{
                fontFamily: "Red Rose",
                fontWeight: "bold",
                borderRadius: "0px",
              }}
              // onClick={buttonText === ""}
              onClick={() =>
                buttonText
                  ? buttonText.value === 1
                    ? navigate("/research")
                    : navigate("/blog")
                  : null
              }
            >
              {/* {buttonText} */}
              {buttonText.name}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
