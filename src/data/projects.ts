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
];
