import React from 'react'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import "./intro.min.css"

export default function Intro() {
  const textRef = useRef();

  useEffect(()=> {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1250,
      backSpeed: 20,
      strings: ["Software Developer", "Student", "Gamer", "Anime Enthusiast", "Golfer" ]
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left-intro">
        <div className="img-container">
          <img src="assets/portrait-no-background.png" alt="portrait"></img>
        </div>
      </div>
      <div className="right-intro">
        <div className="wrapper-right">
          <h2>Hi There, I'm</h2>
          <h1>Cale Bybee</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down-arrow-5.png" alt="down-arrow"></img>
        </a>
      </div>
    </div>
  )
}
