import { Box, Typography } from "@mui/material";
import React from "react";
import { black, font, font2 } from "../../config";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function MemberBlock(props) {
    
    const { id, img, name, designation, fb, twitter, linkedin, instagram } =
        props;

    return (
        <Box
        sx={{
            margin: "1.5rem 0.5rem",
            borderRadius: "1rem",
            height: "auto",
            width: "300px",
        }}
        >
        <Link
            to={`/team/${id}`}
            style={{
            textDecoration: "none",
            }}
        >
            <Box
            sx={{
                height: "300px",
                background: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "1rem",
            }}
            ></Box>
            <Box sx={{ paddingY: "1rem" }}>
            <Typography
                variant="h5"
                color="initial"
                sx={{ textAlign: "center", fontFamily: font2 }}
            >
                {name}
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                sx={{ textAlign: "center", fontFamily: font }}
            >
                {designation}
            </Typography>
            </Box>
        </Link>
        <Box
            sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginY: "0.5rem",
            }}
        >
            <a href={fb} style={{ color: black }}>
            <FacebookIcon />
            </a>
            <a href={twitter} style={{ color: black }}>
            <TwitterIcon />
            </a>
            <a href={instagram} style={{ color: black }}>
            <InstagramIcon />
            </a>
            <a href={linkedin} style={{ color: black }}>
            <LinkedInIcon />
            </a>
        </Box>
        </Box>
    );
}

export default MemberBlock;
