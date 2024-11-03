import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaArchive, FaUsers, FaCog, FaQuestionCircle } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>SHOPPING LIST</h2>
      </div>
      <div className="sidebar-menu">
        <Link to="/user" className="menu-item">
          <FaUser className="menu-icon" />
          <span>User</span>
        </Link>
        <Link to="/archive" className="menu-item">
          <FaArchive className="menu-icon" />
          <span>Archive</span>
        </Link>
        <Link to="/member" className="menu-item">
          <FaUsers className="menu-icon" />
          <span>Member</span>
        </Link>
        <Link to="/settings" className="menu-item">
          <FaCog className="menu-icon" />
          <span>Settings</span>
        </Link>
        <Link to="/help" className="menu-item">
          <FaQuestionCircle className="menu-icon" />
          <span>Help</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;