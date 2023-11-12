import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { font2, googleMapAPIKey, themeColor, themeColor2 } from "../../config";
import { Box } from "@mui/material";

function GoogleMap() {
    const [haveKey, setHaveKey] = useState(googleMapAPIKey);

    if (haveKey == null) {
        return (
        <Box
            sx={{
            display: "flex",
            height: "100%",
            background: themeColor2,
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"2rem"
            }}
        >
            <Typography variant="h4" color="initial" sx={{fontFamily:font2,color:themeColor, margin:"1rem"}}>
            First, You have to set the Google Map API key!
            </Typography>
        </Box>
        );
    }

    return (
        <APIProvider apiKey={googleMapAPIKey}>
        <Map
            zoom={13}
            center={{ lat: 6.90609, lng: 79.89731 }}
            gestureHandling={"greedy"}
            disableDefaultUI={false}
        >
            <Marker position={{ lat: 6.90609, lng: 79.89731 }} />
        </Map>
        </APIProvider>
    );
}

export default GoogleMap;
