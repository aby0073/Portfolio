import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [subtitleText, setSubtitleText] = useState('');
  const fullTitle = 'ABIN ROY S'; 
  const subtitles = [
    'Web Developer',
    'Full-Stack Developer',
    'Building Scalable Web Apps',
    'Problem Solver',
    'Tech Explorer'
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
          timeoutId = setTimeout(typeSubtitle, 1500);
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
