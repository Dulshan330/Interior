import { Box, List, useMediaQuery, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/img/Logo.jpg";
import { navbar } from "./navbarInfo";
import NavItemBlock from "./navItemBlock";
import {
    desktopView,
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

    return (
        <Box>
        {/* For Desktops */}
        {desktopScreen && (
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
            <Box>
            <Typography variant="body1" color="initial">
                Under Construction
            </Typography>
            </Box>
        )}
        </Box>
    );
}

export default NavBar;
