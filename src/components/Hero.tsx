import { Zap, Star, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
      {/* Electrical Circuit Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Content */}
          <div className="text-white space-y-6">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/90 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold">5.0 Rating (38 Reviews)</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Expert Electrical Services in Mill Park
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-xl">
                Licensed, insured, and trusted by hundreds of Melbourne families. Fast response, quality workmanship, guaranteed.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Same-Day Service</h3>
                  <p className="text-white/80">Emergency repairs available 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Licensed & Insured</h3>
                  <p className="text-white/80">Fully qualified electricians</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="pt-6">
              <a 
                href="tel:0422851433"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white font-bold text-xl px-8 py-4 rounded-lg shadow-lg transition-all hover:scale-105"
              >
                <Zap className="w-6 h-6" />
                Call Now: 0422 851 433
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}