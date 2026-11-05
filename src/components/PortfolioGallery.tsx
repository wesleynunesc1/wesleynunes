import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import './PortfolioGallery.css';

export const PortfolioGallery: React.FC = () => {
  // Store currently active project id
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Initial visible cases count (up to Nunes Hub = 4)
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const handleHoverActivate = (id: string) => {
    setActiveProjectId(id);
  };

  const handleHoverDeactivate = (id: string) => {
    setActiveProjectId((current) => (current === id ? null : current));
  };

  const handleTouchToggle = (id: string) => {
    setActiveProjectId((current) => (current === id ? id : id));
  };

  const allPublishedProjects = projectsData
    .filter((project) => project.status !== 'pending' && Boolean(project.screenshot))
    .sort((a, b) => a.order - b.order);

  const displayedProjects = allPublishedProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < allPublishedProjects.length;

  // Handle "VER MAIS PROJETOS" button click:
  // Reveals all remaining projects smoothly and scrolls to the first newly revealed project,
  // or scrolls seamlessly to the next section if all are revealed.
  const handleViewMoreProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (hasMoreProjects) {
      setVisibleCount(allPublishedProjects.length);
      // Wait for React re-render then scroll smoothly
      setTimeout(() => {
        const nextCase = document.querySelectorAll('.gallery-project-card')[4];
        if (nextCase) {
          nextCase.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 50);
    } else {
      const aboutSec = document.getElementById('sobre-mim');
      if (aboutSec) {
        aboutSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

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
          {displayedProjects.map((project, index) => (
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

        {/* Botão Sofisticado "VER MAIS PROJETOS" Centralizado */}
        <div className="view-more-projects-wrapper">
          <button
            type="button"
            onClick={handleViewMoreProjects}
            className="btn-view-more-projects"
            aria-label="VER MAIS PROJETOS — Expandir ou continuar a experiência"
          >
            <span>VER MAIS PROJETOS</span>
            <ArrowDown className="btn-view-more-arrow" size={15} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </section>
  );
};
