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
      // Toggle or restart animation
      if (current === id) {
        return id;
      }
      return id;
    });
  };

  // Only display published projects with real screenshots (pending projects remain prepared in data without cluttering public gallery)
  const publishedProjects = projectsData
    .filter((project) => project.status !== 'pending' && Boolean(project.screenshot))
    .sort((a, b) => a.order - b.order);

  return (
    <section id="projetos" className="portfolio-gallery-section">
      <div className="portfolio-gallery-container">
        {/* Mobile Central Featured "Portfólio" Button with Refined Sphere */}
        <div className="mobile-portfolio-cta-wrapper">
          <div className="mobile-portfolio-pill-box">
            {/* Delicate translucid cold sphere */}
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
            <span className="instruction-text-desktop">Passe o mouse para explorar o site.</span>
            <span className="instruction-text-mobile">Toque para explorar o site.</span>
          </p>
        </div>

        {/* Projects Gallery Desktop 3-col Grid */}
        <div
          className="projects-grid-3col"
          onMouseLeave={() => setActiveProjectId(null)}
        >
          {publishedProjects.map((project) => (
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
