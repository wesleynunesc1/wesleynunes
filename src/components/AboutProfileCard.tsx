import React from 'react';
import './AboutProfileCard.css';

export const AboutProfileCard: React.FC = () => {
  const tags = ['Web Design', 'Desenvolvimento', 'Inteligência Artificial'];

  return (
    <section id="sobre-mim" className="about-profile-section" aria-label="Sobre Wesley Nunes">
      <div className="about-profile-container">
        {/* DESKTOP LAYOUT (>= 769px): Two distinct editorial cards side-by-side (Foto 34% / Info 66%) */}
        <div className="about-desktop-grid">
          {/* Left Card: Editorial B&W Photograph Only */}
          <div className="about-photo-card" aria-hidden="true">
            <div className="about-photo-wrapper">
              <picture>
                <source srcSet="/wesley-nunes-bw.webp" type="image/webp" />
                <img
                  src="/wesley-nunes-bw.webp"
                  alt="Wesley Nunes"
                  className="about-editorial-img"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              {/* Degradê natural de baixo para cima apagando a imagem suavemente */}
              <div className="about-photo-vignette" />
              {/* Iluminação sutil estática */}
              <div className="about-photo-glow" />
            </div>
          </div>

          {/* Right Card: Full Narrative & Presentation Content */}
          <div className="about-content-card">
            <div className="about-card-body">
              {/* 1. Identificação Superior (Normal case / no uppercase) */}
              <span className="about-tagline">
                Wesley Nunes / Criação de experiências digitais
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
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (<= 768px): Unified vertical card with photo integrated into background */}
        <div className="about-mobile-card">
          {/* Fotografia integrada ao fundo do card com degradê de baixo para cima */}
          <div className="about-mobile-bg-wrapper" aria-hidden="true">
            <picture className="about-mobile-picture">
              <source media="(max-width: 768px)" srcSet="/wesley-nunes-bw-mobile.webp" type="image/webp" />
              <img
                src="/wesley-nunes-bw-mobile.webp"
                alt=""
                className="about-mobile-img"
                loading="lazy"
                decoding="async"
              />
            </picture>
            {/* Degradê vertical suave de baixo para cima integrando a foto ao fundo escuro */}
            <div className="about-mobile-vignette" />
            <div className="about-mobile-glow" />
          </div>

          {/* Conteúdo sobreposto confortavelmente sem sobrepor o rosto */}
          <div className="about-mobile-body">
            {/* 1. Identificação Superior (Normal case) */}
            <span className="about-tagline">
              Wesley Nunes / Criação de experiências digitais
            </span>

            {/* 2. Título Principal */}
            <h2 className="about-title">
              Ideias ganham forma.
              <br />
              Negócios ganham presença.
            </h2>

            {/* 3. Subtexto */}
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
          </div>
        </div>
      </div>
    </section>
  );
};
