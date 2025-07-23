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
} from 'react-icons/fa';
import {
  SiMongodb,
  SiFigma,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 color="#e34c26" /> },
  { name: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
  { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
  { name: 'React.js', icon: <FaReact color="#61DBFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#68a063" /> },
  { name: 'Express.js', icon: <SiExpress color="#ffffff" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
  { name: 'Git', icon: <FaGitAlt color="#f1502f" /> },
  { name: 'GitHub', icon: <FaGithub color="#ffffff" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" /> },
  { name: 'Figma', icon: <SiFigma color="#a259ff" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
