import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  // WhatsApp encoded url with official requested initial message
  const whatsappNumber = '5588981957471';
  const whatsappMessage = encodeURIComponent(
    'Olá, Wesley! Vi seu portfólio e gostaria de conversar sobre um projeto.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramUrl = 'https://www.instagram.com/euwesleyununes/';

  return (
    <section id="contato" className="contact-section">
      <div className="contact-inner">
        {/* Contact Atmospheric Glow */}
        <div className="contact-glow" aria-hidden="true" />

        <div className="contact-card-box">
          <div className="contact-tag-pill">
            <span className="contact-tag-dot" />
            <span>DISPONÍVEL PARA NOVOS PROJETOS</span>
          </div>

          <h2 className="contact-title">
            O próximo projeto pode ser o seu.
          </h2>

          <p className="contact-subtitle">
            Gostou do que viu? Entre em contato para conversar sobre seu próximo projeto digital.
          </p>

          <div className="contact-action-buttons">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact-primary"
            >
              <MessageSquare size={18} />
              <span>WhatsApp: +55 (88) 98195-7471</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact-instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Instagram: @euwesleyununes</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="contact-social-links">
            <a
              href="https://github.com/wesleynunesc1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Perfil no GitHub de Wesley Nunes"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>GitHub</span>
            </a>
            <div className="social-divider" />
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Perfil no Instagram de Wesley Nunes"
            >
              <span>@euwesleyununes</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
