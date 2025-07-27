import React, { useState, useEffect } from 'react';
import '../App.css';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className="navbar-inner">
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
        </div>
    </nav>

  );
};

export default Navbar;
