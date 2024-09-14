import React from "react";
import Sidebar from './Sidebar.js';
import Sidebar2 from './Sidebar2.js'
export const MainSidebar = ({sidebarToggle}) => {
  return (
    sidebarToggle ? <Sidebar2 /> : <Sidebar />
  )
};

export default MainSidebar;