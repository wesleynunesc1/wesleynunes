# Wesley Nunes — Portfólio Digital Premium

> **"Ideias que ganham forma. Experiências que deixam marca."**

Portfólio editorial e imersivo desenvolvido em **React 19**, **Vite** e **TypeScript**, concebido com direção de arte de alto padrão (inspirado na sofisticação gráfica da Human).

---

## ✦ Estrutura e Destaques

- **Início Imediato em Portfólio**: A página inicia diretamente com **PORTFÓLIO / PROJETOS SELECIONADOS** logo após o Header fixo minimalista, eliminando heros intermediárias.
- **Galeria em Grid de 3 Colunas**:
  - Desktop: 3 colunas, cards retangulares imersivos sem molduras artificiais, gap de 18px.
  - Tablet: 2 colunas responsivas.
  - Mobile: 1 coluna, proporção refinada para telas de toque.
- **Componente `ProjectAutoScroll`**:
  - **Interação por Hover no Desktop**: Ao passar o cursor, a captura vertical percorre suavemente o website da primeira à última dobra.
  - **Interação por Toque no Mobile**: Ao tocar no projeto, inicia-se a rolagem.
  - **Exclusividade**: Apenas um card ativo por vez; alternar cancela e reseta o card anterior para o topo imediato.
  - **Aceleração 60/120fps via Web Animations API** calculada dinamicamente conforme as dimensões reais de cada screenshot.
  - **Pausa Inteligente**: Ao mudar de aba, a animação pausa via `visibilitychange`.
- **Informações Oficiais de Contato**:
  - **WhatsApp**: [+55 (88) 98195-7471](https://wa.me/5588981957471?text=Ol%C3%A1%2C%20Wesley!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.)
  - **Instagram**: [@euwesleyununes](https://www.instagram.com/euwesleyununes/)
- **Projeto Real Leo Nunes Barbearia**:
  - URL Oficial: [https://leonunesbarbearia.vercel.app](https://leonunesbarbearia.vercel.app)
  - Screenshot vertical de alta resolução configurado em `public/projects/leo-nunes.jpg`.

---

## 🛠️ Tecnologias Utilizadas

- **React 19 & TypeScript**
- **Vite**
- **CSS Modular com Design System Nativo**
- **Lucide Icons**
- **Web Animations API**

---

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Pré-visualizar build
npm run preview
```

---

© Wesley Nunes. Todos os direitos reservados.
