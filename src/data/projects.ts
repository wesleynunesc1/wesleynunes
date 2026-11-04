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
    status: 'published',
  },
  // 4 novos registros provisórios preparados para receber as capturas e dados reais
  {
    id: 'novo-projeto-01',
    title: 'Novo Projeto 01',
    category: 'Website / Landing Page',
    description: 'Projeto digital em desenvolvimento com foco em alta performance e design visual contemporâneo.',
    screenshot: '',
    websiteUrl: '',
    order: 2,
    scrollSpeed: 20,
    status: 'pending',
  },
  {
    id: 'novo-projeto-02',
    title: 'Novo Projeto 02',
    category: 'Digital Experience / UI Design',
    description: 'Experiência digital interativa com tipografia refinada e arquitetura visual moderna.',
    screenshot: '',
    websiteUrl: '',
    order: 3,
    scrollSpeed: 20,
    status: 'pending',
  },
  {
    id: 'novo-projeto-03',
    title: 'Novo Projeto 03',
    category: 'Web Application / Frontend',
    description: 'Aplicação web focada em conversão, fluidez e acabamento estético de estúdio digital.',
    screenshot: '',
    websiteUrl: '',
    order: 4,
    scrollSpeed: 20,
    status: 'pending',
  },
  {
    id: 'novo-projeto-04',
    title: 'Novo Projeto 04',
    category: 'Creative Development / E-commerce',
    description: 'Website construído com atenção aos detalhes de motion, iluminação e navegação intuitiva.',
    screenshot: '',
    websiteUrl: '',
    order: 5,
    scrollSpeed: 20,
    status: 'pending',
  },
];
