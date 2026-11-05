import { AmbientBackground } from './components/AmbientBackground';
import { Header } from './components/Header';
import { CinematicHeroWall } from './components/CinematicHeroWall';
import { PortfolioGallery } from './components/PortfolioGallery';
import { AboutProfileCard } from './components/AboutProfileCard';
import { MetricsIndicators } from './components/MetricsIndicators';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="portfolio-app">
      {/* Ambient Moving Atmospheric Lights */}
      <AmbientBackground />

      {/* Header Wesley Nunes (Controlado progressivamente pela timeline cinematográfica) */}
      <Header />

      {/* Main Content Sections na ordem estrita solicitada:
          1. Hero cinematográfica existente
          2. Cases de Sucesso existentes até Nunes Hub + Card Horizontal de Transição
          3. Card de apresentação pessoal com fotografia autoral
          4. Três cards de indicadores
          5. Arquitetura de depoimentos reservada (oculta até aprovação de avaliações reais)
          6. Rodapé premium redesenhado
      */}
      <main>
        {/* 1. Hero Cinematográfica */}
        <CinematicHeroWall />

        {/* 2. Cases de Sucesso até Nunes Hub + Card Horizontal de Transição */}
        <PortfolioGallery />

        {/* 3. Card de Apresentação Pessoal com Fotografia Oficial */}
        <AboutProfileCard />

        {/* 4. Três Cards de Indicadores */}
        <MetricsIndicators />

        {/* 5. Arquitetura de Depoimentos (mantida montada e preparada estruturalmente sem exibir falsos dados) */}
        <TestimonialsSection isVisible={false} />
      </main>

      {/* 6. Rodapé Oficial Premium Redesenhado */}
      <Footer />
    </div>
  );
}

export default App;
