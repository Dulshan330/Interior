import {
    Box,
    Typography,
    useMediaQuery,
    List,
    ListItem,
    Grid,
    Button
} from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { service } from "./serviceInfo";
import Error404 from "../404/404";
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
import banner from "../../assets/img/Services/singleServiceBanner.jpg";
import result from "../../assets/img/Services/result.jpg";
import Counter from "../../components/counter/counter";
import ClientLogo from "../../components/clientLogo/clientLogo";

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
            {/* Point Section */}
            <Box
                sx={{
                width: mainWidth,
                marginX: "auto",
                marginY: "4rem",
                }}
            >
                <Grid
                container
                display={"flex"}
                justifyContent={"space-around"}
                alignItems={"center"}
                >
                <Box sx={{ margin: "2rem", width: "fit-content" }}>
                    <Typography
                    variant="h3"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                    >
                    {selectedService.usesTitle}
                    </Typography>
                    <List>
                    {selectedService.uses[0] &&
                        Object.values(selectedService.uses[0]).map(
                        (item, index) => (
                            <ListItem>
                            <Typography
                                variant="body1"
                                color="initial"
                                key={index}
                                sx={{
                                fontFamily: font,
                                marginRight: "0.5rem",
                                fontWeight: "bold",
                                color: themeColor,
                                }}
                            >
                                {index + 1}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="initial"
                                key={index}
                                sx={{ fontFamily: font }}
                            >
                                {item}
                            </Typography>
                            </ListItem>
                        )
                        )}
                    </List>
                </Box>
                <Box sx={{ margin: "2rem", width: "fit-content" }}>
                    <Typography
                    variant="h3"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                    >
                    {selectedService.makeAnArtTitle}
                    </Typography>
                    <List>
                    {selectedService.makeAnArt[0] &&
                        Object.values(selectedService.makeAnArt[0]).map(
                        (item, index) => (
                            <ListItem>
                            <Typography
                                variant="body1"
                                color="initial"
                                key={index}
                                sx={{
                                fontFamily: font,
                                marginRight: "0.5rem",
                                fontWeight: "bold",
                                color: themeColor,
                                }}
                            >
                                {index + 1}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="initial"
                                key={index}
                                sx={{ fontFamily: font }}
                            >
                                {item}
                            </Typography>
                            </ListItem>
                        )
                        )}
                    </List>
                </Box>
                </Grid>
            </Box>
            {/* Result Section */}
            <Box
                sx={{
                width: mainWidth,
                marginX: "auto",
                marginY: "3rem",
                display: "flex",
                }}
            >
                <Box sx={{ flex: 1, background:`url(${result})`, backgroundSize:"cover", backgroundPosition:"center",borderRadius:"5rem" }}></Box>
                <Box sx={{ flex: 1, padding: "2rem" }}>
                <Typography variant="h3" color="initial" sx={{fontFamily:font2}}>
                    We love design. That's how we got here.
                </Typography>
                <Typography variant="body1" color="initial" sx={{marginY:"1rem"}}>It is a long established fact that a reader will be distracted by the of readable content .</Typography>
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
                    href=""
                    >
                    Our Portfolio &rarr;
                    </Button>
                </Box>
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
            {/* Point Section */}
            <Box
                sx={{
                marginX: "auto",
                marginY: "4rem",
                }}
            >
                <Grid
                container
                display={"flex"}
                justifyContent={"space-around"}
                alignItems={"center"}
                >
                <Box sx={{ margin: "2rem", width: "fit-content" }}>
                    <Typography
                    variant="h4"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                    >
                    {selectedService.usesTitle}
                    </Typography>
                    <List>
                    {selectedService.uses[0] &&
                        Object.values(selectedService.uses[0]).map(
                        (item, index) => (
                            <ListItem>
                            <Typography
                                variant="body2"
                                color="initial"
                                key={index}
                                sx={{
                                fontFamily: font,
                                marginRight: "0.5rem",
                                fontWeight: "bold",
                                color: themeColor,
                                }}
                            >
                                {index + 1}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="initial"
                                key={index}
                                sx={{ fontFamily: font }}
                            >
                                {item}
                            </Typography>
                            </ListItem>
                        )
                        )}
                    </List>
                </Box>
                <Box sx={{ margin: "2rem", width: "fit-content" }}>
                    <Typography
                    variant="h4"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                    >
                    {selectedService.makeAnArtTitle}
                    </Typography>
                    <List>
                    {selectedService.makeAnArt[0] &&
                        Object.values(selectedService.makeAnArt[0]).map(
                        (item, index) => (
                            <ListItem>
                            <Typography
                                variant="body2"
                                color="initial"
                                key={index}
                                sx={{
                                fontFamily: font,
                                marginRight: "0.5rem",
                                fontWeight: "bold",
                                color: themeColor,
                                }}
                            >
                                {index + 1}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="initial"
                                key={index}
                                sx={{ fontFamily: font }}
                            >
                                {item}
                            </Typography>
                            </ListItem>
                        )
                        )}
                    </List>
                </Box>
                </Grid>
            </Box>
            {/* Result Section */}
            <Box
                sx={{
                marginX: "auto",
                marginY: "3rem",
                }}
            >
                <Box sx={{ height:"50vh",margin:"1rem" ,background:`url(${result})`, backgroundSize:"cover", backgroundPosition:"center",borderRadius:"5rem" }}></Box>
                <Box sx={{ padding: "2rem" }}>
                <Typography variant="h4" color="initial" sx={{fontFamily:font2}}>
                    We love design. That's how we got here.
                </Typography>
                <Typography variant="body1" color="initial" sx={{marginY:"1rem"}}>It is a long established fact that a reader will be distracted by the of readable content .</Typography>
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
                    href=""
                    >
                    Our Portfolio &rarr;
                    </Button>
                </Box>
            </Box>
            {/* Counter Section */}
            <Counter />
            </Box>
        )}
        </Box>
    );
}

export default ServiceDetailsBlock;
