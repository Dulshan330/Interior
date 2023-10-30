import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import {
    desktopView,
    mainWidth,
    mobileViewMax,
    mobileViewMin,
} from "../../config";
import { clientLogo } from "./clientLogoInfo";
import ClientLogoBlock from "./clientLogoBlock";

function ClientLogo() {
  // Responsive settings
    const desktopScreen = useMediaQuery(desktopView);
    const mobilePhoneScreenMax = useMediaQuery(mobileViewMax);
    const mobilePhoneScreenMin = useMediaQuery(mobileViewMin);
    const mobilePhoneScreen = mobilePhoneScreenMax && mobilePhoneScreenMin;

    return (
        <Box>
        {/* ----------------- For Desktops ----------------- */}
        {desktopScreen && (
            <Box
            sx={{
                width: mainWidth,
                marginX: "auto",
                marginY: "5rem",
                display: "flex",
                padding: "2rem 1rem",
                justifyContent: "space-evenly",
            }}
            >
            {clientLogo.logo.map((item) => (
                <ClientLogoBlock img={item.img} height={"50px"} width={"auto"} />
            ))}
            </Box>
        )}
        {/* ----------------- For Mobile Phones ----------------- */}
        {mobilePhoneScreen && (
            <Box
            sx={{
                height: "80vh",
                marginX: "1rem",
                marginY: "5rem",
                display: "flex",
                padding: "2rem 1rem",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            >
            {clientLogo.logo.map((item) => (
                <ClientLogoBlock img={item.img} height={"auto"} width={"140px"} />
            ))}
            </Box>
        )}
        </Box>
    );
}

export default ClientLogo;
