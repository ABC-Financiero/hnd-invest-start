import { EmailCaptureForm } from "./EmailCaptureForm";
import { FloatingNotifications } from "./FloatingNotifications";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-[120px]">
      <FloatingNotifications />
      <div className="relative mx-auto flex max-w-[720px] flex-col items-center text-center">
        <span className="group inline-flex items-center gap-2 rounded-full border border-border bg-gradient-to-b from-card to-secondary px-4 py-1.5 text-xs font-medium text-foreground/80 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_0_0_1px_rgba(0,0,0,0.02)] transition hover:shadow-[0_4px_18px_-6px_oklch(0.62_0.16_152/0.35)]">
          <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          El primer paso para invertir con criterio
        </span>
        <h1 className="mt-8 text-[32px] font-extrabold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[44px] md:text-[52px]">
          Aprende a dar tu primer paso en la bolsa de valores desde Honduras, con claridad y sin sentirte perdido.
        </h1>
        <p className="mt-6 max-w-[560px] text-base text-muted-foreground sm:text-lg">
          Descarga gratis una guía paso a paso para abrir tu cuenta de inversión, fondearla y hacer tu primera compra usando Hapi como ejemplo práctico.
        </p>
        <div className="mt-10 flex w-full justify-center">
          <EmailCaptureForm />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Sin spam, cancela cuando quieras.
        </p>
      </div>
    </section>
  );
}
