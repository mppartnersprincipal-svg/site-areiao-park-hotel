# PRD — Site Institucional Areião Park Hotel

**Documento de Requisitos de Produto (Product Requirements Document)**
Versão 1.0 · Junho de 2026 · Confidencial

| Campo | Valor |
|---|---|
| Produto | Site institucional do Areião Park Hotel |
| Versão do documento | v1.0 |
| Data | Junho de 2026 |
| Responsável pelo projeto (cliente) | Henrique — Administrador |
| Contato do cliente | financeiro.hotelareiao@gmail.com · (62) 9 9318-9702 |
| Design System de referência | Areião Park Hotel — Design System v1 (Cormorant Garamond · Jost · Verde/Dourado/Areia) |
| Público deste documento | Equipe de design e desenvolvimento (handoff técnico) |

---

## 1. Visão geral

### 1.1 Resumo

O Areião Park Hotel é um hotel 4 estrelas em Goiânia (GO), com mais de uma década de operação, raiz familiar e 35 unidades habitacionais (UHs). O hotel inicia uma nova fase com a abertura de uma segunda unidade e precisa de um site institucional próprio que reflita seu posicionamento — "hospitalidade familiar com padrão quatro estrelas" — e que converta visitantes em reservas diretas.

Hoje o hotel não possui site próprio; sua presença online se concentra em portais de terceiros (Booking). Este projeto entrega o primeiro site oficial da marca, construído sobre um design system já definido (verde floresta, dourado champagne e areia; tipografia Cormorant Garamond + Jost), priorizando fotografia, sobriedade de luxo e clareza de ação.

### 1.2 Problema

O hotel depende de canais de terceiros, que cobram comissão e diluem a marca. Não há um endereço digital próprio onde o hóspede possa conhecer a história, ver as acomodações, entender a estrutura e iniciar uma reserva direta ou um contato. A ausência de site também limita o ranqueamento orgânico (SEO local) e a capacidade de divulgar promoções gerenciadas pelo próprio hotel.

### 1.3 Objetivos do produto

Conforme o briefing, os dois objetivos primários são:

1. **Aumentar reservas diretas** — reduzir a dependência de OTAs (Booking) direcionando o hóspede ao motor de reservas próprio (HSystem) e ao contato direto (WhatsApp/telefone).
2. **Fortalecer a marca / imagem** — traduzir o posicionamento "familiar + 4 estrelas" em uma experiência digital sofisticada, acolhedora, moderna e clássica.

Objetivo secundário: **divulgar eventos e espaços para locação** (auditório, salas de reunião).

### 1.4 Métricas de sucesso (KPIs)

A definição de sucesso dada pelo cliente: "número de reservas e conexões do site para o atendimento presencial ou online direto com o hotel". Traduzido em métricas mensuráveis:

| KPI | Descrição | Como medir |
|---|---|---|
| Cliques no CTA de reserva (HSystem) | Volume de usuários que seguem para o motor de reservas | Evento de clique no GA4 / pixel |
| Conversas iniciadas no WhatsApp | Cliques no botão WhatsApp, com rastreio de origem | Evento de clique + parâmetro de origem na mensagem |
| Envios de formulário de contato | Solicitações de reserva/dúvida/orçamento | Submissão de formulário (evento GA4) |
| Cliques em "Como chegar" / telefone | Intenção de visita presencial | Eventos de clique em telefone e mapa |
| Sessões orgânicas e posição de busca | Tráfego vindo do Google para termos locais | GA4 + Google Search Console |
| Taxa de rejeição e tempo na página | Qualidade do engajamento | GA4 |

> Recomendação técnica: instalar **Google Analytics 4** e **Google Search Console** desde o lançamento, com eventos de conversão configurados para cada CTA (HSystem, WhatsApp, formulário, telefone, mapa).

---

## 2. Público-alvo e personas

O briefing marca **todos** os perfis como público. As personas abaixo orientam priorização de conteúdo e CTAs.

### 2.1 Persona 1 — Executivo / Negócios
Viaja a trabalho, decide rápido, valoriza Wi-Fi, escrivaninha, café da manhã, recepção 24h e localização. Acessa majoritariamente por celular. **Necessidade-chave:** reservar com poucos cliques e confirmar comodidades de trabalho.

### 2.2 Persona 2 — Organizador de eventos / convenções
Busca auditório e salas de reunião para eventos corporativos. **Necessidade-chave:** ver os espaços, capacidades e abrir um canal de orçamento (formulário/WhatsApp).

### 2.3 Persona 3 — Casal / Lazer / Turismo
Procura conforto, gastronomia e uma estadia agradável (a propriedade tem nota 9,2 para viagem a dois). **Necessidade-chave:** ver fotos, acomodações e pacotes promocionais.

### 2.4 Persona 4 — Família
Estadias curtas ou longas, valoriza espaço, café da manhã colonial, estacionamento e quartos para famílias. **Necessidade-chave:** entender capacidade dos quartos e descontos por mais diárias.

### 2.5 Diretrizes de tom
O site deve transmitir as quatro sensações pedidas: **sofisticado, acolhedor, moderno e clássico**. Restrição explícita do cliente: **"não usar muitas cores"** — respeitada nativamente pelo design system (duas superfícies + um único acento dourado).

---

## 3. Princípios de design (herdados do Design System)

O site deve seguir, sem exceção, o design system "Areião Park Hotel v1". Quatro princípios regem todas as telas:

1. **Fotografia primeiro.** A imagem do hotel é a protagonista. Texto e UI servem à foto, com respiro generoso (whitespace).
2. **Dois modos.** Superfície clara (creme/areia) para conteúdo; superfície escura (verde floresta) para momentos dramáticos (heros, rodapé, blocos de impacto).
3. **Dourado é raro.** Um único acento. Reservado para CTAs, ênfase, ícones e o item de navegação ativo. Nunca em blocos grandes.
4. **Serifa + tracking.** Serifa (Cormorant Garamond) traz emoção nos títulos; CAIXA ALTA espaçada (Jost) traz a cerimônia do logotipo em rótulos e botões.

---

## 4. Design System aplicado (tokens de implementação)

Os valores abaixo são normativos e devem ser implementados como variáveis CSS (custom properties) ou tokens equivalentes no framework escolhido.

### 4.1 Cores

```css
:root{
  /* Verdes — superfícies escuras & marca */
  --green-900:#14241B;  /* floresta profunda */
  --green-800:#1B3225;  /* superfície escura principal */
  --green-700:#244231;  /* card sobre escuro / hover */
  --green-600:#2F543F;
  --green-500:#3C6A50;  /* sálvia-floresta médio */
  --green-300:#88A491;  /* sálvia suave */

  /* Dourado — acento único */
  --gold-700:#876730;
  --gold-600:#A6833A;   /* hover */
  --gold-500:#BE9A4A;   /* dourado primário */
  --gold-400:#CFAF66;
  --gold-300:#E0C892;   /* champagne claro */

  /* Areia / Creme — superfícies claras */
  --cream:#F6F0E4;      /* página clara */
  --sand-100:#F1E9D9;
  --sand-200:#E9DEC9;
  --sand-300:#DBCAAD;   /* bordas sobre claro */

  /* Tinta / Neutros */
  --ink-900:#1E241F;    /* texto principal */
  --ink-700:#474C42;    /* texto secundário */
  --ink-500:#7B7E72;    /* texto terciário */
  --white:#FFFFFF;

  /* Semânticos */
  --bg-page:var(--cream);
  --bg-dark:var(--green-800);
  --accent:var(--gold-500);
  --accent-hover:var(--gold-600);
  --on-gold:#1E241F;
}
```

Uso obrigatório:
- **Superfície escura:** heros, rodapé e seções de impacto em `green-800`, texto creme, detalhes em dourado.
- **Superfície clara:** conteúdo padrão em `cream`; cards em branco com borda `sand-300`.
- **Acento:** dourado só em CTA, ênfase, ícones e item de nav ativo. Nunca em blocos grandes.

### 4.2 Tipografia

```css
--font-display:"Cormorant Garamond", Georgia, serif;   /* títulos */
--font-sans:"Jost", "Helvetica Neue", Arial, sans-serif; /* corpo e rótulos */
```

Importar via Google Fonts: Cormorant Garamond (400, 500, 600, 700 + itálicos 400/500) e Jost (300, 400, 500, 600).

Escala tipográfica:

| Token | Fonte / peso | Tamanho | Uso |
|---|---|---|---|
| Display XL | Cormorant 500 | clamp(56–104px), lh .98 | Wordmark/hero principal |
| Display LG | Cormorant 500 | clamp(40–64px) | Heros de página interna |
| H2 seção | Cormorant 600 | clamp(30–46px) | Títulos de seção |
| H3 subtítulo | Cormorant 600 | 26px | Nome de acomodação etc. |
| Eyebrow | Jost 500 · +0.28em · CAIXA ALTA | 12px | Rótulo acima de títulos, cor dourado |
| Corpo | Jost 400 · lh 1.7 | 17px | Texto geral |
| Rótulo / Botão | Jost 500 · +0.14em · CAIXA ALTA | 13px | Botões e labels |

Base do `body`: Jost 400, 17px, line-height 1.7, cor `--ink-900` sobre `--cream`.

### 4.3 Escala, raio e sombra

```css
--tr-wide:.14em;   --tr-xwide:.28em;       /* tracking */
--r-sm:4px;  --r-md:8px;  --r-lg:14px;     /* border-radius */
--shadow-1:0 14px 34px rgba(20,36,27,.10);
--shadow-2:0 24px 60px rgba(20,36,27,.16);
--maxw:1200px;                             /* largura máx. do conteúdo */
```

### 4.4 Componentes normativos

O design system define os componentes abaixo, que devem ser reutilizados em todo o site (não recriar variações fora do padrão):

- **Botões:** `btn-primary` (dourado, CTA principal), `btn-outline` (contorno tinta/creme conforme superfície), `btn-ghost-gold` (contorno dourado), `btn-link` (link com seta/linha animada no hover). Texto sempre CAIXA ALTA, Jost 500, tracking .14em, radius 4px.
- **Inputs:** estilo **sublinhado** (`underline`) para formulários leves sobre foto/hero; estilo **contornado** (`boxed`, radius 8px) para formulários densos. Foco em dourado.
- **Barra de reservas:** card branco, sombra, grid de campos (chegada, saída, adultos, crianças, código promo) + botão dourado. Ancorada sobreposta ao hero (margin-top negativa).
- **Card de acomodação (`room`):** foto (210px) + eyebrow + título serifa + metragem + descrição + lista de amenidades em travessão + rodapé com preço e link de reserva. Hover: eleva e borda dourada.
- **Tile de experiência (`exp`):** foto full com overlay verde-quente em gradiente e legenda sobre a imagem.
- **Card de pacote/promoção:** variação do card com fundo verde (`ph-photo green`).
- **Header:** barra utilitária verde (idioma + atalhos) + faixa creme com logo centralizado + nav com sublinhado dourado no item ativo. Fixo, com blur ao rolar.
- **Rodapé:** superfície verde escura, wordmark, endereço/contatos, redes sociais, 4 colunas de links e newsletter.
- **Galeria:** mosaico assimétrico (peças `wide`/`tall`), filtros em pílula (chips), overlay e "+" no hover.
- **Seções de página:** hero fotográfico com overlay verde, bloco split claro/escuro, tríade de colunas.

### 4.5 Acessibilidade
- Contraste mínimo AA. As combinações do design system (creme sobre verde-800; ink-900 sobre creme; on-gold sobre dourado) atendem AA para texto.
- Foco visível em todos os elementos interativos (anel dourado já previsto nos inputs).
- Navegação por teclado completa; `alt` descritivo em todas as fotos; HTML semântico (`header`, `nav`, `main`, `section`, `footer`).
- Respeitar `prefers-reduced-motion` desativando as animações de hover/parallax.

---

## 5. Arquitetura de informação e mapa do site

Páginas confirmadas no briefing (todas marcadas):

```
/                         Home (página inicial)
/o-hotel                  Sobre o hotel (história + conceito)
/acomodacoes              Acomodações / tipos de quarto
  /acomodacoes/[slug]     Detalhe de cada tipo (opcional v1.1)
/gastronomia              Restaurante / café da manhã colonial
/eventos                  Eventos e espaços para locação
/galeria                  Galeria de fotos
/promocoes                Promoções / pacotes (com fluxo WhatsApp especial)
/localizacao              Localização e como chegar (mapa)
/contato                  Contato (formulário + dados)
/politica-de-privacidade  Política de privacidade e termos
```

Navegação principal (header), seguindo o exemplo do design system: **Hospedagem · Gastronomia · Lazer · Eventos · Pacotes · Experiências · Galeria · Contato.**

> Nota de mapeamento: o design system usa rótulos editoriais ("Hospedagem", "Lazer", "Experiências") que podem agrupar páginas. Recomenda-se alinhar a nav final às páginas reais — sugestão: **O Hotel · Acomodações · Gastronomia · Eventos · Promoções · Galeria · Localização · Contato** — mantendo o item ativo com sublinhado dourado.

CTA persistente de **Reservar** em destaque no header (barra utilitária e/ou botão dourado) em todas as páginas, levando ao HSystem.

---

## 6. Especificação página a página

Cada página abaixo lista seções, componentes do design system a usar, conteúdo e CTAs.

### 6.1 Home (`/`)

**Objetivo:** causar impacto, comunicar posicionamento e direcionar para reserva.

Seções, na ordem:

1. **Header** (componente de navegação do DS).
2. **Hero fotográfico** — componente `hero`: foto full-bleed (fachada ou área nobre) com overlay verde. Eyebrow "Goiânia · 4 estrelas"; título Display "Sua casa fora de casa, com a excelência que você merece."; subtítulo curto; botões `btn-primary` "Reservar agora" (→ HSystem) e `btn-outline` "Conheça o hotel".
3. **Barra de reservas ancorada** — componente `booking`, sobreposta ao hero. Campos: chegada, saída, adultos, crianças, código promo. O botão "Reservar" envia os parâmetros ao HSystem via URL (ver §8.1).
4. **Bloco split "O Hotel"** — `split` claro/escuro: lado escuro com a história resumida ("Tradição que cresce, hospitalidade que evolui") e `btn-link` "Saiba mais" (→ /o-hotel); lado foto.
5. **Tríade de chamadas** — `triad`: Hospedagem, Gastronomia, Contato (ou Eventos), cada uma com link.
6. **Acomodações em destaque** — `cards-3` com 3 tipos de quarto (ver §6.3) e link "Ver todas as acomodações".
7. **Experiências (mosaico)** — `exp-grid`: Café Colonial, Lazer/Área Verde, Auditório/Eventos.
8. **Faixa de prova social** — selos/notas de avaliação (Booking 9,2 para casais; "diversas premiações"). Layout sóbrio, sem poluição visual.
9. **Faixa de promoções** — chamada para /promocoes com `btn-ghost-gold` "Ver pacotes".
10. **Rodapé** (componente do DS).

### 6.2 O Hotel (`/o-hotel`)

**Objetivo:** transmitir a alma da marca (fortalecer imagem).

- Hero de página interna (Display LG) com eyebrow "O Hotel".
- **História** — texto do briefing: "Tradição que cresce. Hospitalidade que evolui." (mais de 10 anos, sonho de família, segunda unidade). Bloco split com foto.
- **Conceito e pilares** — os 4 pilares do briefing, apresentados como tríade/grid com numeração dourada (estilo "principles" do DS):
  1. Gastronomia que marca (café da manhã colonial + restaurante).
  2. Estrutura completa para trabalho e lazer (auditório, elevadores, apartamentos planejados).
  3. Conforto para curta e longa estadia.
  4. Essência familiar, padrão 4 estrelas.
- **Números/credenciais** — 4 estrelas · 35 UHs · +10 anos · 2 unidades · nota 9,2 (casais).
- CTA final: "Reservar agora" / "Fale conosco".

### 6.3 Acomodações (`/acomodacoes`)

**Objetivo:** apresentar os tipos de quarto e levar à reserva.

- Hero/título de seção + intro.
- Grid de `room` cards. Tipos conforme briefing (§6 do briefing) e dados de quartos:

| Tipo (briefing) | Camas | Capacidade | Observação |
|---|---|---|---|
| Suíte Luxo (Casal) | 1 cama de casal | 2 hóspedes | Equivale ao "Quarto Duplo" — 18 m², vista cidade |
| Suíte Luxo (Twin) | 2 camas de solteiro | 2 hóspedes | "Estúdio Duplo Deluxe" |
| Suíte Luxo (Triplo) | 3 camas de solteiro | 3 hóspedes | "Quarto Triplo Luxo" |

> Observação de conteúdo: o briefing nomeia as três categorias como "Suíte Luxo". Os dados de Booking trazem nomes alternativos (Quarto Duplo, Estúdio Duplo Deluxe, Quarto Triplo Luxo) e a categoria "Suíte". Recomenda-se **confirmar com o cliente a nomenclatura final e os preços** antes do conteúdo definitivo. Até lá, usar placeholders de preço ("A partir de R$ —").

- Cada card: foto, eyebrow, nome, metragem, descrição, amenidades em travessão e `btn-link` "Reservar" (→ HSystem com tipo de quarto pré-selecionado quando possível).
- **Amenidades comuns** a destacar (das infos dos quartos): ar-condicionado, Wi-Fi grátis, TV tela plana com canais via satélite e streaming, frigobar, escrivaninha, banheiro privativo com amenities, secador, insonorização, berço sob solicitação.

### 6.4 Gastronomia (`/gastronomia`)

- Hero com foto do café/restaurante.
- Texto sobre o **café da manhã colonial** (variedade reconhecida: pães artesanais, bolos caseiros, tapioca na hora, sucos naturais) e o **restaurante** (cardápio vasto, do almoço de negócios ao jantar em família).
- Mosaico de fotos (tiles `exp`).
- CTA: "Reservar sua estadia".

### 6.5 Eventos e espaços (`/eventos`)

**Objetivo:** divulgar auditório e salas de reunião para locação (objetivo secundário).

- Hero.
- Descrição do **auditório moderno** e **salas de reunião**; usos (eventos, congressos, reuniões corporativas).
- Cards/tiles dos espaços com capacidade (a confirmar com cliente).
- **CTA de orçamento** → formulário de contato (assunto "Eventos") e/ou WhatsApp com origem "Eventos".

### 6.6 Galeria (`/galeria`)

- Componente `gallery` (mosaico assimétrico) + filtros em pílula: Tudo, Hospedagem, Gastronomia, Lazer, Eventos.
- Lightbox ao clicar (abrir imagem ampliada).
- Imagens reais do hotel (ver §11 — fotos profissionais a produzir). Usar os assets já existentes (Fotos Quartos, Foto Fachada) como ponto de partida.
- Lazy-loading e formatos otimizados (WebP/AVIF) obrigatórios.

### 6.7 Promoções / Pacotes (`/promocoes`) — funcionalidade especial

**Objetivo (pedido explícito do cliente):** aba dedicada a promoções, com protocolo de desconto por número de diárias e botão que conecta direto ao WhatsApp, **informando ao recepcionista por qual promoção o cliente veio**, para dar sequência à venda.

Especificação funcional:

- Listagem de pacotes/promoções (gerenciável pelo hotel — ver §7.4), cada um com card de pacote (variação verde do DS): título, condições, faixa de desconto e CTA.
- Cada promoção tem um **botão WhatsApp com mensagem pré-preenchida** identificando a origem. Exemplo de link:

  ```
  https://wa.me/5562993189702?text=Ol%C3%A1!%20Tenho%20interesse%20na%20promo%C3%A7%C3%A3o%20%5BNOME_DA_PROMO%C3%87%C3%83O%5D%20(desconto%20para%20X%20di%C3%A1rias).
  ```

  O texto deve conter o **nome/código da promoção** para que o recepcionista identifique de onde o cliente veio.
- **Protocolo de desconto por diárias:** UI onde o cliente seleciona a quantidade de diárias; ao optar por uma faixa que dá desconto, o botão de WhatsApp é montado dinamicamente com a faixa escolhida embutida na mensagem.
- Disparar evento de analytics no clique (origem = nome da promoção) para medir conversão por campanha.
- Acessível também a partir da home (faixa de promoções) e do header (Promoções/Pacotes).

### 6.8 Localização (`/localizacao`)

- Endereço: Rua S4, nº 68, Setor Bela Vista, Goiânia — GO (confirmar CEP).
- **Google Maps interativo** incorporado (mapa + pin).
- Pontos de referência (das infos): Terminal Rodoviário 7,9 km; Aeroporto Santa Genoveva 12 km; Jardim Botânico 2,6 km; Palácio das Esmeraldas 4,2 km.
- Botão "Como chegar" (abre rota no Google Maps) e telefone clicável.

### 6.9 Contato (`/contato`)

- Formulário (componente de inputs do DS): nome, e-mail, telefone, assunto (Reservas/Eventos/Dúvidas), mensagem, consentimento LGPD (checkbox).
- Envio: e-mail para financeiro.hotelareiao@gmail.com (ou destino a definir) + confirmação ao usuário. Anti-spam (honeypot/reCAPTCHA).
- Dados diretos: telefone/WhatsApp, e-mail, endereço, horário da recepção (24h).
- Botão WhatsApp com origem "Contato".

### 6.10 Política de privacidade e termos (`/politica-de-privacidade`)

- Texto de política de privacidade (LGPD), uso de cookies e termos de uso. Conteúdo jurídico a ser fornecido/aprovado pelo cliente.
- Banner de consentimento de cookies no primeiro acesso.

---

## 7. Requisitos funcionais

### 7.1 Sistema de reservas (HSystem via link)
- **Decisão (cliente):** o site **não** terá motor de reservas integrado na v1. Toda ação de "Reservar" **redireciona para o HSystem via link** (portal externo), abrindo em nova aba.
- A barra de reservas (home) coleta chegada, saída, adultos, crianças e código promo e **monta a URL do HSystem** com esses parâmetros como query string, quando o HSystem suportar (ver §8.1). Caso não suporte parâmetros, o link leva à página inicial do motor.
- Todos os CTAs "Reservar agora" do site apontam para o mesmo destino HSystem.

### 7.2 Integração com WhatsApp
- Botão flutuante de WhatsApp persistente (canto inferior direito) em todas as páginas.
- Links `wa.me` com **mensagem pré-preenchida e origem identificada** (Home, Acomodações, Promoção X, Eventos, Contato), conforme §6.7.
- Número: (62) 9 9318-9702 (confirmar se é o número de atendimento/recepção).

### 7.3 Mapa interativo (Google Maps)
- Embed do Google Maps na página de Localização e no rodapé/contato, com pin na Rua S4, 68, Setor Bela Vista.

### 7.4 Área de pacotes/promoções gerenciável pelo hotel
- O hotel deve conseguir **criar, editar e remover promoções** sem depender de desenvolvedor. Implementar via CMS leve (ver §9) com campos: título, descrição, condições, faixa de desconto por diárias, imagem, status (ativo/inativo) e mensagem-base de WhatsApp.

### 7.5 Formulário de contato
- Validação client-side e server-side; consentimento LGPD obrigatório; proteção anti-spam; notificação por e-mail e/ou integração futura com CRM.

### 7.6 Multi-idioma (opcional v1.1)
- O header do DS prevê alternância PT/EN. Para a v1, **PT-BR é obrigatório**; EN é desejável mas pode ficar para a v1.1. Estruturar o conteúdo para permitir tradução futura.

### 7.7 SEO e descoberta
- URLs amigáveis (já definidas em §5), meta titles/descriptions por página, dados estruturados Schema.org `Hotel` (nome, endereço, geo, estrelas, telefone, faixa de preço, amenidades), Open Graph para compartilhamento, sitemap.xml e robots.txt.
- Palavras-chave alvo (a refinar com cliente): "hotel 4 estrelas Goiânia", "hotel Setor Bela Vista Goiânia", "hotel próximo ao Jardim Botânico Goiânia", "hotel para eventos Goiânia". (O briefing deixou o campo de palavras-chave em branco — confirmar.)

### 7.8 Analytics
- GA4 + Search Console; eventos de conversão por CTA (HSystem, WhatsApp por origem, formulário, telefone, mapa).

---

## 8. Especificações de integração

### 8.1 HSystem — parâmetros de reserva
- Confirmar com o fornecedor HSystem o **formato da URL de busca** (domínio do motor, nomes dos parâmetros de check-in, check-out, adultos, crianças, cupom).
- Modelo esperado (a validar):

  ```
  https://{motor-hsystem-do-hotel}/?checkin=YYYY-MM-DD&checkout=YYYY-MM-DD&adults=2&children=0&promo=AREIAO10
  ```

- O front-end normaliza datas (de dd/mm/aaaa para o formato exigido) e codifica os parâmetros. Abrir em nova aba (`target="_blank" rel="noopener"`).
- **Dependência de projeto:** obter do cliente a URL/credenciais do HSystem antes da implementação da barra de reservas.

### 8.2 WhatsApp
- Padrão `https://wa.me/55DDDNUMERO?text=<mensagem_url_encoded>`. A mensagem sempre carrega a origem (nome da promoção/seção) para rastreio na recepção.

### 8.3 Google Maps
- Embed via iframe oficial ou Maps JavaScript API (preferir embed estático para performance). Necessita do endereço/coordenadas confirmados.

### 8.4 E-mail transacional (formulário)
- Serviço de envio (ex.: SMTP do provedor de hospedagem, ou serviço transacional). Destinatário a confirmar.

---

## 9. Requisitos técnicos e não-funcionais

| Categoria | Requisito |
|---|---|
| Stack | A definir pelo time de desenvolvimento. O design system é HTML/CSS/JS (protótipo); recriar fielmente em tecnologia adequada (ex.: Next.js/Astro/React ou WordPress headless). O importante é o output visual idêntico ao DS. |
| CMS | CMS leve para promoções, acomodações e galeria gerenciáveis pelo hotel (ex.: WordPress, Strapi, ou similar). Mínimo: módulo de promoções (§7.4). |
| Responsividade | Mobile-first. Breakpoints do DS: 900px, 860px, 760px, 560px. Layouts colapsam para 1 coluna conforme as media queries definidas no DS. |
| Performance | Core Web Vitals "bons": LCP < 2,5s, CLS < 0,1, INP < 200ms. Imagens otimizadas (WebP/AVIF, lazy-load, srcset), fontes com `display=swap` e preconnect (já no DS). |
| SEO técnico | SSR/SSG para indexação; metadados, Schema.org, sitemap, robots, canonical. |
| Acessibilidade | WCAG 2.1 AA (ver §4.5). |
| Segurança | HTTPS obrigatório; headers de segurança; proteção anti-spam no formulário; LGPD (consentimento de cookies + política). |
| Navegadores | 2 últimas versões de Chrome, Safari, Firefox, Edge; iOS Safari e Android Chrome. |
| Hospedagem/domínio | Domínio a registrar (sugestão: areiaoparkhotel.com.br — confirmar disponibilidade). Hospedagem a definir. Briefing não informou domínio/hospedagem existentes. |
| Analytics/Tag | GA4 + Search Console; gerenciador de tags opcional. |

---

## 10. Critérios de aceite

A entrega da v1 é considerada concluída quando:

1. Todas as 10 páginas de §5 estão implementadas, responsivas e fiéis ao design system (cores, tipografia, componentes, espaçamentos e estados de hover).
2. Todos os CTAs "Reservar" redirecionam corretamente ao HSystem (nova aba), e a barra de reservas monta a URL com os parâmetros informados.
3. O botão flutuante de WhatsApp e os links por promoção/seção abrem o WhatsApp com a **mensagem de origem correta**.
4. A página de Promoções permite que o hotel crie/edite promoções sem código, e o protocolo de desconto por diárias gera o link de WhatsApp dinâmico.
5. O mapa interativo aparece em Localização com o pin correto.
6. O formulário de contato valida, envia, confirma e está protegido contra spam, com consentimento LGPD.
7. GA4 registra os eventos de conversão de cada CTA.
8. Core Web Vitals dentro das metas; auditoria Lighthouse ≥ 90 em Performance, Acessibilidade, Boas Práticas e SEO (desktop e mobile).
9. Acessibilidade AA verificada (contraste, teclado, leitores de tela, `alt` em imagens).
10. Conteúdo real (textos e fotos aprovados) publicado; nenhum placeholder em produção.

---

## 11. Conteúdo e materiais

| Item | Status (briefing) | Ação |
|---|---|---|
| Textos | Precisam ser criados | Redação a partir do briefing (história, conceito, pilares já fornecidos). Aprovar com o cliente. |
| Fotos profissionais | Precisam de novas fotos | Sessão fotográfica profissional recomendada (fachada, lobby, quartos, café/restaurante, auditório, áreas de lazer). Usar os assets atuais (Fotos Quartos, Foto Fachada) como provisórios. |
| Vídeo institucional / tour | Não informado | Opcional v1.1. |
| Logo em alta resolução | Possui logo | Solicitar arquivo vetorial/alta resolução (o handoff inclui `logo-areiao.jpeg`; pedir versão melhor). |
| Manual de marca | "Segue no link da Booking" | O design system v1 já consolida a identidade; confirmar se há manual adicional. |

---

## 12. Premissas, dependências e questões em aberto

**Premissas:**
- O design system v1 é a fonte de verdade visual e está aprovado.
- PT-BR é o idioma de lançamento.

**Dependências do cliente (bloqueiam partes do desenvolvimento):**
- URL/credenciais e formato de parâmetros do **HSystem** (§8.1).
- Número de WhatsApp de atendimento confirmado.
- Endereço completo com **CEP** e coordenadas para o mapa.
- **Nomenclatura final e preços** das acomodações (§6.3).
- Conteúdo jurídico para política de privacidade/termos.
- Logo em alta resolução e fotos profissionais.
- Registro de domínio e definição de hospedagem.

**Questões em aberto (a confirmar com o cliente):**
1. Confirmar nomes das categorias de quarto (briefing diz "Suíte Luxo"; Booking traz outros nomes).
2. Tabela de preços / "a partir de" por acomodação.
3. Capacidades e tipos de evento do auditório/salas de reunião.
4. Quais selos/avaliações exibir (Booking, Google, TripAdvisor) e se há premiações específicas.
5. Palavras-chave de SEO prioritárias (campo em branco no briefing).
6. Redes sociais (Instagram/Facebook) para o rodapé.
7. Idioma EN na v1 ou v1.1.

---

## 13. Escopo futuro (fora da v1)

- Motor de reservas integrado no próprio site (hoje só redireciona ao HSystem).
- Versão em inglês.
- Vídeo institucional / tour 360°.
- Blog / conteúdo para SEO.
- Programa de fidelidade / área do hóspede.
- Integração do formulário a um CRM.

---

*Fim do documento — PRD v1.0 · Site Areião Park Hotel.*
