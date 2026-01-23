import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-elite">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">ABIN<span>.</span></h2>
            <p className="footer-tagline">Building the future of the web with passion and precision.</p>
          </div>
          
          <div className="footer-nav">
            <h4 className="nav-title">Quick Links</h4>
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-social-meta">
            <h4 className="nav-title">Socials</h4>
            <div className="meta-icons">
              <a href="https://github.com/aby0073" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/in/abin-roy-s" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="mailto:royabin963@gmail.com"><FaEnvelope /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>© {new Date().getFullYear()} Abin Roy S. Made with <FaHeart className="heart" /> in Kerala</p>
          </div>
          
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Go to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
