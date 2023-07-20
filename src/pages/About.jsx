// import React from "react";
import "../css/About.css";
import OO from "../assets/IMG_180.jpeg";
import { SiDesignernews } from "react-icons/si";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function About() {
  return (
    <div>
      <div className="About_service" id="about">
        <div className="about_header">
          <h2>About Myself</h2>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="About_service_container">
          <div className="left">
            <p>
              It won’t be a bigger problem to find one video game lover in your
              neighbor. Since the introduction of Virtual Game, it has been
              achieving great heights so far as its popularity and technological
              advancement are concerned. The history of video game is as
              interesting as a fairy tale.
            </p>
            <h3>Tools Expertness</h3>
            <div className="skilss">
              <div className="skill">
                <h3>HTML</h3>
                <h4>95%</h4>
                <span className="skill-bar"></span>
                <span className="fill-bar html"></span>
              </div>
              <div className="skill">
                <h3>CSS</h3>
                <h4>85%</h4>
                <span className="skill-bar"></span>
                <span className="fill-bar css"></span>
              </div>
              <div className="skill">
                <h3>JavaScript</h3>
                <h4>70%</h4>
                <span className="skill-bar"></span>
                <span className="fill-bar javascript"></span>
              </div>
              <div className="skill">
                <h3>PHP</h3>
                <h4>85%</h4>
                <span className="skill-bar"></span>
                <span className="fill-bar php"></span>
              </div>
            </div>
            <div className="skilss">
              <div className="skill">
                <h3>React</h3>
                <h4>65%</h4>
                <span className="skill-bar"></span>
                <span className="fill-bar react"></span>
              </div>
              <div className="skill">
                <h3>Node JS basic</h3>
                <h4>70%</h4>
                <span className="skill-bar"></span>
                <span className="fill-bar node"></span>
              </div>
              <div className="skill">
                <h3>Node JS basic</h3>
                <h4>70%</h4>
                <span className="skill-bar"></span>
                <span className="fill-bar node"></span>
              </div>
              <div className="skill">
                <h3>Node JS basic</h3>
                <h4>70%</h4>
                <span className="skill-bar"></span>
                <span className="fill-bar node"></span>
              </div>
            </div>
            <div className="skilss">
              <div className="skill">
                <h3>React</h3>
                <h4>65%</h4>
                <span className="skill-bar"></span>
                <span className="fill-bar react"></span>
              </div>
              <div className="skill">
                <h3>Node JS basic</h3>
                <h4>70%</h4>
                <span className="skill-bar"></span>
                <span className="fill-bar node"></span>
              </div>
              <div className="skill">
                <h3>Node JS basic</h3>
                <h4>70%</h4>
                <span className="skill-bar"></span>
                <span className="fill-bar node"></span>
              </div>
              <div className="skill">
                <h3>Node JS basic</h3>
                <h4>70%</h4>
                <span className="skill-bar"></span>
                <span className="fill-bar node"></span>
              </div>
            </div>
          </div>
          <div className="rightY">
            <img src={OO} alt="connwection failed" />
            <h5>Alain NIGANZE</h5>
            <p>
              <SiDesignernews />
              Interactive Designer
            </p>
            <p>
              {" "}
              <BsTelephoneInboundFill />
              +250 783943932
            </p>
            <p>
              <MdEmail />
              niganzealain100@gmail.com
            </p>
            <button>
              {""}
              <a
                href="#contact"
                style={{ color: "inherit", textDecoration: "inherit" }}>
                Hire me
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
