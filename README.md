# Areião Park Hotel — Site Institucional

Site institucional do Areião Park Hotel (hotel 4 estrelas, Goiânia/GO). Construído
com **Astro** (SSG, 100% estático), fiel ao Design System v1 (`docs/design-system.html`).

## Stack

- **Astro 5** + TypeScript — saída estática (SSG), zero JS por padrão.
- **CSS nativo** com os tokens do Design System (`src/styles/`).
- **Content Collections** (Markdown) para acomodações e promoções editáveis.
- **astro:assets** — imagens otimizadas (WebP/AVIF, srcset, lazy).
- **@astrojs/sitemap** — sitemap automático.

## Comandos

```bash
npm install      # instala dependências
npm run dev      # servidor de desenvolvimento (http://localhost:4321)
npm run build    # build de produção em dist/
npm run preview  # pré-visualiza o build
```

## Deploy (Vercel / Netlify)

O site é estático. Basta apontar para o repositório e usar:
- Build command: `npm run build`
- Output directory: `dist`

## Estrutura

```
src/
├── styles/        tokens.css · global.css · components.css (do Design System)
├── data/          site.ts (config central + TODOs) · gallery.ts
├── lib/           hsystem.ts · whatsapp.ts · seo.ts
├── content/       rooms/*.md · promocoes/*.md   ← conteúdo editável
├── components/    ui · layout · sections · cards · booking · gallery · promo
├── layouts/       BaseLayout.astro · PageLayout.astro
└── pages/         10 páginas (Home + internas)
```

## Como o hotel edita conteúdo

- **Promoções:** crie/edite arquivos em `src/content/promocoes/*.md`. Cada arquivo é
  uma promoção, com `titulo`, `descricao`, `condicoes`, `faixas` (desconto por número
  de diárias) e `ativo`. O botão de WhatsApp é montado automaticamente com a promoção
  e a faixa de diárias escolhida pelo visitante.
- **Acomodações:** edite `src/content/rooms/*.md` (nome, camas, capacidade, amenidades,
  preço, foto).
- **Galeria:** edite `src/data/gallery.ts`.

> Observação: a edição é por arquivos versionados. É possível plugar um CMS visual
> (ex.: Decap CMS) sobre esta base no futuro, sem refazer o site.

## Pendências do cliente (procure por `TODO` no código)

Centralizadas em `src/data/site.ts`:

- **HSystem:** URL base e nomes dos parâmetros do motor de reservas.
- **WhatsApp:** confirmar número da recepção.
- **Endereço:** CEP e coordenadas exatas (mapa).
- **Acomodações:** nomenclatura final e preços.
- **GA4:** ID de medição (analytics).
- **Redes sociais:** URLs para o rodapé.
- **Domínio:** atualizar em `astro.config.mjs`, `public/robots.txt` e `src/data/site.ts`.

Outras pendências marcadas no código:
- **Fotos profissionais:** hoje usamos as fotos provisórias de `Fotos Quartos/` e
  `Foto Fachada/`. Substituir em `src/assets/images/` (e re-categorizar a galeria).
- **Política de Privacidade:** texto jurídico oficial em
  `src/pages/politica-de-privacidade.astro`.
- **Imagem Open Graph:** `public/og/areiao-og.jpg` (hoje a fachada provisória).

## Integrações

- **Reservas (HSystem):** sem motor integrado. Todo "Reservar" abre o HSystem em nova
  aba. A barra de reservas (Home) monta a URL com datas/hóspedes/cupom (`src/lib/hsystem.ts`).
- **WhatsApp:** botão flutuante em todas as páginas + links por seção/promoção com
  mensagem de origem (`src/lib/whatsapp.ts`).
- **Google Maps:** embed na página de Localização + botão "Como chegar".
- **Analytics:** eventos de clique (`data-track`) já instrumentados; ativam ao definir
  o ID do GA4 em `site.ts`.

## Acessibilidade & Performance

- WCAG 2.1 AA: contraste do DS, foco visível, navegação por teclado, `alt` em imagens,
  HTML semântico, skip-link, `prefers-reduced-motion`.
- Core Web Vitals: imagens otimizadas, fontes com `display=swap` + preconnect, CSS
  inline automático, zero JS desnecessário.
