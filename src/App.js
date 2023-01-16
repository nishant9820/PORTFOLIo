import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./PortfolioContainer/Home/Home";
import Onboarding from "./PortfolioContainer/Onboarding/Onboarding";
import MainHeader from "./MainHeader";
import Profile from "./PortfolioContainer/Home/Profile/Profile";
import Footer from "./PortfolioContainer/Home/Footer/Footer";
import About from "./PortfolioContainer/AboutMe/About";
import Second from "./Second";
import Project from "./PortfolioContainer/Project/Project";
function App() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainHeader />} />
      <Route element={<Onboarding />} />
      <Route path="/Second" element={<Second />} />
      <Route path="/About" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/Project" element={<Project />} />
    </Routes>
    // </BrowserRouter>
  );
}

export default App;
