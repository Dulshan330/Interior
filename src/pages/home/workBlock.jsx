import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { black } from "../../config";

function WorkBlock(props) {
    const { title, contain, link } = props;

    return (
        <Box
        sx={{
            flex: 1,
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <Typography
            variant="h5"
            color="initial"
            sx={{
            fontFamily: "DM Serif Display",
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
            fontFamily: "roboto,sans-serif",
            fontSize: "15px",
            fontWeight:"bold"
            }}
        >
            Read More...
        </Link>
        </Box>
    );
}

export default WorkBlock;
