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

const links = [
  { name: "Home", path: "/" },
  { name: "Products & Services", path: "/products-services" },
  { name: "Case Studies", path: "/casestudies" },
  { name: "Research", path: "/research" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Breakpoints
  const isMobile = useMediaQuery("(max-width:900px)");
  const isTablet = useMediaQuery("(max-width:1200px)");

  return (
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
                  fontSize: isTablet ? "0.45rem" : "0.87rem", // smaller font on tablet
                  "&.active": {
                    color: "#353434ff",
                    fontSize: isTablet ? "0.64rem" : "0.92rem",
                    borderColor: "primary.main",
                  },
                }}
              >
                {link.name.toUpperCase()}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Hamburger Menu */}
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
    </AppBar>
  );
}
