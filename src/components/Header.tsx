import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
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
    <>
      <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
        {/* Mobile Top Callout — "Entre em contato!" */}
        <div className="mobile-top-callout">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-callout-link"
          >
            Entre em contato!
          </a>
        </div>

        {/* Main Bar / Mobile Capsule Container */}
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

            {/* Mobile Lime Menu Button */}
            <button
              className="btn-mobile-lime-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="lime-menu-icon">☰</span>
              <span className="lime-menu-text">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <span className="drawer-title">NAVEGAÇÃO</span>
          <button
            className="drawer-close-btn"
            onClick={closeMenu}
            aria-label="Fechar navegação"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-nav-inner">
          <a href="#projetos" className="mobile-nav-link" onClick={closeMenu}>
            <span>Portfólio</span>
            <span className="drawer-link-arrow">→</span>
          </a>
          <a href="#projetos" className="mobile-nav-link" onClick={closeMenu}>
            <span>Projetos</span>
            <span className="drawer-link-arrow">→</span>
          </a>
          <a href="#sobre" className="mobile-nav-link" onClick={closeMenu}>
            <span>Sobre</span>
            <span className="drawer-link-arrow">→</span>
          </a>
          <a href="#contato" className="mobile-nav-link" onClick={closeMenu}>
            <span>Contato</span>
            <span className="drawer-link-arrow">→</span>
          </a>

          <div className="mobile-drawer-direct-links">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-action-btn whatsapp-btn"
              onClick={closeMenu}
            >
              <span>WhatsApp: +55 (88) 98195-7471</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-action-btn instagram-btn"
              onClick={closeMenu}
            >
              <span>Instagram: @euwesleyununes</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
