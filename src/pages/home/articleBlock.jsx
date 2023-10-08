import { Box, Typography } from "@mui/material";
import React from "react";
import { font, font2, themeColor2, white } from "../../config";
import { Link } from "react-router-dom";
import arrow from "../../assets/img/arrowIcon2.png";

function ArticleBlock(props) {
    const { img, title, date, link, catogery } = props;

    return (
        <Box
        sx={{
            flex: 1,
            margin: "1rem",
            borderRadius: "3rem",
            backgroundColor: themeColor2,
        }}
        >
        <Box
            sx={{
            margin: "1rem",
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderTopLeftRadius: "2rem",
            borderTopRightRadius: "2rem",
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            }}
        >
            <Typography
            variant="body2"
            color="initial"
            fontFamily={font}
            sx={{
                margin: "1rem",
                padding: "1rem",
                backgroundColor: white,
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
                borderEndEndRadius: "1rem",
            }}
            >
            {catogery}
            </Typography>
        </Box>
        <Box sx={{ margin: "1rem" }}>
            <Typography
            variant="h5"
            color="initial"
            fontFamily={font2}
            >
            {title}
            </Typography>
            <Box
            sx={{
                marginBottom: "2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            >
            <Typography
                variant="body2"
                color="initial"
                fontFamily={font}
            >
                {date}
            </Typography>
            <Link>
                <img src={arrow} alt="arrow" style={{ height: "50px" }} />
            </Link>
            </Box>
        </Box>
        </Box>
    );
}

export default ArticleBlock;
