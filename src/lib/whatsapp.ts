/* =====================================================================
   WhatsApp — links wa.me com mensagem de ORIGEM embutida (PRD §6.7 / §7.2)
   A mensagem sempre carrega a seção/promoção de onde o cliente veio, para
   o recepcionista identificar a campanha e dar sequência à venda.
   ===================================================================== */
import { site } from "@/data/site";

export interface WhatsAppOptions {
  /** Origem identificável: "Home", "Acomodações", "Eventos", nome da promoção… */
  origem: string;
  /** Texto adicional opcional (ex.: faixa de diárias escolhida). */
  extra?: string;
}

/**
 * Mensagem base por origem. Mantém um tom cordial e sempre cita a origem.
 */
export function buildWhatsAppMessage({ origem, extra }: WhatsAppOptions): string {
  let msg = `Olá! Vim pelo site do ${site.name}`;
  if (origem) msg += ` (seção: ${origem})`;
  msg += " e gostaria de mais informações.";
  if (extra) msg += ` ${extra}`;
  return msg;
}

/**
 * Monta o link wa.me com a mensagem url-encoded.
 */
export function buildWhatsAppUrl(options: WhatsAppOptions): string {
  const text = encodeURIComponent(buildWhatsAppMessage(options));
  return `https://wa.me/${site.contact.whatsapp}?text=${text}`;
}

/**
 * Link específico de promoção (PRD §6.7): identifica o nome/código da promoção
 * e, opcionalmente, a faixa de diárias com desconto escolhida.
 */
export function buildPromoWhatsAppUrl(opts: {
  promoNome: string;
  promoCodigo?: string;
  diarias?: number;
  desconto?: string;
}): string {
  const { promoNome, promoCodigo, diarias, desconto } = opts;
  let extra = `Tenho interesse na promoção "${promoNome}"`;
  if (promoCodigo) extra += ` (código ${promoCodigo})`;
  if (diarias) extra += ` para ${diarias} diária${diarias > 1 ? "s" : ""}`;
  if (desconto) extra += ` — ${desconto}`;
  extra += ".";
  const text = encodeURIComponent(
    `Olá! Vim pelo site do ${site.name}. ${extra}`,
  );
  return `https://wa.me/${site.contact.whatsapp}?text=${text}`;
}

export const WHATSAPP_LINK_ATTRS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
