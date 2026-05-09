import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Check } from "lucide-react";

export default function Gracias() {
  useEffect(() => {
    document.title = "Gracias — ABC Financiero";
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex,nofollow");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-20 text-foreground antialiased">
      <div className="mx-auto flex max-w-[520px] flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
          <Check className="h-6 w-6 text-primary" strokeWidth={2.5} />
        </div>
        <h1 className="mt-8 text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
          Listo, revisá tu correo.
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Te enviamos la guía a tu correo. Si no la ves en unos minutos, revisá la carpeta de spam o promociones.
        </p>
        <Link
          to="/"
          className="mt-10 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
