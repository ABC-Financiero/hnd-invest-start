export function VideoSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
        <h2 className="text-[24px] font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-[32px] md:text-[38px]">
          Antes de abrir tu cuenta, mira este video
        </h2>

        <div className="mt-7 w-full max-w-[340px] overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_60px_-20px_oklch(0_0_0/0.6)]">
          <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
            <iframe
              src="https://www.youtube.com/embed/A7MUeu2H2Q8?autoplay=1&mute=1&loop=1&playlist=A7MUeu2H2Q8&controls=1&playsinline=1&rel=0&modestbranding=1"
              className="absolute inset-0 h-full w-full"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Presentación de la guía"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        <a
          href="#guia-gratis"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Descargar guía
        </a>
      </div>
    </section>
  );
}
