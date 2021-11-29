import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
      <div className="left-sidebar">
        <ul>
          <li className="sidebar-icons">
            <a href="https://github.com/calebybee" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </li>
          <li className="sidebar-icons">
            <a href="https://www.linkedin.com/in/calebybee/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </li>
          <li className="sidebar-icons">
            <a href="https://www.codewars.com/users/calebybee/" target="_blank" rel="noopener noreferrer">
              <CodeIcon />
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default App;
