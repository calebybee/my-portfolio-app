import React, { useState } from "react";
import "./app.min.css";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/work/Work";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Education />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
