import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [stats, setStats] = useState("Loading...");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    setTimeout(() => {
      setStats(
        "I'm an active full-stack developer passionate about building web apps with React, Node.js, and MongoDB. In the last 90 days, I have pushed multiple commits, opened and reviewed multiple PRs, and contributed to several public repositories. I love collaborating and continuously learning through code."
      );
    }, 1000);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme === "light" ? "light-mode" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="hero-container">
      <nav className="hero-nav">
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Me</Link>
        <button onClick={toggleTheme}>
          {theme === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>
      </nav>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        className="hero-title"
      >
        Harshit Rai
        <img src="/assets/myImage.jpg" alt=""
          className="hero-avatar"
        />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hero-subtitle"
      >
        Hi, my name is Harshit Rai. 🧑‍💻👨‍👩‍👦👶☕🍺🤘
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="hero-description"
      >
        I'm building projects — check <a href="https://github.com/harshit847" target="_blank" rel="noopener noreferrer">my GitHub</a> 🧪
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hero-stats"
      >
        {stats}
      </motion.p>
      <section class="tech-section">
        <h2 class="section-title">Tech Stack</h2>

        <div class="table-wrapper">
          <table class="tech-table">
            <tr>
              <th>Skills</th>
              <td>⚛️ React</td>
              <td>🟨 Node.js</td>
              <td>📜 JavaScript</td>
              <td>🎨 HTML & CSS</td>
              <td>💨 Tailwind CSS</td>
              <td>🚂 Express.js</td>
              <td>🔄 Redux</td>
            </tr>
            <tr>
              <th>Tools</th>
              <td>🔧 Git</td>
              <td>🐙 GitHub</td>
              <td>🖊️ VSCode</td>
              <td>📬 Postman</td>
              <td>🍃 MongoDB</td>
            </tr>
          </table>
        </div>
      </section>



    </div>
  );
}
