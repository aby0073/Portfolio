import React from 'react';
import { FaCode, FaLaptopCode, FaCoffee, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        
        <div className="about-content" data-aos="fade-up" data-aos-delay="100">
          <div className="about-text">
            <h3 className="about-subtitle">Full-Stack Developer & Problem Solver</h3>
            <p>
              Hello! I'm <strong>Abin Roy S</strong>, a passionate full-stack web developer 
              specializing in building exceptional digital experiences. With expertise in the 
              <strong> MERN stack</strong>, I transform complex problems into elegant, 
              scalable solutions.
            </p>
            <p>
              My journey in web development is driven by a love for clean code, 
              user-centric design, and continuous learning. I thrive on challenges that 
              push me to explore new technologies and best practices, ensuring every 
              project I touch delivers real value.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the latest web technologies, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <div>
                  <h4>Innovative Thinking</h4>
                  <p>Creative solutions to complex problems</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <div>
                  <h4>Detail-Oriented</h4>
                  <p>Precision in every line of code</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual" data-aos="fade-left" data-aos-delay="200">
            <div className="about-image-wrapper">
              <img src="/abin.png" alt="Abin Roy S" className="about-image" />
              <div className="about-bg-circle"></div>
            </div>
          </div>
        </div>

        <div className="about-stats" data-aos="fade-up" data-aos-delay="300">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
