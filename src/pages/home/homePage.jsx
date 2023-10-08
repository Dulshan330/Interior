import { Box, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import banner from "../../assets/img/MainBanner.jpg";
import img1 from "../../assets/img/Photo1.jpg";
import callicon from "../../assets/img/Call Icon.png";
import {
  black,
  desktopView,
  font,
  font2,
  mainWidth,
  mobileViewMax,
  mobileViewMin,
  themeColor,
  themeColor2,
  white,
} from "../../config";
import { home } from "./homeInfo";
import WorkBlock from "./workBlock";
import FeedbackBlock from "./feedbackBlock";
import BrandBlock from "./brandBlock";
import ProjectBlock from "./projectBlock";
import CounterBlock from "./counterBlock";
import ArticleBlock from "./articleBlock";

function HomePage() {

  // Responsive settings
  const desktopScreen = useMediaQuery(desktopView);
  const mobilePhoneScreenMax = useMediaQuery(mobileViewMax);
  const mobilePhoneScreenMin = useMediaQuery(mobileViewMin);
  const mobilePhoneScreen = mobilePhoneScreenMax && mobilePhoneScreenMin;

  return (
    <Box>
      {/* ----------------- For Desktops ----------------- */}
      {desktopScreen && (
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
                  fontFamily={font2}
                  color="initial"
                  sx={{ marginY: "1rem" }}
                >
                  Let Your Home Be Unique
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={font}
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
                  Get Started &rarr;
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
            <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
              <Box sx={{ marginRight: "4rem" }}>
                <Typography
                  variant="h3"
                  color="initial"
                  fontFamily={font2}
                  sx={{ marginY: "2rem" }}
                >
                  We Create The Art Of Stylish Living Stylishly
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  fontFamily={font}
                  sx={{ marginY: "2rem" }}
                >
                  It is a long established fact that a reader will be distracted
                  by the of readable content of a page when lookings at its
                  layouts the points of using that it has a more-or-less normal.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginY: "2rem",
                  }}
                >
                  <img
                    src={callicon}
                    alt="call"
                    width={"80px"}
                    height={"auto"}
                  />
                  <Box sx={{ marginX: "1rem" }}>
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={{ fontWeight: "bold" }}
                    >
                      012345678
                    </Typography>
                    <Typography variant="body1" color="initial">
                      Call Us Anytime
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: black,
                    "&:hover": {
                      backgroundColor: themeColor,
                    },
                    marginY: "2rem",
                    paddingY: "1rem",
                    paddingX: "2rem",
                    borderRadius: "20px",
                  }}
                >
                  Get Free Estimate &rarr;
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                backgroundImage: `url(${img1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderTopRightRadius: "15rem",
                borderEndStartRadius: "6rem",
              }}
            ></Box>
          </Box>
          {/* Customer feedback section*/}
          <Box
            sx={{
              width: mainWidth,
              marginX: "auto",
              marginY: "6rem",
              padding: "2rem 1rem",
              backgroundColor: themeColor2,
              borderRadius: "5rem",
            }}
          >
            <Typography
              variant="h3"
              color="initial"
              fontFamily={font2}
              sx={{ textAlign: "center", marginY: "2rem" }}
            >
              What the People Thinks <br /> About Us
            </Typography>
            <Box sx={{ display: "flex" }}>
              {home.FeedbackSection.map((item) => (
                <FeedbackBlock
                  img={item.img}
                  name={item.name}
                  discription={item.discription}
                  address={item.address}
                />
              ))}
            </Box>
          </Box>
          {/* Brand Section */}
          <Box
            sx={{
              width: mainWidth,
              marginX: "auto",
              marginY: "5rem",
              display: "flex",
              padding: "2rem 1rem",
              justifyContent: "space-evenly",
            }}
          >
            {home.BrandSection.map((item) => (
              <BrandBlock img={item.img} />
            ))}
          </Box>
          {/* Project Section */}
          <Box
            sx={{
              width: mainWidth,
              marginX: "auto",
              marginY: "5rem",
            }}
          >
            <Typography
              variant="h3"
              color="initial"
              fontFamily={font2}
              sx={{ textAlign: "center" }}
            >
              Follow Our Projects
            </Typography>
            <Box sx={{ width: "50vw", marginX: "auto" }}>
              <Typography
                variant="body1"
                color="initial"
                fontFamily={font}
                sx={{ textAlign: "center", marginY: "1rem" }}
              >
                It is a long established fact that a reader will be distracted
                by the of readable content of page lookings at its layouts
                points.
              </Typography>
            </Box>

            <Grid
              container
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              {home.ProjectSection.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <ProjectBlock
                    img={item.img}
                    name={item.name}
                    catogery={item.catogery}
                    link={item.link}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* counter Section */}
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
              {home.CounterSection.map((item) => (
                <CounterBlock name={item.name} count={item.count} />
              ))}
            </Box>
          </Box>
          {/* Article Section */}
          <Box sx={{ width: mainWidth, marginX: "auto", marginY: "5rem" }}>
            <Typography
              variant="h3"
              color="initial"
              fontFamily={font2}
              sx={{ textAlign: "center" }}
            >
              Articles & News
            </Typography>
            <Box sx={{ width: "50vw", marginX: "auto" }}>
              <Typography
                variant="body1"
                color="initial"
                fontFamily={font}
                sx={{ textAlign: "center", marginY: "1rem" }}
              >
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {home.ArticleSection.map((item) => (
                <ArticleBlock
                  img={item.img}
                  title={item.title}
                  date={item.date}
                  link={item.link}
                  catogery={item.catogery}
                />
              ))}
            </Box>
          </Box>
          {/* Contact Section */}
          <Box
            sx={{
              width: mainWidth,
              marginX: "auto",
              marginY: "5rem",
              backgroundColor: black,
              borderRadius: "2rem",
              paddingY: "5rem",
            }}
          >
            <Typography
              variant="h3"
              color={white}
              textAlign={"center"}
              fontFamily={font2}
              sx={{ marginY: "1rem" }}
            >
              Wanna join the interno?
            </Typography>
            <Typography
              variant="body1"
              color={white}
              textAlign={"center"}
              fontFamily={font}
              sx={{ marginY: "1rem" }}
            >
              It is a long established fact will be distracted.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: themeColor,
                "&:hover": {
                  backgroundColor: themeColor2,
                  color: black,
                },
                display: "block",
                marginY: "1rem",
                marginX: "auto",
                paddingY: "1rem",
                paddingX: "2rem",
                borderRadius: "20px",
              }}
            >
              Contact With Us &rarr;
            </Button>
          </Box>
        </Box>
      )}

      {/* ----------------- For Mobile Phones ----------------- */}
      {mobilePhoneScreen && (
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
                margin: "auto",
              }}
            >
              <Box sx={{ width: "80vw" }}>
                <Typography
                  variant="h4"
                  fontFamily={font2}
                  color="initial"
                  sx={{ marginY: "1rem" }}
                >
                  Let Your Home Be Unique
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={font}
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
                  Get Started &rarr;
                </Button>
              </Box>
            </Box>
          </Box>
          {/* Work section */}
          <Box
            sx={{
              height: "auto",
              marginY: "2rem",
              marginX: "auto",
              display: "flex",
              flexDirection:"column",
              justifyContent: "center",
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
              height: "auto",
              marginX: "1rem",
              display: "flex", 
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center"}}>
              <Box>
                <Typography
                  variant="h4"
                  color="initial"
                  fontFamily={font2}
                  sx={{ marginY: "2rem" }}
                >
                  We Create The Art Of Stylish Living Stylishly
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  fontFamily={font}
                  sx={{ marginY: "2rem" }}
                >
                  It is a long established fact that a reader will be distracted
                  by the of readable content of a page when lookings at its
                  layouts the points of using that it has a more-or-less normal.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginY: "2rem",
                  }}
                >
                  <img
                    src={callicon}
                    alt="call"
                    width={"80px"}
                    height={"auto"}
                  />
                  <Box sx={{ marginX: "1rem" }}>
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={{ fontWeight: "bold" }}
                    >
                      012345678
                    </Typography>
                    <Typography variant="body1" color="initial">
                      Call Us Anytime
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: black,
                    "&:hover": {
                      backgroundColor: themeColor,
                    },
                    marginY: "2rem",
                    paddingY: "1rem",
                    paddingX: "2rem",
                    borderRadius: "20px",
                  }}
                >
                  Get Free Estimate &rarr;
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default HomePage;
