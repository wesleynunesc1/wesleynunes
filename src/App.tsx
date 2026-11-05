import { AmbientBackground } from './components/AmbientBackground';
import { Header } from './components/Header';
import { CinematicHeroWall } from './components/CinematicHeroWall';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="portfolio-app">
      {/* Ambient Moving Atmospheric Lights */}
      <AmbientBackground />

      {/* Header Wesley Nunes (Controlado progressivamente pela timeline cinematográfica) */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero Cinematográfica Desktop & Mobile — Painel Central Isolado -> Zoom-Out Mosaico 3x3 */}
        <CinematicHeroWall />

        {/* Seção 01 — Portfólio / Projetos Selecionados (Galeria 3 colunas) */}
        <PortfolioGallery />
      </main>

      {/* Rodapé Oficial Redesenhado com links de contato */}
      <Footer />
    </div>
  );
}

export default App;
