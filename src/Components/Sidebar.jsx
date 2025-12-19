import  {React ,useState } from "react";
import "../Styles/Sidebar.css";
import img from "../assets/profile_image.jpg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
export default function Sidebar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Icon */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? "active" : ""}`}>
        <div className="sidebar-top">
          <div className="avatar-wrap">
            <img src={img} alt="profile" className="avatar" />
          </div>
          <h1 className="side-name">Shahzaib</h1>
          <p className="side-role">(Frontend Developer)</p>
        </div>
        <hr className="line" />
        <nav className="side-nav">
          <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}><i class="fa-solid fa-house"></i>&nbsp;  &nbsp;  Home</Link>
          <Link className="nav-link" to="/About"onClick={() => setMenuOpen(false)} ><i class="fa-solid fa-user"></i> &nbsp;  &nbsp;About </Link>
          <Link className="nav-link" to="/Projects" onClick={() => setMenuOpen(false)}><i class="fa-solid fa-folder-open"></i> &nbsp;  &nbsp;Projects</Link>
          {/* <Link className="nav-link"  to="/Experience" onClick={() => setMenuOpen(false)} > <i class="fas fa-laptop-code"></i>&nbsp;  &nbsp;  Experience</Link> */}
            <Link className="nav-link" to="/Services" onClick={() => setMenuOpen(false)}  ><i class="fas fa-cogs"></i>&nbsp;  &nbsp; Services </Link>
          <Link className="nav-link" to="/Contact" onClick={() => setMenuOpen(false)} > <i class="fa-solid fa-envelope"></i>&nbsp;  &nbsp; Contact </Link>
        </nav>
        <hr className="line" />
        <div className="sidebar-bottom">
          {/* <div className="socials">
            <a href="https://github.com/Shahzaib-02" target="blank" aria-label="github"><i class="fa-brands fa-github"></i></a>
            <a href="#" aria-label="linkedin"><i class="fa-brands fa-linkedin"></i></a>
           
          </div> */}
          <div className="theme-area">
            <button 
  className="theme-btn" 
  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
>
  {theme === "light" ? <FaMoon /> : <FaSun />}
  {theme === "light" ? "      Dark" : "    Light"}
</button>
          </div>
        </div>
      </aside>
    </>
  );
}
