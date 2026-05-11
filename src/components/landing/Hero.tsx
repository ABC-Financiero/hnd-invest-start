import { EmailCaptureForm } from "./EmailCaptureForm";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="relative mx-auto flex max-w-[680px] flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          El primer paso para invertir con criterio
        </span>
        <h1 className="mt-7 text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-[38px] md:text-[46px]">
          Aprende a dar tu primer paso en la bolsa de valores desde Honduras, con claridad y sin sentirte perdido.
        </h1>
        <p className="mt-5 max-w-[540px] text-[15px] text-muted-foreground sm:text-base">
          Descarga gratis una guía paso a paso para abrir tu cuenta de inversión, fondearla y hacer tu primera compra usando Hapi como ejemplo práctico.
        </p>
        <div className="mt-8 flex w-full justify-center">
          <EmailCaptureForm />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Sin spam, cancela cuando quieras.
        </p>
      </div>
    </section>
  );
}
