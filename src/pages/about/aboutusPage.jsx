import {
    Box,
    Typography,
    Button,
    TextField,
    useMediaQuery,
} from "@mui/material";
import React from "react";
import banner from "../../assets/img/AboutBanner.jpg";
import whatwedo from "../../assets/img/AboutPage/Photo-1.jpg";
import theresult from "../../assets/img/AboutPage/Photo.jpg";
import { mainWidth, themeColor2, white, themeColor, black, desktopView, mobileViewMax, mobileViewMin, font, font2 } from "../../config";
import { about } from "./aboutInfo";
import PeopleBlock from "./peopleBlock";
import Banner from "../../components/banner/banner";

function AboutusPage() {

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
            <Banner img={banner} title={"About Us"} subTitle={"About Us"} />
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
                    fontFamily={font2}
                    textAlign={"center"}
                >
                    “
                </Typography>
                <Typography
                    variant="h6"
                    color="initial"
                    fontFamily={font2}
                    textAlign={"center"}
                    sx={{ fontStyle: "italic" }}
                >
                    I like an interior that defies labeling. I don't really want
                    someone to walk into a room and know that I did it
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    textAlign={"center"}
                    sx={{ marginY: "1.5rem" }} fontFamily={font}
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
                    fontFamily={font2}
                    sx={{ marginY: "1rem" }}
                >
                    What We Do
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginY: "1rem" }} fontFamily={font}
                >
                    It is a long established fact that a reader will be distracted
                    by the of readable content of a page when lookings at its
                    layouts the points of using that it has a more-or-less normal.
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
                    fontFamily={font2}
                    sx={{ marginY: "1rem" }}
                >
                    The End Result
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginY: "1rem" }} fontFamily={font}
                >
                    It is a long established fact that a reader will be distracted
                    by the of readable content of a page when lookings at its
                    layouts the points of using that it has a more-or-less normal.
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
                    Our Portfolio &rarr;
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
                    paddingY: "5rem",
                }}
                >
                <Typography
                    variant="h4"
                    color="initial"
                    fontFamily={font2}
                    textAlign={"center"}
                    sx={{ width: "400px", textAlign: "center", margin: "auto" }}
                >
                    What the People Thinks About Us
                </Typography>
                <Box
                    sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginY: "2rem",
                    }}
                >
                    {about.AboutUsSection.map((item) => (
                    <PeopleBlock
                        img={item.img}
                        name={item.name}
                        address={item.address}
                        tel={item.tel}
                        mail={item.mail}
                        flex={1}
                    />
                    ))}
                </Box>
                </Box>
            </Box>
            {/* Forum Section */}
            <Box sx={{ width: mainWidth, marginX: "auto", marginY: "5rem" }}>
                <Typography
                variant="h4"
                color="initial"
                fontFamily={font2}
                textAlign={"center"}
                sx={{ width: "500px", textAlign: "center", margin: "1rem auto" }}
                >
                Creative project? Let's have a productive talk.
                </Typography>
                <Box
                sx={{
                    width: "800px",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
                >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    value={null}
                    onChange={null}
                    sx={{ flex: 1, margin: "1rem" }}
                    />
                    <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    value={null}
                    onChange={null}
                    sx={{ flex: 1, margin: "1rem" }}
                    />
                </Box>
                <TextField
                    id="standard-basic"
                    label="Message"
                    variant="standard"
                    value={null}
                    onChange={null}
                    sx={{ flex: 1, margin: "1rem" }}
                    multiline
                    rows={6}
                />
                </Box>
                <Button
                variant="contained"
                sx={{
                    backgroundColor: black,
                    "&:hover": {
                    backgroundColor: themeColor,
                    },
                    display: "block",
                    marginY: "1rem",
                    marginX: "auto",
                    paddingY: "1rem",
                    paddingX: "2rem",
                    borderRadius: "20px",
                }}
                >
                Send Now &rarr;
                </Button>
            </Box>
            </Box>
        )}

        {/* ----------------- For Mobile Phones ----------------- */}
        {mobilePhoneScreen && (
            <Box>
            {/* Banner Section */}
            <Banner img={banner} title={"About Us"} subTitle={"About Us"} />
            {/* Quotes Section */}
            <Box
                sx={{
                marginX: "1rem",
                marginY: "4rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <Box
                sx={{
                    border: `solid 9px ${themeColor2}`,
                    padding: "2rem 4rem",
                    borderRadius: "3rem",
                    width: "60vw",
                }}
                >
                <Typography
                    variant="h2"
                    color="initial"
                    fontFamily={font2}
                    textAlign={"center"}
                >
                    “
                </Typography>
                <Typography
                    variant="h6"
                    color="initial"
                    fontFamily={font2}
                    textAlign={"center"}
                    sx={{ fontStyle: "italic" }}
                >
                    I like an interior that defies labeling. I don't really want
                    someone to walk into a room and know that I did it
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    textAlign={"center"}
                    sx={{ marginY: "1.5rem" }} fontFamily={font}
                >
                    -BUNNY WILLIAMS-
                </Typography>
                </Box>
            </Box>
            {/* What we do Section */}
            <Box
                sx={{
                marginX: "1rem",
                marginY: "1rem",
                display: "flex",
                }}
            >
                <Box sx={{ flex: 1, paddingY: "2rem", }}>
                <Typography
                    variant="h4"
                    color="initial"
                    fontFamily={font2}
                    sx={{ marginY: "1rem" }}
                >
                    What We Do
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginY: "1rem" }} fontFamily={font}
                >
                    It is a long established fact that a reader will be distracted
                    by the of readable content of a page when lookings at its
                    layouts the points of using that it has a more-or-less normal.
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
            {/* The Result Section */}
            <Box
                sx={{
                marginX: "1rem",
                marginY: "1rem",
                display: "flex",
                }}
            >
                
                <Box sx={{ flex: 1, paddingY: "2rem", }}>
                <Typography
                    variant="h4"
                    color="initial"
                    fontFamily={font2}
                    sx={{ marginY: "1rem" }}
                >
                    The End Result
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginY: "1rem" }} fontFamily={font}
                >
                    It is a long established fact that a reader will be distracted
                    by the of readable content of a page when lookings at its
                    layouts the points of using that it has a more-or-less normal.
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
                    Our Portfolio &rarr;
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
                    marginX: "1rem",
                    marginY: "5rem",
                    paddingY: "5rem",
                }}
                >
                <Typography
                    variant="h4"
                    color="initial"
                    fontFamily={font2}
                    textAlign={"center"}
                    sx={{ width: "300px", textAlign: "center", margin: "auto" }}
                >
                    What the People Thinks About Us
                </Typography>
                <Box
                    sx={{
                    display: "flex",
                    flexDirection:"column",
                    justifyContent: "space-evenly",
                    marginY: "2rem",
                    }}
                >
                    {about.AboutUsSection.map((item) => (
                    <PeopleBlock
                        img={item.img}
                        name={item.name}
                        address={item.address}
                        tel={item.tel}
                        mail={item.mail}
                        flex={null}
                    />
                    ))}
                </Box>
                </Box>
            </Box>
            {/* Forum Section */}
            <Box sx={{ marginX: "1rem", marginY: "5rem" }}>
                <Typography
                variant="h4"
                color="initial"
                fontFamily={font2}
                textAlign={"center"}
                sx={{ textAlign: "center", margin: "1rem auto" }}
                >
                Creative project? Let's have a productive talk.
                </Typography>
                <Box
                sx={{
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
                >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    value={null}
                    onChange={null}
                    sx={{ flex: 1, margin: "1rem" }}
                    />
                    <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    value={null}
                    onChange={null}
                    sx={{ flex: 1, margin: "1rem" }}
                    />
                </Box>
                <TextField
                    id="standard-basic"
                    label="Message"
                    variant="standard"
                    value={null}
                    onChange={null}
                    sx={{ flex: 1, margin: "1rem" }}
                    multiline
                    rows={6}
                />
                </Box>
                <Button
                variant="contained"
                sx={{
                    backgroundColor: black,
                    "&:hover": {
                    backgroundColor: themeColor,
                    },
                    display: "block",
                    marginY: "1rem",
                    marginX: "auto",
                    paddingY: "1rem",
                    paddingX: "2rem",
                    borderRadius: "20px",
                }}
                >
                Send Now &rarr;
                </Button>
            </Box>
            </Box>
        )}
        </Box>
    );
}

export default AboutusPage;
