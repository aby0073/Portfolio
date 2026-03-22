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
    <section id="home" className="hero" data-aos="slide-down">
      <h1 className="hero-title">{fullTitle}<span className="cursor"></span></h1>
      <p className="hero-subtitle">{subtitleText}<span className="cursor">|</span></p>
      <a href="#projects" className="hero-button">View My Work</a>
    </section>
  );
};

export default Hero;
