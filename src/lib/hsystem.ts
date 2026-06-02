/* =====================================================================
   HSystem — montagem da URL de reservas (PRD §7.1 / §8.1)
   O site NÃO tem motor integrado: todo "Reservar" abre o HSystem em nova
   aba. Esta lib normaliza datas (dd/mm/aaaa → YYYY-MM-DD) e codifica os
   parâmetros na query string esperada pelo motor.
   ===================================================================== */
import { site } from "@/data/site";

export interface ReservationParams {
  /** Data de chegada em dd/mm/aaaa ou YYYY-MM-DD */
  checkin?: string;
  /** Data de saída em dd/mm/aaaa ou YYYY-MM-DD */
  checkout?: string;
  adults?: number | string;
  children?: number | string;
  promo?: string;
  /** Tipo de quarto pré-selecionado, quando aplicável (PRD §6.3) */
  roomType?: string;
}

/**
 * Normaliza uma data para o formato ISO (YYYY-MM-DD) esperado pelo motor.
 * Aceita dd/mm/aaaa, dd-mm-aaaa ou já ISO. Retorna "" se inválida/vazia.
 */
export function normalizeDate(input?: string): string {
  if (!input) return "";
  const value = input.trim();
  // já em ISO
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  // dd/mm/aaaa ou dd-mm-aaaa
  const m = value.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  if (m) {
    const [, d, mo, y] = m;
    return `${y}-${mo.padStart(2, "0")}-${d.padStart(2, "0")}`;
  }
  return "";
}

/**
 * Monta a URL do HSystem com os parâmetros de reserva.
 * Quando a baseUrl/parametros não estiverem definidos, leva à home do motor.
 */
export function buildReservationUrl(params: ReservationParams = {}): string {
  const { baseUrl, params: keys } = site.hsystem;
  let url: URL;
  try {
    url = new URL(baseUrl);
  } catch {
    return baseUrl;
  }

  const checkin = normalizeDate(params.checkin);
  const checkout = normalizeDate(params.checkout);

  if (checkin) url.searchParams.set(keys.checkin, checkin);
  if (checkout) url.searchParams.set(keys.checkout, checkout);
  if (params.adults != null && `${params.adults}` !== "")
    url.searchParams.set(keys.adults, `${params.adults}`);
  if (params.children != null && `${params.children}` !== "")
    url.searchParams.set(keys.children, `${params.children}`);
  if (params.promo) url.searchParams.set(keys.promo, params.promo.trim());
  if (params.roomType) url.searchParams.set(keys.roomType, params.roomType);

  return url.toString();
}

/** Atributos padrão para abrir reservas em nova aba com segurança. */
export const RESERVE_LINK_ATTRS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
