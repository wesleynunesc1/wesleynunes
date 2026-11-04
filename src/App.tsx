import { useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Header } from './components/Header';
import { CinematicHeroWall } from './components/CinematicHeroWall';
import { PortfolioGallery } from './components/PortfolioGallery';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { Footer } from './components/Footer';

export function App() {
  // Header only becomes visible in Phase 4 of scroll (after main transformation)
  const [headerVisible, setHeaderVisible] = useState(false);

  const handleHeroProgress = (progress: number) => {
    // Show header when scroll passes 45% of the hero track
    setHeaderVisible(progress > 0.45);
  };

  return (
    <div className="portfolio-app">
      {/* Ambient Moving Atmospheric Lights */}
      <AmbientBackground />

      {/* Header Wesley Nunes (Aparece suavemente após a transformação) */}
      <Header visible={headerVisible} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Cinematográfica Desktop & Mobile — Painel Central Isolado -> Zoom-Out Mosaico 3x3 */}
        <CinematicHeroWall onProgress={handleHeroProgress} />

        {/* Seção 01 — Portfólio / Projetos Selecionados (Galeria 3 colunas) */}
        <PortfolioGallery />

        {/* Letreiro horizontal editorial */}
        <InfiniteMarquee />
      </main>

      {/* Rodapé Oficial com links de contato */}
      <Footer />
    </div>
  );
}

export default App;
