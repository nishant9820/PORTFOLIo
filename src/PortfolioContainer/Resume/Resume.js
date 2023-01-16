import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { BiHistory } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { BsFillPaletteFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import "./Resume.css";
import { Link, animateScroll as scroll, Button } from "react-scroll";
const handleClickScroll = () => {
  const element = document.getElementById("Education");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
export default function Resume() {
  return (
    <section id="resume">
      <h5 style={{ marginTop: 25 }}>My formal Bio Details</h5>
      <h2
        style={{
          textShadow: "5px 3px 5px #9E9E9E",
        }}
      >
        Resume
      </h2>
      <div className="container resume_container">
        <div className="icon_move">
          <article className="icon_bar">
            <h6>
              <FaUserGraduate
                className="icon"
                size={40}
                style={{ marginBottom: 60 }}
              />
            </h6>
            <h6>
              <BiHistory
                className="icon"
                size={40}
                style={{ marginBottom: 60 }}
              />
            </h6>
            <h6>
              <BsCodeSlash
                className="icon"
                size={40}
                style={{ marginBottom: 60 }}
              />
            </h6>
            <h6>
              <ImStatsBars
                className="icon"
                size={40}
                style={{ marginBottom: 60 }}
              />
            </h6>
            <h6>
              <BsFillPaletteFill
                className="icon"
                size={40}

                // style={{ marginBottom: 60 }}
              />
            </h6>
          </article>
          <article
            className="button"
            style={{
              // borderRight: "2px solid #1f1f38",
              boxShadow: "10px 3px 10px #9E9E9E",
            }}
          >
            <div className="div1">
              <a href="#Education">
                <button
                  className="btn highlighted-btn0"
                  onClick={handleClickScroll}
                >
                  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Education
                </button>
              </a>
            </div>
            <div className="div2">
              <a href="#History">
                <button className="btn highlighted-btn1">
                  {" "}
                  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎Work History
                </button>
              </a>
            </div>
            <div className="div3">
              <button className="btn highlighted-btn2">
                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎Programming Skills
              </button>
            </div>
            <div className="div4">
              <a href="#Project">
                <button className="btn highlighted-btn3">
                  {" "}
                  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎Projects
                </button>{" "}
              </a>
            </div>
            <div className="div5">
              <button className="btn highlighted-btn4">
                {" "}
                ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎Interests
              </button>
            </div>
          </article>

          <div className="info">
            <div id="Education" style={{ height: 500 }}>
              <div
                className="details.container"
                style={{ flexDirection: "row" }}
              >
                <h2
                  style={{
                    color: "#ff5823",
                    fontWeight: "600",
                    marginLeft: -40,
                    marginTop: 40,
                  }}
                >
                  <GoPrimitiveDot color="#ff5823" />
                  Tolani College Of Commerce
                </h2>
                <div className="heading-date">2022-2023</div>
                <h5 style={{ color: "#1f1f38", marginTop: "20px" }}>
                  BACHELOR OF SCIENCE INFORMATION TECHNOLOGY (Pursuing)
                </h5>
              </div>
              <div style={{ flexDirection: "row", marginTop: "60px" }}>
                <h2
                  style={{
                    color: "#ff5823",
                    fontWeight: "600",
                    marginLeft: -40,
                  }}
                >
                  <GoPrimitiveDot color="#ff5823" />
                  Tolani College Of Commerce
                </h2>
                <div className="heading-date">2019-2020</div>
                <h5 style={{ color: "#1f1f38", marginTop: "20px" }}>
                  Higher Secondary Certificate Examination (75%)
                </h5>
              </div>
              <div style={{ flexDirection: "row", marginTop: "60px" }}>
                <h2
                  style={{
                    color: "#ff5823",
                    fontWeight: "600",
                    marginLeft: -40,
                  }}
                >
                  <GoPrimitiveDot color="#ff5823" />
                  SMT. Surajba Vidya Mandir
                </h2>
                <div className="heading-date">2017-2018</div>
                <h5 style={{ color: "#1f1f38", marginTop: "20px" }}>
                  Secondary School Certificate Examination (84%)
                </h5>
              </div>
            </div>

            {/* Its History! */}
            <div id="History">
              <div
                className="details.container"
                style={{
                  flexDirection: "row",
                  marginTop: "450px",
                  marginBottom: "200px",
                }}
              >
                <h2
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    marginLeft: -40,
                    marginTop: 10,
                  }}
                >
                  <GoPrimitiveDot color="#ff5823" />
                  Stark Technology
                </h2>
                <div className="heading-date">2022-2023</div>
                <h5 style={{ color: "#1f1f38", marginTop: "30px" }}>
                  Currently working as MERN stack web and mobile developer and
                  also <br />
                  an online instructor on udemy.
                </h5>
                <h6 style={{ color: "#000", marginTop: "20px" }}>
                  - Developed an Ecommerce website for client with the dashboard
                  for managing the
                  <br /> products, managing reviews, users, payment etc.{" "}
                </h6>
                <h6 style={{ color: "#000", marginTop: "5px" }}>
                  - Integrated the web app with backend services to create new
                  user onboarding <br />
                  application with dynamic form content.
                </h6>
                <h6 style={{ color: "#000", marginTop: "5px" }}>
                  - I stretch my mental capacity to develope UI as per the given
                  designs.
                </h6>
              </div>
            </div>
            {/* This is Project */}
            <div
              id="Project"
              style={{ marginTop: "450px", marginBottom: "200px" }}
            >
              <div
                className="details.container"
                style={{
                  flexDirection: "row",
                }}
              >
                <h4
                  style={{
                    color: "#ff5823",
                    fontWeight: "600",
                    marginLeft: -30,
                    marginTop: 40,
                  }}
                >
                  Personal Portfolio Website
                </h4>
                <div className="heading-datee">2022-2023</div>
                <h5 style={{ color: "#000", marginTop: "20px" }}>
                  Technologies Used: React JS, Bootsrap
                </h5>
                <h6 style={{ color: "#1f1f38", marginTop: "5px" }}>
                  A Personal Portfolio website to showcase all my details and
                  projects at one place.
                </h6>
              </div>
              <div
                className="details.container"
                style={{
                  flexDirection: "row",
                }}
              >
                <h4
                  style={{
                    color: "#ff5823",
                    fontWeight: "600",
                    marginLeft: -30,
                    marginTop: 40,
                  }}
                >
                  Society Management Application
                </h4>
                <div className="heading-datee">2022-2023</div>
                <h5 style={{ color: "#000", marginTop: "20px" }}>
                  Technologies Used: React-Native, Node JS, FireBase, Stripe
                </h5>
                <h6 style={{ color: "#1f1f38", marginTop: "5px" }}>
                  A Social application designed to conduct all the operations of
                  Society <span style={{ fontWeight: 700 }}>Online</span>{" "}
                  without <br />
                  need of third person.
                </h6>
              </div>{" "}
              <div
                className="details.container"
                style={{
                  flexDirection: "row",
                }}
              >
                <h4
                  style={{
                    color: "#ff5823",
                    fontWeight: "600",
                    marginLeft: -30,
                    marginTop: 40,
                  }}
                >
                  Personal Portfolio Website
                </h4>
                <div className="heading-datee">2022-2023</div>
                <h5 style={{ color: "#000", marginTop: "20px" }}>
                  Technologies Used: React JS, Bootsrap
                </h5>
                <h6 style={{ color: "#1f1f38", marginTop: "5px" }}>
                  A Personal Portfolio website to showcase all my details and
                  projects at one place.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
