import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import './PortfolioGallery.css';

export const PortfolioGallery: React.FC = () => {
  // Store currently active project id
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const handleHoverActivate = (id: string) => {
    setActiveProjectId(id);
  };

  const handleHoverDeactivate = (id: string) => {
    setActiveProjectId((current) => (current === id ? null : current));
  };

  const handleTouchToggle = (id: string) => {
    setActiveProjectId((current) => {
      if (current === id) {
        return id;
      }
      return id;
    });
  };

  const sortedProjects = [...projectsData].sort((a, b) => a.order - b.order);

  return (
    <section id="projetos" className="portfolio-gallery-section">
      <div className="portfolio-gallery-container">
        {/* Mobile Central Featured "Portfólio" Button with Floating Bubble */}
        <div className="mobile-portfolio-cta-wrapper">
          <div className="mobile-portfolio-pill-box">
            {/* Decorative overlapping bubble sphere */}
            <div className="portfolio-pill-bubble" aria-hidden="true" />
            <button
              type="button"
              className="btn-mobile-portfolio-main"
              onClick={() => {
                const el = document.getElementById('cases-start');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Portfólio
            </button>
          </div>
        </div>

        {/* Section Header: 01 / CASES DE SUCESSO */}
        <div id="cases-start" className="gallery-header">
          <span className="gallery-section-tag">
            01 / CASES DE SUCESSO
          </span>

          <p className="gallery-instruction">
            <span className="instruction-symbol">//</span>
            <span className="instruction-text-desktop">Passe o mouse sobre a imagem para interagir.</span>
            <span className="instruction-text-mobile">Clique sobre a imagem para interagir.</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-3col">
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={activeProjectId === project.id}
              onActivate={() => handleHoverActivate(project.id)}
              onDeactivate={() => handleHoverDeactivate(project.id)}
              onTouchToggle={() => handleTouchToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
