import { Box, Typography, Button } from "@mui/material";
import React from "react";
import banner from "../../assets/img/MainBanner.png";
import { balck, mainWidth, themeColor } from "../../config";


function HomePage() {
  return (
    <Box>
      {/* Hero section  */}
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          borderEndStartRadius: "8rem",
        }}
      >
        <Box
          sx={{
            width: mainWidth,
            margin: "auto",
          }}
        >
          <Box sx={{ width: "35vw" }}>
            <Typography
              variant="h2"
              fontFamily={"DM Serif Display"}
              color="initial"
              sx={{ marginY: "1rem" }}
            >
              Let Your Home Be Unique
            </Typography>
            <Typography
              variant="body1"
              fontFamily={"roboto,sans-serif"}
              color="initial"
              sx={{ marginY: "1rem" }}
            >
              There are many variations of the passages of lorem Ipsum
              fromavailable,variations of the passages.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: balck,
                "&:hover": {
                  backgroundColor: themeColor,
                },
                marginY: "1rem",
                paddingY: "1rem",
                paddingX: "2rem",
                borderRadius: "20px",
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
      {/* Work section */}
      <Box
        sx={{
          width: mainWidth,
          height: "50vh",
          marginY: "2rem",
          marginX: "auto",
          border: "solid",
          display:"flex",
          justifyContent:"space-between",
        }}
      ></Box>
    </Box>
  );
}

export default HomePage;
