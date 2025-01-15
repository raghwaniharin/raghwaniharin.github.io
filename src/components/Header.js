// src/components/Header.js
import React from "react";

const Header = () => (
  <div className="header">
    <div className="topnav">
      {/* Social links */}
      <a href="mailto:harinharish2002@gmail.com" className="leftlink">
        <img src="rs/icons/gmail-svgrepo-com.png" alt="GMail" className="imgs2" />
      </a>
      <a href="https://www.linkedin.com/in/harin-ramji/" className="leftlink">
        <img src="rs/icons/linkedin-svgrepo-com.png" alt="LinkedIn" className="imgs2" />
      </a>
      <a href="https://github.com/raghwaniharin" className="leftlink">
        <img src="rs/icons/git.jpg" alt="GitHub" className="imgs2" />
      </a>

      {/* Navigation links */}
      
      <a className="rightlink" href="#education">Education</a>
      <a className="rightlink" href="#skills">Skills</a>
      <a className="rightlink" href="#projects">Projects</a>
      <a className="rightlink" href="#home">Home</a>
    </div>
  </div>
);

export default Header;
