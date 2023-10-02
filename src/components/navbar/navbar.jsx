import { Box, List } from "@mui/material";
import React from "react";
import logo from "../../assets/img/Logo.jpg";
import { navbar } from "./navbarInfo";
import NavItemBlock from "./navItemBlock";
import { mainWidth } from "../../config";

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
            width: mainWidth,
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
