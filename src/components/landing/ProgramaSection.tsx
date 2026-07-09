import { ArrowRight, LayoutGrid, Compass, PieChart, ShieldCheck, TrendingUp } from "lucide-react";
import { PROGRAMA_URL } from "@/lib/links";
import { trackClick } from "@/lib/track";

const benefits = [
  { icon: LayoutGrid, title: "Construir un portafolio listo para invertir" },
  { icon: Compass, title: "Saber qué comprar y por qué" },
  { icon: PieChart, title: "Diversificar correctamente" },
  { icon: ShieldCheck, title: "Invertir con confianza" },
  { icon: TrendingUp, title: "Construir patrimonio a largo plazo" },
];

export function ProgramaSection() {
  return (
    <section
      id="programa"
      className="relative overflow-hidden px-6 py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.78_0.16_152/0.12),transparent_70%)]"
      />
      <div className="mx-auto max-w-[1080px]">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
            Opción 2 · Formación a tu ritmo
          </span>
          <h2 className="mt-5 text-[28px] font-extrabold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[38px] md:text-[46px]">
            Programa de Portafolio Funcional
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground sm:text-base md:text-lg">
            Un curso para aprender a invertir en la bolsa de valores y armar un portafolio funcional y rentable. No es magia, es un portafolio bien construido desde el día uno. Ideal si prefieres estudiar por tu cuenta, a tu ritmo, sin sesiones en vivo.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/30 hover:bg-card"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="pt-1.5 text-sm font-semibold leading-snug text-foreground sm:text-[15px]">
                {title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={PROGRAMA_URL}
            target="_blank"
            rel="noopener"
            onClick={trackClick("programa_checkout")}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.78_0.16_152/0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 sm:text-base"
          >
            Acceder al Programa
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
