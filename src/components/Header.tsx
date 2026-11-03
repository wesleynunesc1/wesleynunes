import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        {/* Brand Wordmark */}
        <a href="#hero" className="brand-logo" onClick={closeMenu}>
          <span className="brand-primary">WESLEY</span>
          <span className="brand-secondary">NUNES</span>
          <span className="brand-dot" />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navegação Principal">
          <ul className="nav-list">
            <li><a href="#hero" className="nav-link">Início</a></li>
            <li><a href="#projetos" className="nav-link">Projetos</a></li>
            <li><a href="#sobre" className="nav-link">Sobre</a></li>
            <li><a href="#contato" className="nav-link">Contato</a></li>
          </ul>
        </nav>

        {/* Action Button */}
        <div className="header-cta">
          <a href="#contato" className="btn-header-talk">
            <span>Iniciar Projeto</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-inner">
          <a href="#hero" className="mobile-nav-link" onClick={closeMenu}>Início</a>
          <a href="#projetos" className="mobile-nav-link" onClick={closeMenu}>Projetos</a>
          <a href="#sobre" className="mobile-nav-link" onClick={closeMenu}>Sobre</a>
          <a href="#contato" className="mobile-nav-link" onClick={closeMenu}>Contato</a>
          <div className="mobile-drawer-footer">
            <a href="#contato" className="btn-mobile-contact" onClick={closeMenu}>
              Iniciar um Projeto
              <ArrowUpRight size={18} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
