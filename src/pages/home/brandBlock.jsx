import { Box } from "@mui/material";
import React from "react";

function BrandBlock(props) {
    const { img, height,width } = props;

    return (
        <img src={img} alt="brand" height={height} width={width}  />
    );
}

export default BrandBlock;
