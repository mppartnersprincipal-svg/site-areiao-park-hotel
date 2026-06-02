// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// TODO (cliente): trocar pelo domínio final (ex.: https://www.areiaoparkhotel.com.br)
const SITE_URL = "https://www.areiaoparkhotel.com.br";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: "static",
  integrations: [
    sitemap({
      i18n: undefined,
      changefreq: "monthly",
      priority: 0.7,
    }),
  ],
  image: {
    // Otimização nativa: WebP/AVIF, srcset, lazy — Core Web Vitals (PRD §9)
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: "auto",
  },
});
