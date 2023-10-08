import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { font, font2, themeColor } from "../../config";

function CounterBlock(props) {
    const { name, count } = props;
    const [counter, setCounter] = useState(0);
    const blockRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: "0px", // No margin around the viewport
            threshold: 0.5, // Trigger when 50% of the block is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && counter < count) {
                    setTimeout(() => {
                        setCounter((prevCounter) => prevCounter + 1);
                    }, 50);
                }
            });
        }, options);

        // Start observing the block when it's mounted
        if (blockRef.current) {
            observer.observe(blockRef.current);
        }

        // Clean up the observer when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, [counter, count]);

    return (
        <Box ref={blockRef} sx={{ padding: "1rem" }}>
        <Typography
            variant="h2"
            color="initial"
            fontFamily={font2}
            textAlign={"center"}
            sx={{ color: themeColor }}
        >
            {counter} +
        </Typography>
        <Typography
            variant="body1"
            color="initial"
            fontFamily={font}
            textAlign={"center"}
        >
            {name}
        </Typography>
        </Box>
    );
}

export default CounterBlock;
