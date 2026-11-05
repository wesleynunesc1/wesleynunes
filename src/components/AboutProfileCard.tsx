import React from 'react';
import './AboutProfileCard.css';

export const AboutProfileCard: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/5588981957471?text=' +
    encodeURIComponent('Olá, Wesley! Vi seu portfólio e gostaria de conversar sobre um projeto.');

  const tags = ['Web Design', 'Desenvolvimento', 'Inteligência Artificial'];

  return (
    <section id="sobre-mim" className="about-profile-section" aria-label="Sobre Wesley Nunes">
      <div className="about-profile-card">
        {/* Fotografia Pessoal em Destaque */}
        <div className="about-photo-wrapper">
          <picture className="about-picture">
            <source media="(max-width: 768px)" srcSet="/wesley-nunes-profile-mobile.webp" type="image/webp" />
            <source srcSet="/wesley-nunes-profile.webp" type="image/webp" />
            <img
              src="/wesley-nunes-profile.webp"
              alt="Wesley Nunes — Designer e Desenvolvedor de Websites"
              className="about-photo-img"
              loading="lazy"
              decoding="async"
            />
          </picture>
          {/* Gradiente cinematográfico progressivo para conectar com o conteúdo */}
          <div className="about-photo-shade" aria-hidden="true" />
        </div>

        {/* Conteúdo Editorial do Card */}
        <div className="about-content-wrapper">
          <div className="about-content-inner">
            <span className="about-tagline">WESLEY NUNES / DESIGN & DESENVOLVIMENTO</span>

            <h2 className="about-title">
              Ideias ganham forma.
              <br />
              Negócios ganham presença.
            </h2>

            <p className="about-description">
              Sou Wesley Nunes. Desenvolvo websites que combinam identidade, estratégia e tecnologia para
              transformar a maneira como negócios se apresentam no digital.
            </p>

            {/* Três etiquetas complementares */}
            <div className="about-pill-tags" aria-label="Especialidades">
              {tags.map((tag) => (
                <span key={tag} className="about-tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            {/* Linha Divisória Sutil */}
            <div className="about-divider" />

            {/* Rodapé Interno do Card */}
            <div className="about-footer-row">
              <span className="about-cta-prompt">Tem uma ideia em mente?</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn-talk"
                aria-label="VAMOS CONVERSAR no WhatsApp"
              >
                VAMOS CONVERSAR
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
