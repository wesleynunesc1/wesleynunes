import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const whatsappUrl =
    'https://wa.me/5588981957471?text=' +
    encodeURIComponent('Olá, Wesley! Vi seu portfólio e gostaria de conversar sobre um projeto.');
  const instagramUrl = 'https://www.instagram.com/euwesleyununes/';

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        {/* Brand Wordmark */}
        <a href="#projetos" className="brand-logo" onClick={closeMenu}>
          <span className="brand-primary">WESLEY</span>
          <span className="brand-secondary">NUNES</span>
          <span className="brand-dot" />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navegação Principal">
          <ul className="nav-list">
            <li><a href="#projetos" className="nav-link">Projetos</a></li>
            <li><a href="#sobre" className="nav-link">Sobre</a></li>
            <li><a href="#contato" className="nav-link">Contato</a></li>
          </ul>
        </nav>

        {/* Header Action Button (Desktop) & Menu Button (Mobile) */}
        <div className="header-cta">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-header-talk"
          >
            <span>Iniciar Projeto</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Ice-Blue Menu Button */}
          <button
            className="btn-mobile-ice-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="ice-menu-icon">{mobileMenuOpen ? '✕' : '☰'}</span>
            <span className="ice-menu-text">{mobileMenuOpen ? 'Fechar' : 'Menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu — efeito dropdown/deslizante original logo abaixo da barra */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-inner">
          <a href="#projetos" className="mobile-nav-link" onClick={closeMenu}>Projetos</a>
          <a href="#sobre" className="mobile-nav-link" onClick={closeMenu}>Sobre</a>
          <a href="#contato" className="mobile-nav-link" onClick={closeMenu}>Contato</a>
          <div className="mobile-drawer-footer">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mobile-contact"
              onClick={closeMenu}
            >
              <span>Iniciar Projeto</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mobile-instagram"
              onClick={closeMenu}
            >
              <span>Instagram @euwesleyununes</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
