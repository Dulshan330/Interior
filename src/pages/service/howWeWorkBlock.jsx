import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import {
    desktopView,
    font,
    font2,
    mobileViewMax,
    mobileViewMin,
    white,
} from "../../config";

function HowWeWorkBlock(props) {
    const {
        img1,
        icon1,
        number1,
        title1,
        description1,
        img2,
        icon2,
        number2,
        title2,
        description2,
    } = props;

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
            <Box sx={{ display: "flex" }}>
                <Box
                sx={{
                    flex: 1,
                    background: `url(${img1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "right center",
                    margin: "2rem",
                    borderStartEndRadius: "5rem",
                    borderEndStartRadius: "15rem",
                }}
                ></Box>
                <Box sx={{ flex: 1, margin: "2rem", paddingY: "6rem" }}>
                <Box
                    sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    }}
                >
                    <img src={icon1} alt="Icon" />
                    <Typography
                    variant="h2"
                    color="initial"
                    sx={{ fontFamily: font2, color: white }}
                    >
                    {number1}
                    </Typography>
                </Box>
                <Box sx={{ marginY: "2rem" }}>
                    <Typography
                    variant="h4"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                    >
                    {title1}
                    </Typography>
                    <Typography variant="body1" color="initial" fontFamily={font}>
                    {description1}
                    </Typography>
                </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ flex: 1, margin: "2rem", paddingY: "6rem" }}>
                <Box
                    sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "1rem",
                    }}
                >
                    <img src={icon2} alt="Icon" />
                    <Typography
                    variant="h2"
                    color="initial"
                    sx={{ fontFamily: font2, color: white }}
                    >
                    {number2}
                    </Typography>
                </Box>
                <Box sx={{ marginY: "2rem" }}>
                    <Typography
                    variant="h4"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                    >
                    {title2}
                    </Typography>
                    <Typography variant="body1" color="initial" fontFamily={font}>
                    {description2}
                    </Typography>
                </Box>
                </Box>
                <Box
                sx={{
                    flex: 1,
                    background: `url(${img2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "right center",
                    margin: "2rem",
                    borderStartEndRadius: "5rem",
                    borderEndStartRadius: "15rem",
                }}
                ></Box>
            </Box>
            </Box>
        )}
        {/* ----------------- For Mobile Phones ----------------- */}
        {mobilePhoneScreen && (
            <Box>
            <Box sx={{ flex: 1, margin: "2rem", paddingY: "0.5rem" }}>
                <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
                >
                <img src={icon1} alt="Icon" width={"60px"} />
                <Typography
                    variant="h2"
                    color="initial"
                    sx={{ fontFamily: font2, color: white }}
                >
                    {number1}
                </Typography>
                </Box>
                <Box sx={{ marginY: "2rem" }}>
                <Typography
                    variant="h4"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                >
                    {title1}
                </Typography>
                <Typography variant="body1" color="initial" fontFamily={font}>
                    {description1}
                </Typography>
                </Box>
            </Box>
            <Box sx={{ flex: 1, margin: "2rem", paddingY: "0.5rem" }}>
                <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "1rem",
                }}
                >
                <img src={icon2} alt="Icon" width={"60px"} />
                <Typography
                    variant="h2"
                    color="initial"
                    sx={{ fontFamily: font2, color: white }}
                >
                    {number2}
                </Typography>
                </Box>
                <Box sx={{ marginY: "2rem" }}>
                <Typography
                    variant="h4"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                >
                    {title2}
                </Typography>
                <Typography variant="body1" color="initial" fontFamily={font}>
                    {description2}
                </Typography>
                </Box>
            </Box>
            </Box>
        )}
        </Box>
    );
}

export default HowWeWorkBlock;
