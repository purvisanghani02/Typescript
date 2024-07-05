import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCounter } from "./AddContext";
import { Badge } from "@mui/material";
const Navbar = () => {
  const context = useCounter();
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <NavLink
                to="/"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  marginRight: 16,
                  fontSize: "20px",
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/Product"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  marginRight: 16,
                  fontSize: "20px",
                }}
              >
                Product
              </NavLink>
              <NavLink
                to="/login"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  marginRight: 16,
                  fontSize: "20px",
                }}
              >
                Login
              </NavLink>
              <NavLink
                to="/addproduct"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  marginRight: 16,
                  fontSize: "20px",
                }}
              >
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                >
                  <Badge badgeContent={context?.value} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
