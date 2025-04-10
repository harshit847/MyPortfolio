import React from "react";
import { motion } from "framer-motion";
//import { Link } from "react-router-dom";
import "./Projects.css";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Chat-App",
    date: "2025-01-10",
    description:
      "A real-time chat application built with the MERN stack. Features include user authentication, private messaging, group chats, and responsive UI.",
    views: 3,
    stars: 0,
    comments: 0,
    tag: "chat-application",
    github: "https://github.com/harshit847"

  },
  {
    title: "HMS",
    date: "2025-03-12",
    description:
      "Hospital Management System built using the MERN stack, featuring patient registration, doctor assignment, appointment scheduling, and medical records tracking.",
    views: 2,
    stars: 0,
    comments: 0,
    tag: "hms",
    github: "https://github.com/harshit847"

  },
];

export default function ProjectsPage() {

  
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <div className="projects-container">
      <span className="back" onClick={handleGoToHome}>←</span>
      <h1 className="projects-title">Projects</h1>
      <p className="projects-subtitle">
        My hobby projects, most of them are MERN stack based apps.
      </p>
      <hr className="projects-divider" />

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="project-date">{project.date}</div>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon"
                title="View on GitHub"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              </a>
            )}
            <div className="project-meta">
              <div className="project-stats">
                <span>👁 {project.views}</span>
                <span>✨ {project.stars}</span>
                <span>💬 {project.comments}</span>
              </div>
              <span className="project-tag">{project.tag}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
