import { Hero } from "@/components/landing/Hero";
import { VideoSection } from "@/components/landing/VideoSection";
import { Features } from "@/components/landing/Features";
import { TrustData } from "@/components/landing/TrustData";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Disclaimer } from "@/components/landing/Disclaimer";
import { Footer } from "@/components/landing/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Hero />
      <Features />
      <TrustData />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <Footer />
      <Disclaimer />
    </main>
  );
}
