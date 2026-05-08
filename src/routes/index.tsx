import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { VideoSection } from "@/components/landing/VideoSection";
import { Features } from "@/components/landing/Features";
import { TrustData } from "@/components/landing/TrustData";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Disclaimer } from "@/components/landing/Disclaimer";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Guía de inversión desde Honduras — Bolsa de valores con Hapi",
      },
      {
        name: "description",
        content:
          "Aprende a abrir tu cuenta de inversión vía Hapi e invertir en el S&P 500 desde Honduras. Sin experiencia, desde USD $10. Guía paso a paso en español.",
      },
      {
        property: "og:title",
        content: "Guía de inversión desde Honduras — Bolsa de valores con Hapi",
      },
      {
        property: "og:description",
        content:
          "Abre tu cuenta de inversión vía Hapi e invierte en el S&P 500 desde Honduras. Paso a paso, en español, desde USD $10.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Hero />
      <Features />
      <TrustData />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <Disclaimer />
      <Footer />
    </main>
  );
}
