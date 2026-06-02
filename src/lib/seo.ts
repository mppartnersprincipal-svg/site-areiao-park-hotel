/* =====================================================================
   SEO — helpers de metadados e JSON-LD Schema.org Hotel (PRD §7.7)
   ===================================================================== */
import { site } from "@/data/site";

export interface PageSeo {
  title: string;
  description?: string;
  /** caminho relativo, ex.: "/acomodacoes" */
  path?: string;
  /** imagem OG absoluta ou relativa a /og */
  ogImage?: string;
  noindex?: boolean;
}

/** Título com sufixo da marca. */
export function pageTitle(title: string): string {
  return title === site.name ? title : `${title} · ${site.name}`;
}

/** URL canônica absoluta a partir de um caminho. */
export function canonicalUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

/**
 * JSON-LD Schema.org Hotel. Inclui endereço, geo, estrelas, telefone e
 * amenidades de propriedade.
 */
export function hotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phoneE164,
    email: site.contact.email,
    starRating: {
      "@type": "Rating",
      ratingValue: site.stars,
      bestRating: 5,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.district}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    // TODO (cliente): faixa de preço real.
    priceRange: "$$",
    amenityFeature: [
      "Wi-Fi gratuito",
      "Ar-condicionado",
      "Estacionamento",
      "Recepção 24h",
      "Café da manhã",
      "Restaurante",
      "Elevador",
      "Auditório e salas de reunião",
    ].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
  };
}
