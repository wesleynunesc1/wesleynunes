export interface CinematicPanelConfig {
  id: string;
  title: string;
  category: string;
  videoSrc?: string;
  imageSrc: string;
  poster?: string;
  // Grid column index (0, 1, 2 for 3-column mobile mosaic)
  column: number;
  // Aspect ratio or size hint
  aspectRatio?: string;
  // Focal positioning
  objectPosition?: string;
}

export const cinematicPanels: CinematicPanelConfig[] = [
  // Column 0 (Left Column)
  {
    id: 'panel-mateus',
    title: 'Mateus Cavalcante',
    category: 'Design & Tecnologia',
    videoSrc: '/cinematic/panel-mateus.mp4',
    imageSrc: '/projects/mateuscavalcante.webp',
    column: 0,
    aspectRatio: '9/16',
    objectPosition: 'center 15%',
  },
  {
    id: 'panel-cimentop',
    title: 'Cimentop Concrete',
    category: 'Construção Civil',
    videoSrc: '/cinematic/panel-cimentop.mp4',
    imageSrc: '/projects/cimentopconcrete.webp',
    column: 0,
    aspectRatio: '9/16',
    objectPosition: 'center 20%',
  },
  {
    id: 'panel-cartorio',
    title: 'Cartório do Brasileiro',
    category: 'Serviços Jurídicos',
    videoSrc: '/cinematic/panel-cartorio.mp4',
    imageSrc: '/projects/cartoriodobrasileiro.webp',
    column: 0,
    aspectRatio: '9/16',
    objectPosition: 'center 25%',
  },

  // Column 1 (Center Column - Contains INITIAL HERO PANEL at index 1 or 0)
  {
    id: 'panel-hero-initial',
    title: 'Wesley Nunes',
    category: 'Digital Studio',
    videoSrc: '/cinematic/hero-intro.mp4',
    imageSrc: '/projects/wesleynunes-lp.webp',
    poster: '/projects/wesleynunes-lp.webp',
    column: 1,
    aspectRatio: '9/16',
    objectPosition: 'center 10%',
  },
  {
    id: 'panel-pedrofit',
    title: 'Pedro Fit',
    category: 'High Performance',
    videoSrc: '/cinematic/panel-pedrofit.mp4',
    imageSrc: '/projects/pedrofit.webp',
    column: 1,
    aspectRatio: '9/16',
    objectPosition: 'center 20%',
  },
  {
    id: 'panel-conexao',
    title: 'Conexão Baby',
    category: 'E-commerce Infantil',
    videoSrc: '/cinematic/panel-conexao.mp4',
    imageSrc: '/projects/conexaobaby.webp',
    column: 1,
    aspectRatio: '9/16',
    objectPosition: 'center 15%',
  },

  // Column 2 (Right Column - Contains TARGET PANEL FOR SECOND ZOOM-IN: Leo Nunes)
  {
    id: 'panel-target-zoom',
    title: 'Leo Nunes Barbearia',
    category: 'Experiência & Barbearia Premium',
    videoSrc: '/cinematic/panel-leonunes.mp4',
    imageSrc: '/projects/leo-nunes.webp',
    poster: '/projects/leo-nunes.webp',
    column: 2,
    aspectRatio: '9/16',
    objectPosition: 'center 10%',
  },
  {
    id: 'panel-nuneshub',
    title: 'Nunes Hub',
    category: 'Hub de Inovação',
    videoSrc: '/cinematic/panel-nuneshub.mp4',
    imageSrc: '/projects/nuneshub.webp',
    column: 2,
    aspectRatio: '9/16',
    objectPosition: 'center 20%',
  },
  {
    id: 'panel-alicerce',
    title: 'Alicerce Digital',
    category: 'Estratégia Digital',
    videoSrc: '/cinematic/panel-alicerce.mp4',
    imageSrc: '/projects/alicercedigital.webp',
    column: 2,
    aspectRatio: '9/16',
    objectPosition: 'center 15%',
  },
];

