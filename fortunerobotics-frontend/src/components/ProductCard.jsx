import React from "react";
import { Col, Card, Button, Badge } from "react-bootstrap";

const ProductCard = ({ product, buttonText }) => {
    return (
        <Col xs={12} md={4} className="mb-4">
            <Card className="h-100 shadow-sm rounded">
                {/* The product image from props */}
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    {/* Tags are mapped to a list of Badge components */}
                    <div className="mb-2">
                        {product.tags.map((tag, idx) => (
                            <Badge key={idx} bg="primary" className="me-1 rounded-pill">{tag}</Badge>
                        ))}
                    </div>
                    {/* The product title from props */}
                    <Card.Title>{product.title}</Card.Title>
                    {/* Highlights are mapped to an unordered list */}
                    <ul>
                        {product.highlights.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    {/* Dynamic button text and full width button */}
                    <div className="d-grid gap-2">
                        <Button variant="primary" style={{ borderRadius: "0px" }}>{buttonText}</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCard;
