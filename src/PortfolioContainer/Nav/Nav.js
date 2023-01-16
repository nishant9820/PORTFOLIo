import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="nav1">
      <a
        href="#profile"
        onClick={() => setActiveNav("#profile")}
        className={activeNav === "#profile" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#resume"
        onClick={() => setActiveNav("#resume")}
        className={activeNav === "#resume" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#email"
        onClick={() => setActiveNav("#email")}
        className={activeNav === "#email" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}
