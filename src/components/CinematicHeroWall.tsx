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
      // Next section (Portfolio Gallery) to connect seamlessly
      const nextSection = document.getElementById(filmHeroContent.targetSectionId);

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
      // scrub: 0.5 for immediate, tactile 1:1 synchronization with user finger/wheel
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: isMobile ? 0.4 : 0.6,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });

      // TIMELINE EXECUTION:
      // Total duration units: 100
      //
      // 0% - 10%: Initial state hold. ONLY main panel.
      // 10% - 30%: Text fades out smoothly.
      // 15% - 75%: Continuous zoom-out of the 3x3 grid (scale 1.0 -> 0.4654).
      // 30% - 55%: Progressive revelation of surrounding panels:
      //            - Layer becomes visible.
      //            - Laterals appear first (30% -> 42%).
      //            - Top / bottom appear (36% -> 50%).
      //            - Corners complete the wall (42% -> 55%).
      // 55% - 75%: Full mosaic view, texts gone, central panel in place.
      //            - Header progressively fades in smoothly from 58% to 74%.
      // 75% - 100%: Seamless transition to next section:
      //            - Mosaic translates upward (yPercent: -35) with soft dimming.
      //            - Next section moves up naturally to meet it, without black void.

      masterTl
        // 10% -> 30%: Text fade out
        .to(
          copy,
          {
            opacity: 0,
            y: -24,
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

      // Header progressive reveal: 58% -> 74%
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
            58
          );
      }

      // 78% -> 100%: Smooth coordinated exit & entrance of next section
      masterTl
        .to(
          grid,
          {
            yPercent: isMobile ? -36 : -32,
            ease: 'power1.inOut',
            duration: 22,
          },
          78
        )
        .to(
          dim,
          {
            opacity: 0.65,
            ease: 'power1.in',
            duration: 20,
          },
          80
        );

      // If next section exists, animate its entrance smoothly
      if (nextSection) {
        masterTl.fromTo(
          nextSection,
          { y: 60, opacity: 0.8 },
          {
            y: 0,
            opacity: 1,
            ease: 'power1.out',
            duration: 20,
          },
          80
        );
      }
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
                      src={cell.heroImage}
                      alt={cell.title}
                      className="fs-cell-img"
                      loading="eager"
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
                  poster={mainCell.poster || mainCell.heroImage}
                >
                  <source src={mainCell.videoSrc} type="video/mp4" />
                </video>
              )}
              <img
                src={mainCell.heroImage}
                alt={mainCell.title}
                className="fs-cell-img"
                loading="eager"
              />
              {/* Controlled dark gradient overlay on main panel for optimal legibility */}
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
