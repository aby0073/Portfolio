import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaFileDownload, FaCode } from 'react-icons/fa';
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
      {/* Background Ornaments */}
      <div className="hero-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <div className="hero-grid-overlay"></div>

      <div className="hero-container">
        <div className="hero-content" data-aos="fade-right">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </div>
          
          <h1 className="hero-title">
            <span className="title-intro">Hi, I'm</span>
            <span className="title-name"> {fullTitle}</span>
          </h1>
          
          <div className="hero-subtitle-wrapper">
            <p className="hero-subtitle">
              {subtitleText}<span className="cursor">|</span>
            </p>
          </div>
          
          <p className="hero-description">
            Crafting digital excellence through the <strong>MERN stack</strong>. 
            I build robust full-stack applications with a focus on 
            performance, scalability, and seamless user experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore Projects <FaArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Connect
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/aby0073" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/abin-roy-s" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:abinroy0073@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-visual" data-aos="zoom-in">
          <div className="hero-visual-wrapper">
            <div className="visual-glow"></div>
            <div className="image-outer-ring"></div>
            <div className="image-inner-ring"></div>
            
            <div className="floating-elements">
              <div className="float-item item-1">
                <FaCode />
                <span>React</span>
              </div>
              <div className="float-item item-2">
                <span className="n-icon">N</span>
                <span>Node.js</span>
              </div>
              <div className="float-item item-3">
                <span className="db-icon">DB</span>
                <span>MongoDB</span>
              </div>
            </div>

            <div className="profile-container">
              <img 
                src="/abin.png" 
                alt="Abin Roy S" 
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="mouse-icon">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
