import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const whatsappUrl =
    'https://wa.me/5588981957471?text=' +
    encodeURIComponent('Olá, Wesley! Vi seu portfólio e gostaria de conversar sobre um projeto.');

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Official Brand Logo (Left) */}
        <a href="#projetos" className="brand-logo" onClick={closeMenu} aria-label="Wesley Nunes Home">
          <img
            src="/logo.png"
            alt="Wesley Nunes"
            className="brand-logo-img"
            width="200"
            height="29"
          />
        </a>

        {/* Action Button 'Iniciar Projeto' (Right) */}
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

          {/* Mobile Menu Button */}
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

      {/* Mobile Drawer (Only when mobile menu is toggled) */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'is-active' : ''}`}
        onClick={closeMenu}
        aria-hidden={!mobileMenuOpen}
      />
      <div
        className={`mobile-menu-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-title">NAVEGAÇÃO</div>
          <button
            className="btn-close-drawer"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-nav-links">
          <a href="#projetos" className="mobile-nav-item" onClick={closeMenu}>
            <span className="mobile-nav-num">01</span>
            <span className="mobile-nav-label">Cases de Sucesso</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-item"
            onClick={closeMenu}
          >
            <span className="mobile-nav-num">02</span>
            <span className="mobile-nav-label">Iniciar Projeto</span>
          </a>
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-drawer-cta"
            onClick={closeMenu}
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
};
