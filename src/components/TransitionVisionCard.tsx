import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './TransitionVisionCard.css';

interface TransitionVisionCardProps {
  onExploreAbout?: () => void;
}

export const TransitionVisionCard: React.FC<TransitionVisionCardProps> = ({ onExploreAbout }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onExploreAbout) {
      onExploreAbout();
    } else {
      const target = document.getElementById('sobre-mim');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="transition-vision-card" id="visao-transicao">
      <div className="vision-card-content">
        <div className="vision-text-group">
          <h3 className="vision-title">Por trás de cada projeto, existe uma visão.</h3>
          <p className="vision-description">Conheça quem transforma ideias em websites.</p>
        </div>

        <div className="vision-action-group">
          <a
            href="#sobre-mim"
            onClick={handleClick}
            className="vision-btn"
            aria-label="SOBRE MIM — Conheça Wesley Nunes"
          >
            <span>SOBRE MIM</span>
            <ArrowUpRight className="vision-btn-arrow" size={16} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </div>
  );
};
