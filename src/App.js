import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import AboutusPage from "./pages/about/aboutusPage";
import HomePage from "./pages/home/homePage";
import Error404 from "./pages/404/404";
import ServicePage from "./pages/service/servicePage";
import ServiceDetailsBlock from "./pages/service/serviceDetailsBlock";
import TeamPage from "./pages/team/teamPage";
import MemberDetailsBlock from "./pages/team/memberDetailsBlock";
import ContactPage from "./pages/contact/contactPage";
import { Box, useMediaQuery } from "@mui/material";
import { desktopView, mobileViewMax, mobileViewMin } from "./config";

function App() {

  // Responsive settings
  const desktopScreen = useMediaQuery(desktopView);
  const mobilePhoneScreenMax = useMediaQuery(mobileViewMax);
  const mobilePhoneScreenMin = useMediaQuery(mobileViewMin);
  const mobilePhoneScreen = mobilePhoneScreenMax && mobilePhoneScreenMin;

  let style = {};

  if (desktopScreen){
    style = {marginTop: "5rem"};
  }
  if (mobilePhoneScreen){
    style = {marginTop: "4rem"};
  }

  return (
    <div className="App">
      <NavBar />
      <Box sx={style}>
        <Routes>
          <Route path="/*" element={<Error404 />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutusPage />} />
          <Route path="/service/" element={<ServicePage />} />
          <Route path="/service/:id" element={<ServiceDetailsBlock />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/:id" element={<MemberDetailsBlock />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
