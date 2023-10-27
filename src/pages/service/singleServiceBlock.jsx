import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

function SingleServiceBlock() {

    return (
        <Box>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">{contain}</Typography>
        <Link to="/service">Back to Services</Link>
        </Box>
    );
}

export default SingleServiceBlock;
