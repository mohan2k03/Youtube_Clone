import React from 'react';
import './Navbar.css';
import '../Sidebar/Sidebar.js'
import { FaRegUserCircle, FaSearch, FaMicrophoneAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Navbar({sidebarToggle, setSidebarToggle}) {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <button className="menu-btn">
          <input type='checkbox' id='sidebar-active' />
          <span className="menu-icon" onClick={() => setSidebarToggle(!sidebarToggle)}><IoMenu /></span>
        </button>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
          alt="YouTube Logo" 
          className="logo" 
        />
        <sup className="country-code">IN</sup>
      </div>
      <div className="navbar__center">
        <input type="text" className="search-bar" placeholder="Search..." />
        <button className="search-btn">
          <span><FaSearch /></span>
        </button>
        <button className="mic-btn">
          <span><FaMicrophoneAlt /></span> {/* Microphone icon */}
        </button>
      </div>
      <div className="navbar__right">
        <button className="options-btn">
          <span>&#8942;</span> {/* More options icon */}
        </button>
        <button className="sign-in-btn">
          <span className="user"><FaRegUserCircle /></span>
          <span>Sign In</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;