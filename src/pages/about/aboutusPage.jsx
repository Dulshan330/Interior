import { Box, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/img/AboutBanner.png";
import { mainWidth, white } from "../../config";

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
            </Box>
            </Box>
        </Box>
        </Box>
    );
}

export default AboutusPage;
