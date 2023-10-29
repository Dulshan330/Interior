import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { desktopView, mainWidth, mobileViewMax, mobileViewMin, themeColor2 } from "../../config";
import { counter } from "./counterInfo";
import CounterBlock from "./counterBlock";

function Counter() {
  // Responsive settings
    const desktopScreen = useMediaQuery(desktopView);
    const mobilePhoneScreenMax = useMediaQuery(mobileViewMax);
    const mobilePhoneScreenMin = useMediaQuery(mobileViewMin);
    const mobilePhoneScreen = mobilePhoneScreenMax && mobilePhoneScreenMin;

    return (
        <Box>
        {/* ----------------- For Desktop ----------------- */}
        {desktopScreen && (
            <Box sx={{ backgroundColor: themeColor2 }}>
            <Box
                sx={{
                width: mainWidth,
                marginX: "auto",
                marginY: "5rem",
                paddingY: "6rem",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                }}
            >
                {counter.counter.map((item) => (
                <CounterBlock name={item.name} count={item.count} />
                ))}
            </Box>
            </Box>
        )}
        {/* ----------------- For Mobile Phones ----------------- */}
        {mobilePhoneScreen && (
            <Box sx={{ backgroundColor: themeColor2 }}>
            <Box
                sx={{
                marginX: "1rem",
                marginY: "5rem",
                paddingY: "3rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                }}
            >
                {counter.counter.map((item) => (
                <CounterBlock name={item.name} count={item.count} />
                ))}
            </Box>
            </Box>
        )}
        </Box>
    );
}

export default Counter;
