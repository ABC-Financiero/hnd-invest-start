import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import t1 from "@/assets/testimonios/t1.jpg";
import t2 from "@/assets/testimonios/t2.jpg";
import t3 from "@/assets/testimonios/t3.jpg";
import t4 from "@/assets/testimonios/t4.png";
import t5 from "@/assets/testimonios/t5.jpg";
import video1 from "@/assets/testimonios/video1.mp4.asset.json";
import video2 from "@/assets/testimonios/video2.mp4.asset.json";

const videos = [
  { src: video1.url, label: "Testimonio en video 1" },
  { src: video2.url, label: "Testimonio en video 2" },
];

const images = [
  { src: t1, alt: "Mensaje de cliente que abrió su cuenta en Hapi" },
  { src: t2, alt: "Mensaje de agradecimiento de un alumno" },
  { src: t3, alt: "Mensaje de un seguidor que comenzó a invertir" },
  { src: t4, alt: "Conversación con cliente que hizo sus primeras compras" },
  { src: t5, alt: "Mensaje de reconocimiento por la capacitación" },
];

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft < max - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.85 * dir, behavior: "smooth" });
  };

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mx-auto max-w-[820px] text-center text-[26px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[34px] md:text-[40px]">
          Lo que dicen las personas que ya empezaron
        </h2>
        <p className="mx-auto mt-4 max-w-[620px] text-center text-[15px] text-muted-foreground sm:text-base">
          Videos y mensajes reales de personas que dieron el primer paso con ABC Financiero.
        </p>

        {/* Videos */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8">
          {videos.map((v) => (
            <VideoFrame key={v.src} src={v.src} label={v.label} />
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Mensajes reales
          </p>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Desktop: grid */}
        <div className="mt-10 hidden grid-cols-2 gap-5 md:grid lg:grid-cols-3">
          {images.map((it, i) => (
            <TestimonialCard key={i} src={it.src} alt={it.alt} />
          ))}
        </div>

        {/* Mobile/tablet: horizontal scroll carousel */}
        <div className="relative mt-10 md:hidden">
          <div
            ref={scrollerRef}
            className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {images.map((it, i) => (
              <div key={i} className="snap-center shrink-0 basis-[82%]">
                <TestimonialCard src={it.src} alt={it.alt} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-card disabled:hover:text-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-card disabled:hover:text-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoFrame({ src, label }: { src: string; label: string }) {
  return (
    <figure className="group relative mx-auto w-full max-w-[380px]">
      {/* Decorative gradient frame */}
      <div
        aria-hidden="true"
        className="absolute -inset-[2px] rounded-[28px] bg-gradient-to-br from-primary/60 via-primary/20 to-primary/60 opacity-80 blur-[2px] transition-opacity group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(60%_60%_at_50%_50%,oklch(0.78_0.16_152/0.18),transparent_70%)]"
      />
      <div className="relative overflow-hidden rounded-[26px] border border-border bg-card p-2 shadow-[0_30px_80px_-30px_oklch(0_0_0/0.7)]">
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          aria-label={label}
          className="block aspect-[9/16] w-full rounded-[20px] bg-black object-cover"
        />
      </div>
    </figure>
  );
}

function TestimonialCard({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="flex h-[420px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-h-full max-w-full object-contain"
      />
    </figure>
  );
}
