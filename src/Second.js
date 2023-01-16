import React from "react";
import Home from "./PortfolioContainer/Home/Home";
import About from "./PortfolioContainer/AboutMe/About";
import Resume from "./PortfolioContainer/Resume/Resume";
import Nav from "./PortfolioContainer/Nav/Nav";
import "./Second.css";
import Email from "./PortfolioContainer/ContactMe/Email";
export default function Second() {
  return (
    <div className="Second-Container">
      <Home />
      <Nav />
      <About />
      <Resume />
      <Email />
    </div>
  );
}
