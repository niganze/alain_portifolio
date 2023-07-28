import { useState } from "react";
import BB from "../assets/images.png";
import "../css/Header.css";
import { Link } from "react-router-dom";

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
          <span>TeckPorKnz</span>
        </div>
        <div className={`links ${isOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#service">Service</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
          <Link to ="./dashboard">Login</Link>
  
          <a href="#sign_up">Be My partner</a>
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
