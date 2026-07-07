import { ArrowRight } from "lucide-react";
import { PROGRAMA_URL } from "@/lib/links";
import { EmailCaptureForm } from "./EmailCaptureForm";
import { trackClick } from "@/lib/track";

export function FinalCTA() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[820px] rounded-3xl border border-primary/30 bg-gradient-to-b from-card via-card to-primary/10 p-8 text-center shadow-[0_30px_80px_-30px_oklch(0.78_0.16_152/0.35)] sm:p-12">
        <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[34px] md:text-[42px]">
          Da el siguiente paso hoy.
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[15px] text-muted-foreground sm:text-base">
          Empieza con el Programa de Portafolio Funcional o abre tu cuenta de inversión con la guía gratuita.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={PROGRAMA_URL}
            target="_blank"
            rel="noopener"
            onClick={trackClick("final_programa")}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.78_0.16_152/0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Empezar hoy — $37
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#guia-gratis"
            onClick={trackClick("final_guia")}
            className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-5 py-3 text-sm font-medium text-muted-foreground transition hover:border-foreground/30 hover:text-foreground"
          >
            Descargar guía gratis
          </a>
        </div>


        <div
          id="guia-gratis"
          className="mt-14 border-t border-border/60 pt-10"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Guía gratuita
          </p>
          <h3 className="mt-3 text-[20px] font-bold tracking-[-0.02em] text-foreground sm:text-2xl">
            Cómo abrir tu cuenta de inversión desde Honduras
          </h3>
          <p className="mx-auto mt-3 max-w-[460px] text-sm text-muted-foreground">
            Te enviamos el PDF paso a paso para abrir tu cuenta en Hapi desde tu celular, en menos de 15 minutos.
          </p>
          <div className="mt-6 flex justify-center">
            <EmailCaptureForm ctaLabel="Enviarme la guía" />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Sin spam, cancela cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
}
