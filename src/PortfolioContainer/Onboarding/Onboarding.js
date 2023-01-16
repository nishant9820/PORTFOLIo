import React from "react";
import "./Onbarding.css";
import { useNavigate } from "react-router-dom";
import Shapee from "../../assets/Homeimg/Shapee.png";
import Tt from "../../assets/Homeimg/Tt.png";
import Home from "../Home/Home.js";

export default function Onboarding() {
  const navigate = useNavigate();
  const goToSecond = () => {
    navigate("/Second", { replace: true });
  };
  return (
    <div className="Onboarding-container">
      <div className="h">
        <div className="h-icon">
          <a href="https://www.facebook.com/profile.php?id=100010794885920">
            <i className="fa fa-facebook-square fa-2xl"></i>
          </a>

          <a href="https://www.instagram.com/nishant_desai8/">
            <i className="fa fa-instagram fa-2xl"></i>
          </a>
          <a href=".">
            <i className="fa fa-twitter fa-2xl"></i>
          </a>
        </div>
      </div>
      <div>
        {" "}
        <div className="Title">
          <h1>
            {" "}
            I,m Nishant<span className="highlighted-name"> Desai</span>
          </h1>
          <p>
            {" "}
            This is my officail portfolio website to show all
            <br />
            Details and work expirence web Development
          </p>

          <button className="btn Home-btn " onClick={goToSecond}>
            Profile
          </button>
        </div>
        <div className="Images">
          <img src={Shapee} className="Shape" />
          <img src={Tt} className="pic" />
        </div>
      </div>
    </div>
  );
}
