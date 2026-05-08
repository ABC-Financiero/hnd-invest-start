import { EmailCaptureForm } from "./EmailCaptureForm";

export function VideoSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
        <h2 className="text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-[36px] md:text-[42px]">
          Antes de descargar la guía, mira esto
        </h2>

        <div className="mt-8 w-full overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_60px_-20px_oklch(0_0_0/0.6)]">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://player.vimeo.com/video/1190308774?badge=0&autopause=0&player_id=0&app_id=58479&muted=1&loop=1"
              className="absolute inset-0 h-full w-full"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Presentación de la guía"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-10 flex w-full justify-center">
          <EmailCaptureForm ctaLabel="Quiero la guía gratis" />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Sin spam, cancela cuando quieras.
        </p>
      </div>
    </section>
  );
}
