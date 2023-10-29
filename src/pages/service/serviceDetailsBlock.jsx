import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { service } from "./serviceInfo";
import Error404 from "../404/404";

function ServiceDetailsBlock() {

    const {id} = useParams();
    const selectedService = service.services.find((item) => item.id === id);

    if(!selectedService){
        return <Error404/>
    }

    return (
        <Box sx={{marginTop:"6rem"}}>
        <Typography variant="h5">{selectedService.title}</Typography>
        <Typography variant="body1">{selectedService.contain}</Typography>
        <Link to="/service">Back to Services</Link>
        </Box>
    );
}

export default ServiceDetailsBlock;
