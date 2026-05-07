import { EmailCaptureForm } from "./EmailCaptureForm";

export function Hero() {
  return (
    <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-[120px]">
      <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Invierte en la bolsa de valores
        </span>
        <h1 className="mt-8 text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[48px] md:text-[56px]">
          Pierde el miedo y empieza a poner tu dinero a trabajar por ti.
        </h1>
        <p className="mt-6 max-w-[520px] text-base text-muted-foreground sm:text-lg">
          Sin mucho dinero. Sin ser experto. Sin estafas o aplicaciones raras.
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
