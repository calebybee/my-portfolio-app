import { Mail } from "@material-ui/icons";
import React from "react";
import "./topbar.min.css";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="wrapper-left">
          <a href="#intro" className="logo">hired.</a>
          <div className="item-container">
            <a href="mailto:bybeecale@gmail.com?subject=Found you from hired." target="_blank" rel="noopener noreferrer">
            <Mail className="icon" />
            <span>Get in touch</span></a>
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
