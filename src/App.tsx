import { AmbientBackground } from './components/AmbientBackground';
import { Header } from './components/Header';
import { PortfolioGallery } from './components/PortfolioGallery';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="portfolio-app">
      {/* Ambient Moving Atmospheric Lights */}
      <AmbientBackground />

      {/* Fixed Minimalist Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
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
