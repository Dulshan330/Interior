import { Box, Typography, Button } from "@mui/material";
import React from "react";
import banner from "../../assets/img/AboutBanner.png";
import whatwedo from "../../assets/img/AboutPage/Photo-1.jpg";
import theresult from "../../assets/img/AboutPage/Photo.jpg";
import { mainWidth, themeColor2, white, themeColor, black } from "../../config";
import { about } from "./aboutInfo";

function AboutusPage() {
    return (
        <Box>
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
                <Typography
                variant="h3"
                color="initial"
                fontFamily={"DM Serif Display"}
                >
                About Us
                </Typography>
                <Typography variant="body1" color="initial" textAlign={"center"}>
                Home / About Us
                </Typography>
            </Box>
            </Box>
        </Box>
        {/* Quotes Section */}
        <Box
            sx={{
            width: mainWidth,
            marginX: "auto",
            marginY: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            <Box
            sx={{
                border: `solid 9px ${themeColor2}`,
                padding: "3rem 5rem",
                borderRadius: "3rem",
                width: "35vw",
            }}
            >
            <Typography
                variant="h2"
                color="initial"
                fontFamily={"DM Serif Display"}
                textAlign={"center"}
            >
                “
            </Typography>
            <Typography
                variant="h6"
                color="initial"
                fontFamily={"DM Serif Display"}
                textAlign={"center"}
                sx={{ fontStyle: "italic" }}
            >
                I like an interior that defies labeling. I don't really want someone
                to walk into a room and know that I did it
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                textAlign={"center"}
                sx={{ marginY: "1.5rem" }}
            >
                -BUNNY WILLIAMS-
            </Typography>
            </Box>
        </Box>
        {/* What we do Section */}
        <Box
            sx={{
            width: mainWidth,
            marginX: "auto",
            marginY: "5rem",
            display: "flex",
            }}
        >
            <Box sx={{ flex: 1, paddingY: "3rem", paddingRight: "3rem" }}>
            <Typography
                variant="h4"
                color="initial"
                fontFamily={"DM Serif Display"}
                sx={{ marginY: "1rem" }}
            >
                What We Do
            </Typography>
            <Typography variant="body1" color="initial" sx={{ marginY: "1rem" }}>
                It is a long established fact that a reader will be distracted by
                the of readable content of a page when lookings at its layouts the
                points of using that it has a more-or-less normal.
            </Typography>
            <Button
                variant="contained"
                sx={{
                backgroundColor: black,
                "&:hover": {
                    backgroundColor: themeColor,
                },
                marginY: "1rem",
                paddingY: "1rem",
                paddingX: "2rem",
                borderRadius: "20px",
                }}
            >
                Our concept &rarr;
            </Button>
            </Box>
            <Box
            sx={{
                flex: 1,
                backgroundImage: `url(${whatwedo})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "3rem",
            }}
            ></Box>
        </Box>
        {/* The Result Section */}
        <Box
            sx={{
            width: mainWidth,
            marginX: "auto",
            marginY: "5rem",
            display: "flex",
            }}
        >
            <Box
            sx={{
                flex: 1,
                backgroundImage: `url(${theresult})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "3rem",
            }}
            ></Box>
            <Box sx={{ flex: 1, paddingY: "3rem", paddingLeft: "3rem" }}>
            <Typography
                variant="h4"
                color="initial"
                fontFamily={"DM Serif Display"}
                sx={{ marginY: "1rem" }}
            >
                What We Do
            </Typography>
            <Typography variant="body1" color="initial" sx={{ marginY: "1rem" }}>
                It is a long established fact that a reader will be distracted by
                the of readable content of a page when lookings at its layouts the
                points of using that it has a more-or-less normal.
            </Typography>
            <Button
                variant="contained"
                sx={{
                backgroundColor: black,
                "&:hover": {
                    backgroundColor: themeColor,
                },
                marginY: "1rem",
                paddingY: "1rem",
                paddingX: "2rem",
                borderRadius: "20px",
                }}
            >
                Our concept &rarr;
            </Button>
            </Box>
        </Box>
        {/* About us Section */}
        <Box
            sx={{
            backgroundColor: themeColor2,
            }}
        >
            <Box
            sx={{
                width: mainWidth,
                marginX: "auto",
                marginY: "5rem",
                paddingY:"5rem"
            }}
            >
            <Typography
                variant="h4"
                color="initial"
                fontFamily={"DM Serif Display"}
                textAlign={"center"}
            >
                What the People Thinks About Us
            </Typography>
            <Box sx={{display:'flex',justifyContent:"space-evenly"}}>
                {/* do updates */}
            </Box>
            </Box>
        </Box>
        </Box>
    );
}

export default AboutusPage;
