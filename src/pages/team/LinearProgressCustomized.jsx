import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import {  styled } from "@mui/material/styles";
import { themeColor, themeColor2 } from "../../config";

const StyledLinearBar = styled(LinearProgress)({
    backgroundColor: themeColor2,
});

    function LinearProgressCustomized(props) {
    const { value } = props;

    return <StyledLinearBar variant="determinate" value={value} />;
    }

export default LinearProgressCustomized;
