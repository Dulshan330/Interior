import { Box, useMediaQuery, Grid } from "@mui/material";
import React from "react";
import {
    desktopView,
    mainWidth,
    mobileViewMax,
    mobileViewMin,
    white,
} from "../../config";
import banner from "../../assets/img/Team/banner.jpg";
import { team } from "./teamInfo";
import MemberBlock from "./memberBlock";
import Banner from "../../components/banner/banner";

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
            <Box>
            {/* Banner Section */}
            <Banner img={banner} title={"Our Professional"} subTitle={"Team"} />
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
            <Box>
            {/* Banner Section */}
            <Banner img={banner} title={"Our Professional"} subTitle={"Team"} />
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
