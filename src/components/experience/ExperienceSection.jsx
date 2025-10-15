import React from "react";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  const experience = {
    company: "Liried Tech Pvt Ltd",
    logo: "https://repository.liried.com/public_upload/support_files/code/1625132693152_31760.png", // Place your logo in the public/images folder
    role: "Software Developer",
    duration: "August 2025 - Present",
    description: [
      "Developing full-stack industrial web applications using Node.js, Express, HTML, CSS, and Bootstrap.",
      "Collaborating with cross-functional teams to implement backend APIs and dynamic frontend interfaces.",
      "Optimizing applications for performance and scalability while ensuring clean, maintainable code."
    ]
  };

  return (
    <section id="experience" className="experience-section" data-aos="fade-up">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-card">
        <img src={experience.logo} alt={`${experience.company} logo`} className="experience-logo" />
        <div className="experience-content">
          <h3 className="experience-role">{experience.role}</h3>
          <p className="experience-company">{experience.company}</p>
          <p className="experience-duration">{experience.duration}</p>
          <ul className="experience-description">
            {experience.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
