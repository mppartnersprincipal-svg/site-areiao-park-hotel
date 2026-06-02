# Prompt de início — Claude Code (VSCode)

Copie e cole o texto abaixo no Claude Code para iniciar o desenvolvimento.

---

Você vai desenvolver o site institucional do **Areião Park Hotel**. Antes de escrever qualquer código:

1. Leia **na íntegra**: `CLAUDE.md`, `docs/PRD-areiao-park-hotel.md` e `docs/design-system.html`. O design system é a fonte de verdade visual — o resultado precisa ficar **visualmente idêntico** a ele (cores, tipografia, componentes, espaçamentos e estados de hover).

2. Antes de codar, **me apresente um plano**: a stack que você recomenda e por quê, a estrutura de pastas, e a ordem de implementação. **Aguarde minha aprovação** antes de começar.

## Contexto e restrições

- Idioma do site: **PT-BR**. Hotel 4 estrelas em Goiânia (GO), raiz familiar, 35 UHs. Objetivos: aumentar reservas diretas e fortalecer a marca.
- **Fidelidade ao design system é obrigatória.** Reutilize os componentes definidos (botões, barra de reservas, cards de acomodação/pacote, galeria, header, rodapé). Não crie variações fora do padrão.
- Tokens: extraia cores, fontes (Cormorant Garamond + Jost), raios, sombras e breakpoints (900/860/760/560px) direto do `design-system.html` e centralize como variáveis/tema.
- Princípios inegociáveis: fotografia primeiro; duas superfícies (creme claro / verde escuro); dourado como acento raro (só CTA/ênfase/nav ativo); serifa nos títulos + Jost CAIXA ALTA espaçada em rótulos. **Não usar muitas cores.**
- **Reservas: sem motor integrado.** Todo CTA "Reservar" redireciona ao **HSystem via link** em nova aba (ver PRD §7.1 e §8.1). A barra de reservas monta a URL com os parâmetros (datas, hóspedes, cupom).
- **WhatsApp:** botão flutuante em todas as páginas + links `wa.me` com **mensagem de origem** (seção/promoção) embutida (PRD §6.7 e §7.2).
- **Promoções:** implemente o fluxo especial do PRD §6.7 (desconto por nº de diárias → botão WhatsApp dinâmico identificando a promoção para a recepção).
- Acessibilidade WCAG 2.1 AA, `prefers-reduced-motion`, `alt` em todas as imagens. SEO: URLs amigáveis (PRD §5), metadados, Schema.org `Hotel`, sitemap/robots. Performance: imagens otimizadas (WebP/AVIF, lazy-load), Core Web Vitals bons.

## Dependências bloqueadas (use placeholders e me marque com TODO)

URL/parâmetros do HSystem, número de WhatsApp, CEP/coordenadas, nomenclatura e preços dos quartos, texto jurídico de privacidade, fotos profissionais, domínio/hospedagem. Onde faltar dado, use placeholder claro e deixe `// TODO:` para eu preencher depois.

## Escopo v1 (10 páginas — detalhe no PRD §5 e §6)

Home · O Hotel · Acomodações · Gastronomia · Eventos · Galeria · Promoções · Localização · Contato · Política de Privacidade.

## Ordem sugerida de implementação

1. Setup do projeto + sistema de design (tokens, tipografia, componentes base).
2. Layout compartilhado: header e rodapé.
3. **Home** completa (hero, barra de reservas, split "O Hotel", tríade, cards de acomodação, mosaico de experiências, faixa de promoções).
4. Demais páginas internas.
5. Integrações (HSystem, WhatsApp, Google Maps, formulário de contato).
6. SEO, acessibilidade e performance.

Comece lendo os documentos e me devolvendo o plano com a stack recomendada.
