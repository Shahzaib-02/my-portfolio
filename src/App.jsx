import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Components/Loader.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import ThemeToggle from "./Components/Theme_toggle.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Project.jsx";
import Experience from "./pages/Experience.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (!visited && location.pathname === "/") {
      const t = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("visited", "true");
      }, 1800);
      return () => clearTimeout(t);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (loading) return <Loader />;

  return (
    <div className="app-shell min-h-screen bg-base-100 text-base-content">
      <Sidebar theme={theme} setTheme={setTheme} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="main-area ml-0 md:ml-20 lg:ml-64">
        <main className="p-4 md:p-8">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        
      </div>
    </div>
  );
}

export default App;
