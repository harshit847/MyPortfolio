import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

export default function About() {

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };



  return (
    <div className="about-container">
      <span className="goto" onClick={handleGoToHome}>←</span>

      <h1 className="about-title">About Me</h1>
      <p className="about-text">
        Hello! I'm Harshit Rai, currently pursuing my B.Tech at ABES Engineering College, Ghaziabad.
      </p>
      <p className="about-text">
        I’m passionate about full-stack development and have hands-on experience working with the MERN stack (MongoDB, Express, React, and Node.js).
      </p>
      <p className="about-text">
        Alongside development, I enjoy problem-solving and have a solid understanding of core subjects like Data Structures & Algorithms, Operating Systems, DBMS, and Computer Networks.
      </p>
      <p className="about-text">
        I'm always curious to learn and build new things!
      </p>
    </div>
  );
}
