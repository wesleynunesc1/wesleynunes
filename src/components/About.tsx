import React from 'react';
import { Compass, Cpu, Layers } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="about-inner">
        {/* Editorial Title Block */}
        <div className="about-header">
          <div className="about-badge">
            <span className="about-badge-dot" />
            <span>SOBRE / VISÃO & ABORDAGEM</span>
          </div>

          <h2 className="about-title">
            Por trás de cada experiência,<br />
            <span className="about-title-highlight">existe uma ideia.</span>
          </h2>
        </div>

        {/* Editorial Text Block */}
        <div className="about-content-grid">
          <div className="about-primary-column">
            <p className="about-lead-paragraph">
              Sou <strong>Wesley Nunes</strong>. Desenvolvo experiências digitais que combinam design, tecnologia e funcionalidade. Meu foco está em transformar ideias em websites e interfaces cuidadosamente construídas, com atenção à estética, à usabilidade e à experiência de cada visitante.
            </p>
            <p className="about-secondary-paragraph">
              Acredito que o verdadeiro design digital não se resume a templates prontos ou animações gratuitas. Trata-se de criar uma arquitetura visual consistente, onde cada cor, tipografia e microinteração guia o usuário com fluidez, transmitindo credibilidade instantânea.
            </p>
          </div>

          <div className="about-pillars-column">
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Compass size={20} />
              </div>
              <div className="pillar-text">
                <h3 className="pillar-title">Direção de Arte & Editorial</h3>
                <p className="pillar-desc">
                  Composição tipográfica rigorosa, paletas com contraste refinado e iluminação atmosférica inspirada nas melhores referências globais.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Cpu size={20} />
              </div>
              <div className="pillar-text">
                <h3 className="pillar-title">Engenharia Front-end Precisa</h3>
                <p className="pillar-desc">
                  Arquitetura limpa, alta performance, carregamento instantâneo e código construído para escalabilidade e longevidade.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Layers size={20} />
              </div>
              <div className="pillar-text">
                <h3 className="pillar-title">Motion Design com Propósito</h3>
                <p className="pillar-desc">
                  Transições fluídas e animações calculadas que enriquecem a narrativa visual sem comprometer a usabilidade ou o desempenho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

