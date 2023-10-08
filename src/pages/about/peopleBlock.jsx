import { Box, Typography,  } from "@mui/material";
import React, { useState } from "react";
import fb from "../../assets/img/AboutPage/fb.png";
import inster from "../../assets/img/AboutPage/instergram.png";
import linkedin from "../../assets/img/AboutPage/linkedin.png";
import { Link } from "react-router-dom";
import { white } from "../../config";

function PeopleBlock(props) {
    const { img, name, address, tel, mail } = props;
    const [isHover, setIsHover] = useState(false);

    const mouseEnter = () => {
        setIsHover(true);
    };

    const mouseLeave = () => {
        setIsHover(false);
    };

    return (
        <Box
        sx={{
            flex: 1,
            margin: "1rem",
            height: "45vh",
            borderRadius: "1.5rem",
            background: isHover ? white : `url(${img})`,
            backgroundSize: "cover",
            padding: "2rem 1rem",
        }}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        >
        {isHover && (
            <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            >
            <Box sx={{}}>
                <Typography variant="h6" color="initial" textAlign={"center"}>
                {name}
                </Typography>
                <Typography variant="body1" color="initial" textAlign={"center"}>
                {address}
                </Typography>
            </Box>
            <Box
                sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                }}
            >
                <Link
                to={"https://www.facebook.com/"}
                style={{ margin: "0rem 1rem" }}
                >
                <img src={fb} alt="facebook" width={"12px"} />
                </Link>
                <Link
                to={"https://www.instagram.com/"}
                style={{ margin: "0rem 1rem" }}
                >
                <img src={inster} alt="facebook" width={"20px"} />
                </Link>
                <Link
                to={"https://www.linkedin.com/"}
                style={{ margin: "0rem 1rem" }}
                >
                <img src={linkedin} alt="facebook" width={"20px"} />
                </Link>
            </Box>
            <Box sx={{}}>
                <Typography variant="body1" color="initial" textAlign={"center"}>
                {tel}
                </Typography>
                <Typography variant="body1" color="initial" textAlign={"center"}>
                {mail}
                </Typography>
            </Box>
            </Box>
        )}
        </Box>
    );
}

export default PeopleBlock;
