/* =====================================================================
   Areião Park Hotel — Configuração central do site
   Toda dependência bloqueada pelo cliente está aqui, marcada com TODO.
   Trocar os valores quando o cliente fornecer os dados definitivos.
   ===================================================================== */

export const site = {
  name: "Areião Park Hotel",
  shortName: "Areião",
  tagline: "Park Hotel",
  description:
    "Hotel 4 estrelas em Goiânia (GO). Hospitalidade familiar com padrão quatro estrelas: acomodações confortáveis, café da manhã, eventos e estrutura completa.",
  // TODO (cliente): domínio final. Manter em sincronia com `site` em astro.config.mjs.
  url: "https://www.areiaoparkhotel.com.br",
  locale: "pt-BR",
  stars: 4,

  contact: {
    // Número de atendimento/recepção. PRD §7.2 cita (62) 9 9318-9702 — TODO confirmar.
    phoneDisplay: "(62) 9 9318-9702",
    phoneE164: "+5562993189702",
    // wa.me usa o número apenas com dígitos e DDI 55.
    whatsapp: "5562993189702", // TODO (cliente): confirmar número de WhatsApp da recepção
    // TODO (cliente): confirmar e-mail de destino. PRD §1 usa este.
    email: "financeiro.hotelareiao@gmail.com",
    reception: "Recepção 24 horas",
  },

  address: {
    street: "Rua S4, nº 68",
    district: "Setor Bela Vista",
    city: "Goiânia",
    region: "GO",
    regionName: "Goiás",
    country: "BR",
    // TODO (cliente): confirmar CEP.
    postalCode: "74000-000",
    // TODO (cliente): confirmar coordenadas exatas para o pin do mapa.
    geo: { lat: -16.700, lng: -49.265 },
  },

  // Pontos de referência (Informações do hotel / PRD §6.8)
  landmarks: [
    { name: "Jardim Botânico de Goiânia", distance: "2,6 km" },
    { name: "Palácio das Esmeraldas", distance: "4,2 km" },
    { name: "Terminal Rodoviário", distance: "7,9 km" },
    { name: "Aeroporto Santa Genoveva", distance: "12 km" },
  ],

  // Credenciais / números da marca (PRD §6.2)
  facts: [
    { value: "4★", label: "Estrelas" },
    { value: "35", label: "Acomodações" },
    { value: "+10", label: "Anos de história" },
    { value: "2", label: "Unidades" },
    { value: "9,2", label: "Nota para casais (Booking)" },
  ],

  social: {
    // TODO (cliente): URLs reais das redes sociais para o rodapé.
    instagram: "", // ex.: https://instagram.com/areiaoparkhotel
    facebook: "",
    youtube: "",
  },

  // Motor de reservas externo HSystem (PRD §7.1 / §8.1). NENHUM motor integrado.
  hsystem: {
    // URL base do motor HSystem do hotel (fornecida pelo cliente).
    // companyId já vai na própria URL; demais parâmetros são anexados como query.
    baseUrl:
      "https://hbook.hsystem.com.br/Booking?companyId=69f21259280bd7b90b597482",
    // TODO (cliente): confirmar nomes dos parâmetros aceitos pelo HSystem.
    params: {
      checkin: "checkin",
      checkout: "checkout",
      adults: "adults",
      children: "children",
      promo: "promo",
      roomType: "roomType",
    },
  },

  // Google Maps (PRD §7.3 / §8.3)
  maps: {
    // TODO (cliente): conferir endereço/coordenadas. Usado para embed e rota.
    query: "Rua S4, 68, Setor Bela Vista, Goiânia - GO",
  },

  // Analytics (PRD §7.8). Sem ID, os eventos só vão para dataLayer (no-op).
  analytics: {
    // TODO (cliente): ID de medição do GA4 (ex.: G-XXXXXXXXXX).
    ga4Id: "",
  },
} as const;

export type Site = typeof site;
