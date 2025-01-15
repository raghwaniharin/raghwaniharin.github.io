// src/components/Home.js
import React from "react";

const Home = () => (
  <div id="home">
    <div className="picdiv">
      <img src="rs/jeet/pic.jpg" className="pic1" alt="Profile Pic" />
    </div>
    <div className="titleme">
      <h1>HARIN RAMJI</h1>
      <h2>Software Engineering Student</h2>
    </div>
    <div className="infohome">
      <p>
      I am a Software Engineer and currently a student at Wintec.
       This website serves as a portfolio, showcasing my projects and highlighting my
       technical competencies and creative abilities.

      Each project featured here has played a pivotal role in my growth, allowing me to learn and apply
      new technologies. 
      I am enthusiastic about continuing this journey of exploration and innovation by 
      developing more impactful projects in the future.
      <br></br><br></br>
      This website was built using React, marking my first hands-on experience with this dynamic library. Throughout the development process, I gained valuable insights into React's component-based 
      architecture and state management, which allowed me to create an efficient and user-friendly interface. 
      </p>
    </div>
  </div>
);

export default Home;
