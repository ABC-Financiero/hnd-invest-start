import { WHATSAPP_ACOMPANAMIENTO_URL } from "@/lib/links";
import { trackClick } from "@/lib/track";

export function AnchorLine() {
  return (
    <section className="px-6 pb-10 pt-4">
      <p className="mx-auto max-w-[720px] text-center text-xs text-muted-foreground sm:text-sm">
        ¿Ya inviertes en la bolsa de valores y buscas acompañamiento continuo? El Acompañamiento Patrimonial es por aplicación.{" "}
        <a
          href={WHATSAPP_ACOMPANAMIENTO_URL}
          target="_blank"
          rel="noopener"
          onClick={trackClick("anchor_acompanamiento")}
          className="text-foreground underline underline-offset-4 hover:text-primary"
        >
          Escríbeme
        </a>
        .
      </p>
    </section>
  );
}
