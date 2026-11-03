import { AmbientBackground } from './components/AmbientBackground';
import { Header } from './components/Header';
import { PortfolioGallery } from './components/PortfolioGallery';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="portfolio-app">
      {/* Ambient Moving Atmospheric Lights */}
      <AmbientBackground />

      {/* Fixed Minimalist Header */}
      <Header />

      {/* Main Content Sections — Begins directly with Selected Projects */}
      <main>
        {/* Seção 01 — Portfólio / Projetos Selecionados (Galeria 3 colunas) */}
        <PortfolioGallery />

        {/* Letreiro horizontal editorial */}
        <InfiniteMarquee />

        {/* Seção 02 — Sobre Mim (Editorial) */}
        <About />

        {/* Seção 03 — Contato Oficial */}
        <Contact />
      </main>

      {/* Rodapé Oficial com links diretos */}
      <Footer />
    </div>
  );
}

export default App;
