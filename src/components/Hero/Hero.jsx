import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaFileDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [subtitleText, setSubtitleText] = useState('');
  const fullTitle = 'ABIN ROY S'; 
  const subtitles = [
    'Full-Stack Developer',
    'MERN Stack Specialist',
    'Building Scalable Solutions',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    let subtitleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeSubtitle = () => {
      const current = subtitles[subtitleIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          charIndex--;
          setSubtitleText(current.substring(0, charIndex));
          timeoutId = setTimeout(typeSubtitle, 50);
        } else {
          isDeleting = false;
          subtitleIndex = (subtitleIndex + 1) % subtitles.length;
          timeoutId = setTimeout(typeSubtitle, 300);
        }
      } else {
        if (charIndex < current.length) {
          charIndex++;
          setSubtitleText(current.substring(0, charIndex));
          timeoutId = setTimeout(typeSubtitle, 100);
        } else {
          isDeleting = true;
          timeoutId = setTimeout(typeSubtitle, 2000);
        }
      }
    };

    timeoutId = setTimeout(typeSubtitle, 500); 

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-right">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{fullTitle}</span>
          </h1>
          
          <div className="hero-subtitle-wrapper">
            <p className="hero-subtitle">
              {subtitleText}<span className="cursor">|</span>
            </p>
          </div>
          
          <p className="hero-description">
            Passionate about crafting exceptional digital experiences. 
            Specialized in building responsive, scalable web applications 
            using modern technologies and best practices.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <FaArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>

          <div className="hero-social">
            <a 
              href="https://github.com/aby0073" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/abin-roy-s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:abinroy0073@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-visual" data-aos="fade-left">
          <div className="hero-image-wrapper">
            <div className="floating-card card-1">
              <FaGithub />
              <span>Open Source</span>
            </div>
            <div className="floating-card card-2">
              <span className="code-symbol">&lt;/&gt;</span>
              <span>Clean Code</span>
            </div>
            <div className="floating-card card-3">
              <span className="rocket">🚀</span>
              <span>Fast Delivery</span>
            </div>
            <img 
              src="/abin.png" 
              alt="Abin Roy S" 
              className="hero-image"
            />
            <div className="hero-circle"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
