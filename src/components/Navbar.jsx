import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Form, Modal, Col, Row, InputGroup } from "react-bootstrap";

const links = [
  { name: "Home", path: "/" },
  { name: "Products & Services", path: "/products-services" },
  { name: "Case Studies", path: "/casestudies" },
  { name: "Research", path: "/research" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // Breakpoints
  const isMobile = useMediaQuery("(max-width:900px)");
  const isTablet = useMediaQuery("(max-width:1200px)");

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={1}
        sx={{
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.9)",
        }}
      >
        <Toolbar
          className="container"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 4, // ensures gap between logo and nav
          }}
        >
          {/* Logo */}
          <Box sx={{ height: 48, width: 120, flexShrink: 0 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </Box>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <Box className="d-flex" sx={{ gap: isTablet ? 1 : 4 }}>
              {links.map((link) => (
                <Button
                  key={link.name}
                  component={NavLink}
                  to={link.path}
                  sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    fontFamily: "Red Rose",
                    color: "#3534349b",
                    fontSize: isTablet ? "0.86rem" : "0.87rem", // smaller font on tablet
                    "&.active": {
                      color:
                        link?.path === undefined ? "#3534349b" : "#2a2929ff",
                      fontSize: isTablet ? "0.89rem" : "0.92rem",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  {link.name.toUpperCase()}
                </Button>
              ))}
              <Button
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  fontFamily: "Red Rose",
                  color: "#3534349b",
                  fontSize: isTablet ? "0.75rem" : "0.87rem", // smaller font on tablet
                  "&.active": {
                    color: "#2a2929ff",
                    fontSize: isTablet ? "0.64rem" : "0.92rem",
                    borderColor: "primary.main",
                  },
                }}
                onClick={() => setModalShow(!modalShow)}
              >
                CONTACT US
              </Button>
            </Box>
          )}

          {isMobile && (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={() => setOpen(false)}
                >
                  <List>
                    {links.map((link) => (
                      <ListItem key={link.name} disablePadding>
                        <ListItemButton component={NavLink} to={link.path}>
                          <ListItemText primary={link.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>

        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={modalShow}
          className="rounded-0"
          onHide={() => setModalShow(false)} // closes when backdrop clicked or ESC pressed
        >
          <Modal.Body>
            <div className="mb-3 mt-4">
              <h4 className="text-center mb-1 fw-bold fs-2">Get in touch</h4>
              <p className="text-center ">
                We’d love to hear from you. Please fill out this form.
              </p>
            </div>

            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="p-3"
            >
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label style={{ fontSize: "15px" }}>
                    First name
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    className="form-control-md rounded-0" // makes it taller
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label style={{ fontSize: "15px" }}>
                    Last name
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    className="form-control-md rounded-0" // makes it taller
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label style={{ fontSize: "15px" }}>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    required
                    className="form-control-md rounded-0"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-1">
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label style={{ fontSize: "15px" }}>
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    required
                    className="form-control-md rounded-0"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  className="mb-1 form-control-lg rounded-0"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label style={{ fontSize: "15px" }}>
                    Example textarea
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button
                type="button"
                variant="primary"
                className="w-100"
                style={{
                  fontFamily: "Red Rose",
                  fontWeight: "bold",
                  borderRadius: "0px",
                  border: "2px solid #0d6efd", // custom border color (Bootstrap primary blue)
                  backgroundColor: "#0d6efd", // custom button color (Bootstrap primary blue)
                  color: "#fff", // text color
                }}
              >
                SUBMIT
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </AppBar>
    </>
  );
}
