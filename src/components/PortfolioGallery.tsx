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
      // If tapping active card again, trigger re-render to replay
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
        {/* Section Header */}
        <div className="gallery-header">
          <span className="gallery-section-tag">
            PORTFÓLIO / PROJETOS SELECIONADOS
          </span>

          <p className="gallery-instruction">
            <span className="instruction-symbol">//</span>
            <span className="instruction-text-desktop">Passe o mouse sobre a imagem para interagir.</span>
            <span className="instruction-text-mobile">Toque em um projeto para explorar.</span>
          </p>
        </div>

        {/* 3-Column Grid on Desktop, 2 on Tablet, 1 on Mobile */}
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
