import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';

const SubscriptionForm = ({ image }) => {
    const [email, setEmail] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribing with email:', email);
        setShowToast(true); // show toast
        setEmail(''); // reset input
    };

    return (
        <div
            className="text-white d-flex align-items-center position-relative"
            style={{
                background: 'linear-gradient(to bottom, #ffffffff, #8d9aafff 50%, #152049ff 50%, #100062ff)',
                minHeight: '50vh',
            }}
        >
            <Container>
                <Row className="align-items-center">
                    <Col md={7}>
                        <h2 className="fw-bold">JOIN 5,000+ ROBOTICS PROFESSIONALS.</h2>
                        <h3 className="fw-light">GET TRENDS, NEWS & OFFERS.</h3>
                        <Form onSubmit={handleSubmit} className="mt-4">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="rounded-0"
                                    required
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                className="w-100 rounded-0"
                            >
                                SUBSCRIBE
                            </Button>
                        </Form>
                    </Col>
                    <Col
                        md={5}
                        className="d-none d-md-flex justify-content-center align-items-center"
                    >
                        <img
                            src={image}
                            alt="Futuristic robot"
                            className="img-fluid"
                            style={{ height: '70%', objectFit: 'contain' }}
                        />
                    </Col>
                </Row>
            </Container>

            {/* Toast Notification */}
            <Toast
                onClose={() => setShowToast(false)}
                show={showToast}
                delay={3000}
                autohide
                style={{
                    position: 'fixed',
                    top: 20,
                    right: 20,
                    minWidth: '250px',
                    backgroundColor: '#0d6efd',
                    color: 'white',
                }}
            >
                <Toast.Header closeButton={true}>
                    <strong className="me-auto">Subscription</strong>
                </Toast.Header>
                <Toast.Body>
                    Thank you for subscribing, {email || 'user'}!
                </Toast.Body>
            </Toast>
        </div>
    );
};

export default SubscriptionForm;
