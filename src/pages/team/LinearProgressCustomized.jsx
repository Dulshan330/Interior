import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { themeColor,  } from "../../config";
import { Box } from "@mui/material";

function LinearProgressCustomized(props) {
    const { value } = props;

    return (
        <Box sx={{width:"100%", color:themeColor, }}>
        <LinearProgress variant="determinate" color="inherit" value={value} />
        </Box>
    );
}

export default LinearProgressCustomized;
