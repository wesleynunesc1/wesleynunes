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
  status?: 'published' | 'pending';
}

export const projectsData: Project[] = [
  // 1. Leo Nunes Barbearia
  {
    id: 'leo-nunes',
    title: 'Leo Nunes Barbearia',
    category: 'Website / Sistema de Agendamentos',
    description: 'Website desenvolvido para apresentar a identidade da barbearia e proporcionar uma experiência de agendamento digital moderna e intuitiva.',
    screenshot: '/projects/leo-nunes.webp',
    websiteUrl: 'https://leonunesbarbearia.vercel.app',
    featured: true,
    order: 1,
    scrollSpeed: 22,
    tags: ['Next.js / React', 'UI/UX Design', 'Motion', 'High Conversion'],
    year: '2026',
    status: 'published',
  },
  // 2. Mateus Cavalcante
  {
    id: 'mateuscavalcante',
    title: 'Mateus Cavalcante',
    category: 'Portfólio Pessoal / Profissional',
    description: 'Website com acabamento editorial de alto nível, tipografia expressiva e apresentação de autoridade e serviços.',
    screenshot: '/projects/mateuscavalcante.webp',
    websiteUrl: 'https://mateuscavalcante.vercel.app',
    order: 2,
    scrollSpeed: 20,
    tags: ['Personal Brand', 'Editorial Layout', 'High Performance'],
    year: '2026',
    status: 'published',
  },
  // 3. Pedro Fit
  {
    id: 'pedrofit',
    title: 'Pedro Fit — Treinador & Consultoria',
    category: 'Fitness / Landing Page de Conversão',
    description: 'Página de alta conversão para consultoria fitness com visual agressivo, depoimentos reais e integração para WhatsApp.',
    screenshot: '/projects/pedrofit.webp',
    websiteUrl: 'https://pedrofit.vercel.app',
    order: 3,
    scrollSpeed: 20,
    tags: ['Fitness Coaching', 'Direct Response', 'High Conversion'],
    year: '2026',
    status: 'published',
  },
  // 4. Nunes Hub
  {
    id: 'nuneshub',
    title: 'Nunes Hub',
    category: 'Ecossistema Digital & Soluções',
    description: 'Plataforma integradora para gestão e visualização de serviços digitais com identidade visual contemporânea.',
    screenshot: '/projects/nuneshub.webp',
    websiteUrl: 'https://nuneshub.vercel.app',
    order: 4,
    scrollSpeed: 24,
    tags: ['Hub & Portal', 'Modern Design', 'Performance'],
    year: '2026',
    status: 'published',
  },
  // 5. Cimentop Concrete
  {
    id: 'cimentopconcrete',
    title: 'Cimentop Concrete',
    category: 'Website Institucional & Engenharia',
    description: 'Solução corporativa robusta para empresa de concreto usinado e engenharia civil com catálogo técnico e solicitação de orçamento.',
    screenshot: '/projects/cimentopconcrete.webp',
    websiteUrl: 'https://cimentopconcrete.vercel.app',
    order: 5,
    scrollSpeed: 22,
    tags: ['Engineering & Construction', 'Corporate Web', 'Clean Architecture'],
    year: '2026',
    status: 'published',
  },
  // 6. Wesley Nunes
  {
    id: 'wesleynunes-lp',
    title: 'Wesley Nunes — Soluções Web',
    category: 'Consultoria Digital & Desenvolvimento',
    description: 'Landing page autoral focada em desenvolvimento criativo de websites, interfaces e experiências digitais sob medida.',
    screenshot: '/projects/wesleynunes-lp.webp',
    websiteUrl: 'https://wesleynunes.vercel.app',
    order: 6,
    scrollSpeed: 22,
    tags: ['Creative Development', 'Portfolio', 'Fullstack'],
    year: '2026',
    status: 'published',
  },
  // 7. Conexão Baby
  {
    id: 'conexaobaby',
    title: 'Conexão Baby',
    category: 'E-commerce & Portal Materno',
    description: 'Experiência digital delicada e humanizada desenvolvida para produtos infantis e conexão com famílias.',
    screenshot: '/projects/conexaobaby.webp',
    websiteUrl: 'https://conexaobaby.vercel.app',
    order: 7,
    scrollSpeed: 20,
    tags: ['E-commerce', 'UX Design', 'Performance'],
    year: '2026',
    status: 'published',
  },
  // 8. Vista Prime Seven
  {
    id: 'vistaprime',
    title: 'Vista Prime Seven',
    category: 'Empreendimento Imobiliário / Landing Page',
    description: 'Apresentação imobiliária de alto padrão com visual sofisticado, plantas interativas e foco em conversão de leads qualificados.',
    screenshot: '/projects/vistaprime.webp',
    websiteUrl: 'https://vistaprime-seven.vercel.app',
    order: 8,
    scrollSpeed: 22,
    tags: ['Next.js', 'Real Estate', 'Luxury UI'],
    year: '2026',
    status: 'published',
  },
  // 9. SCBA Escolinha de Futebol
  {
    id: 'scbaescolinha',
    title: 'SCBA Escolinha de Futebol',
    category: 'Website Esportivo / Academia',
    description: 'Portal dinâmico e enérgico para escolinha esportiva com apresentação de turmas, metodologia e captação de novos alunos.',
    screenshot: '/projects/scbaescolinha.webp',
    websiteUrl: 'https://scbaescolinha.vercel.app',
    order: 9,
    scrollSpeed: 24,
    tags: ['Sports & Education', 'Motion UI', 'Responsive'],
    year: '2026',
    status: 'published',
  },
  // 10. Alicerce Digital
  {
    id: 'alicercedigital',
    title: 'Alicerce Digital',
    category: 'Agência Digital & Estratégia Web',
    description: 'Presença digital moderna e tecnológica com microinterações refinadas, demonstrando serviços e cases de transformação digital.',
    screenshot: '/projects/alicercedigital.webp',
    websiteUrl: 'https://alicercedigital.vercel.app',
    order: 10,
    scrollSpeed: 22,
    tags: ['Digital Studio', 'Creative Dev', 'Motion Design'],
    year: '2026',
    status: 'published',
  },
  // 11. Cartório do Brasileiro
  {
    id: 'cartoriodobrasileiro',
    title: 'Cartório do Brasileiro',
    category: 'Portal de Serviços & Cidadania',
    description: 'Plataforma institucional clara, segura e acessível desenvolvida para assessoria em documentação e serviços cartorários globais.',
    screenshot: '/projects/cartoriodobrasileiro.webp',
    websiteUrl: 'https://cartoriodobrasileiro.com',
    order: 11,
    scrollSpeed: 26,
    tags: ['Institutional Platform', 'Fintech / Legal', 'Accessibility'],
    year: '2026',
    status: 'published',
  },
  // 12. DSS Solutions
  {
    id: 'dsssolutions',
    title: 'DSS Solutions',
    category: 'Tecnologia Corporativa & Software',
    description: 'Interface corporativa premium para soluções em tecnologia da informação e consultoria estratégica em processos.',
    screenshot: '/projects/dsssolutions.webp',
    websiteUrl: 'https://dsssolutions.vercel.app',
    order: 12,
    scrollSpeed: 25,
    tags: ['Enterprise Tech', 'SaaS Showcase', 'Modern UI'],
    year: '2026',
    status: 'published',
  },
];
