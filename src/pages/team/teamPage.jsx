import { Box, Typography, useMediaQuery, Grid } from "@mui/material";
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
import banner from "../../assets/img/Team/banner.jpg";
import { team } from "./teamInfo";
import MemberBlock from "./memberBlock";

function TeamPage() {

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
                    padding: "3rem 6rem",
                    borderTopLeftRadius: "2rem",
                    borderTopRightRadius: "2rem",
                    }}
                >
                    <Typography variant="h3" color="initial" fontFamily={font2}>
                    Our Professional
                    </Typography>
                    <Typography
                    variant="body1"
                    color="initial"
                    textAlign={"center"}
                    fontFamily={font}
                    >
                    Home / Team
                    </Typography>
                </Box>
                </Box>
            </Box>
            {/* Team Section */}
            <Box sx={{ width: mainWidth, marginX: "auto", marginY: "4rem" }}>
                <Grid
                container
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                >
                {team.member.map((item) => (
                    <MemberBlock
                    id = {item.id}
                    name={item.name}
                    img={item.img}
                    designation={item.designation}
                    fb={item.FB_link}
                    twitter={item.Twitter_link}
                    linkedin={item.LinkedIn_link}
                    instagram={item.Instagram_link}
                    />
                ))}
                </Grid>
            </Box>
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
                    padding: "2rem 2rem",
                    borderTopLeftRadius: "2rem",
                    borderTopRightRadius: "2rem",
                    }}
                >
                    <Typography variant="h4" color="initial" fontFamily={font2} textAlign={"center"}>
                    Our Professional
                    </Typography>
                    <Typography
                    variant="body2"
                    color="initial"
                    textAlign={"center"}
                    fontFamily={font}
                    >
                    Home / Team
                    </Typography>
                </Box>
                </Box>
            </Box>
            {/* Team Section */}
            <Box sx={{ marginX: "auto", marginY: "3rem" }}>
                <Grid
                container
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                >
                {team.member.map((item) => (
                    <MemberBlock
                    id = {item.id}
                    name={item.name}
                    img={item.img}
                    designation={item.designation}
                    fb={item.FB_link}
                    twitter={item.Twitter_link}
                    linkedin={item.LinkedIn_link}
                    instagram={item.Instagram_link}
                    />
                ))}
                </Grid>
            </Box>
            </Box>
        )}
        </Box>
    );
}

export default TeamPage;
