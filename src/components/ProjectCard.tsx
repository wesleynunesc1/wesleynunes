import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { ProjectAutoScroll } from './ProjectAutoScroll';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  onTouchToggle?: () => void;
  isFirstCards?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isActive,
  onActivate,
  onDeactivate,
  isFirstCards = false,
}) => {
  return (
    <article
      className={`gallery-project-card ${isActive ? 'is-active' : ''}`}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      tabIndex={0}
      role="region"
      aria-label={`Projeto ${project.title} - ${project.category}`}
    >
      {/* ÁREA DE PREVIEW COM AUTO SCROLL NO DESKTOP E HERO ESTÁTICA OTIMIZADA NO MOBILE */}
      <div className="card-preview-area">
        <ProjectAutoScroll
          screenshotSrc={project.screenshot}
          heroThumbnail={project.heroThumbnail}
          heroThumbnailMobile={project.heroThumbnailMobile}
          projectTitle={project.title}
          isActive={isActive}
          onActivate={onActivate}
          scrollSpeedSeconds={project.scrollSpeed}
          isEager={isFirstCards}
        />

        {/* OVERLAY DISCRETO NO DESKTOP AO PASSAR O MOUSE */}
        <div className="card-desktop-hover-overlay" aria-hidden="true">
          <div className="overlay-meta-info">
            <span className="overlay-project-category">{project.category}</span>
            <h3 className="overlay-project-title">{project.title}</h3>
          </div>

          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-overlay-visit"
              title={`Abrir ${project.title} em nova aba`}
              onClick={(e) => e.stopPropagation()}
            >
              <span>Ver site</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>

      {/* ÁREA INFERIOR — INFORMAÇÕES INTEGRADAS NO MOBILE (NÃO SOBREPÕE O PRINT NO MOBILE) */}
      <div className="card-info-strip mobile-only-strip">
        <div className="card-info-text">
          <span className="card-project-category">{project.category}</span>
          <h3 className="card-project-title">{project.title}</h3>
        </div>

        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card-visit"
            title={`Abrir ${project.title} em nova aba`}
            onClick={(e) => e.stopPropagation()}
          >
            <span>Ver site</span>
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
};
