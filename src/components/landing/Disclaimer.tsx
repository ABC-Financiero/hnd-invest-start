import { AlertTriangle } from "lucide-react";

export function Disclaimer() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-[720px] rounded-2xl border border-border bg-card/40 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <AlertTriangle className="h-4 w-4" />
          </span>
          <div className="space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p className="font-semibold text-foreground">
              Aviso de riesgo
            </p>
            <p>
              Este contenido es estrictamente educativo y no constituye asesoría
              financiera, legal ni tributaria. Invertir en la bolsa de valores
              implica riesgo real: el valor de tus inversiones puede subir o
              bajar y podrías perder parte o la totalidad del capital invertido.
            </p>
            <p>
              Los rendimientos pasados no garantizan rendimientos futuros. Antes
              de invertir, evalúa tu situación personal, tu perfil de inversor
              y, si lo consideras necesario, consulta con un profesional
              autorizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
