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
    el.scrollBy({ left: el.clientWidth * 0.85 * dir, behavior: "smooth" });
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

        {/* Desktop: grid */}
        <div className="mt-12 hidden grid-cols-2 gap-6 md:grid lg:grid-cols-3">
          {items.map((it, i) => (
            <TestimonialCard key={i} src={it.src} alt={it.alt} />
          ))}
        </div>

        {/* Mobile/tablet: horizontal scroll carousel */}
        <div className="relative mt-12 md:hidden">
          <div
            ref={scrollerRef}
            className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((it, i) => (
              <div key={i} className="snap-center shrink-0 basis-[82%]">
                <TestimonialCard src={it.src} alt={it.alt} />
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:bg-foreground hover:text-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:bg-foreground hover:text-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="flex h-[460px] items-center justify-center overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-h-full max-w-full object-contain"
      />
    </figure>
  );
}
