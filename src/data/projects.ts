export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  screenshot: string;
  websiteUrl?: string;
  featured?: boolean;
  order: number;
  scrollSpeed?: number; // duration in seconds or multiplier
  tags?: string[];
  year?: string;
}

export const projectsData: Project[] = [
  {
    id: 'leo-nunes',
    title: 'Leo Nunes — Barbearia & Estilo',
    category: 'Landing Page & Sistema de Agendamento',
    description: 'Experiência digital sofisticada e de alta conversão para barbearia premium, combinando agendamento intuitivo, apresentação da equipe e atmosfera refinada.',
    screenshot: '/projects/leo-nunes.jpg',
    websiteUrl: 'https://leonunes.com.br',
    featured: true,
    order: 1,
    scrollSpeed: 22,
    tags: ['Next.js / React', 'UI/UX Design', 'Motion', 'High Conversion'],
    year: '2026',
  },
  {
    id: 'lumina-studios',
    title: 'Lumina Digital Architecture',
    category: 'Web Experience & Portfolio Editorial',
    description: 'Ambiente imersivo para estúdio de design e arquitetura digital com navegação dinâmica, estética brutalista com acabamento luxury e tipografia expressiva.',
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
    category: 'Fintech Platform & Product Landing Page',
    description: 'Interface clean e tecnológica projetada para investidores de alto patrimônio, trazendo visualização clara de portfólio, segurança e sofisticação gráfica.',
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
    category: 'SaaS Platform & Developer Showcase',
    description: 'Plataforma para desenvolvedores criativos com visual escuro elegante, microinterações precisas e foco absoluto em documentação e conversão fluida.',
    screenshot: '/projects/nexus-preview.svg',
    websiteUrl: 'https://nexuscraft.example.com',
    featured: false,
    order: 4,
    scrollSpeed: 19,
    tags: ['Design System', 'SaaS', 'Dark Mode Luxury'],
    year: '2026',
  },
];
