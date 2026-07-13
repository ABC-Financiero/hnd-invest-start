import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Correo no válido" })
  .max(255);

type Status = "idle" | "loading" | "error";

export function EmailCaptureForm({
  ctaLabel = "Quiero la guía gratis",
}: {
  ctaLabel?: string;
  variant?: "dark" | "outline";
}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isValid = useMemo(
    () => emailSchema.safeParse(email).success,
    [email],
  );

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
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: parsed.data }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Error");
      }
      navigate("/gracias");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error && err.message
          ? err.message
          : "No pudimos enviar tu correo. Intenta de nuevo.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md" noValidate>
      {/* Mobile / stacked: input on top, button reveals below */}
      <div className="sm:hidden">
        <div className="flowing-border rounded-full">
          <input
            type="email"
            required
            autoComplete="email"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            className="block w-full rounded-full bg-card px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            maxLength={255}
            aria-label="Correo electrónico"
          />
        </div>
        <div
          className={`grid transition-all duration-300 ease-out ${
            isValid ? "mt-2 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!isValid}
        >
          <div className="overflow-hidden">
            <button
              type="submit"
              disabled={!isValid || status === "loading"}
              className="w-full rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60"
            >
              {status === "loading" ? "Enviando..." : ctaLabel}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop: inline pill, button slides in from the right */}
      <div className="hidden sm:block">
        <div className="flowing-border rounded-full">
          <div className="flex items-center gap-1.5 rounded-full bg-card p-1.5">
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              className="min-w-0 flex-1 rounded-full bg-transparent px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              maxLength={255}
              aria-label="Correo electrónico"
            />
            <div
              className={`grid transition-all duration-300 ease-out ${
                isValid
                  ? "grid-cols-[1fr] opacity-100 translate-x-0"
                  : "grid-cols-[0fr] opacity-0 translate-x-2"
              }`}
              aria-hidden={!isValid}
            >
              <div className="overflow-hidden">
                <button
                  type="submit"
                  disabled={!isValid || status === "loading"}
                  className="whitespace-nowrap rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60"
                >
                  {status === "loading" ? "Enviando..." : ctaLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {status === "error" && errorMsg && (
        <p className="mt-2 text-center text-xs text-destructive">{errorMsg}</p>
      )}
    </form>
  );
}
