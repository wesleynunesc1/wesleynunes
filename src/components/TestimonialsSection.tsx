import React from 'react';

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  quote: string;
  avatarUrl?: string;
  projectUrl?: string;
}

interface TestimonialsSectionProps {
  /** Keep false until verified client reviews are available to prevent empty/fabricated UI */
  isVisible?: boolean;
  testimonials?: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  isVisible = false,
  testimonials = [],
}) => {
  // STRICT RULE: Do not render empty containers, fabricated reviews, or placeholders
  if (!isVisible || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="depoimentos" className="testimonials-section" aria-label="Depoimentos de Clientes">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-tag">02 / DEPOIMENTOS</span>
          <h2 className="testimonials-title">O que dizem os parceiros de projetos.</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <article key={t.id} className="testimonial-card">
              <blockquote className="testimonial-quote">“{t.quote}”</blockquote>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.clientName}</span>
                <span className="testimonial-role">{t.clientRole} • {t.companyName}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

