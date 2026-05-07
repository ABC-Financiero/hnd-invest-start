import { BookOpen, Coins, MapPin } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Acceso real, no solo teoría",
    body: "Qué broker usar, cómo abrir cuenta desde Honduras y hacer tu primera compra. Paso a paso, con capturas.",
  },
  {
    icon: Coins,
    title: "Empieza con poco",
    body: "No ocupas tener mucho dinero. Desde USD $10 puedes empezar a invertir en la bolsa de valores.",
  },
  {
    icon: MapPin,
    title: "Hecho para hondureños",
    body: "Lenguaje adaptado a Honduras. Un hondureño enseñando a otro hondureño.",
  },
];

export function Features() {
  return (
    <section className="px-6 py-20 md:py-[120px]">
      <div className="mx-auto grid max-w-[1080px] gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <Icon
              className="h-7 w-7 text-foreground"
              strokeWidth={1.25}
              aria-hidden="true"
            />
            <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-foreground">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
