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
      const surroundLayer = surroundLayerRef.current;
      const leftCell = leftCellRef.current;
      const rightCell = rightCellRef.current;
      const topCell = topCellRef.current;
      const bottomCell = bottomCellRef.current;
      const corners = cornerCellsRef.current;

      // Header element in DOM (controlled directly by timeline)
      const header = document.querySelector<HTMLElement>('.site-header');

      if (!section || !grid || !copy || !dim || !surroundLayer) return;

      const isMobile = window.innerWidth <= 768;

      // 1. INITIAL STATE (scrollProgress = 0):
      // Strict: Only the main panel is visible.
      // Surrounding panels layer is hidden and 0 opacity
      gsap.set(surroundLayer, {
        opacity: 0,
        visibility: 'hidden',
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

      gsap.set(grid, { transformOrigin: '50% 50%', scale: 1 });

      // Master Timeline pinned with ScrollTrigger
      // 340svh provides a natural, smooth, luxurious pace
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.85,
        },
      });

      // SEQUENCE BREAKDOWN:
      // Total duration units: 100
      //
      // 0% - 10%: Initial state hold. ONLY main panel.
      //
      // 10% - 30%: Text starts fading out smoothly (0.10 -> 0.30).
      //            Central panel begins its scale reduction (0.15 -> 0.75).
      //
      // 30% - 55%: Progressive revelation:
      //            - Surrounding layer becomes visible.
      //            - First, lateral panels fade in (30% -> 42%).
      //            - Next, top/bottom panels fade in (36% -> 50%).
      //            - Corners fade in (42% -> 55%).
      //
      // 55% - 80%: Full mosaic view, texts completely gone, central panel seamlessly integrated.
      //            - Header progressively fades in smoothly from 62% to 76%.
      //
      // 80% - 100%: Smooth exit transition:
      //            - Mosaic translates upward (yPercent: -42) with soft dimming.
      //            - Projects section enters seamlessly.
      //            - Header stays visible and interactive.

      masterTl
        // 10% -> 30%: Text fade out
        .to(
          copy,
          {
            opacity: 0,
            y: -28,
            scale: 0.96,
            ease: 'power2.inOut',
            duration: 20,
          },
          10
        )

        // 15% -> 75%: Continuous zoom-out of the grid
        .to(
          grid,
          {
            scale: isMobile ? 0.48 : 0.4654,
            ease: 'power1.inOut',
            duration: 60,
          },
          15
        )

        // 30%: Make surrounding layer container visible
        .set(
          surroundLayer,
          {
            visibility: 'visible',
          },
          30
        )

        // 30% -> 42%: Laterals appear first
        .to(
          [leftCell, rightCell].filter(Boolean),
          {
            opacity: 1,
            ease: 'power1.out',
            duration: 14,
          },
          30
        )

        // 36% -> 50%: Top & bottom appear
        .to(
          [topCell, bottomCell].filter(Boolean),
          {
            opacity: 1,
            ease: 'power1.out',
            duration: 14,
          },
          36
        )

        // 42% -> 55%: Corners appear to complete the wall
        .to(
          corners.filter(Boolean),
          {
            opacity: 1,
            ease: 'power1.out',
            duration: 13,
          },
          42
        )

        // Surrounding layer general opacity 0 -> 1
        .to(
          surroundLayer,
          {
            opacity: 1,
            ease: 'none',
            duration: 15,
          },
          30
        );

      // Header progressive reveal: 60% -> 76%
      if (header) {
        masterTl
          .to(
            header,
            {
              opacity: 1,
              y: 0,
              ease: 'power2.out',
              duration: 16,
              onStart: () => {
                header.style.pointerEvents = 'auto';
              },
              onReverseComplete: () => {
                header.style.pointerEvents = 'none';
              },
            },
            60
          );
      }

      // 80% -> 100%: Smooth exit to Cases de Sucesso
      masterTl
        .to(
          grid,
          {
            yPercent: isMobile ? -45 : -40,
            ease: 'none',
            duration: 20,
          },
          80
        )
        .to(
          dim,
          {
            opacity: 0.85,
            ease: 'power1.in',
            duration: 18,
          },
          82
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="fs-hero-section" id="hero-cinematic">
      <div ref={stickyRef} className="fs-hero-sticky">
        {/* 3x3 Grid */}
        <div ref={gridRef} className="fs-hero-grid">
          {/* SURROUNDING PANELS LAYER (Strictly hidden at scrollProgress = 0) */}
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
              );
            })}
          </div>

          {/* MAIN PANEL (Strictly ISOLATED & Centered at scrollProgress = 0) */}
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
              {/* Controlled dark gradient overlay for optimal legibility */}
              <div className="fs-cell-shade main-shade" />
            </div>

            {/* CENTRAL CONTENT ON MAIN PANEL */}
            <div ref={copyRef} className="fs-hero-content">
              {/* Upper Label */}
              <div className="fs-hero-badge">
                <span className="fs-badge-dot" />
                <span className="fs-badge-text">{filmHeroContent.badge}</span>
              </div>

              {/* Main Title */}
              <h1 className="fs-hero-title">
                EXPERIÊNCIAS DIGITAIS
                <br />
                QUE IMPRESSIONAM.
              </h1>

              {/* Subtitle */}
              <p className="fs-hero-subtitle">
                {filmHeroContent.subtitle}
              </p>

              {/* Minimalist CTA Button */}
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

        {/* Exit dimming overlay */}
        <div ref={dimRef} className="fs-hero-dim" />
      </div>
    </section>
  );
};
