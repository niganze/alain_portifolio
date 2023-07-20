
import "../css/Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { FcServiceMark } from "react-icons/fc";
import { MdSchool } from "react-icons/md";
import { FcHome } from "react-icons/fc";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
function Footer() {
  return (
    <div className="footer">
      <div className="About">
        <h5 className="logo">
          <FcHome />
          <i>KNZ IGN</i>
        </h5>
        <ul>
          <li>
            <a href="#">
              <MdEmail />
              niganzealain@gmail.com
            </a>
          </li>
          <li>
            <a href="#">
              <BsFillTelephoneInboundFill />
              +250 782500772
            </a>
          </li>
          <li>
            <a href="#">
              <GiTeacher />
              Become clients
            </a>
          </li>
          <li>
            <a href="#">
              <IoSchoolSharp />
              Become an innovator
            </a>
          </li>
          <li>
            <small>&copy; 2023 My Website. All rights reserved.</small>
          </li>
        </ul>
      </div>
      <div className="Courses">
        <h5>
          <FcAbout />
          About me{" "}
        </h5>
        <small className="small">
          I am a web developer with experience in ReactJS, Node.js, and MongoDB.
          Check out my portfolio to learn more about my skills and projects.
        </small>
      </div>
      <div className="Services ">
        <h5>
          {" "}
          <FcServiceMark />
          Quick Links{" "}
        </h5>
        <ul className="qiuck_link">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="Services ">
        <h5>
          <MdSchool />
          footer-links
        </h5>
        <ul>
          <li  onClick={Symbol}>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of User</a>
          </li>
        </ul>
      </div>
      <div className="subscribe">
        <h5>SUBSCRIBE MY NEWS LETTER</h5>
        <input type="email" placeholder="niganzealain@gmail.com" />
        <button>SUBCRIBE</button>
        <div className="social-networks">
          <AiFillFacebook />
          <BsWhatsapp />
          <AiFillLinkedin />
          <AiFillTwitterCircle />
        </div>
      </div>
  
    </div>
  );
}
export default Footer;
