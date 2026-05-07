import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Es legal invertir en el S&P 500 desde Honduras?",
    a: "Sí. Declarás ganancias realizadas como ingreso del exterior.",
  },
  {
    q: "¿Cuánto necesito?",
    a: "USD $50 (≈ L1,250) para tu primera posición vía Hapi.",
  },
  {
    q: "¿Qué pasa si pierdo todo?",
    a: "Tendrían que quebrar las 500 empresas más grandes de EE.UU. Sí hay pérdidas temporales (−38% en 2008, recuperado). Por eso es a largo plazo.",
  },
  {
    q: "¿Impuestos?",
    a: "Ganancias realizadas y dividendos tributan ISR. Sin venta, no hay evento fiscal.",
  },
  {
    q: "¿Por qué Hapi?",
    a: "Sin trabas en Honduras, sin comisión, app en español.",
  },
  {
    q: "¿Puedo retirar cuando quiera?",
    a: "Sí, en 2–5 días. Pero la estrategia es mediano-largo plazo.",
  },
  {
    q: "¿Necesito inglés o finanzas?",
    a: "No. 100% español, para quien nunca invirtió.",
  },
  {
    q: "¿Cuándo veré resultados?",
    a: "5+ años. Resultados serios después del año 3.",
  },
];

export function FAQ() {
  return (
    <section className="px-6 py-20 md:py-[120px]">
      <div className="mx-auto max-w-[720px]">
        <h2 className="text-center text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[40px] md:text-[48px]">
          Preguntas honestas, respuestas honestas
        </h2>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-6 text-left text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
