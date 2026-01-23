import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-wrapper" data-aos="fade-up">
          <div className="about-image-container">
            <div className="image-frame">
              <img src="/abin.png" alt="Abin Roy S" className="profile-img" />
              <div className="image-accent"></div>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="section-title">About Me</h2>
            <h3 className="about-subtitle">Full-Stack Developer & Problem Solver</h3>
            
            <div className="about-description">
              <p>
                Hello! I'm <strong>Abin Roy S</strong>, a passionate full-stack web developer 
                specializing in building exceptional digital experiences. With expertise in the 
                <strong> MERN stack</strong>, I transform complex problems into elegant, 
                scalable solutions.
              </p>
              <p>
                My journey in web development is driven by a love for clean code, 
                user-centric design, and continuous learning. I thrive on challenges that 
                push me to explore new technologies and best practices.
              </p>
            </div>

            <div className="key-highlights">
              <div className="highlight">
                <span className="dot"></span>
                <p>Innovative Thinking & Problem Solving</p>
              </div>
              <div className="highlight">
                <span className="dot"></span>
                <p>User-Centric Architecture Design</p>
              </div>
              <div className="highlight">
                <span className="dot"></span>
                <p>Performance & Scalability Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
