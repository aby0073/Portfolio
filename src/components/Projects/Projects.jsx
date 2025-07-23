import React from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Link } from "react-router-dom"; // Import Link for client-side routing
import "./Projects.css";

const Projects = () => {
  const previewProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="projects" data-aos="fade-right">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {previewProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {projects.length > 3 && (
        <div className="show-more-wrapper">
          <Link to="/projects" className="show-more-btn">
            View All Projects →
          </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;
