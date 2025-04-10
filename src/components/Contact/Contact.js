import React from "react";
import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="back" onClick={handleGoToHome}>←</h1>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <div className="contact-info">
            <a href="mailto:harshitrai331@gmail.com" target="_blank" rel="noopener noreferrer">harshitrai331@gmail.com</a>
          </div>
          <div className="contact-label">Email</div>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <div className="contact-info">
            <a href="https://github.com/harshit847" target="_blank" rel="noopener noreferrer">harshit847</a>
          </div>
          <div className="contact-label">GitHub</div>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <div className="contact-info">
            <a href="https://www.linkedin.com/in/harshit-rai-576617274/" target="_blank" rel="noopener noreferrer">harshit-rai-576617274</a>
          </div>
          <div className="contact-label">LinkedIn</div>
        </div>
      </div>
    </div>
  );
}
