import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "Llevaba años queriendo invertir, pensaba que era para gringos. Abrí mi cuenta en una tarde y llevo 4 meses aportando $100 al mes.",
    name: "Carlos M.",
  },
  {
    quote:
      "Probé criptos, multinivel, de todo. Esto fue lo primero que me hizo sentido: empresas reales, sin promesas raras. Más aburrido — y por eso mejor.",
    name: "Andrea R.",
  },
  {
    quote:
      "Con $50 al mes ya estaba haciendo algo. En 8 meses junté más que lo que tenía en mi cuenta de ahorro.",
    name: "José L.",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-20 md:py-[120px]">
      <div className="mx-auto grid max-w-[1080px] gap-6 md:grid-cols-3">
        {items.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl border border-border bg-card p-8"
          >
            <Quote
              className="h-4 w-4 text-primary"
              strokeWidth={2}
              aria-hidden="true"
            />
            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              — {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
