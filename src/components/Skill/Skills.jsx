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
} from 'react-icons/fa';
import {
  SiMongodb,
  SiFigma,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostman,
  SiRedux,
  SiTypescript
} from 'react-icons/si';

const Skills = () => {
  const allSkills = [
    { name: 'React', icon: <FaReact color="#61DBFB" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#68a063" /> },
    { name: 'Express.js', icon: <SiExpress color="#ffffff" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
    { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
    { name: 'Redux', icon: <SiRedux color="#764ABC" /> },
    { name: 'Tailwind', icon: <SiTailwindcss color="#38bdf8" /> },
    { name: 'MySQL', icon: <SiMysql color="#00758f" /> },
    { name: 'Postman', icon: <SiPostman color="#ff6c37" /> },
    { name: 'Figma', icon: <SiFigma color="#a259ff" /> },
    { name: 'Git/GitHub', icon: <FaGitAlt color="#f1502f" /> },
    { name: 'Bootstrap', icon: <FaBootstrap color="#7952b3" /> },
    { name: 'HTML5', icon: <FaHtml5 color="#e34c26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#264de4" /> },
  ];

  // Double the skills for a seamless infinite scroll effect
  const doubledSkills = [...allSkills, ...allSkills];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="compact-skills-header" data-aos="fade-up">
          <h2 className="section-title">Technical Expertise</h2>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {doubledSkills.map((skill, index) => (
              <div className="marquee-item" key={`${skill.name}-${index}`}>
                <div className="skill-circle-mini">
                  {skill.icon}
                  <div className="skill-tooltip">{skill.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-tags-group">
          {allSkills.map((skill) => (
            <span key={skill.name} className="skill-tag-micro">
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
