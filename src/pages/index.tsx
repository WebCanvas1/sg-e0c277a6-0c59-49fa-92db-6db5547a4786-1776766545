import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO 
        title="Micucci Electrical Services - Licensed Electrician in Mill Park, VIC"
        description="24/7 emergency electrical services in Mill Park. 5.0-star rated, licensed & insured. Residential & commercial electrical repairs, installations & safety inspections."
        image="/og-image.png"
      />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}