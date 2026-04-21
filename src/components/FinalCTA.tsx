import { Phone, MapPin, Clock, Zap, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Contact Micucci Electrical Services today for fast, reliable electrical solutions.
            </p>
            <a href="tel:0422851433">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-bold text-xl px-12 py-6 h-auto rounded-lg shadow-2xl hover:scale-105 transition-all"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call Now: 0422 851 433
              </Button>
            </a>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
            {/* Phone */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <a href="tel:0422851433" className="text-white/90 hover:text-white text-lg">
                0422 851 433
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Address</h3>
              <p className="text-white/90 text-lg">
                Unit 12/30 Heaths Ct<br />
                Mill Park VIC 3082
              </p>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Hours</h3>
              <p className="text-white/90 text-lg">
                Open 24 Hours<br />
                Emergency Service Available
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <h3 className="font-semibold text-lg mb-3">Servicing Areas</h3>
            <p className="text-white/90">
              Mill Park • Epping • South Morang • Lalor • Thomastown • Northern Melbourne Suburbs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}