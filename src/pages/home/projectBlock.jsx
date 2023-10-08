import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/img/arrowIcon.png";
import { font, font2 } from "../../config";

function ProjectBlock(props) {
    const { img, link, catogery, name, width } = props;

    return (
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginY: "2rem",
        }}
        >
        <Box>
            <img
            src={img}
            alt="project"
            style={{
                width: width,
                borderTopLeftRadius: "4rem",
                borderEndEndRadius: "4rem",
            }}
            />
            <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems:"center",
                width: "100%",
            }}
            >
            <Box>
                <Typography variant="h6" color="initial" textAlign={"start"} fontFamily={font2}>
                {name}
                </Typography>
                <Typography variant="body1" color="initial" fontFamily={font}>
                {catogery}
                </Typography>
            </Box>
            <Link><img src={arrow} alt="arrow" style={{height:"50px"}} /></Link>
            </Box>
        </Box>
        </Box>
    );    
}

export default ProjectBlock;
