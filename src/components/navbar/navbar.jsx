import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/img/Logo.jpg";
import { Link } from "react-router-dom";
import { navbar } from "./navbarInfo";
import NavItemBlock from "./navItemBlock";

function NavBar() {
    return (
        <Box
        sx={{
            fontFamily: "roboto,sans-serif",
            padding: "1rem",
        }}
        >
        <Box
            sx={{
            display: "flex",
            maxWidth: "1300px",
            margin: "auto",
            justifyContent: "space-between",
            alignItems: "center",
            }}
        >
            <img src={logo} alt="Logo" style={{ width: "auto", height: "40px" }} />
            <List sx={{ display: "flex" }}>
            {navbar.items.map((item) => (
                <NavItemBlock text={item.text} link={item.link} />
            ))}
            </List>
        </Box>
        </Box>
    );
}

export default NavBar;
