import React from 'react';
import './AmbientBackground.css';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="ambient-background-container" aria-hidden="true">
      {/* Dynamic atmospheric radial gradient layers */}
      <div className="ambient-layer ambient-orb-1" />
      <div className="ambient-layer ambient-orb-2" />
      <div className="ambient-layer ambient-orb-3" />

      {/* Fine vertical lines of the technological backdrop */}
      <div className="ambient-vertical-lines" />

      {/* Subtle coordinate dot grid */}
      <div className="ambient-grid-overlay" />

      {/* Subtle dispersed starlight sparkles */}
      <div className="ambient-sparkles">
        <span className="sparkle sparkle-1" />
        <span className="sparkle sparkle-2" />
        <span className="sparkle sparkle-3" />
        <span className="sparkle sparkle-4" />
        <span className="sparkle sparkle-5" />
      </div>
    </div>
  );
};
