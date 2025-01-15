// src/App.js
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import Education from "./Education";
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Education/>
      <Footer />
    </div>
  );
}

export default App;
