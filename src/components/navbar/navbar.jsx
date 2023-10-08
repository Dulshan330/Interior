import { Box, List, useMediaQuery, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/img/Logo.jpg";
import { navbar } from "./navbarInfo";
import NavItemBlock from "./navItemBlock";
import {
    black,
    desktopView,
    font,
    mainWidth,
    mobileViewMax,
    mobileViewMin,
} from "../../config";

function NavBar() {
  // Responsive settings
    const desktopScreen = useMediaQuery(desktopView);
    const mobilePhoneScreenMax = useMediaQuery(mobileViewMax);
    const mobilePhoneScreenMin = useMediaQuery(mobileViewMin);
    const mobilePhoneScreen = mobilePhoneScreenMax && mobilePhoneScreenMin;

    const hanburgStyle = {
        position: "relative",
        width: "30px",
        height: "30px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
    };

    const hanburgStyleItem = {
        width: "100%",
        height: "4px",
        backgroundColor: black,
        borderRadius: "5px",
        transitionDuration: ".3s",
    };

    return (
        <Box>
        {/* For Desktops */}
        {desktopScreen && (
            <Box
            sx={{
                fontFamily: font,
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
                <img
                src={logo}
                alt="Logo"
                style={{ width: "auto", height: "40px" }}
                />
                <List sx={{ display: "flex" }}>
                {navbar.items.map((item) => (
                    <NavItemBlock text={item.text} link={item.link} />
                ))}
                </List>
            </Box>
            </Box>
        )}

        {/* For Mobile Phones */}
        {mobilePhoneScreen && (
            <Box
            sx={{
                fontFamily: font,
                padding: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            >
            <img
                src={logo}
                alt="Logo"
                style={{ width: "auto", height: "35px" }}
            />

            <Box sx={hanburgStyle}>
                <Box sx={hanburgStyleItem}></Box>
                <Box sx={hanburgStyleItem}></Box>
                <Box sx={hanburgStyleItem}></Box>
            </Box>
            </Box>
        )}
        </Box>
    );
}

export default NavBar;
