import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you service?",
    answer: "We primarily service Mill Park and surrounding Melbourne suburbs including Epping, South Morang, Lalor, Thomastown, and the greater northern Melbourne area. Contact us to confirm if we service your location."
  },
  {
    question: "Do you offer 24/7 emergency electrical services?",
    answer: "Yes! We provide round-the-clock emergency electrical services. Whether it's a power outage, electrical fault, or urgent safety issue, our licensed electricians are available 24/7 to respond to your emergency."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. All our electricians are fully licensed, qualified, and insured. We maintain comprehensive liability insurance and comply with all Australian electrical safety standards and regulations."
  },
  {
    question: "How much do your electrical services cost?",
    answer: "Pricing varies based on the type and complexity of work required. We provide free, no-obligation quotes for all jobs. Contact us at 0422 851 433 or fill out our contact form for a detailed estimate."
  },
  {
    question: "How quickly can you respond to an emergency?",
    answer: "We aim to respond to emergency callouts as quickly as possible, typically within 1-2 hours depending on your location and our current schedule. For urgent issues, we prioritize same-day service."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we stand behind our work with comprehensive warranties on both labor and parts. All electrical installations and repairs come with our satisfaction guarantee."
  },
  {
    question: "Can you help with electrical safety inspections?",
    answer: "Yes, we provide thorough electrical safety inspections and compliance testing for both residential and commercial properties. This includes switchboard audits, wiring checks, and safety certificate issuance."
  },
  {
    question: "Do you work on commercial properties?",
    answer: "Yes, we service both residential and commercial properties. Our team has experience with office buildings, retail spaces, restaurants, warehouses, and other commercial electrical installations."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, bank transfers, and all major credit/debit cards. Payment is typically due upon completion of work, and we provide detailed invoices for all services."
  },
  {
    question: "Do I need to be home during the electrical work?",
    answer: "For most jobs, yes, we recommend someone be present. However, for certain maintenance or pre-arranged work, we can discuss alternative arrangements. Safety and security are our top priorities."
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. Find helpful information about our electrical services below.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-lg text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="tel:0422851433"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105"
          >
            Call Us: 0422 851 433
          </a>
        </div>
      </div>
    </section>
  );
}