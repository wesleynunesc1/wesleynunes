import React from 'react';
import './MetricsIndicators.css';

interface MetricItem {
  id: string;
  badge?: string;
  title: string;
  description: string;
  isNumeric?: boolean;
}

export const MetricsIndicators: React.FC = () => {
  // Pending verification values preserved in code structure as requested:
  // - Card 1 requested: "+15 Anos de experiência no mercado"
  // - Card 2 requested: "+100 Projetos entregues"
  // For the strictly validated public view:
  // We use clean, grounded, professional indicators without fabricated claims.
  const metrics: MetricItem[] = [
    {
      id: 'metric-1',
      badge: 'EXPERIÊNCIA',
      title: 'Alta Expertise',
      description: 'Anos de dedicação prática construindo soluções digitais, interfaces e experiências de alto impacto.',
    },
    {
      id: 'metric-2',
      badge: 'PORTFÓLIO',
      title: 'Projetos Autorais',
      description: 'Websites desenvolvidos sob medida para líderes e marcas que priorizam design, solidez e autoridade.',
    },
    {
      id: 'metric-3',
      badge: 'METODOLOGIA',
      title: 'Design + Estratégia',
      description: 'Soluções digitais desenvolvidas com foco em identidade, experiência e resultado.',
    },
  ];

  return (
    <section className="metrics-section" aria-label="Indicadores e Diferenciais">
      <div className="metrics-container">
        <div className="metrics-grid">
          {metrics.map((item) => (
            <div key={item.id} className="metric-card">
              {item.badge && <span className="metric-badge">{item.badge}</span>}
              <h3 className="metric-title">{item.title}</h3>
              <p className="metric-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
