export function About() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[760px] rounded-3xl border border-border bg-card/50 p-8 sm:p-12">
        <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Sobre Ricardo
        </span>
        <h2 className="mt-5 text-[26px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[32px] md:text-[38px]">
          Ricardo Araque, fundador de ABC Financiero
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          Llevo años ayudando a hondureños a dar sus primeros pasos en la bolsa de valores.
          A través de ABC Financiero he acompañado a más de <span className="text-foreground">1,000 personas</span> a entender cómo funciona el mercado y a empezar a invertir con criterio.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          El <span className="text-foreground">Programa de Portafolio Funcional</span> contiene el mismo sistema de inversión con el que enseño a principiantes a construir un portafolio simple, diversificado y pensado para el largo plazo.
        </p>
      </div>
    </section>
  );
}
