import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Wordmark & Brand Line */}
        <div className="footer-branding">
          <div className="footer-logo">
            <span className="footer-brand-primary">WESLEY</span>
            <span className="footer-brand-secondary">NUNES</span>
          </div>
          <p className="footer-tagline">
            DESIGN • DEVELOPMENT • DIGITAL EXPERIENCES
          </p>
        </div>

        {/* Divider */}
        <div className="footer-line" />

        {/* Bottom Credits & Copyright */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Wesley Nunes. Todos os direitos reservados.
          </p>

          <a href="#hero" className="footer-back-to-top" aria-label="Voltar ao início">
            <span>Voltar ao topo ↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
