import { Box,Typography,Button, useMediaQuery } from "@mui/material";
import React from "react";
import { black, desktopView, font, font2, mainWidth, mobileViewMax, mobileViewMin, themeColor, themeColor2, white } from "../../config";

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
        </Box>
    );
}

export default ServicePage;
