import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';
import "./intro.min.css";

export default function Intro() {
  const textRef = useRef();

  useEffect(()=> {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1250,
      backSpeed: 20,
      strings: ["Software Developer", "Python Enthusiast", "SQL Wizard", "Technical Consultant", "Avid Student", "Expert Problem Solver"]
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="intro-wrapper">
        <h2>Hi there, I'm</h2>
        <h1>Cale Bybee</h1>
        <h3><span ref={textRef}></span></h3>

        <p>
          I'm a software engineer specialized in backend development, working on my frontend skills (it's a work in progress).
        </p>
        <p>
          Currently, I'm focused on building API integrations for <a href="https://www.synergyscience.com/" className = "company-name">Synergy Science</a>.
        </p>
        <p className="dev-message">
          If you're seeing this message, my site is still under development. Check back often for updates :D
        </p>

        <a className="arrow" href="#portfolio">
          <img src="assets/white-arrow-nb.png" alt="down-arrow"></img>
        </a>
      </div>
    </div>
  )
}
