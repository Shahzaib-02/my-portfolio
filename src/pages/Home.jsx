import React, { useState, useEffect, useRef } from "react";
import "../Styles/Home.css";

export default function Home() {
  const roles = ["Frontend Developer", "React Enthusiast", "UI Engineer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const [showContent, setShowContent] = useState(false);
  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );

  const canvasRef = useRef(null);
  const particlesArray = useRef([]);
  const numberOfParticles = 50;

  // Typing effect
  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    setText(roles[index].substring(0, subIndex));
  }, [subIndex, index]);

  // Canvas particles effect (Dark Mode)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 3;
        this.speedX = (Math.random() - 0.2) * 0.3;
        this.speedY = (Math.random() - 0.2) * 0.3;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
    }

    function initParticles() {
      particlesArray.current = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.current.push(new Particle());
      }
    }

    function connectParticles() {
      for (let a = 0; a < particlesArray.current.length; a++) {
        for (let b = a + 1; b < particlesArray.current.length; b++) {
          const dx = particlesArray.current[a].x - particlesArray.current[b].x;
          const dy = particlesArray.current[a].y - particlesArray.current[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = isDark
              ? "rgba(39, 162, 212, 0.2)"
              : "transparent"; // light mode mai lines invisible
            ctx.lineWidth = 1.7;
            ctx.beginPath();
            ctx.moveTo(particlesArray.current[a].x, particlesArray.current[a].y);
            ctx.lineTo(particlesArray.current[b].x, particlesArray.current[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (isDark) {
        particlesArray.current.forEach((p) => p.update());
        connectParticles();
      }
      requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    const timer = setTimeout(() => setShowContent(true), 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isDark]);

  // MutationObserver → detect theme change
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-section">
      {/* Canvas (Dark mode only) */}
      <canvas
        ref={canvasRef}
        className={`particle-canvas ${isDark ? "show" : "hide"}`}
      />

      {/* Floating Blobs (Light mode only) */}
      {!isDark && (
        <div className="floating-blobs">
          <div className="blob b1"></div>
          <div className="blob b2"></div>
          <div className="blob b3"></div>
          <div className="blob b4"></div>
          <div className="blob b5"></div>
        </div>
      )}

      {/* Main content */}
      <div
        className={`home-content ${showContent ? "fade-in" : "hidden"}`}
        style={{ zIndex: 2 }}
      >
        <p className="welcome">👋 &nbsp;&nbsp; Welcome to my portfolio</p>
        <h1>
          Hi, I’m <span className="highlight">Shahzaib</span>
        </h1>
        <h2>
          {text}
          <span className="cursor">&nbsp;</span>
        </h2>
        <p className="desc">
          I design, develop, and animate modern digital experiences with
          precision and purpose. Blending clean aesthetics with advanced
          interactions, I bring ideas to life through code.
        </p>

        <div className="home-ctas">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="/resume.pdf" className="btn btn-danger">
            Download Resume
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
