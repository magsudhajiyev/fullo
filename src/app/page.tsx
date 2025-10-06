import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TestimonialsMarquee />
        <Services />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
