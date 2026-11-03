import React, { useRef, useEffect, useState, useCallback } from 'react';
import './ProjectAutoScroll.css';

interface ProjectAutoScrollProps {
  screenshotSrc: string;
  projectTitle: string;
  isActive: boolean;
  onActivate: () => void;
  scrollSpeedSeconds?: number;
}

export const ProjectAutoScroll: React.FC<ProjectAutoScrollProps> = ({
  screenshotSrc,
  projectTitle,
  isActive,
  onActivate,
  scrollSpeedSeconds = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  // Stop and clean up any ongoing animation
  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.cancel();
      animationRef.current = null;
    }
  }, []);

  // Reset to initial position
  const resetPosition = useCallback(() => {
    stopAnimation();
    if (imageRef.current) {
      imageRef.current.style.transform = 'translateY(0px)';
    }
    setHasReachedEnd(false);
  }, [stopAnimation]);

  // Main scroll driver using Web Animations API for 60/120fps hardware acceleration
  const startScroll = useCallback(() => {
    if (!containerRef.current || !imageRef.current) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const containerHeight = containerRef.current.clientHeight;
    const imageHeight = imageRef.current.clientHeight;

    const maxScrollDistance = imageHeight - containerHeight;

    if (maxScrollDistance <= 0) {
      return; // Nothing to scroll if screenshot is smaller than container
    }

    // Cancel existing
    stopAnimation();
    setHasReachedEnd(false);

    // Dynamic duration based on image length (constant speed feel)
    // base speed: ~180px per second or user custom
    const calculatedDuration = Math.max(scrollSpeedSeconds * 1000, (maxScrollDistance / 180) * 1000);

    const keyframes: Keyframe[] = [
      { transform: 'translateY(0px)' },
      { transform: `translateY(-${maxScrollDistance}px)` },
    ];

    const animation = imageRef.current.animate(keyframes, {
      duration: calculatedDuration,
      easing: 'linear',
      fill: 'forwards',
    });

    animationRef.current = animation;

    animation.onfinish = () => {
      setHasReachedEnd(true);
    };
  }, [scrollSpeedSeconds, stopAnimation]);

  // Handle visibility change (pause when tab is hidden, resume when active)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!animationRef.current) return;
      if (document.hidden) {
        animationRef.current.pause();
      } else if (isActive && !hasReachedEnd) {
        animationRef.current.play();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isActive, hasReachedEnd]);

  // React to isActive property changes
  useEffect(() => {
    if (isActive && imageLoaded) {
      startScroll();
    } else if (!isActive) {
      resetPosition();
    }
  }, [isActive, imageLoaded, startScroll, resetPosition]);

  // Recalculate on window resize if active
  useEffect(() => {
    let timeoutId: number;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        if (isActive && imageLoaded) {
          startScroll();
        }
      }, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
      stopAnimation();
    };
  }, [isActive, imageLoaded, startScroll, stopAnimation]);

  const handleContainerClick = (e: React.MouseEvent) => {
    // Prevent propagating if user clicked an inner interactive link
    if ((e.target as HTMLElement).closest('a, button:not(.scroll-trigger)')) {
      return;
    }

    onActivate();

    // If already active, restart animation from top as requested
    if (isActive) {
      resetPosition();
      // short delay to let render update
      requestAnimationFrame(() => {
        startScroll();
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onActivate();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`project-scroll-viewport ${isActive ? 'is-active' : ''}`}
      onClick={handleContainerClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`${projectTitle} — ${isActive ? (hasReachedEnd ? 'Chegou ao final. Clique para reiniciar.' : 'Visualizando screenshot em rolagem. Clique para reiniciar.') : 'Clique para explorar e iniciar rolagem'}`}
    >
      <img
        ref={imageRef}
        src={screenshotSrc}
        alt={`Screenshot do website ${projectTitle}`}
        className="project-screenshot-image"
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />

      {/* Visual Overlay Status */}
      <div className="scroll-indicator-overlay">
        {!isActive ? (
          <span className="scroll-pill-hint">
            <span className="pill-dot" />
            Clique para explorar
          </span>
        ) : hasReachedEnd ? (
          <span className="scroll-pill-hint is-replaying">
            <span className="pill-dot active" />
            Final alcançado • Clique para reiniciar
          </span>
        ) : (
          <span className="scroll-pill-hint is-scrolling">
            <span className="pill-dot active" />
            Rolagem ativa • Clique para reiniciar
          </span>
        )}
      </div>
    </div>
  );
};
