import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import AboutusPage from "./pages/about/aboutusPage";
import HomePage from "./pages/home/homePage";
import Error404 from "./pages/404/404";
import ServicePage from "./pages/service/servicePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/*" element={<Error404 />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
