import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <div className="overlay-links">
            <a
              href={project.link}
              className="overlay-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Live Demo"
            >
              <FaExternalLinkAlt />
            </a>
            {project.github && (
              <a
                href={project.github}
                className="overlay-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub Repository"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
