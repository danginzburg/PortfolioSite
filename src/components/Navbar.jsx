import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

return (
    <nav className="navbar">
        <a href="#hero" className="navbar-title">Portfolio</a>
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
        </div>
        <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
            <li className="navbar-item"><a href="#about" className="navbar-link">About</a></li>
            <li className="navbar-item"><a href="#skills" className="navbar-link">Skills</a></li>
            <li className="navbar-item"><a href="#projects" className="navbar-link">Projects</a></li>
        </ul>
    </nav>
);
};

export default Navbar;
