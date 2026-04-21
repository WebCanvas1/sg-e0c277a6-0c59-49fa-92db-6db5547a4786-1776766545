import { Zap, Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">Micucci Electrical</h3>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Licensed and insured electricians serving Mill Park and surrounding Melbourne areas. 
              Available 24/7 for all your electrical needs.
            </p>
            <div className="flex items-center gap-2 text-accent font-semibold">
              <Zap className="w-5 h-5" />
              <span>5.0 ★★★★★ (38 Reviews)</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Residential Electrical</li>
              <li>Commercial Services</li>
              <li>Emergency Repairs</li>
              <li>LED Lighting</li>
              <li>Safety Inspections</li>
              <li>Switchboard Upgrades</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:0422851433" className="hover:text-white">
                  0422 851 433
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Unit 12/30 Heaths Ct<br />
                  Mill Park VIC 3082
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© {currentYear} Micucci Electrical Services. All rights reserved.</p>
          <p className="mt-2">Licensed Electrician • Fully Insured • Australian Owned & Operated</p>
        </div>
      </div>
    </footer>
  );
}