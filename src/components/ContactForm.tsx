import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Card className="shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
        <CardTitle className="text-2xl font-heading flex items-center gap-2">
          <Zap className="w-6 h-6 text-primary" />
          Get a Free Quote
        </CardTitle>
        <CardDescription className="text-base">
          Fill out the form and we'll get back to you within 1 hour
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12"
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-12"
            />
          </div>
          
          <div>
            <Input
              type="tel"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-12"
            />
          </div>
          
          <div>
            <Textarea
              placeholder="Tell us about your electrical needs..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="resize-none"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90"
          >
            Request Free Quote
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to be contacted about your electrical service needs.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}