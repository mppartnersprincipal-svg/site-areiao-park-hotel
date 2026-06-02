# Areião Park Hotel — Site Institucional

Contexto do projeto para o Claude Code. **Leia os arquivos referenciados abaixo antes de começar qualquer tarefa.**

## Documentos essenciais (ler primeiro)

- `docs/PRD-areiao-park-hotel.md` — Product Requirements Document completo. Fonte de verdade para escopo, páginas, requisitos funcionais e critérios de aceite.
- `docs/design-system.html` — Design System v1 (protótipo HTML/CSS/JS). Fonte de verdade visual: cores, tipografia, componentes, espaçamentos e estados de hover.
- `docs/assets/logo-areiao.jpeg` — Logo (referenciada pelo design system).

## O que é o projeto

Primeiro site oficial do Areião Park Hotel — hotel 4 estrelas em Goiânia (GO), de raiz familiar, 35 UHs. Objetivos: aumentar reservas diretas e fortalecer a marca. Idioma de lançamento: PT-BR.

## Princípios de design (não violar)

1. **Fotografia primeiro** — imagem é protagonista; UI serve à foto, com respiro generoso.
2. **Dois modos** — superfície clara (creme/areia) para conteúdo; verde floresta escuro para heros, rodapé e impacto.
3. **Dourado é raro** — acento único, só em CTA, ênfase, ícones e item de nav ativo. Nunca em blocos grandes.
4. **Serifa + tracking** — títulos em Cormorant Garamond; rótulos/botões em Jost CAIXA ALTA espaçada.
5. Restrição do cliente: **não usar muitas cores**. Manter a paleta de duas superfícies + um acento.

## Tokens principais (detalhe completo no design-system.html / PRD §4)

- Fontes: `Cormorant Garamond` (títulos) · `Jost` (corpo e rótulos).
- Acento: dourado `#BE9A4A` (hover `#A6833A`).
- Superfície escura: verde `#1B3225`. Superfície clara: creme `#F6F0E4`.
- Texto: `#1E241F` (principal), `#474C42` (secundário).
- Largura máx. do conteúdo: 1200px. Breakpoints: 900 / 860 / 760 / 560px.

## Regras de implementação

- Recriar o design system **fielmente** (output visual idêntico). A stack é livre — escolha o que melhor servir, mas o resultado visual deve bater com `docs/design-system.html`.
- Reutilizar os componentes do DS (botões, barra de reservas, cards de acomodação/pacote, galeria, header, rodapé). Não criar variações fora do padrão.
- Reservas: **sem motor integrado**. Todo CTA "Reservar" redireciona ao **HSystem via link** (nova aba). Ver PRD §7.1 e §8.1.
- WhatsApp: links `wa.me` com **mensagem de origem** (seção/promoção) embutida. Ver PRD §6.7 e §7.2.
- Acessibilidade WCAG 2.1 AA; respeitar `prefers-reduced-motion`; `alt` em todas as fotos.
- SEO: URLs amigáveis (PRD §5), metadados, Schema.org `Hotel`, sitemap/robots.

## Dependências do cliente (bloqueiam partes do dev — ver PRD §12)

URL/parâmetros do HSystem · número de WhatsApp · CEP e coordenadas · nomenclatura e preços dos quartos · texto jurídico (privacidade) · logo em alta resolução · fotos profissionais · domínio/hospedagem.

## Páginas (escopo v1 — detalhe no PRD §5 e §6)

Home · O Hotel · Acomodações · Gastronomia · Eventos · Galeria · Promoções · Localização · Contato · Política de Privacidade.
