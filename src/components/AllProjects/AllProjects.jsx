import React, { useEffect, useState } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';
import './AllProject.css';

const AllProjects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Full-Stack', 'Frontend'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="all-projects">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">All Project Portfolio</h2>

        <div className="back-home-wrapper">
          <Link to="/" className="back-home-btn">
            <span>←</span> Back to Home
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="project-filter-pills">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? projects.length 
              : projects.filter(p => p.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                className={`filter-pill-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat} <span className="pill-count">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
