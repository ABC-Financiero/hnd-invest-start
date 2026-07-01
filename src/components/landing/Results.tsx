import { CheckCircle2 } from "lucide-react";

const results = [
  {
    title: "Un portafolio construido",
    body: "Sales con un portafolio real, no con una idea abstracta de qué hacer.",
  },
  {
    title: "Un sistema para tomar decisiones",
    body: "Un marco claro para decidir qué comprar, cuándo y por qué.",
  },
  {
    title: "Una estrategia sostenible",
    body: "Diseñada para mantener en el tiempo, no para operar todos los días.",
  },
  {
    title: "Más confianza para invertir",
    body: "Menos ruido, menos miedo, más claridad para actuar con criterio.",
  },
];

export function Results() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[34px] md:text-[40px]">
            Lo que te llevas al terminar
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground sm:text-base">
            El objetivo no es más información. Es que salgas con resultados concretos.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {results.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-border bg-card/60 p-6"
            >
              <CheckCircle2 className="h-6 w-6 text-primary" strokeWidth={1.75} />
              <h3 className="mt-4 text-lg font-bold tracking-[-0.02em] text-foreground">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
