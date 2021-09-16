import React from 'react'
import "./topbar.min.css"
import {PhoneIphone,Mail} from "@material-ui/icons"
import MenuIcon from "@material-ui/icons/Menu"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={ "topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="wrapper-left">
          <a href="#intro" className="logo">Cale Bybee</a>
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
          <button className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </button>
        </div>
      </div>
    </div>
  )
}
