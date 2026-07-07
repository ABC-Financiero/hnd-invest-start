import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "¿Me garantizas retornos?",
    a: "No, y desconfía de quien lo haga. Te enseño a invertir con un sistema basado en datos históricos y diversificación, no en promesas.",
  },
  {
    q: "¿Necesito mucho dinero para empezar?",
    a: "No. El sistema está diseñado para empezar desde montos pequeños mensuales, en lempiras, desde Honduras.",
  },
  {
    q: "¿Qué plataforma se usa?",
    a: "Hapi, un broker disponible en Honduras. La guía gratuita te enseña a abrir tu cuenta paso a paso.",
  },
  {
    q: "¿La bolsa de valores es una estafa?",
    a: "No. La bolsa de valores es un mercado regulado donde millones de personas y empresas invierten todos los días. El problema no suele ser la bolsa, sino invertir sin estrategia, seguir consejos al azar o caer en promesas falsas de dinero rápido.",
  },
  {
    q: "¿Necesito mucho dinero para empezar?",
    a: "No. Hoy en día existen plataformas que permiten empezar desde montos bajos. Lo más importante al inicio no es cuánto dinero tienes, sino empezar con criterio y desarrollar el hábito de invertir.",
  },
  {
    q: "¿Puedo perder dinero?",
    a: "Sí, invertir tiene riesgo real y es importante entenderlo desde el principio. El valor de las inversiones puede subir o bajar. Por eso es importante invertir con un horizonte de largo plazo, conocer tu perfil de inversor y no invertir dinero que necesitas para emergencias.",
  },
  {
    q: "¿Qué pasa si no sé nada sobre inversiones?",
    a: "Es completamente normal. La guía gratuita te muestra cómo abrir tu cuenta paso a paso. Los fundamentos para invertir con estrategia los cubrimos dentro del Programa de Portafolio Funcional.",
  },
  {
    q: "¿Necesito ser experto para invertir?",
    a: "No. No necesitas ser experto para empezar. Lo importante es entender las bases, evitar errores comunes y construir una estrategia simple antes de tomar decisiones.",
  },
  {
    q: "¿Por qué usas Hapi como ejemplo?",
    a: "Hapi es una de las opciones más simples y accesibles para personas en Latinoamérica que quieren empezar a invertir en bolsa desde su celular. Por eso la guía gratuita te muestra cómo abrir tu cuenta específicamente en Hapi.",
  },
  {
    q: "¿Esto garantiza que voy a ganar dinero?",
    a: "No. Nadie puede garantizar ganancias en la bolsa de valores. El objetivo es ayudarte a empezar bien, reducir errores y aprender a invertir con más criterio.",
  },
  {
    q: "¿Qué pasa si el mercado cae?",
    a: "Las caídas forman parte normal de la bolsa de valores. Por eso es importante tener una estrategia, entender tu perfil de inversor y pensar en el largo plazo en lugar de reaccionar por miedo.",
  },
  {
    q: "¿Esto funciona para personas en Honduras?",
    a: "Sí. Todo el contenido fue pensado específicamente para hondureños que quieren empezar desde cero y entender cómo abrir su cuenta e invertir desde Honduras.",
  },
  {
    q: "¿Qué hago después de abrir mi cuenta?",
    a: "Abrir tu cuenta es solo el primer paso. Después viene lo más importante: aprender a construir un portafolio según tu perfil de inversor, desarrollar el hábito de invertir y evitar tomar decisiones por emoción.",
  },
];

export function FAQ() {
  return (
    <section className="px-6 py-20 md:py-[120px]">
      <div className="mx-auto max-w-[760px]">
        <h2 className="text-center text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[40px] md:text-[48px]">
          Preguntas frecuentes antes de empezar
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-center text-base text-muted-foreground sm:text-lg">
          Estas son algunas dudas comunes que tienen muchos hondureños antes de invertir por primera vez.
        </p>
        <Accordion type="single" collapsible className="mt-12 flex w-full flex-col gap-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-border bg-card/40 transition-colors data-[state=open]:bg-card/70"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "group flex flex-1 items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-foreground transition-colors hover:bg-card/60 sm:px-6 sm:text-lg",
                  )}
                >
                  <span>{f.q}</span>
                  <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:text-foreground group-data-[state=open]:border-primary group-data-[state=open]:text-primary">
                    <Plus className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6 sm:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
