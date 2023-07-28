// import React from "react";
import { FaHome, FaUsers, FaFileAlt, FaCog } from "react-icons/fa";
import { Link,  Outlet } from "react-router-dom";
import "../css/Dashsidebar.css";

const Dashsidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-item">
        <FaHome className="sidebar-icon" />
        <span>Home</span>
      </div>
      <div className="sidebar-item">
        <FaUsers className="sidebar-icon" />
        <Link to="users">
          {" "}
          <span>Users</span>
        </Link>
      </div>
      <div className="sidebar-item">
        <FaFileAlt className="sidebar-icon" />
        <span>Files</span>
      </div>
      <div className="sidebar-item">
        <FaCog className="sidebar-icon" />
        <span>Settings</span>
      </div>
      <div className="sidebar-item">
        <FaCog className="sidebar-icon" />
        <span>Settings</span>
      </div>
      <div className="sidebar-item">
        <FaCog className="sidebar-icon" />
        <span>Settings</span>
      </div>
      <div className="sidebar-item">
        <FaCog className="sidebar-icon" />
        <span>Settings</span>
      </div>
      <div className="sidebar-item">
        <FaCog className="sidebar-icon" />
        <span>Settings</span>
      </div>
      <div className="sidebar-item">
        <FaCog className="sidebar-icon" />
        <span>Settings</span>
      </div>
      <div className="sidebar-item">
        <FaCog className="sidebar-icon" />
        <span>Settings</span>
      </div>
      <div className="datas">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashsidebar;
