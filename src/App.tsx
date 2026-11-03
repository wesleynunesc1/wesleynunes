import { AmbientBackground } from './components/AmbientBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { PortfolioGallery } from './components/PortfolioGallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="portfolio-app">
      {/* Ambient Moving Atmospheric Lights */}
      <AmbientBackground />

      {/* Fixed Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Seção 02 — Hero Principal */}
        <Hero />

        {/* Seção 03 — Faixa Animada (Infinite Marquee) */}
        <InfiniteMarquee />

        {/* Seção 04 — Portfólio / Projetos Selecionados com Auto-Scroll */}
        <PortfolioGallery />

        {/* Seção 05 — Sobre Mim (Editorial) */}
        <About />

        {/* Seção 06 — Contato */}
        <Contact />
      </main>

      {/* Rodapé Oficial */}
      <Footer />
    </div>
  );
}

export default App;
