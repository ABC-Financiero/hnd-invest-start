import { EmailCaptureForm } from "./EmailCaptureForm";

export function Footer() {
  return (
    <footer id="footer-cta" className="px-6 pt-20 pb-12 md:pt-[120px]">
      <div className="mx-auto max-w-[720px] text-center">
        <h2 className="text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[40px] md:text-[48px]">
          Empieza hoy lo que llevas años posponiendo.
        </h2>
        <div className="mt-10 flex justify-center">
          <EmailCaptureForm ctaLabel="Quiero la guía gratis" variant="outline" />
        </div>

        <nav className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">Inicio</a>
          <span aria-hidden="true">·</span>
          <a href="#" className="hover:text-foreground">Cómo funciona</a>
          <span aria-hidden="true">·</span>
          <a href="#" className="hover:text-foreground">FAQ</a>
          <span aria-hidden="true">·</span>
          <a href="#" className="hover:text-foreground">Contacto</a>
        </nav>

        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">TikTok @ricardoaraque</a>
          <a href="#" className="hover:text-foreground">Instagram @ricardoaraquen</a>
        </div>

        <p className="mx-auto mt-10 max-w-[520px] text-xs leading-relaxed text-muted-foreground">
          Contenido educativo, no asesoría financiera. Toda inversión conlleva
          riesgo.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          © 2026 ABC Financiero · Honduras, Tegucigalpa
        </p>
      </div>
    </footer>
  );
}
