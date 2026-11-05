import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { filmHeroContent, filmHeroCells } from '../data/filmHeroConfig';
import './CinematicHeroWall.css';

gsap.registerPlugin(ScrollTrigger);

export const CinematicHeroWall: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);
  const surroundLayerRef = useRef<HTMLDivElement>(null);

  // Lateral panels
  const leftCellRef = useRef<HTMLDivElement>(null);
  const rightCellRef = useRef<HTMLDivElement>(null);
  // Top / bottom and corner panels
  const topCellRef = useRef<HTMLDivElement>(null);
  const bottomCellRef = useRef<HTMLDivElement>(null);
  const cornerCellsRef = useRef<HTMLDivElement[]>([]);

  const mainCell = filmHeroCells.find((c) => c.position === 'main')!;
  const surroundingCells = filmHeroCells.filter((c) => c.position !== 'main');

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      const projectsSection = document.getElementById(filmHeroContent.targetSectionId);
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    const section = sectionRef.current;
    if (section) {
      // Scroll smoothly through the cinematic animation track down to where Cases starts
      const targetScroll = section.offsetTop + section.offsetHeight;
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  useLayoutEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const header = document.querySelector<HTMLElement>('.site-header');

    // NO MOBILE: Remove o efeito complexo de animação, zoom-out e pinned track.
    // Deixa apenas o vídeo e o conteúdo da Hero diretamente visíveis com header acessível.
    if (isMobile) {
      if (header) {
        gsap.set(header, {
          opacity: 1,
          y: 0,
          pointerEvents: 'auto',
        });
      }
      return;
    }

    // DESKTOP: Preserva a experiência cinematográfica FilmSupply completa
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const grid = gridRef.current;
      const copy = copyRef.current;
      const dim = dimRef.current;
      const surroundLayer = surroundLayerRef.current;
      const leftCell = leftCellRef.current;
      const rightCell = rightCellRef.current;
      const topCell = topCellRef.current;
      const bottomCell = bottomCellRef.current;
      const corners = cornerCellsRef.current;

      if (!section || !grid || !copy || !dim || !surroundLayer) return;

      // 1. INITIAL STATE (scrollProgress = 0):
      gsap.set(surroundLayer, {
        opacity: 0,
      });

      if (leftCell) gsap.set(leftCell, { opacity: 0 });
      if (rightCell) gsap.set(rightCell, { opacity: 0 });
      if (topCell) gsap.set(topCell, { opacity: 0 });
      if (bottomCell) gsap.set(bottomCell, { opacity: 0 });
      corners.forEach((c) => {
        if (c) gsap.set(c, { opacity: 0 });
      });

      // Header is initially transparent, translated up, pointer-events none
      if (header) {
        gsap.set(header, {
          opacity: 0,
          y: -14,
          pointerEvents: 'none',
        });
      }

      gsap.set(grid, { transformOrigin: '50% 50%', scale: 1, yPercent: 0, force3D: true });
      gsap.set(copy, {
        opacity: 1,
        y: 0,
      });

      // Master Timeline pinned with ScrollTrigger on desktop
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.2,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });

      // 0 -> 40: Copy fades out
      masterTl.to(
        copy,
        {
          opacity: 0,
          y: -24,
          ease: 'power1.in',
          duration: 40,
        },
        0
      );

      // 0 -> 150: Continuous Zoom-out of the 3x3 grid
      masterTl.to(
        grid,
        {
          scale: 0.4654,
          ease: 'power1.inOut',
          duration: 150,
          force3D: true,
        },
        0
      );

      // Surrounding panels layer opacity fade in
      masterTl.to(
        surroundLayer,
        {
          opacity: 1,
          ease: 'power1.out',
          duration: 35,
        },
        5
      );

      // Surrounding cells fade in smoothly as camera pulls back
      const allSurrounding = [
        leftCell,
        rightCell,
        topCell,
        bottomCell,
        ...corners,
      ].filter(Boolean);

      if (allSurrounding.length > 0) {
        masterTl.to(
          allSurrounding,
          {
            opacity: 1,
            ease: 'power1.out',
            duration: 35,
          },
          5
        );
      }

      // Header progressive reveal: 55 -> 95
      if (header) {
        masterTl.to(
          header,
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            duration: 40,
            onStart: () => {
              header.style.pointerEvents = 'auto';
            },
            onReverseComplete: () => {
              header.style.pointerEvents = 'none';
            },
          },
          55
        );
      }

      // 150 -> 250: Coordinated Exit
      masterTl
        .to(
          grid,
          {
            yPercent: -50,
            ease: 'none',
            duration: 100,
            force3D: true,
          },
          150
        )
        .to(
          dim,
          {
            opacity: 0.75,
            ease: 'power1.in',
            duration: 80,
          },
          150
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="fs-hero-section" id="hero-cinematic">
      <div ref={stickyRef} className="fs-hero-sticky">
        {/* 3x3 Grid */}
        <div ref={gridRef} className="fs-hero-grid">
          {/* SURROUNDING PANELS LAYER (Ocultos no mobile, ativos no desktop) */}
          <div ref={surroundLayerRef} className="fs-surround-layer" aria-hidden="true">
            {surroundingCells.map((cell) => {
              const getCellRef = (pos: string) => {
                if (pos === 'l') return leftCellRef;
                if (pos === 'r') return rightCellRef;
                if (pos === 't') return topCellRef;
                if (pos === 'b') return bottomCellRef;
                return (el: HTMLDivElement | null) => {
                  if (el && !cornerCellsRef.current.includes(el)) {
                    cornerCellsRef.current.push(el);
                  }
                };
              };

              return (
                <div
                  key={cell.id}
                  ref={getCellRef(cell.position) as any}
                  className={`fs-hero-cell fs-hero-cell--${cell.position}`}
                  id={cell.id}
                >
                  <div className="fs-cell-media">
                    <picture>
                      <source
                        media="(max-width: 768px)"
                        srcSet={cell.heroImageMobile}
                      />
                      <img
                        src={cell.heroImageDesktop}
                        alt={cell.title}
                        className="fs-cell-img"
                        loading="eager"
                        decoding="async"
                      />
                    </picture>
                    <div className="fs-cell-shade" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* MAIN PANEL COM O VÍDEO CENTRAL */}
          <div className="fs-hero-cell fs-hero-cell--main" id={mainCell.id}>
            <div className="fs-cell-media">
              {/* Fallback image poster behind video */}
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet={mainCell.heroImageMobile}
                />
                <img
                  src={mainCell.heroImageDesktop}
                  alt={mainCell.title}
                  className="fs-cell-img"
                  loading="eager"
                  decoding="async"
                />
              </picture>
              {mainCell.videoSrc && (
                <video
                  className="fs-cell-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={mainCell.poster || mainCell.heroImageDesktop}
                >
                  <source src={mainCell.videoSrc} type="video/mp4" />
                </video>
              )}
              {/* Controlled dark gradient overlay on main panel for optimal legibility */}
              <div className="fs-cell-shade main-shade" />
            </div>

            {/* CENTRAL CONTENT ON MAIN PANEL */}
            <div ref={copyRef} className="fs-hero-content">
              {/* 1. Official Brand Logo */}
              <div className="fs-hero-brand-logo">
                <img
                  src="/logo.png"
                  alt="Wesley Nunes"
                  className="fs-hero-logo-img"
                  width="220"
                  height="32"
                />
              </div>

              {/* 2. Main Title */}
              <h1 className="fs-hero-title">
                WEBSITES QUE ELEVAM
                <br />
                O PADRÃO DIGITAL.
              </h1>

              {/* 3. Description */}
              <p className="fs-hero-description">
                {filmHeroContent.description}
              </p>

              {/* 4. Editorial Interaction "DESCUBRA O QUE EU CRIO" */}
              <div className="fs-hero-cta">
                <a
                  href={`#${filmHeroContent.targetSectionId}`}
                  onClick={handleScrollToProjects}
                  className="fs-editorial-btn"
                  aria-label="DESCUBRA O QUE EU CRIO — Explorar projetos de Wesley Nunes"
                >
                  <span className="fs-editorial-btn-text">DESCUBRA O QUE EU CRIO</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Exit dimming overlay */}
        <div ref={dimRef} className="fs-hero-dim" />
      </div>
    </section>
  );
};
