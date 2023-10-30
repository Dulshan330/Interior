import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { service } from "./serviceInfo";
import Error404 from "../404/404";
import {
    desktopView,
    font,
    font2,
    mainWidth,
    mobileViewMax,
    mobileViewMin,
    white,
} from "../../config";
import banner from "../../assets/img/Services/singleServiceBanner.jpg";
import Counter from "../../components/counter/counter";
import ClientLogo from "../../components/clientLogo/clientLogo";
import videoSource from "../../assets/video/video.mp4";

function ServiceDetailsBlock() {
    const { id } = useParams();
    const selectedService = service.services.find((item) => item.id === id);

  // Responsive settings
    const desktopScreen = useMediaQuery(desktopView);
    const mobilePhoneScreenMax = useMediaQuery(mobileViewMax);
    const mobilePhoneScreenMin = useMediaQuery(mobileViewMin);
    const mobilePhoneScreen = mobilePhoneScreenMax && mobilePhoneScreenMin;

    if (!selectedService) {
        return <Error404 />;
    }

    return (
        <Box>
        {/* ----------------- For Desktops ----------------- */}
        {desktopScreen && (
            <Box sx={{ marginTop: "5rem" }}>
            {/* Banner Section */}
            <Box
                sx={{
                background: `url(${banner})`,
                height: "40vh",
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                }}
            >
                <Box
                sx={{
                    width: mainWidth,
                    marginX: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
                >
                <Box
                    sx={{
                    backgroundColor: white,
                    padding: "3rem 9rem",
                    borderTopLeftRadius: "2rem",
                    borderTopRightRadius: "2rem",
                    }}
                >
                    <Typography variant="h3" color="initial" fontFamily={font2}>
                    {selectedService.title}
                    </Typography>
                    <Typography
                    variant="body1"
                    color="initial"
                    textAlign={"center"}
                    fontFamily={font}
                    >
                    Home / Services
                    </Typography>
                </Box>
                </Box>
            </Box>
            {/* Details Section */}
            <Box
                sx={{
                marginY: "3rem",
                width: mainWidth,
                marginX: "auto",
                display: "flex",
                }}
            >
                <Box sx={{ flex: 1, padding: "2rem" }}>
                <Typography
                    variant="h3"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                >
                    {selectedService.detailsTitle}
                </Typography>
                </Box>
                <Box sx={{ flex: 1, padding: "2rem" }}>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontFamily: font, textAlign: "justify" }}
                >
                    {selectedService.detailsDescription}
                </Typography>
                <br />
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontFamily: font, textAlign: "justify" }}
                >
                    {selectedService.detailsDescription2}
                </Typography>
                </Box>
            </Box>
            {/* Client Logo Section */}
            <ClientLogo />
            {/* Video Section */}
            <Box
                sx={{
                width: mainWidth,
                marginX: "auto",
                marginY: "4rem",
                }}
            >
                <Typography variant="body1" color="initial">video</Typography>
            </Box>

            {/* Counter Section */}
            <Counter />
            </Box>
        )}
        {/* ----------------- For Mobile Phones ----------------- */}
        {mobilePhoneScreen && (
            <Box sx={{ marginTop: "4rem" }}>
            {/* Banner Section */}
            <Box
                sx={{
                background: `url(${banner})`,
                height: "30vh",
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                }}
            >
                <Box
                sx={{
                    marginX: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
                >
                <Box
                    sx={{
                    backgroundColor: white,
                    padding: "2rem 6rem",
                    borderTopLeftRadius: "2rem",
                    borderTopRightRadius: "2rem",
                    }}
                >
                    <Typography variant="h4" color="initial" fontFamily={font2}>
                    {selectedService.title}
                    </Typography>
                    <Typography
                    variant="body2"
                    color="initial"
                    textAlign={"center"}
                    fontFamily={font}
                    >
                    Home / Services
                    </Typography>
                </Box>
                </Box>
            </Box>
            {/* Details Section */}
            <Box
                sx={{
                marginY: "3rem",
                display: "flex",
                flexDirection: "column",
                }}
            >
                <Box sx={{ flex: 1, padding: "2rem" }}>
                <Typography
                    variant="h4"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                >
                    {selectedService.detailsTitle}
                </Typography>
                </Box>
                <Box sx={{ flex: 1, padding: "2rem" }}>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontFamily: font, textAlign: "justify" }}
                >
                    {selectedService.detailsDescription}
                </Typography>
                <br />
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontFamily: font, textAlign: "justify" }}
                >
                    {selectedService.detailsDescription2}
                </Typography>
                </Box>
            </Box>
            {/* Client Logo Section */}
            <ClientLogo />
            {/* Counter Section */}
            <Counter />
            </Box>
        )}
        </Box>
    );
}

export default ServiceDetailsBlock;
