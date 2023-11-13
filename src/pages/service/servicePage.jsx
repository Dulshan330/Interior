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
import HowWeWorkBlock from "./howWeWorkBlock";
import Banner from "../../components/banner/banner";

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
            <Box>
            {/* Banner Section */}
            <Banner img={banner} title={"Services"} subTitle={"Services"} />
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
            {/* How We Work Section */}
            <Box
                sx={{
                width: mainWidth,
                marginY: "5rem",
                marginX: "auto",
                backgroundColor: themeColor2,
                borderRadius: "4rem",
                paddingY: "6rem",
                paddingX: "3rem",
                }}
            >
                <Typography
                variant="h3"
                color="initial"
                sx={{ textAlign: "center", fontFamily: font2 }}
                >
                How We Work
                </Typography>
                <Typography
                variant="body1"
                color="initial"
                sx={{ textAlign: "center", fontFamily: font, marginY: "0.5rem" }}
                >
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                </Typography>
                <Box sx={{ marginTop: "4rem" }}>
                {service.howWeWork.map((item) => (
                    <HowWeWorkBlock
                    img1={item.img1}
                    icon1={item.icon1}
                    number1={item.number1}
                    title1={item.title1}
                    description1={item.description1}
                    img2={item.img2}
                    icon2={item.icon2}
                    number2={item.number2}
                    title2={item.title2}
                    description2={item.description2}
                    />
                ))}
                </Box>
            </Box>
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
            <Box>
            {/* Banner Section */}
            <Banner img={banner} title={"Services"} subTitle={"Services"} />
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
            {/* How We Work Section */}
            <Box
                sx={{
                marginTop: "4rem",
                marginX: "auto",
                backgroundColor: themeColor2,
                borderRadius: "4rem",
                paddingY: "2rem",
                paddingX: "3rem",
                }}
            >
                <Typography
                variant="h4"
                color="initial"
                sx={{ textAlign: "center", fontFamily: font2 }}
                >
                How We Work
                </Typography>
                <Typography
                variant="body1"
                color="initial"
                sx={{ textAlign: "center", fontFamily: font, marginY: "0.5rem" }}
                >
                It is a long established fact will be distracted. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                </Typography>
                <Box sx={{ marginTop: "3rem" }}>
                {service.howWeWork.map((item) => (
                    <HowWeWorkBlock
                    img1={item.img1}
                    icon1={item.icon1}
                    number1={item.number1}
                    title1={item.title1}
                    description1={item.description1}
                    img2={item.img2}
                    icon2={item.icon2}
                    number2={item.number2}
                    title2={item.title2}
                    description2={item.description2}
                    />
                ))}
                </Box>
            </Box>
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
