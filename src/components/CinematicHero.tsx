import React, { useEffect, useRef, useState } from 'react';
import { heroContent, heroVideoConfig } from '../data/heroConfig';
import './CinematicHero.css';

export const CinematicHero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Smooth scroll handler to projects gallery
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(heroContent.targetSectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Canvas-driven procedural cinematic animation (FilmSupply inspired depth, concentric rings, soft glow, particle drift)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Procedural particles
    const particleCount = 42;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.008,
    }));

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Soft ambient radial gradient
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        width * 0.05,
        centerX,
        centerY,
        width * 0.7
      );
      gradient.addColorStop(0, 'rgba(169, 200, 216, 0.08)');
      gradient.addColorStop(0.5, 'rgba(17, 24, 39, 0.25)');
      gradient.addColorStop(1, 'rgba(5, 7, 11, 0.85)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Rotating subtle circular lines & rings (FilmSupply motif)
      ctx.save();
      ctx.translate(centerX, centerY);

      const ringRadii = [
        Math.min(width, height) * 0.26,
        Math.min(width, height) * 0.38,
        Math.min(width, height) * 0.52,
      ];

      ringRadii.forEach((radius, i) => {
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(169, 200, 216, ${0.04 + i * 0.02})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4 + i * 4, 12 + i * 8]);
        ctx.stroke();

        // Orbiting glowing pip
        const currentAngle = angle * (i % 2 === 0 ? 1 : -0.7) + (i * Math.PI) / 1.5;
        const px = Math.cos(currentAngle) * radius;
        const py = Math.sin(currentAngle) * radius;

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(215, 235, 245, 0.65)';
        ctx.shadowColor = 'rgba(169, 200, 216, 0.8)';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Subtle cross-hair / focal lines
      ctx.setLineDash([]);
      ctx.strokeStyle = 'rgba(169, 200, 216, 0.035)';
      ctx.beginPath();
      ctx.moveTo(-width / 2, 0);
      ctx.lineTo(width / 2, 0);
      ctx.moveTo(0, -height / 2);
      ctx.lineTo(0, height / 2);
      ctx.stroke();

      ctx.restore();

      // Atmospheric floating micro-particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(angle * 2) * 0.005;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(169, 200, 216, ${Math.max(0.1, Math.min(0.65, p.alpha))})`;
        ctx.fill();
      });

      angle += 0.0035;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="cinematic-hero" aria-label="Hero Apresentação">
      {/* Dynamic Video Element (Fallback or Video Source) */}
      <div className={`hero-media-layer ${videoLoaded ? 'video-active' : ''}`}>
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={heroVideoConfig.poster}
          onCanPlayThrough={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
        >
          {heroVideoConfig.sources.map((src, index) => (
            <source key={index} src={src.src} type={src.type} />
          ))}
        </video>

        {/* Procedural Canvas Background */}
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* Deep Contrast & Filmic Grain Overlays */}
        <div className="hero-dark-overlay" />
        <div className="hero-vignette" />
        <div className="hero-noise-overlay" />
      </div>

      {/* Hero Central Content */}
      <div className="hero-content-container">
        {/* Top Tag / Pill */}
        <div className="hero-badge animate-fade-in-down">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">{heroContent.badge}</span>
        </div>

        {/* Main Title */}
        <h1 className="hero-title animate-title-reveal">
          {heroContent.title.split(' ').map((word, i) => (
            <span key={i} className="hero-title-word">
              {word}&nbsp;
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle animate-fade-in-up">
          {heroContent.subtitle}
        </p>

        {/* Minimalist Magnetic CTA Button */}
        <div className="hero-cta-wrapper animate-fade-in-up delay-2">
          <a
            href={`#${heroContent.targetSectionId}`}
            className="hero-cta-btn"
            onClick={handleScrollToProjects}
            aria-label="Explorar projetos selecionados"
          >
            <span className="hero-btn-bg" />
            <span className="hero-btn-text">{heroContent.ctaText}</span>
            <span className="hero-btn-icon" aria-hidden="true">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <a
        href={`#${heroContent.targetSectionId}`}
        onClick={handleScrollToProjects}
        className="hero-scroll-indicator"
        aria-label="Rolar para baixo"
      >
        <span className="hero-scroll-mouse">
          <span className="hero-scroll-wheel" />
        </span>
      </a>
    </section>
  );
};
