import { useState } from "react";
import BB from "../assets/IMG_0158.jpeg";
import "../css/Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="nav_container">
        <div className="logo">
          <img src={BB} alt="connection failed" />
          <span>KNZ IGN</span>
        </div>
        <div className={`links ${isOpen ? "open" : ""}`}>
          <a href="#home">HOME</a>
          <a href="#service">SERVICE</a>
          <a href="#about">ABOUT</a>
          <a href="#project">PROJECTS</a>
          <a href="#contact">CONTACT</a>
          <a href="#blog">BLOG</a>
          <a href="#pages">LOGIN</a>
          <a href="#pages">SIGN UP</a>
        </div>
        <button
          className={`toggle-bar ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default Header;