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
        {/* Fundo Fotográfico Preto e Branco em Destaque com Overlay Escurecido e Fade */}
        <div className="about-bg-photo" aria-hidden="true">
          <picture className="about-picture">
            <source media="(max-width: 768px)" srcSet="/wesley-nunes-bw-mobile.webp" type="image/webp" />
            <source srcSet="/wesley-nunes-bw.webp" type="image/webp" />
            <img
              src="/wesley-nunes-bw.webp"
              alt=""
              className="about-bg-img"
              loading="lazy"
              decoding="async"
            />
          </picture>
          {/* Overlay cinematográfico escurecido com fade suave e alto contraste */}
          <div className="about-bg-overlay" />
        </div>

        {/* Bloco Coeso de Conteúdo com Ritmo e Hierarquia Perfeita */}
        <div className="about-card-body">
          {/* 1. Identificação Superior Mais Forte & Autoral */}
          <span className="about-tagline">
            WESLEY NUNES / CRIAÇÃO DE EXPERIÊNCIAS DIGITAIS
          </span>

          {/* 2. Título Principal */}
          <h2 className="about-title">
            Ideias ganham forma.
            <br />
            Negócios ganham presença.
          </h2>

          {/* 3. Subtexto / Copy Autoral de Alto Nível */}
          <p className="about-description">
            Sou Wesley Nunes. Desenvolvo websites que unem identidade visual autoral, estratégia de posicionamento e tecnologia moderna para transformar negócios em presenças digitais marcantes.
          </p>

          {/* 4. Categorias / Tags Complementares */}
          <div className="about-pill-tags" aria-label="Especialidades">
            {tags.map((tag) => (
              <span key={tag} className="about-tag-pill">
                {tag}
              </span>
            ))}
          </div>

          {/* 5. Linha Divisória Integrada */}
          <div className="about-divider" />

          {/* 6. CTA Final Elegante */}
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
    </section>
  );
};
