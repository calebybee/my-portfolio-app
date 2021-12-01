import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import "./sidebar.min.css";

export default function Sidebar() {
    return (
      <div class="sidebar">
        <div className="left-sidebar">
          <ul className="left-sidebar-list">
            <li className="sidebar-list-item">
              <a className="sidebar-links" href="https://github.com/calebybee" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            </li>
            <li className="sidebar-list-item">
              <a className="sidebar-links" href="https://www.linkedin.com/in/calebybee/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
            </li>
            <li className="sidebar-list-item">
              <a className="sidebar-links" href="https://www.codewars.com/users/calebybee/" target="_blank" rel="noopener noreferrer">
                <CodeIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="right-sidebar">
            <ul className="right-sidebar-list">
              <li className="right-sidebar-list-item" id="vertical-email">
                <a className="email-link" href="mailto:bybeecale@gmail.com?subject=Found you from hired." target="_blank" rel="noopener noreferrer">bybeecale@gmail.com</a>
              </li>
            </ul>
        </div>
      </div>
      
    )
}
