import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl =
    'https://wa.me/5588981957471?text=' +
    encodeURIComponent('Olá, Wesley! Vi seu portfólio e gostaria de conversar sobre um projeto.');
  const instagramUrl = 'https://www.instagram.com/euwesleyununes/';

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="site-footer">
      <div className="footer-container">
        {/* Bloco de Abertura / Call to Action Editorial */}
        <div className="footer-cta-block">
          <span className="footer-tag-label">TEM UM PROJETO EM MENTE?</span>
          <h2 className="footer-headline">
            VAMOS CONSTRUIR ALGO
            <br className="footer-br-desktop" />
            {' '}EXTRAORDINÁRIO.
          </h2>
          <p className="footer-description">
            Seu próximo website pode ser o início de uma presença digital mais forte.
            Vamos conversar sobre sua ideia.
          </p>
          <div className="footer-action-wrapper">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-btn-primary"
              aria-label="INICIAR CONVERSA pelo WhatsApp"
            >
              INICIAR CONVERSA
            </a>
          </div>
        </div>

        {/* Linha Divisória Sutil */}
        <div className="footer-divider-top" />

        {/* Parte Inferior: Grupos e Colunas Responsivas */}
        <div className="footer-content-grid">
          {/* Identidade */}
          <div className="footer-col footer-col--brand">
            <a
              href="#hero-cinematic"
              onClick={(e) => handleSmoothScroll(e, 'hero-cinematic')}
              className="footer-brand-logo-link"
              aria-label="Wesley Nunes Início"
            >
              <img
                src="/logo.png"
                alt="Wesley Nunes"
                className="footer-brand-logo-img"
                width="220"
                height="32"
              />
            </a>
            <p className="footer-brand-bio">
              Design e desenvolvimento de websites com foco em estética, estratégia e experiência.
            </p>
          </div>

          {/* Navegação */}
          <div className="footer-col footer-col--nav">
            <h3 className="footer-col-title">Navegação</h3>
            <ul className="footer-nav-list">
              <li>
                <a
                  href="#hero-cinematic"
                  onClick={(e) => handleSmoothScroll(e, 'hero-cinematic')}
                  className="footer-link"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  onClick={(e) => handleSmoothScroll(e, 'projetos')}
                  className="footer-link"
                >
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleSmoothScroll(e, 'contato')}
                  className="footer-link"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Conexões Reais */}
          <div className="footer-col footer-col--social">
            <h3 className="footer-col-title">Conexões</h3>
            <ul className="footer-social-list">
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-link--icon"
                  aria-label="Instagram de Wesley Nunes"
                >
                  <span>Instagram</span>
                  <span className="footer-handle">@euwesleyununes</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-link--icon"
                  aria-label="WhatsApp de Wesley Nunes"
                >
                  <span>WhatsApp</span>
                  <span className="footer-handle">+55 (88) 98195-7471</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória Inferior */}
        <div className="footer-divider-bottom" />

        {/* Assinatura Final com Ano Dinâmico */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {currentYear} Wesley Nunes. Todos os direitos reservados.
          </p>
          <a
            href="#hero-cinematic"
            onClick={(e) => handleSmoothScroll(e, 'hero-cinematic')}
            className="footer-back-to-top"
            aria-label="Voltar ao início da página"
          >
            <span>Voltar ao topo ↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
