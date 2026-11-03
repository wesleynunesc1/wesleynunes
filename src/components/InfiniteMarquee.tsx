import React from 'react';
import './InfiniteMarquee.css';

export const InfiniteMarquee: React.FC = () => {
  const marqueeItems = [
    'WEBSITES',
    'LANDING PAGES',
    'DIGITAL EXPERIENCES',
    'CREATIVE DEVELOPMENT',
    'UI/UX DESIGN',
    'MOTION DESIGN',
  ];

  return (
    <section className="marquee-section" aria-label="Especialidades e Habilidades">
      <div className="marquee-track">
        <div className="marquee-content">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`orig-${idx}`}>
              <span className="marquee-text">{item}</span>
              <span className="marquee-dot" aria-hidden="true" />
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`dup1-${idx}`}>
              <span className="marquee-text">{item}</span>
              <span className="marquee-dot" />
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`dup2-${idx}`}>
              <span className="marquee-text">{item}</span>
              <span className="marquee-dot" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
