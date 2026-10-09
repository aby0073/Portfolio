import React from 'react';
import { FaCheckCircle, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-wrapper" data-aos="fade-up">
          <div className="about-image-container">
            <div className="image-frame">
              <img src="/abin.png" alt="Abin Roy S" className="profile-img" />
              <div className="frame-glow"></div>
            </div>
          </div>
          
          <div className="about-content">
            <span className="about-eyebrow">ABOUT ME</span>
            <h3 className="about-subtitle">Full-Stack Developer & Problem Solver</h3>
            
            <div className="about-description">
              <p>
                Hello! I'm <strong>Abin Roy S</strong>, a passionate software developer 
                specializing in building responsive and dynamic web applications using the 
                <strong> MERN stack</strong> (MongoDB, Express.js, React.js, and Node.js). 
                Based in Kochi, Kerala, I transform complex ideas into elegant, scalable solutions.
              </p>
              <p>
                Skilled in designing RESTful APIs, crafting clean user interfaces, and collaborating in 
                Agile teams, I thrive on challenges that push the boundaries of performance and modern web design.
              </p>
            </div>

            <div className="key-highlights">
              <div className="highlight-pill">
                <FaCheckCircle className="highlight-icon" />
                <div className="highlight-info">
                  <strong>Innovative Problem Solving</strong>
                  <span>Transforming complex requirements into clean, scalable architectures</span>
                </div>
              </div>

              <div className="highlight-pill">
                <FaCheckCircle className="highlight-icon" />
                <div className="highlight-info">
                  <strong>User-Centric Architecture Design</strong>
                  <span>Crafting responsive, intuitive, and high-performance interfaces</span>
                </div>
              </div>

              <div className="highlight-pill">
                <FaCheckCircle className="highlight-icon" />
                <div className="highlight-info">
                  <strong>Full-Stack RESTful API Mastery</strong>
                  <span>Building robust Node/Express backends and smooth React integrations</span>
                </div>
              </div>
            </div>

            <div className="about-quick-meta">
              <div className="meta-badge">
                <FaMapMarkerAlt />
                <span>Kochi, Kerala</span>
              </div>
              <div className="meta-badge">
                <FaGraduationCap />
                <span>Diploma in Computer Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
