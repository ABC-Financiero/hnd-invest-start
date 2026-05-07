import { useState } from "react";
import { z } from "zod";

const LOOPS_ENDPOINT =
  "https://app.loops.so/api/newsletter-form/cmoug9pxo00600ixg71nnoyx7";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Correo no válido" })
  .max(255);

type Status = "idle" | "loading" | "success" | "error";

export function EmailCaptureForm({
  ctaLabel = "Acceder a la guía",
  variant = "dark",
}: {
  ctaLabel?: string;
  variant?: "dark" | "outline";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setStatus("error");
      setErrorMsg(parsed.error.issues[0]?.message ?? "Correo no válido");
      return;
    }
    setStatus("loading");
    try {
      const body = new URLSearchParams({ email: parsed.data });
      const res = await fetch(LOOPS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("No pudimos enviar tu correo. Intentá de nuevo.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-full border border-primary/40 bg-primary/10 px-6 py-4 text-center text-sm text-primary">
        ¡Listo! Revisá tu correo para acceder a la guía.
      </div>
    );
  }

  const buttonClass =
    variant === "outline"
      ? "rounded-full border border-foreground bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60"
      : "rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60";

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
      noValidate
    >
      <label htmlFor="email-cta" className="sr-only">
        Correo electrónico
      </label>
      <input
        id="email-cta"
        type="email"
        required
        autoComplete="email"
        placeholder="tucorreo@ejemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-1 rounded-full border border-border bg-card px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        maxLength={255}
      />
      <button type="submit" disabled={status === "loading"} className={buttonClass}>
        {status === "loading" ? "Enviando..." : ctaLabel}
      </button>
      {status === "error" && errorMsg && (
        <p className="w-full text-xs text-destructive sm:basis-full">{errorMsg}</p>
      )}
    </form>
  );
}
