import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <h2 className="navbar-brand">PORTFOLIO</h2>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="home" smooth duration={100} onClick={closeMenu} className="navbar-link">Home</Link>
          <Link to="about" smooth duration={100} onClick={closeMenu} className="navbar-link">About</Link>
          <Link to="skills" smooth duration={100} onClick={closeMenu} className="navbar-link">Skills</Link>
          <Link to="projects" smooth duration={100} onClick={closeMenu} className="navbar-link">Projects</Link>
          <Link to="contact" smooth duration={100} onClick={closeMenu} className="navbar-link">Contact</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'rotate1' : ''}`}></span>
          <span className={`bar ${isOpen ? 'hide' : ''}`}></span>
          <span className={`bar ${isOpen ? 'rotate2' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
