import { Box, useMediaQuery,Typography } from "@mui/material";
import React from "react";
import {
    desktopView,
    font,
    font2,
    mainWidth,
    mobileViewMax,
    mobileViewMin,
    white,
} from "../../config";

function Banner(props) {
    const { img, title, subTitle } = props;

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
                background: `url(${img})`,
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
                    padding: "3rem 6rem",
                    borderTopLeftRadius: "2rem",
                    borderTopRightRadius: "2rem",
                }}
                >
                <Typography variant="h3" color="initial" fontFamily={font2}>
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    textAlign={"center"}
                    fontFamily={font}
                >
                    Home / {subTitle}
                </Typography>
                </Box>
            </Box>
            </Box>
        )}
        {/* ----------------- For Mobile Phones ----------------- */}
        {mobilePhoneScreen && (
            <Box
            sx={{
                background: `url(${img})`,
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
                    padding: "2rem 4rem",
                    borderTopLeftRadius: "2rem",
                    borderTopRightRadius: "2rem",
                }}
                >
                <Typography variant="h4" color="initial" fontFamily={font2}>
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="initial"
                    textAlign={"center"}
                    fontFamily={font}
                >
                    Home / {subTitle}
                </Typography>
                </Box>
            </Box>
            </Box>
        )}
        </Box>
    );
}

export default Banner;
