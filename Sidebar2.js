import React from 'react';
import './Sidebar2.css';
import { TiHome, TiNews } from "react-icons/ti";
import { SiYoutubeshorts, SiYoutubekids, SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import { MdSubscriptions, MdPodcasts, MdFeedback } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { HiFire, HiMiniSignal } from "react-icons/hi2";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoMusicalNoteSharp, IoSettings } from "react-icons/io5";
import { PiFilmSlateFill, PiCoatHangerFill } from "react-icons/pi";
import { GiTrophy } from "react-icons/gi";
import { FaFlag } from "react-icons/fa6";
import { IoMdHelpCircle } from "react-icons/io";

import { FaRegUserCircle, FaLightbulb, FaYoutube } from "react-icons/fa";

const Sidebar2 = () => {
  return (
    <div className="sidebar2">
      <div className="section">
        <div className="item"><TiHome className="icon" />Home</div>
        <div className="item"><SiYoutubeshorts className="icon" />Shorts</div>
        <div className="item"><MdSubscriptions className="icon" />Subscriptions</div>
        <div className="item"><BiSolidVideos className="icon" />You</div>
        <div className="item"><LuHistory className="icon" />History</div>
      </div>

      <div className="section">
        <div className="sign-in">Sign in to like videos, comment and subscribe.</div>
        <button className="sign-in-btn">
          <span className="user"><FaRegUserCircle /></span>
          <span>Sign In</span>
        </button>
      </div>

      <div className="section explore">
        <div className="title">Explore</div>
        <div className="item"><HiFire className="icon" />Trending</div>
        <div className="item"><RiShoppingBag4Fill className="icon" />Shopping</div>
        <div className="item"><IoMusicalNoteSharp className="icon" />Music</div>
        <div className="item"><PiFilmSlateFill className="icon" />Movies</div>
        <div className="item"><HiMiniSignal className="icon" />Live</div>
        <div className="item"><SiYoutubegaming className="icon" />Gaming</div>
        <div className="item"><TiNews className="icon" />News</div>
        <div className="item"><GiTrophy className="icon" />Sports</div>
        <div className="item"><FaLightbulb className="icon" />Courses</div>
        <div className="item"><PiCoatHangerFill className="icon" />Fashion and Beauty</div>
        <div className="item"><MdPodcasts className="icon" />Podcasts</div>
      </div>

      <div className="section">
        <div className="item youtube"><FaYoutube className="icon" />YouTube Premium</div>
        <div className="item youtube"><SiYoutubemusic className="icon" />YouTube Music</div>
        <div className="item youtube"><SiYoutubekids className="icon" />YouTube Kids</div>
      </div>

      <div className="section">
        <div className="item"><IoSettings className="icon" />Settings</div>
        <div className="item"><FaFlag className="icon" />Report History</div>
        <div className="item"><IoMdHelpCircle className="icon" />Help</div>
        <div className="item"><MdFeedback className="icon" />Send Feedback</div>
      </div>

      <div className="section footer">
        <div className="item">About</div>
        <div className="item">Press</div>
        <div className="item">Copyright</div>
        <div className="item">Contact us</div>
        <div className="item">Creators</div>
        <div className="item">Advertise</div>
        <div className="item">Developers</div>
        <div className="item">Terms</div>
        <div className="item">Privacy Policy & Safety</div>
        <div className="item">How YouTube works</div>
        <div className="item">Test new features</div>
        <div className="item copyright">© 2024 Google LLC</div>
      </div>
    </div>
  );
};

export default Sidebar2;