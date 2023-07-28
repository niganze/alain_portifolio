import { FaUserCircle, FaBell, FaSearch } from "react-icons/fa";
import "../css/DashboardNavbar.css";
import LOHO from "../assets/images.png";
const DashboardNavbar = () => {
  return (
    <div className="dashboard-navbar">
      <div className="dashboard-logo">
        <img src={LOHO} alt="connection failed" />
        <span>TeckPorKnz</span>
      </div>

      <div className="dashboard-search">
        <input type="text" placeholder="Search" />
        <FaSearch className="search-icon" />
      </div>

      <div className="dashboard-icons">
        <FaUserCircle className="icon" />
        <FaBell className="icon" />
      </div>
    </div>
  );
};

export default DashboardNavbar;
