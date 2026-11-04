import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock scroll while mobile menu is open without losing page scroll position
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const whatsappUrl =
    'https://wa.me/5588981957471?text=' +
    encodeURIComponent('Olá, Wesley! Vi seu portfólio e gostaria de conversar sobre um projeto.');
  const instagramUrl = 'https://www.instagram.com/euwesleyununes/';

  const handleNavClick = (targetId: string) => {
    closeMenu();
    setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          {/* Official Brand Logo (Left) */}
          <a
            href="#hero-cinematic"
            className="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero-cinematic');
            }}
            aria-label="Wesley Nunes Home"
          >
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
      </header>

      {/* Mobile Menu rendered via React Portal at document root to guarantee top z-index & clean stacking */}
      {typeof document !== 'undefined' &&
        createPortal(
          <div
            className={`mobile-menu-portal-wrapper ${mobileMenuOpen ? 'is-active' : ''}`}
            aria-hidden={!mobileMenuOpen}
          >
            {/* Dark Backdrop */}
            <div className="mobile-menu-backdrop" onClick={closeMenu} />

            {/* Premium Mobile Navigation Panel (Deep Black #080B10, 100% Opaque) */}
            <div className="mobile-menu-panel">
              <div className="mobile-panel-header">
                <div className="mobile-panel-brand">
                  <img
                    src="/logo.png"
                    alt="Wesley Nunes"
                    className="brand-logo-img"
                    height="20"
                  />
                </div>
                <button
                  className="btn-close-panel"
                  onClick={closeMenu}
                  aria-label="Fechar menu"
                >
                  <span className="close-symbol">✕</span>
                  <span className="close-label">Fechar</span>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mobile-panel-nav">
                <a
                  href="#hero-cinematic"
                  className="mobile-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('hero-cinematic');
                  }}
                >
                  <span className="nav-index">01</span>
                  <span className="nav-text">Início</span>
                  <span className="nav-chevron">→</span>
                </a>

                <a
                  href="#projetos"
                  className="mobile-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('projetos');
                  }}
                >
                  <span className="nav-index">02</span>
                  <span className="nav-text">Projetos</span>
                  <span className="nav-chevron">→</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  <span className="nav-index">03</span>
                  <span className="nav-text">Contato</span>
                  <ArrowUpRight size={18} className="nav-icon" />
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  <span className="nav-index">04</span>
                  <span className="nav-text">Instagram</span>
                  <ArrowUpRight size={18} className="nav-icon" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  <span className="nav-index">05</span>
                  <span className="nav-text">WhatsApp</span>
                  <ArrowUpRight size={18} className="nav-icon" />
                </a>
              </nav>

              {/* Panel Footer */}
              <div className="mobile-panel-footer">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-panel-cta"
                  onClick={closeMenu}
                >
                  <span>Iniciar Projeto</span>
                  <ArrowUpRight size={16} />
                </a>
                <p className="mobile-panel-meta">
                  WESLEY NUNES • DIGITAL STUDIO
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
