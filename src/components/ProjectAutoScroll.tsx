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
  scrollSpeedSeconds = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Stop and clean up any ongoing animation
  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.cancel();
      animationRef.current = null;
    }
  }, []);

  // Reset to initial top position
  const resetPosition = useCallback(() => {
    stopAnimation();
    if (imageRef.current) {
      imageRef.current.style.transform = 'translateY(0px)';
    }
  }, [stopAnimation]);

  // Main scroll driver using Web Animations API
  const startScroll = useCallback(() => {
    if (!containerRef.current || !imageRef.current) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const containerHeight = containerRef.current.clientHeight;
    const imageHeight = imageRef.current.clientHeight;
    const maxScrollDistance = imageHeight - containerHeight;

    if (maxScrollDistance <= 0) {
      return;
    }

    // Cancel existing animation
    stopAnimation();

    // Constant speed calculation proportional to real height (~170px/s)
    const calculatedDuration = Math.max(scrollSpeedSeconds * 1000, (maxScrollDistance / 170) * 1000);

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
  }, [scrollSpeedSeconds, stopAnimation]);

  // Pause when tab is hidden, resume when active
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!animationRef.current) return;
      if (document.hidden) {
        animationRef.current.pause();
      } else if (isActive) {
        animationRef.current.play();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isActive]);

  // React to isActive changes (hover or touch)
  useEffect(() => {
    if (isActive && imageLoaded) {
      startScroll();
    } else if (!isActive) {
      resetPosition();
    }
  }, [isActive, imageLoaded, startScroll, resetPosition]);

  // Recalculate on window resize
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

  // Fallback if browser doesn't support WebP or fails to load
  const jpgFallback = screenshotSrc.replace(/\.webp$/, '.jpg');

  return (
    <div
      ref={containerRef}
      className={`project-scroll-viewport ${isActive ? 'is-active' : ''}`}
    >
      <picture>
        <source srcSet={screenshotSrc} type="image/webp" />
        <source srcSet={jpgFallback} type="image/jpeg" />
        <img
          ref={imageRef}
          src={screenshotSrc}
          alt={`Screenshot do website ${projectTitle}`}
          className="project-screenshot-image"
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
        />
      </picture>

      {/* Discret hint badge indicating auto scroll capability (disappears when active) */}
      {!isActive && (
        <div className="scroll-hint-badge" aria-hidden="true">
          <span className="scroll-hint-dot" />
          <span className="scroll-hint-text">Auto Scroll</span>
        </div>
      )}
    </div>
  );
};
