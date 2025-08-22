import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { mockProducts, mockRentals } from "../products/products";

const Casestudies = () => {
  const [activeButton, setActiveButton] = useState("products");
  const [products, setProducts] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This simulates a network request. In a real app, you would fetch from an API.
    const fetchProducts = () => {
      setIsLoading(true);
      try {
        // Simulating a successful fetch with mock data
        setProducts(mockProducts);
        setRentals(mockRentals);
        console.log(mockProducts, "mock");

        setError(null);
      } catch (e) {
        console.error("Failed to fetch products:", e);
        setError("Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
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
      <Container className="my-5 mb-4">
        {isLoading ? (
          <div className="text-center">Loading products...</div>
        ) : error ? (
          <div className="text-center text-danger">{error}</div>
        ) : (
          <div className="products-grid">
            {products?.map((product, index) => (
              <Card key={index} className="product-card">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Titlesss</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </Container>

      <style jsx>{`
        .products-grid {
          display: grid;
          padding: 80px;
          grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
          column-gap: -20px; /* horizontal gap */
          row-gap: 10px; /* vertical gap */
          justify-items: center; /* center cards horizontally */
        }

        .product-card {
          width: 22rem;
        }

        /* Responsive: 2 cards per row on tablets */
        @media (max-width: 992px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 10px;
          }
        }

        /* Responsive: 1 card per row on small phones */
        @media (max-width: 576px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Casestudies;
