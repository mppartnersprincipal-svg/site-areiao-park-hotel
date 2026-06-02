import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* ---------------------------------------------------------------------
   Acomodações (PRD §6.3). Editáveis como arquivos markdown. Nomes e
   preços finais dependem do cliente (placeholders "A partir de R$ —").
   --------------------------------------------------------------------- */
const rooms = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rooms" }),
  schema: ({ image }) =>
    z.object({
      nome: z.string(),
      eyebrow: z.string().default("Acomodação"),
      camas: z.string(),
      capacidade: z.string(),
      metragem: z.string().optional(),
      vista: z.string().optional(),
      descricao: z.string(),
      amenidades: z.array(z.string()).default([]),
      foto: image(),
      alt: z.string(),
      precoLabel: z.string().default("A partir de"),
      preco: z.string().default("R$ —"),
      // identificador de tipo p/ pré-seleção no HSystem (quando suportado)
      roomType: z.string().optional(),
      ordem: z.number().default(0),
      destaque: z.boolean().default(false),
    }),
});

/* ---------------------------------------------------------------------
   Promoções / Pacotes (PRD §6.7 / §7.4). Gerenciáveis pelo hotel.
   `faixas` define o protocolo de desconto por número de diárias.
   --------------------------------------------------------------------- */
const promocoes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/promocoes" }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      codigo: z.string().optional(),
      descricao: z.string(),
      condicoes: z.array(z.string()).default([]),
      // Faixas de desconto por diárias: o cliente escolhe a quantidade e o
      // botão de WhatsApp é montado dinamicamente com a faixa correspondente.
      faixas: z
        .array(
          z.object({
            diariasMin: z.number(),
            desconto: z.string(), // ex.: "10% OFF"
            label: z.string().optional(),
          }),
        )
        .default([]),
      imagem: image().optional(),
      alt: z.string().optional(),
      ativo: z.boolean().default(true),
      ordem: z.number().default(0),
    }),
});

export const collections = { rooms, promocoes };
