import React from "react";
import "../Styles/Home.css";

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} </small>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
