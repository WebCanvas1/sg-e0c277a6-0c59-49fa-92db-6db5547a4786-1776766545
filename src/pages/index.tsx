import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";

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
        {/* Services, Why Us, Gallery, FAQ, and Final CTA sections will be added in next tasks */}
      </main>
    </>
  );
}