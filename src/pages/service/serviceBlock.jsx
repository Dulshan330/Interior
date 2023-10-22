import { Box, Typography } from "@mui/material";
import React from "react";
import { black, font, font2, themeColor2 } from "../../config";
import { Link } from "react-router-dom";

function ServiceBlock(props) {

    const {title, contain, link, } = props;

    return (
        <Box sx={{
            width:"300px",
            margin:"1rem",
            background:themeColor2,
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            padding:"2rem 1rem",
            borderRadius:"2rem"
        }}>
        <Typography
            variant="h5"
            color="initial"
            sx={{
            fontFamily: font2,
            }}
        >
            {title}
        </Typography>
        <Typography variant="body1" color="initial" sx={{ marginY: "1rem", textAlign:"center" }}>
            {contain}
        </Typography>
        <Link
            to={link}
            style={{
            textDecoration: "none",
            color: black,
            fontFamily: font,
            fontSize: "15px",
            fontWeight:"bold",
            textAlign:"center"
            }}
        >
            Read More &rarr;
        </Link>
        </Box>
    );
}

export default ServiceBlock;
