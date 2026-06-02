/* =====================================================================
   Galeria (PRD §6.6) — mosaico assimétrico.
   Categorias: hosp | gastro | lazer | eventos (filtros em pílula).
   TODO (cliente): substituir pelos conjuntos de fotos profissionais
   categorizados (hoje usamos as fotos provisórias de quartos/fachada).
   ===================================================================== */
import type { ImageMetadata } from "astro";

import fachada from "@/assets/images/fachada.jpg";
import q1 from "@/assets/images/quartos/839583703.jpg";
import q2 from "@/assets/images/quartos/863764365.jpg";
import q3 from "@/assets/images/quartos/839211270.jpg";
import q4 from "@/assets/images/quartos/864097411.jpg";
import q5 from "@/assets/images/quartos/839581844.jpg";
import q6 from "@/assets/images/quartos/863764903.jpg";
import q7 from "@/assets/images/quartos/839211274.jpg";
import q8 from "@/assets/images/quartos/864097680.jpg";
import q9 from "@/assets/images/quartos/839211276.jpg";
import q10 from "@/assets/images/quartos/864099748.jpg";
import q11 from "@/assets/images/quartos/863765404.jpg";

export type GalleryCategory = "hosp" | "gastro" | "lazer" | "eventos";

export interface GalleryItem {
  src: ImageMetadata;
  alt: string;
  tag: string;
  category: GalleryCategory;
  size?: "wide" | "tall";
}

export const galleryFilters: { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "Tudo" },
  { id: "hosp", label: "Hospedagem" },
  { id: "gastro", label: "Gastronomia" },
  { id: "lazer", label: "Lazer" },
  { id: "eventos", label: "Eventos" },
];

export const galleryItems: GalleryItem[] = [
  { src: q1, alt: "Suíte Luxo com cama de casal do Areião Park Hotel", tag: "Suíte Luxo · Casal", category: "hosp", size: "wide" },
  { src: fachada, alt: "Fachada do Areião Park Hotel", tag: "Fachada", category: "lazer", size: "tall" },
  { src: q2, alt: "Suíte Luxo com duas camas de solteiro", tag: "Suíte Luxo · Twin", category: "hosp" },
  { src: q3, alt: "Suíte Luxo com três camas de solteiro", tag: "Suíte Luxo · Família", category: "hosp" },
  { src: q4, alt: "Suíte Luxo do Areião Park Hotel", tag: "Suíte Luxo", category: "hosp", size: "wide" },
  { src: q5, alt: "Detalhe de acomodação do Areião Park Hotel", tag: "Conforto", category: "hosp" },
  { src: q6, alt: "Ambiente preparado para casal", tag: "A dois", category: "lazer" },
  { src: q7, alt: "Acomodação do Areião Park Hotel", tag: "Hospedagem", category: "hosp", size: "tall" },
  { src: q8, alt: "Acomodação do Areião Park Hotel", tag: "Quarto", category: "hosp" },
  { src: q9, alt: "Acomodação do Areião Park Hotel", tag: "Quarto", category: "eventos", size: "wide" },
  { src: q10, alt: "Acomodação do Areião Park Hotel", tag: "Quarto", category: "gastro" },
  { src: q11, alt: "Acomodação do Areião Park Hotel", tag: "Quarto", category: "eventos" },
];
