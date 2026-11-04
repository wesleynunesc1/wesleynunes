import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cinematicPanels } from '../data/cinematicConfig';
import './CinematicVideoWall.css';

gsap.registerPlugin(ScrollTrigger);

export const CinematicVideoWall: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const mosaicRef = useRef<HTMLDivElement>(null);

  const heroInitialPanelRef = useRef<HTMLDivElement>(null);
  const targetZoomPanelRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const targetContentRef = useRef<HTMLDivElement>(null);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('projetos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const viewport = viewportRef.current;
      const mosaic = mosaicRef.current;
      const heroPanel = heroInitialPanelRef.current;
      const targetPanel = targetZoomPanelRef.current;
      const heroContent = heroContentRef.current;
      const targetContent = targetContentRef.current;

      if (!container || !viewport || !mosaic || !heroPanel || !targetPanel) return;

      const calculateTransforms = () => {
        const vRect = viewport.getBoundingClientRect();
        const isMobile = vRect.width <= 768;

        // Reset to canonical reference state at scale 1 to measure
        mosaic.style.transform = 'translate(-50%, -50%) translate(0px, 0px) scale(1)';

        const unscaledHRect = heroPanel.getBoundingClientRect();
        const unscaledTRect = targetPanel.getBoundingClientRect();

        // Calculate dynamic scales to fill screen nicely:
        const initialScaleX = (vRect.width * (isMobile ? 0.92 : 0.65)) / unscaledHRect.width;
        const initialScaleY = (vRect.height * (isMobile ? 0.82 : 0.78)) / unscaledHRect.height;
        const initialScale = Math.min(initialScaleX, initialScaleY);

        const targetScaleX = (vRect.width * (isMobile ? 0.90 : 0.62)) / unscaledTRect.width;
        const targetScaleY = (vRect.height * (isMobile ? 0.82 : 0.75)) / unscaledTRect.height;
        const targetScale = Math.min(targetScaleX, targetScaleY);

        // Test with initialScale to find exact translation required to center Hero Panel
        mosaic.style.transform = `translate(-50%, -50%) translate(0px, 0px) scale(${initialScale})`;
        const scaledHRect = heroPanel.getBoundingClientRect();
        const vCenterX = vRect.left + vRect.width / 2;
        const vCenterY = vRect.top + vRect.height / 2;

        const heroShiftX = vCenterX - (scaledHRect.left + scaledHRect.width / 2);
        const heroShiftY = vCenterY - (scaledHRect.top + scaledHRect.height / 2);

        // Test with targetScale to find exact translation required to center Target Panel (Leo Nunes)
        mosaic.style.transform = `translate(-50%, -50%) translate(0px, 0px) scale(${targetScale})`;
        const scaledTRect = targetPanel.getBoundingClientRect();

        const targetShiftX = vCenterX - (scaledTRect.left + scaledTRect.width / 2);
        const targetShiftY = vCenterY - (scaledTRect.top + scaledTRect.height / 2);

        return {
          initialScale,
          heroShiftX,
          heroShiftY,
          targetScale,
          targetShiftX,
          targetShiftY,
        };
      };

      const {
        initialScale,
        heroShiftX,
        heroShiftY,
        targetScale,
        targetShiftX,
        targetShiftY,
      } = calculateTransforms();

      // Master Timeline pinned with ScrollTrigger
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=3600',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Initial State: Centered directly on Hero Panel with initialScale
      // Explicitly set xPercent: -50 and yPercent: -50 so GSAP preserves translate(-50%, -50%)
      gsap.set(mosaic, {
        xPercent: -50,
        yPercent: -50,
        scale: initialScale,
        x: heroShiftX,
        y: heroShiftY,
        transformOrigin: '50% 50%',
      });

      // TIMELINE EXECUTION:
      // 0.0 - 1.5s: Hold at initial hero state
      // 1.5 - 2.5s: Fade out initial text overlay
      // 2.0 - 5.5s: ZOOM-OUT to Mosaic (scale: 1, x: 0, y: 0)
      // 5.5 - 7.0s: Mosaic view hold / subtle cinematic drift
      // 7.0 - 10.5s: ZOOM-IN to Target Panel (Leo Nunes Barbearia)
      // 8.5 - 10.5s: Fade in target overlay
      // 11.0 - 13.0s: Cinematic Exit towards Projects Gallery

      masterTl
        // Fade out hero text on scroll start
        .to(
          heroContent,
          {
            opacity: 0,
            y: -25,
            scale: 0.96,
            ease: 'power2.inOut',
            duration: 1.5,
          },
          1.2
        )

        // Efeito Principal: ZOOM-OUT para o Mosaico
        .to(
          mosaic,
          {
            scale: 1,
            x: 0,
            y: 0,
            ease: 'power2.inOut',
            duration: 3.8,
          },
          1.8
        )

        // Mosaico Completo: drift cinematográfico sutil
        .to(
          mosaic,
          {
            y: -20,
            ease: 'none',
            duration: 1.6,
          },
          5.6
        )

        // Segundo Efeito: ZOOM-IN no Painel Leo Nunes
        .to(
          mosaic,
          {
            scale: targetScale,
            x: targetShiftX,
            y: targetShiftY,
            ease: 'power2.inOut',
            duration: 3.8,
          },
          7.2
        )

        // Revelação do conteúdo do segundo painel
        .to(
          targetContent,
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            duration: 1.8,
          },
          8.6
        )

        // Saída coordenada para a galeria de projetos
        .to(
          mosaic,
          {
            opacity: 0.1,
            scale: targetScale * 1.15,
            y: targetShiftY - 60,
            filter: 'blur(12px)',
            ease: 'power2.in',
            duration: 2.2,
          },
          11.2
        )
        .to(
          targetContent,
          {
            opacity: 0,
            y: -20,
            ease: 'power2.in',
            duration: 1.4,
          },
          11.4
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Split panels by column for 3-column mosaic
  const col0Panels = cinematicPanels.filter((p) => p.column === 0);
  const col1Panels = cinematicPanels.filter((p) => p.column === 1);
  const col2Panels = cinematicPanels.filter((p) => p.column === 2);

  return (
    <div ref={containerRef} className="cinematic-wall-container" id="inicio">
      <div ref={viewportRef} className="cinematic-wall-viewport">
        {/* Moving camera world (Mosaico Completo) */}
        <div ref={mosaicRef} className="cinematic-wall-mosaic">
          {/* COLUMN 0 (LEFT) */}
          <div className="mosaic-column mosaic-col-0">
            {col0Panels.map((panel) => (
              <div key={panel.id} className="cinematic-panel" id={panel.id}>
                <div className="panel-media-wrapper">
                  {panel.videoSrc && (
                    <video
                      className="panel-video"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={panel.poster || panel.imageSrc}
                    >
                      <source src={panel.videoSrc} type="video/mp4" />
                    </video>
                  )}
                  <img
                    src={panel.imageSrc}
                    alt={panel.title}
                    className="panel-image"
                    loading="eager"
                  />
                  <div className="panel-overlay" />
                </div>
              </div>
            ))}
          </div>

          {/* COLUMN 1 (CENTER - CONTAINS INITIAL HERO PANEL) */}
          <div className="mosaic-column mosaic-col-1">
            {col1Panels.map((panel, idx) => {
              const isHeroPanel = idx === 0; // First in center column is our initial hero
              return (
                <div
                  key={panel.id}
                  ref={isHeroPanel ? heroInitialPanelRef : undefined}
                  className={`cinematic-panel ${isHeroPanel ? 'is-hero-panel' : ''}`}
                  id={panel.id}
                >
                  <div className="panel-media-wrapper">
                    {panel.videoSrc && (
                      <video
                        className="panel-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={panel.poster || panel.imageSrc}
                      >
                        <source src={panel.videoSrc} type="video/mp4" />
                      </video>
                    )}
                    <img
                      src={panel.imageSrc}
                      alt={panel.title}
                      className="panel-image"
                      loading="eager"
                    />
                    <div className="panel-overlay hero-initial-overlay" />

                    {/* HERO INITIAL OVERLAY (Visible at 0%-15%) */}
                    {isHeroPanel && (
                      <div ref={heroContentRef} className="panel-hero-content">
                        {/* Film supply style upper badge & markers */}
                        <div className="hero-film-badge">
                          <span className="film-crosshair film-tl" />
                          <span className="film-crosshair film-tr" />
                          <span className="film-badge-text">WESLEY NUNES</span>
                        </div>

                        {/* Title */}
                        <h1 className="hero-film-title">
                          EXPERIÊNCIAS DIGITAIS
                          <br />
                          QUE IMPRESSIONAM.
                        </h1>

                        {/* Subtitle */}
                        <p className="hero-film-subtitle">
                          Design, tecnologia e experiências digitais em cada detalhe.
                        </p>

                        {/* Button with Film Technical Markers */}
                        <div className="hero-film-btn-container">
                          <div className="film-marker left-marker">
                            <span className="marker-line" />
                            <span className="marker-code">REC // 01</span>
                          </div>

                          <a
                            href="#projetos"
                            onClick={handleScrollToProjects}
                            className="hero-film-btn"
                            aria-label="Explorar projetos"
                          >
                            <span className="btn-glow" />
                            <span className="btn-label">EXPLORAR PROJETOS</span>
                            <span className="btn-arrow">↓</span>
                          </a>

                          <div className="film-marker right-marker">
                            <span className="marker-code">ISO 800</span>
                            <span className="marker-line" />
                          </div>
                        </div>

                        {/* Subtle decorative ruler / calibration scale at bottom of initial panel */}
                        <div className="film-ruler" aria-hidden="true">
                          <span className="ruler-notch major" />
                          <span className="ruler-notch" />
                          <span className="ruler-notch" />
                          <span className="ruler-notch" />
                          <span className="ruler-notch major" />
                          <span className="ruler-text">35MM // 2.39:1 CINEMATIC</span>
                          <span className="ruler-notch major" />
                          <span className="ruler-notch" />
                          <span className="ruler-notch" />
                          <span className="ruler-notch" />
                          <span className="ruler-notch major" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* COLUMN 2 (RIGHT - CONTAINS SECOND ZOOM-IN TARGET: LEO NUNES) */}
          <div className="mosaic-column mosaic-col-2">
            {col2Panels.map((panel, idx) => {
              const isTargetPanel = idx === 0; // First in right column is Leo Nunes
              return (
                <div
                  key={panel.id}
                  ref={isTargetPanel ? targetZoomPanelRef : undefined}
                  className={`cinematic-panel ${isTargetPanel ? 'is-target-panel' : ''}`}
                  id={panel.id}
                >
                  <div className="panel-media-wrapper">
                    {panel.videoSrc && (
                      <video
                        className="panel-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={panel.poster || panel.imageSrc}
                      >
                        <source src={panel.videoSrc} type="video/mp4" />
                      </video>
                    )}
                    <img
                      src={panel.imageSrc}
                      alt={panel.title}
                      className="panel-image"
                      loading="eager"
                    />
                    <div className="panel-overlay" />

                    {/* TARGET PANEL OVERLAY (Zoom-in Reveal) */}
                    {isTargetPanel && (
                      <div
                        ref={targetContentRef}
                        className="panel-target-content"
                        style={{ opacity: 0, transform: 'translateY(25px)' }}
                      >
                        <div className="target-film-tag">CASE EM DESTAQUE // 01</div>
                        <h2 className="target-film-title">LEO NUNES BARBEARIA</h2>
                        <p className="target-film-desc">
                          Experiência digital imersiva, agendamento ágil e branding de luxo.
                        </p>
                        <a
                          href="#projetos"
                          onClick={handleScrollToProjects}
                          className="target-film-link"
                        >
                          VER DETALHES DO PROJETO →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Cinematic Vignette & Atmospheric Lines */}
        <div className="wall-vignette-overlay" />
        <div className="wall-light-glow" />
      </div>
    </div>
  );
};
