import React from "react";
import { Col, Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router";

const ProductCard = ({ product, buttonText }) => {
  const navigate = useNavigate();

  return (
    <Col xs={12} sm={6} md={4} className="mb-2 d-flex justify-content-center">
      <Card
        className="h-100 custom-card"
        style={{
          borderRadius: "0px",
          maxWidth: "300px",
          boxShadow: "0 4px 5px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%", // full width of parent
            paddingTop: "66.66%", // 3:2 aspect ratio (change if needed)
            overflow: "hidden",
          }}
        >
          <Card.Img
            variant="top"
            src={product.image}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "0px",
              left: "1px",
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
          <ul className="mb-3 flex-grow-1 custom-bullets">
            {product.highlights.map((item, idx) => (
              <li key={idx} style={{ fontSize: "12px" }}>
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

          <div className="d-grid gap-2 mt-auto">
            {buttonText && buttonText !== "" && (
              <Button
                variant="primary"
                style={{
                  fontFamily: "Red Rose",
                  fontWeight: "bold",
                  borderRadius: "0px",
                }}
                onClick={() =>
                  buttonText.value === 1
                    ? navigate("/Product-Details")
                    : navigate("/blog")
                }
              >
                {buttonText.name}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
