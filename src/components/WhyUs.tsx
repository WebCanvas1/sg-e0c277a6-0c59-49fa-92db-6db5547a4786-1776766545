import { Shield, Clock, Star, Award, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency service when you need us most. No job too big or small."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed electricians with comprehensive insurance coverage for your peace of mind."
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "38 Google reviews with a perfect 5.0 rating. Our reputation speaks for itself."
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Years of experience serving Mill Park and surrounding Melbourne suburbs."
  },
  {
    icon: Users,
    title: "Local Business",
    description: "Family-owned and operated. We're part of your community."
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "All work backed by our satisfaction guarantee and warranty on parts and labor."
  }
];

const testimonials = [
  {
    name: "Amparo do Campo",
    text: "He quickly assessed and identified the electrical issue.",
    rating: 5
  },
  {
    name: "Jasmine Tintor",
    text: "If you're after quality workmanship and great service, this is the team to call.",
    rating: 5
  }
];

export function WhyUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Why Choose Micucci Electrical?
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by hundreds of Melbourne families and businesses for reliable, professional electrical services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic text-foreground">"{testimonial.text}"</p>
                  <p className="font-semibold text-muted-foreground">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Google Reviews Badge */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-3 bg-white border-2 border-border px-6 py-3 rounded-lg shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">5.0 Rating</p>
                <p className="text-sm text-muted-foreground">38 Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}