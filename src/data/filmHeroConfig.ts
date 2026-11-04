export interface FilmHeroCellConfig {
  id: string;
  position: 'main' | 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br';
  title: string;
  category: string;
  imageSrc: string;
  videoSrc?: string;
  poster?: string;
  objectPosition?: string;
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
    imageSrc: '/projects/wesleynunes-lp.webp',
    videoSrc: '/cinematic/hero-intro.mp4',
    poster: '/projects/wesleynunes-lp.webp',
    objectPosition: 'center 10%',
  },

  // 2. QUADROS QUE SURGEM AO REDOR (Acima, Abaixo, Esquerda, Direita e Cantos)
  // Acima (Top)
  {
    id: 'cell-t',
    position: 't',
    title: 'Cimentop Concrete',
    category: 'Construção Civil',
    imageSrc: '/projects/cimentopconcrete.webp',
    objectPosition: 'center 20%',
  },
  // Abaixo (Bottom)
  {
    id: 'cell-b',
    position: 'b',
    title: 'Pedro Fit',
    category: 'High Performance',
    imageSrc: '/projects/pedrofit.webp',
    objectPosition: 'center 20%',
  },
  // Esquerda (Left)
  {
    id: 'cell-l',
    position: 'l',
    title: 'Mateus Cavalcante',
    category: 'Design & Tecnologia',
    imageSrc: '/projects/mateuscavalcante.webp',
    objectPosition: 'center 15%',
  },
  // Direita (Right)
  {
    id: 'cell-r',
    position: 'r',
    title: 'Leo Nunes Barbearia',
    category: 'Experiência & Barbearia Premium',
    imageSrc: '/projects/leo-nunes.webp',
    objectPosition: 'center 10%',
  },
  // Top-Left (Superior Esquerdo)
  {
    id: 'cell-tl',
    position: 'tl',
    title: 'Cartório do Brasileiro',
    category: 'Serviços Jurídicos',
    imageSrc: '/projects/cartoriodobrasileiro.webp',
    objectPosition: 'center 25%',
  },
  // Top-Right (Superior Direito)
  {
    id: 'cell-tr',
    position: 'tr',
    title: 'Nunes Hub',
    category: 'Hub de Inovação',
    imageSrc: '/projects/nuneshub.webp',
    objectPosition: 'center 20%',
  },
  // Bottom-Left (Inferior Esquerdo)
  {
    id: 'cell-bl',
    position: 'bl',
    title: 'Conexão Baby',
    category: 'E-commerce Infantil',
    imageSrc: '/projects/conexaobaby.webp',
    objectPosition: 'center 15%',
  },
  // Bottom-Right (Inferior Direito)
  {
    id: 'cell-br',
    position: 'br',
    title: 'Alicerce Digital',
    category: 'Estratégia Digital',
    imageSrc: '/projects/alicercedigital.webp',
    objectPosition: 'center 15%',
  },
];

