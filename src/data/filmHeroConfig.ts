export interface FilmHeroCellConfig {
  id: string;
  position: 'main' | 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br';
  title: string;
  category: string;
  /** Optimized Hero screenshot for Desktop (1280x900 top section) */
  heroImageDesktop: string;
  /** Focused Hero screenshot for Mobile (vertical 600x880 top section) */
  heroImageMobile: string;
  /** Full length screenshot for auto-scrolling gallery */
  fullScreenshot: string;
  websiteUrl?: string;
  videoSrc?: string;
  poster?: string;
  objectPositionDesktop?: string;
  objectPositionMobile?: string;
}

export const filmHeroContent = {
  title: 'WEBSITES QUE ELEVAM O PADRÃO DIGITAL.',
  description: 'Design, estratégia e tecnologia para transformar negócios em experiências digitais marcantes.',
  ctaText: 'DESCUBRA O QUE EU CRIO',
  targetSectionId: 'projetos',
};

export const filmHeroCells: FilmHeroCellConfig[] = [
  // 1. O QUADRO PRINCIPAL (Centro isolado no início)
  {
    id: 'cell-main',
    position: 'main',
    title: 'Wesley Nunes',
    category: 'Digital Studio',
    heroImageDesktop: '/projects/heroes/wesleynunes-lp.webp',
    heroImageMobile: '/projects/heroes-mobile/wesleynunes-lp.webp',
    fullScreenshot: '/projects/wesleynunes-lp.webp',
    websiteUrl: 'https://wesleynunes.com',
    videoSrc: '/cinematic/hero-intro.mp4',
    poster: '/projects/heroes/wesleynunes-lp.webp',
    objectPositionDesktop: 'center top',
    objectPositionMobile: 'center top',
  },

  // 2. QUADROS QUE SURGEM AO REDOR (Acima, Abaixo, Esquerda, Direita e Cantos)
  // Acima (Top)
  {
    id: 'cell-t',
    position: 't',
    title: 'Cimentop Concrete',
    category: 'Construção Civil',
    heroImageDesktop: '/projects/heroes/cimentopconcrete.webp',
    heroImageMobile: '/projects/heroes-mobile/cimentopconcrete.webp',
    fullScreenshot: '/projects/cimentopconcrete.webp',
    websiteUrl: 'https://cimentopconcrete.com',
    objectPositionDesktop: 'center top',
    objectPositionMobile: 'center top',
  },
  // Abaixo (Bottom)
  {
    id: 'cell-b',
    position: 'b',
    title: 'Pedro Fit',
    category: 'High Performance',
    heroImageDesktop: '/projects/heroes/pedrofit.webp',
    heroImageMobile: '/projects/heroes-mobile/pedrofit.webp',
    fullScreenshot: '/projects/pedrofit.webp',
    websiteUrl: 'https://pedrofit.vercel.app',
    objectPositionDesktop: 'center top',
    objectPositionMobile: 'center top',
  },
  // Esquerda (Left)
  {
    id: 'cell-l',
    position: 'l',
    title: 'Mateus Cavalcante',
    category: 'Design & Tecnologia',
    heroImageDesktop: '/projects/heroes/mateuscavalcante.webp',
    heroImageMobile: '/projects/heroes-mobile/mateuscavalcante.webp',
    fullScreenshot: '/projects/mateuscavalcante.webp',
    websiteUrl: 'https://mateuscavalcante.vercel.app',
    objectPositionDesktop: 'center top',
    objectPositionMobile: 'center top',
  },
  // Direita (Right)
  {
    id: 'cell-r',
    position: 'r',
    title: 'Leo Nunes Barbearia',
    category: 'Experiência & Barbearia Premium',
    heroImageDesktop: '/projects/heroes/leo-nunes.webp',
    heroImageMobile: '/projects/heroes-mobile/leo-nunes.webp',
    fullScreenshot: '/projects/leo-nunes.webp',
    websiteUrl: 'https://leonunesbarbearia.vercel.app',
    objectPositionDesktop: 'center top',
    objectPositionMobile: 'center top',
  },
  // Top-Left (Superior Esquerdo)
  {
    id: 'cell-tl',
    position: 'tl',
    title: 'Cartório do Brasileiro',
    category: 'Serviços Jurídicos',
    heroImageDesktop: '/projects/heroes/cartoriodobrasileiro.webp',
    heroImageMobile: '/projects/heroes-mobile/cartoriodobrasileiro.webp',
    fullScreenshot: '/projects/cartoriodobrasileiro.webp',
    websiteUrl: 'https://cartoriodobrasileiro.com',
    objectPositionDesktop: 'center top',
    objectPositionMobile: 'center top',
  },
  // Top-Right (Superior Direito)
  {
    id: 'cell-tr',
    position: 'tr',
    title: 'Nunes Hub',
    category: 'Hub de Inovação',
    heroImageDesktop: '/projects/heroes/nuneshub.webp',
    heroImageMobile: '/projects/heroes-mobile/nuneshub.webp',
    fullScreenshot: '/projects/nuneshub.webp',
    websiteUrl: 'https://nuneshub.vercel.app',
    objectPositionDesktop: 'center top',
    objectPositionMobile: 'center top',
  },
  // Bottom-Left (Inferior Esquerdo)
  {
    id: 'cell-bl',
    position: 'bl',
    title: 'Conexão Baby',
    category: 'E-commerce Infantil',
    heroImageDesktop: '/projects/heroes/conexaobaby.webp',
    heroImageMobile: '/projects/heroes-mobile/conexaobaby.webp',
    fullScreenshot: '/projects/conexaobaby.webp',
    websiteUrl: 'https://conexaobaby.com.br',
    objectPositionDesktop: 'center top',
    objectPositionMobile: 'center top',
  },
  // Bottom-Right (Inferior Direito)
  {
    id: 'cell-br',
    position: 'br',
    title: 'Alicerce Digital',
    category: 'Estratégia Digital',
    heroImageDesktop: '/projects/heroes/alicercedigital.webp',
    heroImageMobile: '/projects/heroes-mobile/alicercedigital.webp',
    fullScreenshot: '/projects/alicercedigital.webp',
    websiteUrl: 'https://alicercedigital.com',
    objectPositionDesktop: 'center top',
    objectPositionMobile: 'center top',
  },
];
