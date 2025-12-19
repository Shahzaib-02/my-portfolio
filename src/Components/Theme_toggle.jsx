import React from "react";
import "../Styles/Toggle.css";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="theme-toggle-floating">
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? '🌙 Dark' : '☀️ Light'}
      </button>
    </div>
  );
}
