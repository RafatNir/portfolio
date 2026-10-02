import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navigationLinks = [
  ["Home", "/"], ["About", "/about"], ["Projects", "/projects"],
  ["Education", "/education"], ["Services", "/services"], ["Contact", "/contact"],
];

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Rafat home">
        <span className="brand-mark">RI</span><span>Rafat I.</span>
      </NavLink>
      <nav className="navbar" aria-label="Main navigation">
        {navigationLinks.map(([label, path]) => (
          <NavLink key={path} to={path} end={path === "/"} className={({ isActive }) => isActive ? "active" : ""}>{label}</NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
