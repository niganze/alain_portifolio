
import "../css/DashboardNavbar.css";
import { FaUserCircle, FaBell } from "react-icons/fa";

const DashboardNavbar = () => {
  return (
    <div className="dashboard-navbar">
      <div className="dashboard-logo">
        <h3>Your Dashboard Title</h3>
      </div>

      <div className="dashboard-icons">
        <FaUserCircle className="icon" />
        <FaBell className="icon" />
      </div>
    </div>
  );
};

export default DashboardNavbar;
