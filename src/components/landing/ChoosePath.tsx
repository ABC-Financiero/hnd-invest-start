import { ArrowRight, Download, Sparkles } from "lucide-react";
import { PROGRAMA_URL } from "@/lib/links";

export function ChoosePath() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[34px] md:text-[40px]">
            Elige por dónde empezar
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground sm:text-base">
            Dos caminos según en qué momento estés. El primer paso siempre depende de ti.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-5 md:items-stretch">
          {/* Card 1 — Free guide */}
          <div className="flex flex-col rounded-2xl border border-border bg-card/50 p-7 md:col-span-2">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              Gratis
            </span>
            <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-foreground sm:text-2xl">
              Quiero abrir mi cuenta
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Guía gratuita paso a paso para abrir tu primera cuenta de inversión desde Honduras usando Hapi. Ideal si todavía no tienes cuenta.
            </p>
            <a
              href="#guia-gratis"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-background w-fit"
            >
              <Download className="h-4 w-4" />
              Descargar guía
            </a>
          </div>

          {/* Card 2 — Programa (emphasis) */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-card via-card to-primary/10 p-7 shadow-[0_20px_60px_-20px_oklch(0.78_0.16_152/0.35)] md:col-span-3">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
            />
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
              <Sparkles className="h-3 w-3" /> Recomendado
            </span>
            <h3 className="mt-5 text-xl font-extrabold tracking-[-0.02em] text-foreground sm:text-2xl md:text-[26px]">
              Quiero empezar a invertir
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Ideal para quienes ya decidieron empezar y quieren seguir un sistema paso a paso para construir un portafolio sólido.
            </p>
            <a
              href={PROGRAMA_URL}
              target="_blank"
              rel="noopener"
              className="group mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Conocer el Programa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
