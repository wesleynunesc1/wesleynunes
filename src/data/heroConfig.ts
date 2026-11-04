export interface HeroVideoConfig {
  /** Optional video URLs (MP4 / WebM). Place files in /public/videos/ or use remote URLs */
  sources: {
    src: string;
    type: string;
  }[];
  /** Optional poster image */
  poster?: string;
}

export interface HeroContentConfig {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  targetSectionId: string;
}

export const heroContent: HeroContentConfig = {
  badge: 'WESLEY NUNES / DIGITAL PORTFOLIO',
  title: 'EXPERIÊNCIAS DIGITAIS QUE IMPRESSIONAM.',
  subtitle: 'Design, tecnologia e experiências digitais em cada detalhe.',
  ctaText: 'EXPLORAR PROJETOS',
  targetSectionId: 'projetos',
};

export const heroVideoConfig: HeroVideoConfig = {
  // If you add your mp4 video to public/videos/hero.mp4, it will automatically play here!
  sources: [
    { src: '/videos/hero.mp4', type: 'video/mp4' },
    { src: '/videos/hero.webm', type: 'video/webm' },
  ],
  poster: '/Logo WN.png',
};

