import React from 'react';
import './Skills.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaDatabase
} from 'react-icons/fa';
import {
  SiMongodb,
  SiFigma,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostman
} from 'react-icons/si';

const skillsData = {
  frontend: [
    { name: 'HTML5', icon: <FaHtml5 color="#e34c26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#264de4" /> },
    { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
    { name: 'React', icon: <FaReact color="#61DBFB" /> },
    { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> },
    { name: 'Bootstrap', icon: <FaBootstrap color="#7952b3" /> },
    { name: 'Tailwind', icon: <SiTailwindcss color="#38bdf8" /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs color="#68a063" /> },
    { name: 'Express', icon: <SiExpress color="#ffffff" /> },
  ],
  tools: [
    { name: 'Git', icon: <FaGitAlt color="#f1502f" /> },
    { name: 'GitHub', icon: <FaGithub color="#ffffff" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
    { name: 'MySQL', icon: <SiMysql color="#00758f" /> },
    { name: 'Figma', icon: <SiFigma color="#a259ff" /> },
    { name: 'Postman', icon: <SiPostman color="#ff6c37" /> },
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Technical Skills</h2>
        <p className="skills-subtitle" data-aos="fade-up" data-aos-delay="100">
          Technologies I work with to bring ideas to life
        </p>

        <div className="skills-container">
          {/* Frontend Skills */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
            <h3 className="category-title">
              <span className="category-icon">🎨</span>
              Frontend
            </h3>
            <div className="skills-grid">
              {skillsData.frontend.map((skill, index) => (
                <div 
                  className="skill-card" 
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={200 + (index * 50)}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="300">
            <h3 className="category-title">
              <span className="category-icon">⚙️</span>
              Backend
            </h3>
            <div className="skills-grid">
              {skillsData.backend.map((skill, index) => (
                <div 
                  className="skill-card" 
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={300 + (index * 50)}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Databases */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="400">
            <h3 className="category-title">
              <span className="category-icon">🛠️</span>
              Tools & Databases
            </h3>
            <div className="skills-grid">
              {skillsData.tools.map((skill, index) => (
                <div 
                  className="skill-card" 
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={400 + (index * 50)}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
