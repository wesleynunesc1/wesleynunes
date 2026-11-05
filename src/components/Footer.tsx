import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl =
    'https://wa.me/5588981957471?text=' +
    encodeURIComponent('Olá, Wesley! Vi seu portfólio e gostaria de conversar sobre um projeto.');
  const instagramUrl = 'https://www.instagram.com/euwesleyununes/';

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="site-footer">
      {/* Luz Atmosférica Curva Sutil (Inspirada na referência luminosa da Academy Plus) */}
      <div className="footer-luminous-glow" aria-hidden="true" />

      <div className="footer-container">
        {/* PARTE SUPERIOR: Logomarca Centralizada + Título + CTA */}
        <div className="footer-hero-block">
          {/* Logomarca oficial Wesley Nunes */}
          <a
            href="#hero-cinematic"
            onClick={handleBackToTop}
            className="footer-brand-logo-link"
            aria-label="Wesley Nunes Início"
          >
            <img
              src="/logo.png"
              alt="Wesley Nunes"
              className="footer-brand-logo-img"
              width="240"
              height="34"
            />
          </a>

          <h2 className="footer-headline">
            O PRÓXIMO GRANDE PROJETO
            <br />
            PODE SER O SEU.
          </h2>

          <p className="footer-description">
            Vamos transformar sua ideia em uma presença digital que faz a diferença.
          </p>

          <div className="footer-action-wrapper">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-btn-primary"
              aria-label="INICIAR UM PROJETO pelo WhatsApp"
            >
              INICIAR UM PROJETO
            </a>
          </div>
        </div>

        {/* CONEXÕES (Dispostas horizontalmente com espaçamento proporcional) */}
        <div className="footer-connections-block">
          <span className="footer-connections-title">CONEXÕES</span>
          <div className="footer-connections-links">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-connection-item"
              aria-label="Instagram @euwesleyununes"
            >
              <span className="connection-platform">Instagram</span>
              <span className="connection-handle">@euwesleyununes</span>
            </a>

            <span className="connection-sep" aria-hidden="true">•</span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-connection-item"
              aria-label="WhatsApp +55 (88) 98195-7471"
            >
              <span className="connection-platform">WhatsApp</span>
              <span className="connection-handle">+55 (88) 98195-7471</span>
            </a>
          </div>
        </div>

        {/* LINHA DIVISÓRIA SUTIL */}
        <div className="footer-divider-thin" />

        {/* PARTE INFERIOR: Botão Voltar ao Topo + Identidade + Copyright */}
        <div className="footer-bottom-block">
          <a
            href="#hero-cinematic"
            onClick={handleBackToTop}
            className="footer-back-to-top"
            aria-label="Voltar suavemente ao topo"
          >
            VOLTAR AO TOPO ↑
          </a>

          {/* Assinatura de Copyright centralizada e elegante */}
          <p className="footer-copyright">
            © {currentYear} Wesley Nunes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
