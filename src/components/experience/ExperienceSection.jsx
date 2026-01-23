import React from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Liried Tech Pvt Ltd",
      logo: "https://repository.liried.com/public_upload/support_files/code/1625132693152_31760.png",
      role: "Software Developer",
      duration: "August 2025 - Present",
      description: [
        "Developing full-stack industrial web applications using Node.js, Express, HTML, CSS, and Bootstrap.",
        "Collaborating with cross-functional teams to implement backend APIs and dynamic frontend interfaces.",
        "Optimizing applications for performance and scalability while ensuring clean, maintainable code."
      ]
    },
    {
      company: "Tech Maghi",
      logo: "https://techmaghi.com/wp-content/uploads/2024/07/cropped-Logo-Blue.png",
      role: "MERN Stack Developer Intern",
      duration: "July 2024 - January 2025",
      description: [
        "Built responsive web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Developed RESTful APIs and integrated third-party services for enhanced functionality.",
        "Collaborated with the development team to deliver high-quality code and meet project deadlines."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-bg-glow"></div>
      
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="experience-title">Professional Journey</h2>
          <p className="experience-subtitle">A timeline of my professional experience and growth</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <div className="timeline-dot">
                <FaBriefcase />
              </div>
              
              <div className="timeline-content">
                <div className="experience-card-premium">
                  <div className="card-top">
                    <div className="company-info">
                      <div className="company-logo-wrap">
                        <img src={exp.logo} alt={exp.company} />
                      </div>
                      <div className="company-meta">
                        <h3 className="role-title">{exp.role}</h3>
                        <p className="company-name">{exp.company}</p>
                      </div>
                    </div>
                    <div className="experience-date">
                      <FaCalendarAlt />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <ul className="description-list">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="card-footer-glow"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
