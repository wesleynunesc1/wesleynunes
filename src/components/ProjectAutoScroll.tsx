import React, { useRef, useEffect, useState, useCallback } from 'react';
import './ProjectAutoScroll.css';

interface ProjectAutoScrollProps {
  screenshotSrc: string;
  heroThumbnail?: string;
  heroThumbnailMobile?: string;
  projectTitle: string;
  isActive: boolean;
  onActivate: () => void;
  scrollSpeedSeconds?: number;
  isEager?: boolean;
}

export const ProjectAutoScroll: React.FC<ProjectAutoScrollProps> = ({
  screenshotSrc,
  heroThumbnail,
  heroThumbnailMobile,
  projectTitle,
  isActive,
  scrollSpeedSeconds = 14,
  isEager = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<Animation | null>(null);

  // Check if viewport is mobile (<= 768px)
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleCheckMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleCheckMobile);
    return () => window.removeEventListener('resize', handleCheckMobile);
  }, []);

  // On desktop: load full screenshot when needed (near or active).
  // On mobile: completely disabled (never loads the 8000px screenshot, saves massive memory & avoids scroll effect).
  const [shouldLoadFull, setShouldLoadFull] = useState(
    !isMobile && (isEager || isActive)
  );
  const [fullImageLoaded, setFullImageLoaded] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  // Fallback thumbnail if none provided
  const thumbDesktop = heroThumbnail || screenshotSrc;
  const thumbMobile = heroThumbnailMobile || thumbDesktop;

  // Stop ongoing animation
  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.cancel();
      animationRef.current = null;
    }
  }, []);

  // Smoothly rewind / scroll in reverse back to top (desktop only)
  const rewindToTop = useCallback(() => {
    if (isMobile || !imageRef.current) return;

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
  }, [isMobile, stopAnimation]);

  // Main scroll forward driver (desktop only)
  const startScroll = useCallback(() => {
    if (isMobile || !containerRef.current || !imageRef.current) return;

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

    // Constant speed calculation proportional to real height (~240px/s)
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
  }, [isMobile, scrollSpeedSeconds, stopAnimation]);

  // When card becomes active on desktop, trigger full screenshot request
  useEffect(() => {
    if (!isMobile && isActive && !shouldLoadFull) {
      setShouldLoadFull(true);
    }
  }, [isMobile, isActive, shouldLoadFull]);

  // IntersectionObserver to preload full screenshot 300px before entering viewport (desktop only)
  useEffect(() => {
    if (isMobile || shouldLoadFull) return;
    const container = containerRef.current;
    if (!container || !('IntersectionObserver' in window)) {
      setShouldLoadFull(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadFull(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [isMobile, shouldLoadFull]);

  // Pause when tab is hidden, resume when active (desktop only)
  useEffect(() => {
    if (isMobile) return;
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
  }, [isMobile, isActive]);

  // React to isActive changes: when active startScroll; when de-activated rewind to top
  useEffect(() => {
    if (isMobile) return;
    if (isActive && fullImageLoaded) {
      startScroll();
    } else if (!isActive && fullImageLoaded) {
      rewindToTop();
    }
  }, [isMobile, isActive, fullImageLoaded, startScroll, rewindToTop]);

  // Recalculate on window resize
  useEffect(() => {
    if (isMobile) return;
    let timeoutId: number;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        if (isActive && fullImageLoaded) {
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
  }, [isMobile, isActive, fullImageLoaded, startScroll, stopAnimation]);

  const jpgFallback = screenshotSrc.replace(/\.webp$/, '.jpg');

  return (
    <div
      ref={containerRef}
      className={`project-scroll-viewport ${!isMobile && isActive ? 'is-active' : ''}`}
    >
      {/* 1. INSTANT HERO THUMBNAIL (PERMANENT BASE: Guaranteed ZERO black screen) */}
      <picture className="project-thumb-picture">
        <source media="(max-width: 768px)" srcSet={thumbMobile} type="image/webp" />
        <source srcSet={thumbDesktop} type="image/webp" />
        <img
          src={thumbDesktop}
          alt={`Apresentação do website ${projectTitle}`}
          className={`project-thumb-image ${thumbnailLoaded ? 'loaded' : ''}`}
          loading={isEager ? 'eager' : 'lazy'}
          fetchPriority={isEager ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setThumbnailLoaded(true)}
        />
      </picture>

      {/* 2. FULL SCROLLABLE SCREENSHOT (Desktop only, never loaded on mobile) */}
      {!isMobile && shouldLoadFull && (
        <picture className={`project-full-picture ${fullImageLoaded ? 'loaded' : ''}`}>
          <source srcSet={screenshotSrc} type="image/webp" />
          <source srcSet={jpgFallback} type="image/jpeg" />
          <img
            ref={imageRef}
            src={screenshotSrc}
            alt={`Screenshot completo do website ${projectTitle}`}
            className="project-screenshot-image"
            loading="lazy"
            decoding="async"
            onLoad={() => setFullImageLoaded(true)}
          />
        </picture>
      )}

      {/* Discreet hint badge indicating auto scroll capability (Desktop only) */}
      {!isMobile && !isActive && (
        <div className="scroll-hint-badge" aria-hidden="true">
          <span className="scroll-hint-dot" />
          <span className="scroll-hint-text">Auto Scroll</span>
        </div>
      )}
    </div>
  );
};
