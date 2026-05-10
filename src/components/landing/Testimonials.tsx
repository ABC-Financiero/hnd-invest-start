import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import t1 from "@/assets/testimonios/t1.jpg";
import t2 from "@/assets/testimonios/t2.jpg";
import t3 from "@/assets/testimonios/t3.jpg";
import t4 from "@/assets/testimonios/t4.png";
import t5 from "@/assets/testimonios/t5.jpg";

const items = [
  { src: t1, alt: "Mensaje de cliente que abrió su cuenta en Hapi" },
  { src: t2, alt: "Mensaje de agradecimiento de un alumno" },
  { src: t3, alt: "Mensaje de un seguidor que comenzó a invertir" },
  { src: t4, alt: "Conversación con cliente que hizo sus primeras compras" },
  { src: t5, alt: "Mensaje de reconocimiento por la capacitación" },
];

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="px-6 py-20 md:py-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mx-auto max-w-[760px] text-center text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[40px] md:text-[48px]">
          Personas que ya están aprendiendo con ABC Financiero
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-center text-base text-muted-foreground sm:text-lg">
          Mensajes reales de personas que dieron el primer paso para entender mejor sus finanzas e inversiones.
        </p>

        <div className="relative mt-12">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((it, i) => (
              <figure
                key={i}
                className="snap-center shrink-0 basis-[78%] overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_60px_-30px_oklch(0_0_0/0.6)] sm:basis-[55%] md:basis-[38%] lg:basis-[30%]"
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </figure>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-foreground hover:text-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-foreground hover:text-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
