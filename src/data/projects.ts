export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  screenshot: string;
  websiteUrl?: string;
  featured?: boolean;
  order: number;
  scrollSpeed?: number;
  tags?: string[];
  year?: string;
}

export const projectsData: Project[] = [
  {
    id: 'leo-nunes',
    title: 'Leo Nunes Barbearia',
    category: 'Website / Sistema de Agendamentos',
    description: 'Website desenvolvido para apresentar a identidade da barbearia e proporcionar uma experiência de agendamento digital moderna e intuitiva.',
    screenshot: '/projects/leo-nunes.jpg',
    websiteUrl: 'https://leonunesbarbearia.vercel.app',
    featured: true,
    order: 1,
    scrollSpeed: 22,
    tags: ['Next.js / React', 'UI/UX Design', 'Motion', 'High Conversion'],
    year: '2026',
  },
  {
    id: 'lumina-studios',
    title: 'Lumina Digital Architecture',
    category: 'Web Experience / Architecture',
    description: 'Ambiente imersivo para estúdio de design e arquitetura digital com navegação dinâmica e tipografia expressiva.',
    screenshot: '/projects/lumina-preview.svg',
    websiteUrl: 'https://lumina.example.com',
    featured: false,
    order: 2,
    scrollSpeed: 18,
    tags: ['Creative Development', 'Editorial Layout', 'Interactive 3D'],
    year: '2025',
  },
  {
    id: 'aurora-fintech',
    title: 'Aurora Wealth Management',
    category: 'Fintech Platform / Web App',
    description: 'Interface clean e tecnológica projetada para investidores de alto patrimônio, trazendo visualização clara de portfólio.',
    screenshot: '/projects/aurora-preview.svg',
    websiteUrl: 'https://aurorawealth.example.com',
    featured: false,
    order: 3,
    scrollSpeed: 16,
    tags: ['Web Application', 'Fintech UI', 'Performance'],
    year: '2025',
  },
  {
    id: 'nexus-craft',
    title: 'Nexus Craft — Creative Engine',
    category: 'SaaS Platform / Developer Showcase',
    description: 'Plataforma para desenvolvedores criativos com visual escuro elegante, microinterações precisas e foco absoluto em fluidez.',
    screenshot: '/projects/nexus-preview.svg',
    websiteUrl: 'https://nexuscraft.example.com',
    featured: false,
    order: 4,
    scrollSpeed: 19,
    tags: ['Design System', 'SaaS', 'Dark Mode Luxury'],
    year: '2026',
  },
  {
    id: 'atelier-noir',
    title: 'Atelier Noir — Haute Horlogerie',
    category: 'E-commerce Luxury / Brand Experience',
    description: 'Galeria editorial de relojoaria suíça independente com estética minimalista e curadoria fotográfica.',
    screenshot: '/projects/lumina-preview.svg',
    websiteUrl: 'https://ateliernoir.example.com',
    featured: false,
    order: 5,
    scrollSpeed: 17,
    tags: ['Luxury E-commerce', 'Editorial Layout', 'Motion'],
    year: '2025',
  },
  {
    id: 'vortex-ai',
    title: 'Vortex AI — Cognitive Infrastructure',
    category: 'Deep Tech / Enterprise AI',
    description: 'Landing page para infraestrutura de inteligência artificial de baixa latência e orquestração de modelos autônomos.',
    screenshot: '/projects/aurora-preview.svg',
    websiteUrl: 'https://vortexai.example.com',
    featured: false,
    order: 6,
    scrollSpeed: 18,
    tags: ['Enterprise SaaS', 'High Performance', 'Next.js'],
    year: '2026',
  },
];
