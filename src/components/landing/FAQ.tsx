import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const faqs = [
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
    a: "Es completamente normal. La mayoría empieza desde cero. Esta guía fue creada justamente para ayudarte a entender el proceso paso a paso, de forma simple y aterrizada a Honduras.",
  },
  {
    q: "¿Necesito ser experto para invertir?",
    a: "No. No necesitas ser experto para empezar. Lo importante es entender las bases, evitar errores comunes y construir una estrategia simple antes de tomar decisiones.",
  },
  {
    q: "¿Por qué usas Hapi como ejemplo?",
    a: "Hapi es una de las opciones más simples y accesibles para personas en Latinoamérica que quieren empezar a invertir en bolsa desde su celular. Aun así, el contenido educativo de esta guía también puede ayudarte aunque uses otro broker.",
  },
  {
    q: "¿Esto garantiza que voy a ganar dinero?",
    a: "No. Nadie puede garantizar ganancias en la bolsa de valores. El objetivo de esta guía es ayudarte a entender cómo empezar, reducir errores y aprender a invertir con más criterio.",
  },
  {
    q: "¿Qué pasa si el mercado cae?",
    a: "Las caídas forman parte normal de la bolsa de valores. Por eso es importante tener una estrategia, entender tu perfil de inversor y pensar en el largo plazo en lugar de reaccionar por miedo.",
  },
  {
    q: "¿Esto funciona para personas en Honduras?",
    a: "Sí. Todo el contenido de esta guía fue pensado específicamente para hondureños que quieren empezar desde cero y entender cómo funciona el proceso de inversión desde Honduras.",
  },
  {
    q: "¿Qué hago después de abrir mi cuenta?",
    a: "Abrir tu cuenta es solo el primer paso. Después viene lo más importante: aprender a construir un portafolio según tu perfil de inversor, desarrollar el hábito de invertir y evitar tomar decisiones por emoción.",
  },
];

export function FAQ() {
  return (
    <section className="px-6 py-20 md:py-[120px]">
      <div className="mx-auto max-w-[720px]">
        <h2 className="text-center text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-foreground sm:text-[40px] md:text-[48px]">
          Preguntas honestas, respuestas honestas
        </h2>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-6 text-left text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
