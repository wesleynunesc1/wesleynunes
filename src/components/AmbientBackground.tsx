import React from 'react';
import './AmbientBackground.css';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="ambient-background-container" aria-hidden="true">
      {/* Dynamic atmospheric radial gradient layers */}
      <div className="ambient-layer ambient-orb-1" />
      <div className="ambient-layer ambient-orb-2" />
      <div className="ambient-layer ambient-orb-3" />
      <div className="ambient-grid-overlay" />
    </div>
  );
};

