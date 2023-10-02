import { Box, Typography, Button } from "@mui/material";
import React from "react";
import banner from "../../assets/img/MainBanner.png";
import img1 from "../../assets/img/Photo1.jpg";
import { black, mainWidth, themeColor } from "../../config";
import { home } from "./homeInfo";
import WorkBlock from "./workBlock";

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
                backgroundColor: black,
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
          height: "45vh",
          marginY: "2rem",
          marginX: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {home.workSection.map((item) => (
          <WorkBlock
            title={item.title}
            contain={item.contain}
            link={item.link}
          />
        ))}
      </Box>
      {/* About section */}
      <Box
        sx={{
          width: mainWidth,
          height: "80vh",
          marginX: "auto",
          display: "flex",
        }}
      >
        <Box sx={{ flex: 1 }}></Box>
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(${img1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderTopRightRadius:"15rem",
            borderEndStartRadius:"6rem"
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default HomePage;
