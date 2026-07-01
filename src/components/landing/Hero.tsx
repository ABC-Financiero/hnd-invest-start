import { Sparkles, ArrowRight } from "lucide-react";
import { PROGRAMA_URL } from "@/lib/links";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="relative mx-auto flex max-w-[760px] flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Invierte en la bolsa desde Honduras
        </span>
        <h1 className="mt-7 text-[30px] font-extrabold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[42px] md:text-[52px]">
          Aprende a invertir en la bolsa de valores sin miedo.
        </h1>
        <p className="mt-5 max-w-[600px] text-[15px] text-muted-foreground sm:text-base md:text-lg">
          Construye un patrimonio utilizando un sistema claro, diseñado para principiantes que quieren invertir con confianza y pensando en el largo plazo.
        </p>

        <div className="mt-9 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={PROGRAMA_URL}
            target="_blank"
            rel="noopener"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.78_0.16_152/0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:text-base"
          >
            Quiero construir mi portafolio en la bolsa de valores
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#guia-gratis"
            className="inline-flex w-full items-center justify-center rounded-full border border-border bg-transparent px-6 py-3 text-sm font-medium text-muted-foreground transition hover:border-foreground/30 hover:text-foreground sm:w-auto"
          >
            Prefiero empezar con la guía gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
