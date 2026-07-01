import { useEffect } from "react";
import { Hero } from "@/components/landing/Hero";
import { ChoosePath } from "@/components/landing/ChoosePath";
import { ProgramaSection } from "@/components/landing/ProgramaSection";
import { Results } from "@/components/landing/Results";
import { TrustData } from "@/components/landing/TrustData";
import { About } from "@/components/landing/About";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Disclaimer } from "@/components/landing/Disclaimer";
import { Footer } from "@/components/landing/Footer";

export default function Index() {
  useEffect(() => {
    document.title = "ABC Financiero - Inicia tu inversión desde Honduras";
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) robots.setAttribute("content", "index,follow");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Hero />
      <ChoosePath />
      <ProgramaSection />
      <Results />
      <TrustData />
      <About />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <Disclaimer />
    </main>
  );
}
