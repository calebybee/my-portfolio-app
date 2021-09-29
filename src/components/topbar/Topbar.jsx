import { Mail, PhoneIphone } from "@material-ui/icons";
import React from "react";
import "./topbar.min.css";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="wrapper-left">
          <a href="#intro" className="logo">
            hired.
          </a>
          <div className="item-container">
            <PhoneIphone className="icon" />
            <span>(801) 777-8777</span>
          </div>
          <div className="item-container">
            <Mail className="icon" />
            <span>bybeecale@gmail.com</span>
          </div>
        </div>
        <div className="wrapper-right">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
