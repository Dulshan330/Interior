import { Box, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import {
    black,
    desktopView,
    font,
    font2,
    mainWidth,
    mobileViewMax,
    mobileViewMin,
    themeColor,
    themeColor2,
    white,
} from "../../config";
import banner from "../../assets/img/Services/banner.jpg";
import { service } from "./serviceInfo";
import ServiceBlock from "./serviceBlock";


function ServicePage() {
    // Responsive settings
    const desktopScreen = useMediaQuery(desktopView);
    const mobilePhoneScreenMax = useMediaQuery(mobileViewMax);
    const mobilePhoneScreenMin = useMediaQuery(mobileViewMin);
    const mobilePhoneScreen = mobilePhoneScreenMax && mobilePhoneScreenMin;

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
                    Services
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
            {/* Services Section */}
            <Box sx={{ width: mainWidth, marginX: "auto", marginTop: "5rem" }}>
                <Grid
                container
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                >
                {service.services.map((item) => (
                    <ServiceBlock
                    title={item.title}
                    contain={item.contain}
                    id={item.id}
                    />
                ))}
                </Grid>
            </Box>
            {/* How we do Section */}
            <Box sx={{ width: mainWidth, marginX: "auto" }}></Box>
            {/* Contact Section */}
            <Box
                sx={{
                width: mainWidth,
                marginX: "auto",
                marginY: "5rem",
                backgroundColor: black,
                borderRadius: "2rem",
                paddingY: "5rem",
                }}
            >
                <Typography
                variant="h3"
                color={white}
                textAlign={"center"}
                fontFamily={font2}
                sx={{ marginY: "1rem" }}
                >
                Wanna join the interno?
                </Typography>
                <Typography
                variant="body1"
                color={white}
                textAlign={"center"}
                fontFamily={font}
                sx={{ marginY: "1rem" }}
                >
                It is a long established fact will be distracted.
                </Typography>
                <Button
                variant="contained"
                sx={{
                    backgroundColor: themeColor,
                    "&:hover": {
                    backgroundColor: themeColor2,
                    color: black,
                    },
                    display: "block",
                    marginY: "1rem",
                    marginX: "auto",
                    paddingY: "1rem",
                    paddingX: "2rem",
                    borderRadius: "20px",
                }}
                >
                Contact With Us &rarr;
                </Button>
            </Box>
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
                    Services
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
            {/* Services Section */}
            <Box sx={{ marginX: "auto", marginTop: "5rem" }}>
                <Grid
                container
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                >
                {service.services.map((item) => (
                    <ServiceBlock
                    title={item.title}
                    contain={item.contain}
                    id={item.id}
                    />
                ))}
                </Grid>
            </Box>
            {/* How we do Section */}
            <Box sx={{ marginX: "auto" }}></Box>
            {/* Contact Section */}
            <Box
                sx={{
                marginX: "1rem",
                marginY: "5rem",
                backgroundColor: black,
                borderRadius: "2rem",
                paddingY: "5rem",
                }}
            >
                <Typography
                variant="h4"
                color={white}
                textAlign={"center"}
                fontFamily={font2}
                sx={{ marginY: "1rem" }}
                >
                Wanna join the interno?
                </Typography>
                <Typography
                variant="body1"
                color={white}
                textAlign={"center"}
                fontFamily={font}
                sx={{ marginY: "1rem" }}
                >
                It is a long established fact will be distracted.
                </Typography>
                <Button
                variant="contained"
                sx={{
                    backgroundColor: themeColor,
                    "&:hover": {
                    backgroundColor: themeColor2,
                    color: black,
                    },
                    display: "block",
                    marginY: "1rem",
                    marginX: "auto",
                    paddingY: "1rem",
                    paddingX: "2rem",
                    borderRadius: "20px",
                }}
                >
                Contact With Us &rarr;
                </Button>
            </Box>
            </Box>
        )}
        </Box>
    );
}

export default ServicePage;
