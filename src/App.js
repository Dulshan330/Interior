import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import AboutusPage from "./pages/about/aboutusPage";
import HomePage from "./pages/home/homePage";
import Error404 from "./pages/404/404";
import ServicePage from "./pages/service/servicePage";
import ServiceDetailsBlock from './pages/service/serviceDetailsBlock';
import TeamPage from './pages/team/teamPage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/*" element={<Error404 />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/service/" element={<ServicePage />} />
        <Route path="/service/:id" element={<ServiceDetailsBlock />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
