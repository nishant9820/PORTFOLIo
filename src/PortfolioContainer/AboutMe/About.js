import React from "react";
import "./About.css";
import Nishant from "../../assets/Homeimg/Nishant.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2
        style={{
          textShadow: "5px 3px 5px #9E9E9E",
        }}
      >
        About Me
      </h2>
      <div className=" container about_container">
        <div
          className="about_me"
          style={{
            boxShadow: "10px 3px 10px #9E9E9E",
          }}
        >
          <div className="about_me-image">
            <img src={Nishant} alt="nishant" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article
              className="about_card"
              style={{
                boxShadow: "15px 3px 15px #9E9E9E",
              }}
            >
              <FaAward className="about_icon" color="aliceblue" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article
              className="about_card"
              style={{
                boxShadow: "15px 3px 15px #9E9E9E",
              }}
            >
              <FiUsers className="about_icon" color="aliceblue" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article
              className="about_card"
              style={{
                boxShadow: "15px 3px 15px #9E9E9E",
              }}
            >
              <VscFolderLibrary className="about_icon" color="aliceblue" />
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>
          <p>
            I'm always punctual to school and regular in my studies. I love to
            play with my friends during break time. My best friend's name is
            Pooja and we play with dolls every day after school. I participate
            in all extracurricular activities and sports events at my school and
            try my best to do well.
          </p>
          <button href="#Contact" className="btn1 highlighted-btnn ">
            Lets Talk
          </button>
        </div>
      </div>
    </section>
  );
}
