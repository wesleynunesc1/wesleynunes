export interface FilmHeroCellConfig {
  id: string;
  position: 'main' | 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br';
  title: string;
  category: string;
  /** Optimized Hero screenshot (top section only, light & crisp) */
  heroImage: string;
  /** Full length screenshot for auto-scrolling gallery */
  fullScreenshot: string;
  websiteUrl?: string;
  videoSrc?: string;
  poster?: string;
}

export const filmHeroContent = {
  badge: 'WESLEY NUNES / DIGITAL PORTFOLIO',
  title: 'EXPERIÊNCIAS DIGITAIS QUE IMPRESSIONAM.',
  subtitle: 'Design, tecnologia e experiências digitais em cada detalhe.',
  ctaText: 'EXPLORAR PROJETOS',
  targetSectionId: 'projetos',
};

export const filmHeroCells: FilmHeroCellConfig[] = [
  // 1. O QUADRO PRINCIPAL (Centro isolado no início)
  {
    id: 'cell-main',
    position: 'main',
    title: 'Wesley Nunes',
    category: 'Digital Studio',
    heroImage: '/projects/heroes/wesleynunes-lp.webp',
    fullScreenshot: '/projects/wesleynunes-lp.webp',
    websiteUrl: 'https://wesleynunes.com',
    videoSrc: '/cinematic/hero-intro.mp4',
    poster: '/projects/heroes/wesleynunes-lp.webp',
  },

  // 2. QUADROS QUE SURGEM AO REDOR (Acima, Abaixo, Esquerda, Direita e Cantos)
  // Acima (Top)
  {
    id: 'cell-t',
    position: 't',
    title: 'Cimentop Concrete',
    category: 'Construção Civil',
    heroImage: '/projects/heroes/cimentopconcrete.webp',
    fullScreenshot: '/projects/cimentopconcrete.webp',
    websiteUrl: 'https://cimentopconcrete.com',
  },
  // Abaixo (Bottom)
  {
    id: 'cell-b',
    position: 'b',
    title: 'Pedro Fit',
    category: 'High Performance',
    heroImage: '/projects/heroes/pedrofit.webp',
    fullScreenshot: '/projects/pedrofit.webp',
    websiteUrl: 'https://pedrofit.vercel.app',
  },
  // Esquerda (Left)
  {
    id: 'cell-l',
    position: 'l',
    title: 'Mateus Cavalcante',
    category: 'Design & Tecnologia',
    heroImage: '/projects/heroes/mateuscavalcante.webp',
    fullScreenshot: '/projects/mateuscavalcante.webp',
    websiteUrl: 'https://mateuscavalcante.vercel.app',
  },
  // Direita (Right)
  {
    id: 'cell-r',
    position: 'r',
    title: 'Leo Nunes Barbearia',
    category: 'Experiência & Barbearia Premium',
    heroImage: '/projects/heroes/leo-nunes.webp',
    fullScreenshot: '/projects/leo-nunes.webp',
    websiteUrl: 'https://leonunesbarbearia.vercel.app',
  },
  // Top-Left (Superior Esquerdo)
  {
    id: 'cell-tl',
    position: 'tl',
    title: 'Cartório do Brasileiro',
    category: 'Serviços Jurídicos',
    heroImage: '/projects/heroes/cartoriodobrasileiro.webp',
    fullScreenshot: '/projects/cartoriodobrasileiro.webp',
    websiteUrl: 'https://cartoriodobrasileiro.com',
  },
  // Top-Right (Superior Direito)
  {
    id: 'cell-tr',
    position: 'tr',
    title: 'Nunes Hub',
    category: 'Hub de Inovação',
    heroImage: '/projects/heroes/nuneshub.webp',
    fullScreenshot: '/projects/nuneshub.webp',
    websiteUrl: 'https://nuneshub.vercel.app',
  },
  // Bottom-Left (Inferior Esquerdo)
  {
    id: 'cell-bl',
    position: 'bl',
    title: 'Conexão Baby',
    category: 'E-commerce Infantil',
    heroImage: '/projects/heroes/conexaobaby.webp',
    fullScreenshot: '/projects/conexaobaby.webp',
    websiteUrl: 'https://conexaobaby.com.br',
  },
  // Bottom-Right (Inferior Direito)
  {
    id: 'cell-br',
    position: 'br',
    title: 'Alicerce Digital',
    category: 'Estratégia Digital',
    heroImage: '/projects/heroes/alicercedigital.webp',
    fullScreenshot: '/projects/alicercedigital.webp',
    websiteUrl: 'https://alicercedigital.com',
  },
];
