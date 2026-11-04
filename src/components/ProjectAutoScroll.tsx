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
  scrollSpeedSeconds = 14,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Stop ongoing animation
  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.cancel();
      animationRef.current = null;
    }
  }, []);

  // Smoothly rewind / scroll in reverse back to top
  const rewindToTop = useCallback(() => {
    if (!imageRef.current) return;

    // Get current translateY position from computed transform
    const style = window.getComputedStyle(imageRef.current);
    const matrix = new DOMMatrixReadOnly(style.transform);
    const currentY = matrix.m42; // current translateY in pixels (negative or 0)

    stopAnimation();

    if (currentY >= 0 || Math.abs(currentY) < 5) {
      imageRef.current.style.transform = 'translateY(0px)';
      return;
    }

    // Rewind smoothly backwards from currentY back to 0
    // Dynamic rewind duration proportional to displacement (~600px/s)
    const rewindDuration = Math.max(350, (Math.abs(currentY) / 600) * 1000);

    const keyframes: Keyframe[] = [
      { transform: `translateY(${currentY}px)` },
      { transform: 'translateY(0px)' },
    ];

    const animation = imageRef.current.animate(keyframes, {
      duration: rewindDuration,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      fill: 'forwards',
    });

    animationRef.current = animation;
    animation.onfinish = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = 'translateY(0px)';
      }
      animationRef.current = null;
    };
  }, [stopAnimation]);

  // Main scroll forward driver (passes faster ~240px per second)
  const startScroll = useCallback(() => {
    if (!containerRef.current || !imageRef.current) return;

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

    stopAnimation();

    // Constant speed calculation proportional to real height (~240px/s - faster, smooth velocity)
    const calculatedDuration = Math.max(scrollSpeedSeconds * 1000, (maxScrollDistance / 240) * 1000);

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

  // React to isActive changes: when active startScroll; when de-activated rewind to top
  useEffect(() => {
    if (isActive && imageLoaded) {
      startScroll();
    } else if (!isActive && imageLoaded) {
      rewindToTop();
    }
  }, [isActive, imageLoaded, startScroll, rewindToTop]);

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

      {/* Discret hint badge indicating auto scroll capability */}
      {!isActive && (
        <div className="scroll-hint-badge" aria-hidden="true">
          <span className="scroll-hint-dot" />
          <span className="scroll-hint-text">Auto Scroll</span>
        </div>
      )}
    </div>
  );
};
