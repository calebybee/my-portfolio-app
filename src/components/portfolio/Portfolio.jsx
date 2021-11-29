import React from "react";
import "./portfolio.min.css";

export default function Portfolio() {
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  const listItems = list.map((d) => <li id={d.id}>{d.title}</li>);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {listItems }
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/bank.png" alt="blockchain app"></img>
          <h3>Blockchain App</h3>
        </div>
        <div className="item">
          <img src="assets/bank.png" alt="blockchain app"></img>
          <h3>Blockchain App</h3>
        </div>
        <div className="item">
          <img src="assets/bank.png" alt="blockchain app"></img>
          <h3>Blockchain App</h3>
        </div>
        <div className="item">
          <img src="assets/bank.png" alt="blockchain app"></img>
          <h3>Blockchain App</h3>
        </div>
        <div className="item">
          <img src="assets/bank.png" alt="blockchain app"></img>
          <h3>Blockchain App</h3>
        </div>
        <div className="item">
          <img src="assets/bank.png" alt="blockchain app"></img>
          <h3>Blockchain App</h3>
        </div>
      </div>
    </div>
  );
}
