import  { useState } from "react";
import BB from "../assets/images.png";
import "../css/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav_container">
      <div className="logo">
        <img src={BB} alt="connection failed" />
        <span>TechTrove</span>
      </div>
      <div className={`links ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#service">Service</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
        <a href="#blog">Blog</a>
        <Link to="./login">Login</Link>
      </div>
      <div className={`toggle-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Header;
