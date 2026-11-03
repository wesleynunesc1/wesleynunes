import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import './PortfolioGallery.css';

export const PortfolioGallery: React.FC = () => {
  // Store the single actively scrolling project ID
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const handleToggleProject = (id: string) => {
    // If user clicks currently active project, keep active so it can restart
    // If user clicks a different project, activate only that one and reset the previous
    setActiveProjectId(id);
  };

  // Sort projects by order
  const sortedProjects = [...projectsData].sort((a, b) => a.order - b.order);

  return (
    <section id="projetos" className="portfolio-section">
      <div className="portfolio-inner">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-tag-pill">
            <span className="section-tag-dot" />
            <span>PORTFÓLIO / PROJETOS SELECIONADOS</span>
          </div>

          <h2 className="section-title">
            Projetos que falam por si.
          </h2>

          <p className="section-subtitle">
            Explore cada experiência digital, descubra os detalhes e veja como cada projeto foi construído visualmente.
          </p>

          <p className="section-instruction-note">
            <span className="note-accent">Dica interativa:</span> Clique sobre a janela do website para iniciar a rolagem automática em velocidade real da página.
          </p>
        </div>

        {/* Responsive Grid with Desktop Two-Column Layout */}
        <div className="portfolio-grid">
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={activeProjectId === project.id}
              onActivate={() => handleToggleProject(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
