import { Check } from "lucide-react";

const bullets = [
  "7 días con enseñanza paso a paso",
  "Cómo abrir tu cuenta en Hapi desde Honduras",
  "Tu primer portafolio en S&P 500",
  "Acceso de por vida a actualizaciones",
];

export function Pricing() {
  return (
    <section className="px-6 py-20 md:py-[120px]">
      <div className="mx-auto max-w-[480px]">
        <div
          className="rounded-[32px] bg-white p-8 text-black shadow-[0_20px_60px_-20px_rgba(0,210,106,0.2)] sm:p-10"
        >
          <p className="text-xs uppercase tracking-wider text-neutral-500">
            Acceso completo
          </p>
          <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">
            Curso de 7 días para armar tu portafolio.
          </h3>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-5xl font-black tracking-[-0.02em]">USD $27</span>
          </div>
          <p className="mt-1 text-sm text-neutral-500">
            Pago único · Acceso de por vida
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary">
                  <Check className="h-3 w-3 text-black" strokeWidth={3} />
                </span>
                <span className="text-neutral-800">{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#footer-cta"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Acceso al sistema
          </a>
          <p className="mt-4 text-center text-xs text-neutral-500">
            Pagos seguros · Garantía 7 días
          </p>
        </div>
      </div>
    </section>
  );
}
