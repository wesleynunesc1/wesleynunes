# Wesley Nunes — Portfólio Digital Premium

> **"Ideias que ganham forma. Experiências que deixam marca."**

Portfólio editorial e imersivo desenvolvido em **React 19**, **Vite** e **TypeScript**, concebido com direção de arte de alto padrão e paleta fria exclusiva (**Ice-Blue & Silver Luxury**).

---

## ✦ Estrutura e Destaques

### 1. Galeria Desktop Inspirada na Referência Visual:
- **Grid de 3 Colunas Alinhadas**:
  - `grid-template-columns: repeat(3, minmax(0, 1fr))`
  - Espaçamento de `16px` uniforme entre linhas e colunas
  - Largura máxima de `1440px` centralizada
  - Alinhamento à esquerda consistente nas linhas que contenham 1 ou 2 projetos (sem esticar artificialmente).
- **Cards Horizontais Uniformes**:
  - Proporção da área de visualização: `aspect-ratio: 1.35 / 1`
  - Fundo preto com cantos discretos (`border-radius: 4px`) e moldura sutil.
  - Imagem ocupa toda a largura sem distorção ou corte horizontal, ocultando com `overflow: hidden` o excedente vertical.
- **Informações Elegantes no Hover**:
  - Visual limpo no estado padrão (foco 100% no website).
  - Ao passar o cursor, surge suavemente na parte inferior um degradê escuro contendo nome do projeto, categoria em azul-gelo e botão *"Ver site"* com ícone de seta diagonal.
- **Auto Scroll Responsivo**:
  - A imagem rola automaticamente e de forma suave do topo ao rodapé ao posicionar o cursor.
  - Ao sair da galeria ou mover para outro case, a animação é imediatamente interrompida e resetada para o topo.

### 2. Preservação Total do Layout Mobile Aprovado:
- Header em cápsula com logomarca `WESLEY NUNES` e botão `Menu`.
- Botão "Portfólio" com esfera decorativa translúcida.
- Seção `01 / CASES DE SUCESSO` com `// Toque para explorar o site.`
- Cards em coluna única com altura compacta (`clamp(260px, 38vh, 300px)`).
- Faixa de informações integrada na base que não cobre o screenshot no celular.
- Auto Scroll acionado por toque suave.

### 3. Preparação Dinâmica para 4 Novos Projetos:
A fonte de dados em `src/data/projects.ts` está estruturada para receber novos cases:
```typescript
{
  id: 'novo-projeto-01',
  title: 'Novo Projeto 01',
  category: 'Website / Landing Page',
  description: '...',
  screenshot: '', // Preencher quando adicionar a imagem
  websiteUrl: '',
  order: 2,
  scrollSpeed: 20,
  status: 'pending' // 'pending' oculta da galeria pública; 'published' exibe automaticamente
}
```

#### Como adicionar novos projetos quando tiver as capturas:
1. Copie o screenshot para `public/projects/nome-do-projeto.jpg`.
2. Em `src/data/projects.ts`, preencha o caminho `screenshot: '/projects/nome-do-projeto.jpg'`, o `title`, a `category`, a `websiteUrl` e altere o `status` para `'published'`.
3. O novo projeto entrará imediatamente no grid de 3 colunas, encaixando-se na sequência.

---

## 📞 Informações Oficiais de Contato

- **WhatsApp**: [+55 (88) 98195-7471](https://wa.me/5588981957471?text=Ol%C3%A1%2C%20Wesley!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.)
- **Instagram**: [@euwesleyununes](https://www.instagram.com/euwesleyununes/)
- **Leo Nunes Barbearia**: [https://leonunesbarbearia.vercel.app](https://leonunesbarbearia.vercel.app)

---

## 🛠️ Tecnologias

- **React 19 & TypeScript**
- **Vite**
- **CSS Modular com Design System Nativo**
- **Lucide Icons**
- **Web Animations API**

---

© Wesley Nunes. Todos os direitos reservados.
