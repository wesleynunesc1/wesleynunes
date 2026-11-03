import React from 'react';
import { ExternalLink, Sparkles, Globe } from 'lucide-react';
import type { Project } from '../data/projects';
import { ProjectAutoScroll } from './ProjectAutoScroll';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onActivate: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isActive,
  onActivate,
}) => {
  return (
    <article
      className={`project-browser-card ${project.featured ? 'is-featured' : ''} ${isActive ? 'card-active' : ''}`}
    >
      {/* Browser Chrome Header */}
      <div className="browser-chrome-header">
        <div className="browser-dots" aria-hidden="true">
          <span className="dot dot-close" />
          <span className="dot dot-minimize" />
          <span className="dot dot-expand" />
        </div>

        <div className="browser-url-bar">
          <Globe size={12} className="url-icon" />
          <span className="url-text">
            {project.websiteUrl ? project.websiteUrl.replace(/^https?:\/\//, '') : `${project.id}.preview.local`}
          </span>
        </div>

        <div className="browser-actions-right">
          {project.featured && (
            <span className="featured-chip">
              <Sparkles size={11} />
              Destaque
            </span>
          )}
        </div>
      </div>

      {/* Auto Scroll Viewport Container */}
      <ProjectAutoScroll
        screenshotSrc={project.screenshot}
        projectTitle={project.title}
        isActive={isActive}
        onActivate={onActivate}
        scrollSpeedSeconds={project.scrollSpeed}
      />

      {/* Card Info & Meta Footer */}
      <div className="card-info-footer">
        <div className="card-meta-top">
          <span className="card-category">{project.category}</span>
          {project.year && <span className="card-year">{project.year}</span>}
        </div>

        <h3 className="card-title">{project.title}</h3>

        {project.description && (
          <p className="card-description">{project.description}</p>
        )}

        {project.tags && project.tags.length > 0 && (
          <ul className="card-tags-list" aria-label="Tecnologias utilizadas">
            {project.tags.map((tag, i) => (
              <li key={i} className="card-tag-pill">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="card-action-bar">
          <button
            type="button"
            className={`btn-toggle-scroll ${isActive ? 'active' : ''}`}
            onClick={onActivate}
          >
            {isActive ? 'Reiniciar visualização' : 'Ativar rolagem'}
          </button>

          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-external-site"
              aria-label={`Ver site ao vivo: ${project.title}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span>Ver site</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Subtle Border Glow when active */}
      <div className="card-ambient-outline" aria-hidden="true" />
    </article>
  );
};
