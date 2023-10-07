import { Box, Typography, List, useMediaQuery } from "@mui/material";
import React from "react";
import logo from "../../assets/img/Logo.jpg";
import { footer } from "./footerInfo";
import FooterLinkBloack from "./footerLinkBlock";
import { desktopView, mainWidth, mobileViewMax, mobileViewMin } from "../../config";

function Footer() {
    const flexboxstyle = { padding: "1.5rem", flex: 1 };

    // Responsive settings
    const desktopScreen = useMediaQuery(desktopView);
    const mobilePhoneScreenMax = useMediaQuery(mobileViewMax);
    const mobilePhoneScreenMin = useMediaQuery(mobileViewMin);
    const mobilePhoneScreen = mobilePhoneScreenMax && mobilePhoneScreenMin;

    return (
        <Box>
        {/* For Desktops */}
        {desktopScreen && (
            <Box>
            <Box sx={{ fontFamily: "roboto,sans-serif" }}>
                <Box
                sx={{
                    margin: "auto",
                    width: mainWidth,
                    display: "flex",
                    justifyContent: "space-between",
                }}
                >
                <Box sx={flexboxstyle}>
                    <img
                    src={logo}
                    alt="Logo"
                    style={{ width: "auto", height: "40px" }}
                    />
                    <br />
                    <Typography variant="body1" color="initial">
                    {footer.description}
                    </Typography>
                </Box>

                <Box sx={flexboxstyle}>
                    <Typography variant="h6" color="initial">
                    {footer.pagesTitle}
                    </Typography>
                    <List>
                    {footer.pages.map((item) => (
                        <FooterLinkBloack text={item.text} link={item.link} />
                    ))}
                    </List>
                </Box>

                <Box sx={flexboxstyle}>
                    <Typography variant="h6" color="initial">
                    {footer.servicesTitle}
                    </Typography>
                    <List>
                    {footer.services.map((item) => (
                        <FooterLinkBloack text={item.text} link={item.link} />
                    ))}
                    </List>
                </Box>

                <Box sx={flexboxstyle}>
                    <Typography variant="h6" color="initial">
                    {footer.contactTitle}
                    </Typography>
                    <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginY: "0.5rem" }}
                    >
                    {footer.address}
                    </Typography>
                    <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginY: "0.5rem" }}
                    >
                    {footer.mail}
                    </Typography>
                    <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginY: "0.5rem" }}
                    >
                    {footer.phone}
                    </Typography>
                </Box>
                </Box>
            </Box>
            <Box
                sx={{
                marginX: "auto",
                paddingY: "2rem",
                borderTop: "solid .5px #B0B0B0",
                }}
            >
                <Typography
                variant="body1"
                color="initial"
                textAlign={"center"}
                sx={{}}
                >
                Copyright © Interno | Designed by Victorflow Templates - Powered
                by Webflow
                </Typography>
            </Box>
            </Box>
        )}
        </Box>
    );
}

export default Footer;
