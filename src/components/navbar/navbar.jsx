import { Box, List, useMediaQuery, Typography } from "@mui/material";
import React, { useState } from "react";
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
    white,
} from "../../config";

function NavBar() {
    // Responsive settings
    const desktopScreen = useMediaQuery(desktopView);
    const mobilePhoneScreenMax = useMediaQuery(mobileViewMax);
    const mobilePhoneScreenMin = useMediaQuery(mobileViewMin);
    const mobilePhoneScreen = mobilePhoneScreenMax && mobilePhoneScreenMin;

    // use state settings
    const [hanburgNav, setHanburgNav] = useState(false);

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

    const hanburgClick = () => {
        setHanburgNav(!hanburgNav);
    };

    return (
        <Box>
        {/* ----------------- For Desktops ----------------- */}
        {desktopScreen && (
            <Box
            sx={{
                fontFamily: font,
                padding: "1rem",
                position:"fixed",
                backgroundColor:white,
                width:"100%",
                top:0,
                zIndex:1,
                boxShadow:"0 2px 4px 0 rgba(0, 0, 0, 0.2)",
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

        {/* ----------------- For Mobile Phones ----------------- */}
        {mobilePhoneScreen && (
            <Box sx={{
                position:"fixed",
                backgroundColor:white,
                width:"100%",
                top:0,
                zIndex:1,
                boxShadow:"0 2px 4px 0 rgba(0, 0, 0, 0.2)",
                }}>
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

                <Box sx={hanburgStyle} onClick={hanburgClick}>
                <Box sx={hanburgStyleItem}></Box>
                <Box sx={hanburgStyleItem}></Box>
                <Box sx={hanburgStyleItem}></Box>
                </Box>
            </Box>
            {hanburgNav && (
                <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
                >
                <List
                    sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    }}
                >
                    {navbar.items.map((item) => (
                    <NavItemBlock text={item.text} link={item.link} />
                    ))}
                </List>
                </Box>
            )}
            </Box>
        )}
        </Box>
    );
}

export default NavBar;
