import { Box, Typography } from "@mui/material";
import React from "react";
import { font2, white } from "../../config";

function FeedbackBlock(props) {
    const { img, name, address, discription } = props;

    return (
        <Box
        sx={{
            backgroundColor: white,
            flex: 1,
            borderRadius: "2rem",
            margin: "1rem",
        }}
        >
        <Box sx={{ margin: "2rem" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
                src={img}
                alt="Profile"
                width={"80px"}
                height={"auto"}
                style={{ borderRadius: "40px" }}
            />

            <Box sx={{ marginX: "1rem" }}>
                <Typography
                variant="h6"
                color="initial"
                fontFamily={font2}
                >
                {name}
                </Typography>
                <Typography variant="body1" color="initial">
                {address}
                </Typography>
            </Box>
            </Box>
            <Typography variant="body1" color="initial" sx={{ marginY: "1rem" }}>
            {discription}
            </Typography>
        </Box>
        </Box>
    );
}

export default FeedbackBlock;
