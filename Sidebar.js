import React from 'react';
import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="home"><TiHome /></div>
      <div className="shorts"><SiYoutubeshorts /></div>
      <div className="subscriptions"><MdSubscriptions /></div>
      <div className="you"><BiSolidVideos /></div>
      <div className="history"><LuHistory /></div>
    </div>
  );
};

export default Sidebar;