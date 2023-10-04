import { Box } from "@mui/material";
import React from "react";

function BrandBlock(props) {
    const { img } = props;

    return (
        <img src={img} alt="brand" height={"50px"} width={"auto"} style={{}} />
    );
}

export default BrandBlock;
