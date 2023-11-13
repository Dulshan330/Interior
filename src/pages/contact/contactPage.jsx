import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
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
import banner from "../../assets/img/Contact/banner.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import GoogleMap from "./map";
import Banner from "../../components/banner/banner";

function ContactPage() {
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
          {/* Banner Section */}
          <Banner img={banner} title={"Contact Us"} subTitle={"Contact"} />
          {/* Contact Form Section */}
          <Box sx={{ width: mainWidth, marginY: "4rem", marginX: "auto" }}>
            <Typography
              variant="h3"
              color="initial"
              sx={{
                width: "60vw",
                textAlign: "center",
                fontFamily: font2,
                marginX: "auto",
                marginY: "1rem",
              }}
            >
              We love meeting new people and helping them.
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  flex: 1,
                  margin: "1rem",
                  background: themeColor2,
                  borderRadius: "2rem",
                  padding: "2rem 1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    marginY: "2rem",
                    width: "fit-content",
                  }}
                >
                  <Box
                    sx={{
                      background: white,
                      padding: "0.8rem",
                      borderRadius: "3rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginX: "1rem",
                    }}
                  >
                    <EmailOutlinedIcon sx={{ color: themeColor }} />
                  </Box>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginX: "1rem" }}
                  >
                    info@yourdomain.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginY: "2rem",
                    width: "fit-content",
                  }}
                >
                  <Box
                    sx={{
                      background: white,
                      padding: "0.8rem",
                      borderRadius: "3rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginX: "1rem",
                    }}
                  >
                    <LocalPhoneOutlinedIcon sx={{ color: themeColor }} />
                  </Box>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginX: "1rem" }}
                  >
                    +1 (378) 400-1234
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginY: "2rem",
                    width: "fit-content",
                  }}
                >
                  <Box
                    sx={{
                      background: white,
                      padding: "0.8rem",
                      borderRadius: "3rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginX: "1rem",
                    }}
                  >
                    <PublicOutlinedIcon sx={{ color: themeColor }} />
                  </Box>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ marginX: "1rem" }}
                  >
                    www.yourdomain.com
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginY: "2rem",
                  }}
                >
                  <Link
                    to={"https://www.facebook.com/"}
                    style={{ color: black }}
                  >
                    <FacebookIcon sx={{ marginX: "1rem" }} />
                  </Link>
                  <Link to={"https://twitter.com/"} style={{ color: black }}>
                    <TwitterIcon sx={{ marginX: "1rem" }} />
                  </Link>
                  <Link
                    to={"https://www.instagram.com/"}
                    style={{ color: black }}
                  >
                    <InstagramIcon sx={{ marginX: "1rem" }} />
                  </Link>
                  <Link
                    to={"https://www.linkedin.com/feed/"}
                    style={{ color: black }}
                  >
                    <LinkedInIcon sx={{ marginX: "1rem" }} />
                  </Link>
                </Box>
              </Box>
              <Box
                sx={{
                  flex: 2,
                  margin: "1rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", width: "100%", marginY: "1rem" }}>
                  <TextField
                    fullWidth
                    id="fullWidth"
                    label="Name"
                    variant="standard"
                    sx={{ marginX: "0.5rem" }}
                  />
                  <TextField
                    fullWidth
                    id="fullWidth"
                    label="Email"
                    variant="standard"
                    sx={{ marginX: "0.5rem" }}
                  />
                </Box>
                <Box sx={{ display: "flex", width: "100%", marginY: "1rem" }}>
                  <TextField
                    fullWidth
                    id="fullWidth"
                    label="Subject"
                    variant="standard"
                    sx={{ marginX: "0.5rem" }}
                  />
                  <TextField
                    fullWidth
                    id="fullWidth"
                    label="Phone"
                    variant="standard"
                    sx={{ marginX: "0.5rem" }}
                  />
                </Box>
                <Box sx={{ display: "flex", width: "100%", marginY: "1rem" }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    id="standard-multiline-static"
                    label="Message"
                    variant="standard"
                    sx={{ marginX: "0.5rem", "&:focus": { color: themeColor } }}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: black,
                      "&:hover": {
                        backgroundColor: themeColor,
                      },
                      display: "block",
                      marginY: "1rem",
                      paddingY: "1rem",
                      paddingX: "2rem",
                      borderRadius: "20px",
                    }}
                  >
                    Send Now &rarr;
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Map Section */}
          <Box
            sx={{
              width: mainWidth,
              marginY: "3rem",
              marginX: "auto",
              height: "60vh",
            }}
          >
            <GoogleMap />
          </Box>
        </Box>
      )}

      {/* ----------------- For Mobile Phones ----------------- */}
      {mobilePhoneScreen && (
        <Box>
          {/* Banner Section */}
          <Banner img={banner} title={"Contact Us"} subTitle={"Contact"} />
          {/* Contact Form Section */}
          <Box sx={{ marginY: "3rem", marginX: "auto" }}>
            <Typography
              variant="h4"
              color="initial"
              sx={{
                width: "60vw",
                textAlign: "center",
                fontFamily: font2,
                marginX: "auto",
                marginY: "1rem",
              }}
            >
              We love meeting new people and helping them.
            </Typography>
            <Box
              sx={{
                margin: "1rem",
                background: themeColor2,
                borderRadius: "2rem",
                padding: "2rem 1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  marginY: "2rem",
                  width: "fit-content",
                }}
              >
                <Box
                  sx={{
                    background: white,
                    padding: "0.8rem",
                    borderRadius: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginX: "1rem",
                  }}
                >
                  <EmailOutlinedIcon sx={{ color: themeColor }} />
                </Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ marginX: "1rem" }}
                >
                  info@yourdomain.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginY: "2rem",
                  width: "fit-content",
                }}
              >
                <Box
                  sx={{
                    background: white,
                    padding: "0.8rem",
                    borderRadius: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginX: "1rem",
                  }}
                >
                  <LocalPhoneOutlinedIcon sx={{ color: themeColor }} />
                </Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ marginX: "1rem" }}
                >
                  +1 (378) 400-1234
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginY: "2rem",
                  width: "fit-content",
                }}
              >
                <Box
                  sx={{
                    background: white,
                    padding: "0.8rem",
                    borderRadius: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginX: "1rem",
                  }}
                >
                  <PublicOutlinedIcon sx={{ color: themeColor }} />
                </Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ marginX: "1rem" }}
                >
                  www.yourdomain.com
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginY: "2rem",
                }}
              >
                <Link to={"https://www.facebook.com/"} style={{ color: black }}>
                  <FacebookIcon sx={{ marginX: "1rem" }} />
                </Link>
                <Link to={"https://twitter.com/"} style={{ color: black }}>
                  <TwitterIcon sx={{ marginX: "1rem" }} />
                </Link>
                <Link
                  to={"https://www.instagram.com/"}
                  style={{ color: black }}
                >
                  <InstagramIcon sx={{ marginX: "1rem" }} />
                </Link>
                <Link
                  to={"https://www.linkedin.com/feed/"}
                  style={{ color: black }}
                >
                  <LinkedInIcon sx={{ marginX: "1rem" }} />
                </Link>
              </Box>
            </Box>
            <Box
              sx={{ margin: "1rem", display: "flex", flexDirection: "column" }}
            >
              <TextField
                fullWidth
                id="fullWidth"
                label="Name"
                variant="standard"
                sx={{ marginX: "0.5rem", marginY: "0.5rem" }}
              />
              <TextField
                fullWidth
                id="fullWidth"
                label="Email"
                variant="standard"
                sx={{ marginX: "0.5rem", marginY: "0.5rem" }}
              />
              <TextField
                fullWidth
                id="fullWidth"
                label="Subject"
                variant="standard"
                sx={{ marginX: "0.5rem", marginY: "0.5rem" }}
              />
              <TextField
                fullWidth
                id="fullWidth"
                label="Phone"
                variant="standard"
                sx={{ marginX: "0.5rem", marginY: "0.5rem" }}
              />
              <TextField
                fullWidth
                multiline
                rows={5}
                id="standard-multiline-static"
                label="Message"
                variant="standard"
                sx={{
                  marginX: "0.5rem",
                  "&:focus": { color: themeColor },
                  marginY: "0.5rem",
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: black,
                  "&:hover": {
                    backgroundColor: themeColor,
                  },
                  display: "block",
                  marginY: "1rem",
                  paddingY: "1rem",
                  paddingX: "2rem",
                  borderRadius: "20px",
                }}
              >
                Send Now &rarr;
              </Button>
            </Box>
          </Box>
          {/* Map Section */}
          <Box
            sx={{
              marginY: "3rem",
              marginX: "1rem",
              height: "70vh",
            }}
          >
            <GoogleMap />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ContactPage;
