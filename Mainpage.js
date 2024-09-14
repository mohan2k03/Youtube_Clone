import React from "react";
import "./Mainpage.css";

function Mainpage({ sidebarToggle, setSidebarToggle }) {
  return (
    
    <div className="mainpage" style={sidebarToggle ? {width: "80vw"} : {width: "94vw"}}>
      <div className="container" style={sidebarToggle ? {marginLeft: "250px",
  marginTop: "100px"} : {marginLeft: "350px",
  marginTop: "100px"}}>
        <div className="message-box">
          <h1>Try searching to get Started</h1>
          <p>
            Start watching videos to help us build a feed of videos that you
            will love
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;