
import  { useEffect, useRef, useState } from "react";
import "../Styles/Background.css"
export default function BackgroundEffect() {
  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );
  const canvasRef = useRef(null);
  const particlesArray = useRef([]);
  const numberOfParticles = 100;

  // Canvas Particles (Dark Mode)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
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
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
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
            ctx.strokeStyle = "rgba(39, 162, 212, 0.2)";
            ctx.lineWidth = 1.2;
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

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [isDark]);

  // Theme Observer
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Dark Mode: Canvas */}
      <canvas ref={canvasRef} className={`particle-canvas ${isDark ? "show" : "hide"}`} />

      {/* Light Mode: Floating Blobs */}
      {!isDark && (
        <div className="floating-blobs">
          <div className="blob b1"></div>
          <div className="blob b2"></div>
          <div className="blob b3"></div>
        </div>
      )}
    </>
  );
}
