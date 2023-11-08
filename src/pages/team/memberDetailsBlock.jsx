import { Box, Typography, useMediaQuery } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import React from "react";
import {
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
import { useParams } from "react-router-dom";
import { team } from "./teamInfo";
import Error404 from "../404/404";
import banner from "../../assets/img/Team/banner2.jpg";
import emailIcon from "../../assets/img/Team/mailIcon.png";
import phoneIcon from "../../assets/img/Team/phoneIcon.png";
import worldIcon from "../../assets/img/Team/worldIcon.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinearProgressCustomized from "./LinearProgressCustomized";

function MemberDetailsBlock() {
    const { id } = useParams();
    const selectedMember = team.member.find((item) => item.id === parseInt(id));

    // Responsive settings
    const desktopScreen = useMediaQuery(desktopView);
    const mobilePhoneScreenMax = useMediaQuery(mobileViewMax);
    const mobilePhoneScreenMin = useMediaQuery(mobileViewMin);
    const mobilePhoneScreen = mobilePhoneScreenMax && mobilePhoneScreenMin;

    if (!selectedMember) {
        return <Error404 />;
    }

    return (
        <Box>
        {/* ----------------- For Desktops ----------------- */}
        {desktopScreen && (
            <Box sx={{ marginY: "5rem" }}>
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
                    Professional Single
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
            {/* Member Details Section */}
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
                    background: `url(${selectedMember.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    marginX: "1.5rem",
                    borderRadius: "1.5rem",
                }}
                ></Box>
                <Box sx={{ flex: 1, padding: "3rem 1rem" }}>
                <Typography
                    variant="h3"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                >
                    {selectedMember.name}
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontFamily: font }}
                >
                    {selectedMember.designation}
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginY: "1.5rem", fontFamily: font }}
                >
                    {selectedMember.mini_bio}
                </Typography>
                <Box
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    marginY: "1.5rem",
                    }}
                >
                    <img src={emailIcon} alt="Icon" width={"50px"} />
                    <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginLeft: "1rem" }}
                    >
                    {selectedMember.email}
                    </Typography>
                </Box>
                <Box
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    marginY: "1.5rem",
                    }}
                >
                    <img src={phoneIcon} alt="Icon" width={"50px"} />
                    <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginLeft: "1rem" }}
                    >
                    {selectedMember.phone_number}
                    </Typography>
                </Box>
                <Box
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    marginY: "1.5rem",
                    }}
                >
                    <img src={worldIcon} alt="Icon" width={"50px"} />
                    <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginLeft: "1rem" }}
                    >
                    {selectedMember.website}
                    </Typography>
                </Box>
                </Box>
            </Box>
            {/* Bio Section */}
            <Box sx={{ width: mainWidth, marginY: "2rem", marginX: "auto" }}>
                <Typography
                variant="h3"
                color="initial"
                sx={{ fontFamily: font2, marginY: "0.5rem" }}
                >
                Short Biography​{" "}
                </Typography>
                <Typography
                variant="body1"
                color="initial"
                sx={{ fontFamily: font, marginY: "0.5rem", textAlign: "justify" }}
                >
                {selectedMember.brief_description}
                </Typography>
            </Box>
            {/* Sub Bio Section */}
            <Box
                sx={{
                width: mainWidth,
                marginX: "auto",
                marginY: "1rem",
                display: "flex",
                }}
            >
                <Box sx={{ flex: 1, margin: "1rem" }}>
                <Typography
                    variant="h5"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                >
                    Simplicity and Functionality
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginY: "0.5rem" }}
                >
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus. posuere in.
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginY: "0.5rem" }}
                >
                    There are many variations of passages of Lorem Ipsum from
                    available, but the majority have suffered alteration in some
                    form, njecthumour
                </Typography>
                <Box sx={{ padding: "1rem" }}>
                    {selectedMember.skills.map((item) => (
                    <Box sx={{ marginY: "0.8rem" }}>
                        <Typography variant="body1" color="initial">
                        {item.name}
                        </Typography>
                        <LinearProgressCustomized
                        value={item.percentage}
                        />
                    </Box>
                    ))}
                </Box>
                </Box>
                <Box sx={{ flex: 1, margin: "1rem" }}>
                <Typography
                    variant="h5"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                >
                    Questions & Answer
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginY: "0.5rem" }}
                >
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus. posuere in.
                </Typography>
                <Box sx={{ padding: "1rem" }}>
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Website & Mobile App Design?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: themeColor2 }}>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>How to Easy Successful Projects?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: themeColor2 }}>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>International Trade Experience?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: themeColor2 }}>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                </Box>
                </Box>
            </Box>
            </Box>
        )}
        {/* ----------------- For Mobile Phones ----------------- */}
        {mobilePhoneScreen && (
            <Box sx={{ marginY: "4rem" }}>
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
                    <Typography
                    variant="h4"
                    color="initial"
                    fontFamily={font2}
                    textAlign={"center"}
                    >
                    Professional Single
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
            {/* Member Details Section */}
            <Box
                sx={{
                marginTop: "5rem",
                marginX: "auto",
                }}
            >
                <Box
                sx={{
                    flex: 1,
                    background: `url(${selectedMember.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    marginX: "1.5rem",
                    borderRadius: "1.5rem",
                    height: "70vh",
                }}
                ></Box>
                <Box sx={{ flex: 1, padding: "3rem 1rem" }}>
                <Typography
                    variant="h4"
                    color="initial"
                    sx={{ fontFamily: font2 }}
                >
                    {selectedMember.name}
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ fontFamily: font }}
                >
                    {selectedMember.designation}
                </Typography>
                <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginY: "1.5rem", fontFamily: font }}
                >
                    {selectedMember.mini_bio}
                </Typography>
                <Box
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    marginY: "1.5rem",
                    }}
                >
                    <img src={emailIcon} alt="Icon" width={"50px"} />
                    <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginLeft: "1rem" }}
                    >
                    {selectedMember.email}
                    </Typography>
                </Box>
                <Box
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    marginY: "1.5rem",
                    }}
                >
                    <img src={phoneIcon} alt="Icon" width={"50px"} />
                    <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginLeft: "1rem" }}
                    >
                    {selectedMember.phone_number}
                    </Typography>
                </Box>
                <Box
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    marginY: "1.5rem",
                    }}
                >
                    <img src={worldIcon} alt="Icon" width={"50px"} />
                    <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginLeft: "1rem" }}
                    >
                    {selectedMember.website}
                    </Typography>
                </Box>
                </Box>
            </Box>
            {/* Bio Section */}
            <Box sx={{ marginY: "2rem", marginX: "1rem" }}>
                <Typography
                variant="h4"
                color="initial"
                sx={{ fontFamily: font2, marginY: "0.5rem" }}
                >
                Short Biography​{" "}
                </Typography>
                <Typography
                variant="body2"
                color="initial"
                sx={{ fontFamily: font, marginY: "0.5rem", textAlign: "justify" }}
                >
                {selectedMember.brief_description}
                </Typography>
            </Box>
            {/* Sub Bio Section */}
            <Box sx={{ margin: "1rem" }}>
                <Typography variant="h5" color="initial" sx={{ fontFamily: font2 }}>
                Simplicity and Functionality
                </Typography>
                <Typography
                variant="body2"
                color="initial"
                sx={{ marginY: "0.5rem" }}
                >
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus. posuere in.
                </Typography>
                <Typography
                variant="body2"
                color="initial"
                sx={{ marginY: "0.5rem" }}
                >
                There are many variations of passages of Lorem Ipsum from
                available, but the majority have suffered alteration in some form,
                njecthumour
                </Typography>
                <Box sx={{ padding: "1rem" }}>
                {selectedMember.skills.map((item) => (
                    <Box sx={{ marginY: "0.8rem" }}>
                    <Typography variant="body1" color="initial">
                        {item.name}
                    </Typography>
                    <LinearProgressCustomized
                        value={item.percentage}
                    />
                    </Box>
                ))}
                </Box>
            </Box>
            <Box sx={{ margin: "1rem" }}>
                <Typography variant="h5" color="initial" sx={{ fontFamily: font2 }}>
                Questions & Answer
                </Typography>
                <Typography
                variant="body2"
                color="initial"
                sx={{ marginY: "0.5rem" }}
                >
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus. posuere in.
                </Typography>
                <Box sx={{ padding: "1rem" }}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Website & Mobile App Design?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: themeColor2 }}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>How to Easy Successful Projects?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: themeColor2 }}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>International Trade Experience?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: themeColor2 }}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </Box>
            </Box>
            </Box>
        )}
        </Box>
    );
}

export default MemberDetailsBlock;
