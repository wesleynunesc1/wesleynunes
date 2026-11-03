# Wesley Nunes — Portfólio Digital Premium

> **"Ideias que ganham forma. Experiências que deixam marca."**

Portfólio editorial e imersivo desenvolvido em **React**, **Vite** e **TypeScript**, concebido com direção de arte de estúdio digital de alto padrão (inspirado na sofisticação gráfica da Human).

---

## ✦ Destaques e Funcionalidades

- **Identidade Visual Premium**: Paleta escura profunda com camadas atmosféricas de luz azul-gelo (`#A9C8D8`), navy (`#1E3A5F`), prateado acetinado (`#D9D9D9`) e superfícies glassmorphism.
- **Componente `ProjectAutoScroll`**: Simulação fluida de navegação vertical automática para prints completos de websites (usando a Web Animations API para aceleração 60/120fps via hardware).
  - Controle de concorrência: apenas um projeto em rolagem por vez.
  - Reset imediato do card anterior ao clicar em outro.
  - Replay automático ao clicar novamente no mesmo card.
  - Pausa inteligente em abas inativas via `visibilitychange`.
  - Suporte a acessibilidade e `prefers-reduced-motion`.
- **Marquee Contínuo**: Letreiro horizontal infinito apresentando áreas de atuação com visual prateado em gradiente e separadores luminosos.
- **Estrutura Desacoplada**: Gerenciamento de projetos centralizado em `src/data/projects.ts` e screenshots em `public/projects/`.

---

## 🛠️ Tecnologias Utilizadas

- **React 19 & TypeScript**
- **Vite** (Build ultra-rápido)
- **CSS Modular com Design System Nativo**
- **Lucide Icons**
- **Web Animations API**

---

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Pré-visualizar build de produção
npm run preview
```

---

© Wesley Nunes. Todos os direitos reservados.
