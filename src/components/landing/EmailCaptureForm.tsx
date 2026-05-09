import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Correo no válido" })
  .max(255);

type Status = "idle" | "loading" | "error";

export function EmailCaptureForm({
  ctaLabel = "Acceder a la guía",
  variant = "dark",
}: {
  ctaLabel?: string;
  variant?: "dark" | "outline";
}) {
  const navigate = useNavigate();
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
      const res = await fetch("/api/public/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: parsed.data }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Error");
      }
      navigate({ to: "/gracias" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error && err.message
          ? err.message
          : "No pudimos enviar tu correo. Intentá de nuevo.",
      );
    }
  }

  const buttonClass =
    variant === "outline"
      ? "rounded-full border border-foreground bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60"
      : "rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60";

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md" noValidate>
      <div className="flowing-border rounded-full transition-shadow duration-300">
        <div className="flex flex-col gap-2 rounded-full bg-[oklch(0.08_0_0)] p-1.5 sm:flex-row sm:items-center sm:gap-0">

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
            className="min-w-0 flex-1 rounded-full bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/80 focus:outline-none"
            maxLength={255}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={buttonClass}
          >
            {status === "loading" ? "Enviando..." : ctaLabel}
          </button>
        </div>
      </div>
      {status === "error" && errorMsg && (
        <p className="mt-3 text-center text-xs text-destructive">{errorMsg}</p>
      )}
    </form>
  );
}
