import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { TransitionVisionCard } from './TransitionVisionCard';
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
    setActiveProjectId((current) => (current === id ? id : id));
  };

  // Only display published projects with real screenshots up to Nunes Hub (Noice Hub)
  const publishedProjects = projectsData
    .filter((project) => project.status !== 'pending' && Boolean(project.screenshot))
    .sort((a, b) => a.order - b.order)
    .filter((project) => project.order <= 4); // Cases up to Nunes Hub (Order 1: Leo Nunes, 2: Mateus Cavalcante, 3: Pedro Fit, 4: Nunes Hub)

  return (
    <section id="projetos" className="portfolio-gallery-section">
      <div className="portfolio-gallery-container">
        {/* Section Header: 01 / CASES DE SUCESSO */}
        <div id="cases-start" className="gallery-header">
          <span className="gallery-section-tag">
            01 / CASES DE SUCESSO
          </span>

          <p className="gallery-subtitle">
            Projetos desenvolvidos para unir identidade, experiência e resultado.
          </p>
        </div>

        {/* Projects Gallery Grid */}
        <div
          className="projects-grid-3col"
          onMouseLeave={() => setActiveProjectId(null)}
        >
          {publishedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={activeProjectId === project.id}
              onActivate={() => handleHoverActivate(project.id)}
              onDeactivate={() => handleHoverDeactivate(project.id)}
              onTouchToggle={() => handleTouchToggle(project.id)}
              isFirstCards={index < 3}
            />
          ))}
        </div>

        {/* Card Horizontal de Transição Imediatamente Abaixo do Último Case (Nunes Hub) */}
        <TransitionVisionCard />
      </div>
    </section>
  );
};
