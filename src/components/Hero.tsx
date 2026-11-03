import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        {/* Superior Label Pill */}
        <div className="hero-badge-wrap">
          <div className="hero-badge">
            <span className="badge-glow" />
            <Sparkles size={13} className="badge-icon" />
            <span className="badge-text">PORTFÓLIO DIGITAL / WESLEY NUNES</span>
          </div>
        </div>

        {/* Main Title with Reference Style Typography */}
        <h1 className="hero-title">
          <span className="hero-title-line">Ideias que ganham forma.</span>
          <span className="hero-title-line hero-title-highlight">
            Experiências que deixam marca.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Uma seleção de websites, landing pages e experiências digitais desenvolvidas com atenção a cada detalhe.
        </p>

        {/* Call to Actions & Meta */}
        <div className="hero-actions">
          <a href="#projetos" className="btn-hero-primary">
            <span>EXPLORAR PROJETOS</span>
            <div className="btn-arrow-box">
              <ArrowDown size={16} />
            </div>
          </a>

          <a href="#sobre" className="btn-hero-secondary">
            <span>Conhecer a abordagem</span>
          </a>
        </div>

        {/* Floating Architectural Accent Indicator */}
        <div className="hero-metrics-strip">
          <div className="metric-item">
            <span className="metric-dot" />
            <span className="metric-label">FOCO</span>
            <span className="metric-val">Websites & Landing Pages Premium</span>
          </div>
          <div className="metric-separator" />
          <div className="metric-item">
            <span className="metric-dot" />
            <span className="metric-label">DIREÇÃO</span>
            <span className="metric-val">Motion, UI/UX & Alta Conversão</span>
          </div>
        </div>
      </div>

      {/* Atmospheric lighting specifically centered on the Hero */}
      <div className="hero-glow-backlight" aria-hidden="true" />
    </section>
  );
};
