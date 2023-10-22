import { Box, useMediaQuery, Typography, Button } from "@mui/material";
import React from "react";
import {
    black,
    desktopView,
    font2,
    mainWidth,
    mobileViewMax,
    mobileViewMin,
    themeColor,
} from "../../config";
import errorImg from "../../assets/img/404/Photo.jpg";

function Error404() {
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
                marginTop: "5rem",
                width: mainWidth,
                marginX: "auto",
                display: "flex",
            }}
            >
            <Box
                sx={{
                flex: 1,
                height: "80vh",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                }}
            >
                <Box sx={{ width: "70%" }}>
                <Typography
                    sx={{ fontFamily: font2, color: themeColor, fontSize: "10rem" }}
                >
                    404
                </Typography>
                <Typography
                    variant="h5"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                >
                    We are sorry, but the page you requested was not found
                </Typography>
                <Button
                    variant="contained"
                    href="/"
                    sx={{
                    backgroundColor: black,
                    "&:hover": {
                        backgroundColor: themeColor,
                    },
                    marginY: "1rem",
                    paddingY: "1rem",
                    paddingX: "2rem",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    }}
                >
                    Back to Home &rarr;
                </Button>
                </Box>
            </Box>
            <Box
                sx={{
                flex: 1,
                height: "80vh",
                background: `url(${errorImg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderEndStartRadius: "14rem",
                }}
            ></Box>
            </Box>
        )}

        {/* ----------------- For Mobile Phones ----------------- */}
        {mobilePhoneScreen && (
            <Box sx={{marginTop:"4rem",display:"flex", flexDirection:"column",alignItems:"center"}}>
                <Typography
                    sx={{ fontFamily: font2, color: themeColor, fontSize: "7rem",textAlign:"center" }}
                >
                    404
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontFamily: font2 , textAlign:"center"}}
                >
                    We are sorry, but the page you requested was not found
                </Typography>
                <Button
                    variant="contained"
                    href="/"
                    sx={{
                    backgroundColor: black,
                    "&:hover": {
                        backgroundColor: themeColor,
                    },
                    marginY: "1rem",
                    paddingY: "1rem",
                    paddingX: "2rem",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    }}
                >
                    Back to Home &rarr;
                </Button>
            </Box>
        )}
        </Box>
    );
}

export default Error404;
