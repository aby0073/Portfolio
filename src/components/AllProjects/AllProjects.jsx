import React, { useEffect } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';
import './AllProject.css';

const AllProjects = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="projects all-projects">
      <h2 className="section-title">All Projects</h2>

      <div className="back-home-wrapper">
        <Link to="/" className="back-home-btn">← Back to Home</Link>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
