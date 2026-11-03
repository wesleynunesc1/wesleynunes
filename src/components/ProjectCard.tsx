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
  onTouchToggle: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isActive,
  onActivate,
  onDeactivate,
  onTouchToggle,
}) => {
  return (
    <article
      className={`gallery-project-card ${isActive ? 'is-active' : ''}`}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onClick={onTouchToggle}
      tabIndex={0}
      role="button"
      aria-label={`Projeto ${project.title} - ${project.category}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onTouchToggle();
        }
      }}
    >
      {/* Screenshot Frame */}
      <div className="card-media-wrapper">
        <ProjectAutoScroll
          screenshotSrc={project.screenshot}
          projectTitle={project.title}
          isActive={isActive}
          onActivate={onActivate}
          scrollSpeedSeconds={project.scrollSpeed}
        />

        {/* Hover/Active Discrete Bottom Info Overlay */}
        <div className="card-info-overlay" aria-hidden="true">
          <div className="overlay-content">
            <div className="overlay-meta">
              <span className="overlay-category">{project.category}</span>
              <h3 className="overlay-title">{project.title}</h3>
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
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
