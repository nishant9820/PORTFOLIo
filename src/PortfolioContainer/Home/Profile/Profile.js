import React from "react";
import Typical from "react-typical";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { Link, animateScroll as scroll, Button } from "react-scroll";
import { AiOutlineLeft } from "react-icons/ai";
export default function Profile() {
  const navigate = useNavigate();
  const goToOnboarding = () => {
    navigate("/");
  };
  const goToOnAbout = () => {
    navigate("/About");
  };
  const goToProject = () => {
    navigate("/Project");
  };
  return (
    <div id="profile" className="profile-container">
      {/* <div className="parent"> */}
      <div className="profile-mode0">
        <button className="btn mode-btn0" onClick={goToOnboarding}>
          {" "}
          <AiOutlineLeft size={30} />
          Back
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <button className="btn mode-btn1">Home</button>
            </Link>
          </li>
          <li>
            <Link to="about">
              <button className="btn mode-btn2" onclick={goToOnAbout}>
                AboutMe
              </button>
            </Link>
          </li>
          <li>
            <Link to="resume">
              <button className="btn mode-btn3">Resume</button>
            </Link>
          </li>
          <li>
            <button className="btn mode-btn4">Testimonial</button>
          </li>
          <li>
            {" "}
            <Link to="email">
              <button className="btn mode-btn5">ContactMe</button>
            </Link>
          </li>
        </ul>
      </nav>
      {/* </div> */}

      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100010794885920">
                <i className="fa fa-facebook-square" color="white"></i>
              </a>
              <a href=".">
                <i className="fa fa-google-plus-square" color="white"></i>
              </a>
              <a href="https://www.instagram.com/nishant_desai8/">
                <i className="fa fa-instagram" color="white"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCNsKpP_qSimIysVLkUrtsug">
                <i className="fa fa-youtube-square" color="white"></i>
              </a>
              <a href=".">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="project-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Nishant</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Nishant 🔴 ",
                    1500,
                    "Full Stack Developer  ",
                    1500,
                    "MERN Stack Dev 🤞",
                    1500,
                    "React/React Native Developer 😎 ",
                    1500,
                    "Cross Platform Developer 🌐",
                    1500,
                  ]}
                  wrapper="p"
                />
              </h1>
              <span className="profile-role-tagline">
                Kanck of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="#email">
              <button onClick={() => "#email"} className="btn primary-btn">
                Hire Me
              </button>
            </a>
            <a href="Nishant.pdf" download="Nishant.pdf">
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
            <a>
              <button
                onClick={goToProject}
                className="btn primary-btn"
                style={{ marginLeft: 30 }}
              >
                Project
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
