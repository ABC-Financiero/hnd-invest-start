import { ArrowRight } from "lucide-react";
import { WHATSAPP_PLAN_URL } from "@/lib/links";
import { trackClick } from "@/lib/track";

const steps = [
  {
    n: "1",
    title: "Diagnóstico",
    body: "Llenas un cuestionario y analizo tu perfil real de inversor antes de vernos.",
  },
  {
    n: "2",
    title: "Sesión de diseño (90 min)",
    body: "Diseñamos tu portafolio y tu plan a 12 meses, con tus montos en lempiras.",
  },
  {
    n: "3",
    title: "Primera inversión en vivo (60 min)",
    body: "Haces tu primera inversión conmigo, en tu cuenta, paso a paso.",
  },
  {
    n: "4",
    title: "30 días de seguimiento",
    body: "WhatsApp con checkpoints y una llamada de revisión al cumplir tu primer mes invirtiendo.",
  },
];

// Cada testimonio queda listo para reemplazarse por un video embebido más adelante
// (mismo contenedor: <figure>). Solo cambia el contenido interior.
const testimonials = [
  {
    quote:
      "Salí de la sesión con mi portafolio ya funcionando. Nunca había tenido tanta claridad.",
    name: "María F.",
    detail: "Tegucigalpa · primera inversión: $120",
  },
  {
    quote:
      "Ricardo me acompañó en tiempo real. Pasé de tener miedo a hacer mi primera compra en 20 minutos.",
    name: "Carlos M.",
    detail: "San Pedro Sula · portafolio a 12 meses listo",
  },
  {
    quote:
      "El seguimiento por WhatsApp fue lo que más me sirvió. Nunca me sentí sola con las dudas.",
    name: "Andrea R.",
    detail: "La Ceiba · aporte mensual desde $50",
  },
];

export function PersonalPlan() {
  return (
    <section id="plan" className="relative overflow-hidden px-6 py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.78_0.16_152/0.14),transparent_70%)]"
      />
      <div className="mx-auto max-w-[1080px]">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
            1 a 1 con Ricardo
          </span>
          <h2 className="mt-5 text-[28px] font-extrabold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[38px] md:text-[46px]">
            Plan de Inversión Personalizado
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground sm:text-base md:text-lg">
            Un mes de trabajo 1 a 1 para dejar tu portafolio funcionando.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex flex-col rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/30"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-bold text-primary">
                {s.n}
              </span>
              <h3 className="mt-4 text-base font-bold tracking-[-0.02em] text-foreground sm:text-lg">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[720px] text-center text-sm text-muted-foreground sm:text-[15px]">
          Incluye el <span className="text-foreground">Programa de Portafolio Funcional</span> completo para que llegues a la sesión con las bases claras.
        </p>

        {/* Precio */}
        <div className="mx-auto mt-10 flex max-w-[520px] flex-col items-center rounded-2xl border border-primary/40 bg-gradient-to-b from-card to-primary/5 p-6 text-center">
          <p className="text-3xl font-black tracking-[-0.02em] text-foreground sm:text-4xl">
            $150 <span className="text-base font-semibold text-muted-foreground">· 4 cupos por semana</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">Se reserva con el 50%.</p>
          <a
            href={WHATSAPP_PLAN_URL}
            target="_blank"
            rel="noopener"
            onClick={trackClick("plan_whatsapp_cta")}
            className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.78_0.16_152/0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 sm:text-base"
          >
            Aparta tu cupo por WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Testimonios en texto (contenedor listo para video) */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card/60 p-6"
            >
              <blockquote className="text-sm leading-relaxed text-foreground/90 sm:text-[15px]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border/60 pt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
