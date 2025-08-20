import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const links = [
    { name: "Home", path: "/" },
    { name: "Products & Services", path: "/products-services" },
    { name: "Case Studies", path: "/casestudies" },
    { name: "Research", path: "/research" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
    return (
        <AppBar
            position="sticky"
            color="inherit"
            elevation={1}
            sx={{ backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.9)" }}
        >
            <Toolbar className="container d-flex justify-content-between">

                {/* Logo */}
                <Box sx={{ height: 48, width: 120, flexShrink: 0 }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: "100%", width: "100%", objectFit: "contain" }}
                    />
                </Box>

                {/* Nav Links */}
                <Box className="d-flex gap-4">
                    {links.map((link) => (
                        <Button
                            key={link.name}
                            component={NavLink}
                            to={link.path}
                            sx={{
                                textTransform: "none",
                                fontWeight: 500,
                                color: "text.primary",
                                "&.active": {
                                    color: "primary.main",
                                    borderBottom: "2px solid",
                                    borderColor: "primary.main",
                                },
                            }}
                        >
                            {link.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
