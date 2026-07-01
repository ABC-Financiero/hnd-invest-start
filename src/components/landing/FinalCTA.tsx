import { ArrowRight } from "lucide-react";
import { PROGRAMA_URL } from "@/lib/links";
import { EmailCaptureForm } from "./EmailCaptureForm";

export function FinalCTA() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[820px] rounded-3xl border border-primary/30 bg-gradient-to-b from-card via-card to-primary/10 p-8 text-center shadow-[0_30px_80px_-30px_oklch(0.78_0.16_152/0.35)] sm:p-12">
        <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[34px] md:text-[42px]">
          Da el siguiente paso hoy.
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[15px] text-muted-foreground sm:text-base">
          Empieza con el sistema completo o descarga la guía gratuita si aún estás explorando.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={PROGRAMA_URL}
            target="_blank"
            rel="noopener"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.78_0.16_152/0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto sm:text-base"
          >
            Conocer el Programa Portafolio Funcional
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#guia-gratis"
            className="inline-flex w-full items-center justify-center rounded-full border border-border bg-transparent px-6 py-3 text-sm font-medium text-muted-foreground transition hover:border-foreground/30 hover:text-foreground sm:w-auto"
          >
            Descargar la guía gratuita
          </a>
        </div>

        <div
          id="guia-gratis"
          className="mt-14 border-t border-border/60 pt-10"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            ¿Aún no listo? Empieza gratis
          </p>
          <h3 className="mt-3 text-[20px] font-bold tracking-[-0.02em] text-foreground sm:text-2xl">
            Descarga la guía gratuita para invertir desde Honduras
          </h3>
          <div className="mt-6 flex justify-center">
            <EmailCaptureForm ctaLabel="Descargar guía gratis" />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Sin spam, cancela cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
}
