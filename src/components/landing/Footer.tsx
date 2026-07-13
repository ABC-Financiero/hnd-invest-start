import { EmailCaptureForm } from "./EmailCaptureForm";

export function Footer() {
  return (
    <footer
      id="footer-cta"
      className="border-t border-border bg-[oklch(0.14_0_0)] px-6 pt-16 pb-10 md:pt-24"
    >
      <div className="mx-auto max-w-[680px] text-center">
        <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[34px] md:text-[40px]">
          Empieza hoy lo que llevas años posponiendo.
        </h2>
        <div className="mt-8 flex justify-center">
          <EmailCaptureForm />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a
            href="https://www.tiktok.com/@ricardoaraque"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            TikTok @ricardoaraque
          </a>
          <a
            href="https://www.instagram.com/ricardoaraquen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Instagram @ricardoaraquen
          </a>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Fundado por <span className="text-foreground">Ricardo Araque</span> · ABC Financiero
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © 2026 ABC Financiero · Honduras, Tegucigalpa
        </p>
      </div>
    </footer>
  );
}
