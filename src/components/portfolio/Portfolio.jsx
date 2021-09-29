import React from "react";
import "./portfolio.min.css";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/blockchain.jpg" alt="blockchain app"></img>
          <h3>Blockchain App</h3>
        </div>
      </div>
    </div>
  );
}
