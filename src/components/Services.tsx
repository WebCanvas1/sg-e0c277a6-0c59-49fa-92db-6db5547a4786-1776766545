import { Home, Building2, Zap, Wrench, Shield, CheckCircle, Lightbulb, Cable } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Electrical",
    description: "Complete home electrical solutions from lighting to power points, rewiring, and upgrades."
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: "Professional electrical installations and maintenance for businesses, offices, and retail spaces."
  },
  {
    icon: Zap,
    title: "Emergency Repairs",
    description: "24/7 emergency callout service for urgent electrical faults and power outages."
  },
  {
    icon: Wrench,
    title: "Electrical Repairs",
    description: "Expert diagnosis and repair of faulty wiring, circuit breakers, switches, and outlets."
  },
  {
    icon: Lightbulb,
    title: "LED Lighting",
    description: "Energy-efficient LED lighting installations, downlights, and smart lighting solutions."
  },
  {
    icon: Cable,
    title: "Electrical Installations",
    description: "New electrical installations for renovations, extensions, and new construction projects."
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Comprehensive electrical safety audits and compliance testing for homes and businesses."
  },
  {
    icon: CheckCircle,
    title: "Switchboard Upgrades",
    description: "Modern switchboard replacements and upgrades to meet current safety standards."
  }
];

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our Electrical Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From routine maintenance to emergency repairs, we provide comprehensive electrical solutions for homes and businesses across Mill Park and surrounding areas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Don't see what you're looking for?
          </p>
          <a 
            href="tel:0422851433"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105"
          >
            <Zap className="w-5 h-5" />
            Call for Custom Solutions
          </a>
        </div>
      </div>
    </section>
  );
}