import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import "./sidebar.min.css";

export default function Sidebar() {
    return (
      <div className="left-sidebar">
        <ul className="left-sidebar-list">
          <li className="sidebar-icons">
            <a className="sidebar-links" href="https://github.com/calebybee" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </li>
          <li className="sidebar-icons">
            <a className="sidebar-links" href="https://www.linkedin.com/in/calebybee/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </li>
          <li className="sidebar-icons">
            <a className="sidebar-links" href="https://www.codewars.com/users/calebybee/" target="_blank" rel="noopener noreferrer">
              <CodeIcon />
            </a>
          </li>
        </ul>
      </div>
    )
}
