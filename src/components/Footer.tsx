import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/5588981957471?text=' +
    encodeURIComponent('Olá, Wesley! Vi seu portfólio e gostaria de conversar sobre um projeto.');
  const instagramUrl = 'https://www.instagram.com/euwesleyununes/';

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
          <div className="footer-contact-pills">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              WhatsApp: +55 (88) 98195-7471
            </a>
            <span className="footer-dot-sep">•</span>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              Instagram: @euwesleyununes
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-line" />

        {/* Bottom Credits & Copyright */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Wesley Nunes. Todos os direitos reservados.
          </p>

          <a href="#projetos" className="footer-back-to-top" aria-label="Voltar aos projetos">
            <span>Voltar ao topo ↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
