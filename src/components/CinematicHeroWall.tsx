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
      gsap.set(copy, {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0% 0% 0% 0%)',
      });

      // Master Timeline pinned with ScrollTrigger
      // scrub: 0.35 on mobile, 0.55 on desktop for immediate response without latency
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: isMobile ? 0.35 : 0.55,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          invalidateOnRefresh: false, // Prevents jumps when mobile address bar collapses/expands
        },
      });

      // TIMELINE BREAKDOWN:
      // Total duration: 100 units (compact, objective timeline)
      //
      // 0% - 25%: Content vanishes smoothly via combined opacity, slight upward drift and clipping mask
      // 15% - 70%: Continuous virtual camera zoom-out (scale 1.0 -> 0.4654)
      // 25% - 60%: Progressive revelation of surrounding panels
      //            - Laterals appear (25% -> 40%)
      //            - Top / bottom appear (32% -> 48%)
      //            - Corners complete the wall (40% -> 58%)
      // 60% - 75%: Full composition hold (brief, natural breathing room)
      //            - Header progressively fades in (55% -> 70%)
      // 75% - 100%: Seamless cinematic transition:
      //            - Mosaic translates upward (yPercent: -35) with soft dimming
      //            - Next section immediately slides up to meet it without blank gaps

      masterTl
        // 0% -> 25%: Hero elements vanish with combined opacity + translateY + clipping mask
        .to(
          copy,
          {
            opacity: 0,
            y: -24,
            clipPath: 'inset(0% 0% 85% 0%)',
            ease: 'power2.inOut',
            duration: 25,
          },
          0
        )

        // 15% -> 70%: Continuous zoom-out of the grid
        .to(
          grid,
          {
            scale: isMobile ? 0.48 : 0.4654,
            ease: 'power1.inOut',
            duration: 55,
          },
          15
        )

        // 25%: Make surrounding layer container visible
        .set(
          surroundLayer,
          {
            visibility: 'visible',
          },
          25
        )

        // 25% -> 40%: Laterals appear first
        .to(
          [leftCell, rightCell].filter(Boolean),
          {
            opacity: 1,
            ease: 'power1.out',
            duration: 15,
          },
          25
        )

        // 32% -> 48%: Top & bottom appear
        .to(
          [topCell, bottomCell].filter(Boolean),
          {
            opacity: 1,
            ease: 'power1.out',
            duration: 16,
          },
          32
        )

        // 40% -> 58%: Corners appear to complete the wall
        .to(
          corners.filter(Boolean),
          {
            opacity: 1,
            ease: 'power1.out',
            duration: 18,
          },
          40
        )

        // Surrounding layer general opacity 0 -> 1
        .to(
          surroundLayer,
          {
            opacity: 1,
            ease: 'none',
            duration: 20,
          },
          25
        );

      // Header progressive reveal: 55% -> 72%
      if (header) {
        masterTl.to(
          header,
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            duration: 17,
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

      // 75% -> 100%: Smooth coordinated exit & entrance of next section
      masterTl
        .to(
          grid,
          {
            yPercent: isMobile ? -36 : -32,
            ease: 'power1.inOut',
            duration: 25,
          },
          75
        )
        .to(
          dim,
          {
            opacity: 0.65,
            ease: 'power1.in',
            duration: 22,
          },
          78
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
            duration: 25,
          },
          75
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
                      />
                    </picture>
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
                  poster={mainCell.poster || mainCell.heroImageDesktop}
                >
                  <source src={mainCell.videoSrc} type="video/mp4" />
                </video>
              )}
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
                />
              </picture>
              {/* Controlled dark gradient overlay on main panel for optimal legibility */}
              <div className="fs-cell-shade main-shade" />
            </div>

            {/* CENTRAL CONTENT ON MAIN PANEL */}
            <div ref={copyRef} className="fs-hero-content">
              {/* 1. Official Brand Logo (Replaces old text tag, transparent, zero borders) */}
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
                EXPERIÊNCIAS DIGITAIS
                <br />
                QUE IMPRESSIONAM.
              </h1>

              {/* 3. Description (Refined ~3 lines on mobile, #B8BEC7) */}
              <p className="fs-hero-description">
                {filmHeroContent.description}
              </p>

              {/* 4. Minimalist Cutout White Button "PROJETOS" (SVG Masked to reveal underlying media) */}
              <div className="fs-hero-cta">
                <a
                  href={`#${filmHeroContent.targetSectionId}`}
                  onClick={handleScrollToProjects}
                  className="fs-cutout-btn"
                  aria-label="PROJETOS — Navegar para Cases de Sucesso"
                >
                  <svg
                    className="fs-cutout-svg"
                    viewBox="0 0 160 48"
                    width="160"
                    height="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <mask id="cutout-text-mask">
                        {/* White fills the mask, black cuts out the text */}
                        <rect width="100%" height="100%" fill="white" rx="24" ry="24" />
                        <text
                          x="50%"
                          y="52%"
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="black"
                          fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
                          fontSize="13"
                          fontWeight="800"
                          letterSpacing="0.18em"
                        >
                          PROJETOS
                        </text>
                      </mask>
                    </defs>
                    {/* Solid white shape with masked cutout text */}
                    <rect
                      width="100%"
                      height="100%"
                      fill="#FFFFFF"
                      rx="24"
                      ry="24"
                      mask="url(#cutout-text-mask)"
                    />
                  </svg>
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
