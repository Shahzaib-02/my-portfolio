import React from "react";
import { motion } from "framer-motion";
import "../Styles/About.css";

// import image from "../assets/profile_image.jpg"

const About = () => {
  return (
    <section id="about" className="about-section">
   
      {/* === INTRO === */}
      <motion.div
        className="intro-section card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* <img src={image} alt="Shahzaib" className="profile-img" /> */}
        <h1>
          Hi, I’m <span className="highlight">Shahzaib</span>
        </h1>
        <h3>Frontend Developer | React Enthusiast</h3>
        <p className="intro-text">
          Passionate about building modern, accessible, and high-performance web
          applications. I enjoy turning complex problems into simple,
          interactive, and delightful user experiences.
        </p>

        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin fa"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github fa"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram fa"></i>
          </a>
        </div>
      </motion.div>

      {/* === SKILLS === */}
      <motion.div
        className="skills-section card"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Technical Skills</h2>
        <div className="skill">
          <span>JavaScript</span>
          <div className="progress">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              whileInView={{ width: "90%" }}
            >
              90%
            </motion.div>
          </div>
        </div>
        <div className="skill">
          <span>React Js</span>
          <div className="progress">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
            >
              85%
            </motion.div>
          </div>
        </div>
        <div className="skill">
          <span>Tailwind CSS</span>
          <div className="progress">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
            >
              80%
            </motion.div>
          </div>
        </div>
        <div className="skill">
          <span>Material UI</span>
          <div className="progress">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
            >
              75%
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* === EXPERIENCE === */}
      <motion.div
        className="experience-section card"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Frontend Developer Intern</h4>
              <p>
                Built reusable React components & UI features for enterprise
                clients.
              </p>
              <span>2025 – Present</span>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Frontend Developer Intern</h4>
              <p>Designed responsive websites and dashboards for startups.</p>
              <span>2023 – 2024</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* === EDUCATION === */}
      

<motion.div
        className="experience-section card"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Frontend Developer Intern</h4>
              <p>
                Built reusable React components & UI features for enterprise
                clients.
              </p>
              <span>2025 – Present</span>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Frontend Developer Intern</h4>
              <p>Designed responsive websites and dashboards for startups.</p>
              <span>2023 – 2024</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* === WHAT I LOVE === */}
      <motion.div
        className="love-section card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>What I Love ❤️</h2>
        <div className="love-grid">
          <div className="love-item">
            <i className="fa-solid fa-code"></i>
            <p>Coding & Problem Solving</p>
          </div>
          <div className="love-item">
            <i className="fa-solid fa-palette"></i>
            <p>UI/UX & Animations</p>
          </div>
          <div className="love-item">
            <i className="fa-solid fa-users"></i>
            <p>Team Collaboration</p>
          </div>
          <div className="love-item">
            <i className="fa-solid fa-lightbulb"></i>
            <p>Learning & Innovation</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
