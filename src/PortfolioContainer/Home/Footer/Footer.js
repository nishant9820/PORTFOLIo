import React from "react";
import "./Footer.css";
import Shape from "../../../assets/Homeimg/Shape.png";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={Shape} alt="no internet connection" />
      </div>
    </div>
  );
}
