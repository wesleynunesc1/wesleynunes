import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { filmHeroContent, filmHeroCells } from '../data/filmHeroConfig';
import './CinematicHeroWall.css';

gsap.registerPlugin(ScrollTrigger);

interface CinematicHeroWallProps {
  onProgress?: (progress: number) => void;
}

export const CinematicHeroWall: React.FC<CinematicHeroWallProps> = ({ onProgress }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);

  const mainCell = filmHeroCells.find((c) => c.position === 'main')!;
  const surroundingCells = filmHeroCells.filter((c) => c.position !== 'main');

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(filmHeroContent.targetSectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const grid = gridRef.current;
      const copy = copyRef.current;
      const dim = dimRef.current;

      if (!section || !grid || !copy || !dim) return;

      const isMobile = window.innerWidth <= 768;

      // Pinned master scroll timeline
      // 300svh pinned scroll length gives comfortable, natural pacing
      gsap.set(grid, { transformOrigin: '50% 50%' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.85,
          onUpdate: (self) => {
            if (onProgress) {
              onProgress(self.progress);
            }
          },
        },
      });

      // EXACT FILMSUPPLY TRANSFORMATION TIMELINE:
      // FASE 1 & 2: Textos desaparecem progressivamente (0 -> 35% do percurso)
      tl.to(
        copy,
        {
          opacity: 0,
          y: -25,
          scale: 0.96,
          ease: 'power2.inOut',
          duration: 35,
        },
        0
      )

      // FASE 2 & 3: Zoom-out contínuo do grid (0 -> 140)
      // O quadro central encolhe de 1.0 para ~0.465, revelando os quadros ao redor que surgem
      .to(
        grid,
        {
          scale: isMobile ? 0.48 : 0.4654,
          ease: 'power1.inOut',
          duration: 140,
        },
        0
      )

      // FASE 4 & 5: O mosaico sobe coordenadamente e escurece sutilmente dando lugar à próxima seção (140 -> 240)
      .to(
        grid,
        {
          yPercent: isMobile ? -45 : -40,
          ease: 'none',
          duration: 100,
        },
        140
      )
      .to(
        dim,
        {
          opacity: 0.85,
          ease: 'power1.in',
          duration: 80,
        },
        140
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [onProgress]);

  return (
    <section ref={sectionRef} className="fs-hero-section" id="hero-cinematic">
      <div ref={stickyRef} className="fs-hero-sticky">
        {/* 3x3 Grid que começa com foco 100% no quadro central */}
        <div ref={gridRef} className="fs-hero-grid">
          {/* QUADROS AO REDOR (Surround Cells) */}
          {surroundingCells.map((cell) => (
            <div
              key={cell.id}
              className={`fs-hero-cell fs-hero-cell--${cell.position}`}
              id={cell.id}
            >
              <div className="fs-cell-media">
                <img
                  src={cell.imageSrc}
                  alt={cell.title}
                  className="fs-cell-img"
                  loading="eager"
                  style={{ objectPosition: cell.objectPosition || 'center' }}
                />
                <div className="fs-cell-shade" />
              </div>
            </div>
          ))}

          {/* QUADRO PRINCIPAL ISOLADO NO CENTRO (Main Cell) */}
          <div className="fs-hero-cell fs-hero-cell--main" id={mainCell.id}>
            <div className="fs-cell-media">
              {mainCell.videoSrc && (
                <video
                  className="fs-cell-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={mainCell.poster || mainCell.imageSrc}
                >
                  <source src={mainCell.videoSrc} type="video/mp4" />
                </video>
              )}
              <img
                src={mainCell.imageSrc}
                alt={mainCell.title}
                className="fs-cell-img"
                loading="eager"
                style={{ objectPosition: mainCell.objectPosition || 'center' }}
              />
              {/* Overlay escuro para contraste e legibilidade impecável */}
              <div className="fs-cell-shade main-shade" />
            </div>

            {/* CONTEÚDO CENTRALIZADO SOBRE O QUADRO PRINCIPAL */}
            <div ref={copyRef} className="fs-hero-content">
              {/* Etiqueta superior */}
              <div className="fs-hero-badge">
                <span className="fs-badge-dot" />
                <span className="fs-badge-text">{filmHeroContent.badge}</span>
              </div>

              {/* Título Principal */}
              <h1 className="fs-hero-title">
                EXPERIÊNCIAS DIGITAIS
                <br />
                QUE IMPRESSIONAM.
              </h1>

              {/* Subtítulo */}
              <p className="fs-hero-subtitle">
                {filmHeroContent.subtitle}
              </p>

              {/* Botão Premium Minimalista */}
              <div className="fs-hero-cta">
                <a
                  href={`#${filmHeroContent.targetSectionId}`}
                  onClick={handleScrollToProjects}
                  className="fs-cta-button"
                  aria-label="Explorar projetos selecionados"
                >
                  <span className="fs-btn-glow" />
                  <span className="fs-btn-label">{filmHeroContent.ctaText}</span>
                  <span className="fs-btn-arrow" aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Coordinated Dimming Layer during exit */}
        <div ref={dimRef} className="fs-hero-dim" />
      </div>
    </section>
  );
};
