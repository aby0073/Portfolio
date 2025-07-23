import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Abin Roy S. All rights reserved.</p>
        <div className="footer-links">
          <a
            href="https://github.com/aby0073"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abin-roy-506453234/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:royabin963@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="#home" aria-label="Scroll to Top">
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
