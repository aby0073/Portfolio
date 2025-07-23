import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section" data-aos="fade-right">
      <h2 className="section-title" >About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm <strong>Abin Roy S</strong>, a passionate and dedicated full-stack web developer. 
            I specialize in building responsive, scalable web applications using the MERN stack and love turning ideas into digital realities.
          </p>
          <p>
            With a strong foundation in both frontend and backend technologies, I enjoy solving real-world problems, optimizing UI/UX, and continuously learning emerging technologies.
          </p>
        </div>
        {/* Optional image */}
        <div className="about-image"data-aos="fade-left">
          <img src="/abin.png" alt="Abin Roy S" />
        </div>
      </div>
    </section>
  );
};

export default About;
