import { Zap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-heading font-bold text-foreground">
                Micucci Electrical Services
              </h1>
              <p className="text-xs text-muted-foreground">Licensed & Insured Electrician</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-medium text-foreground">24/7 Emergency Service</span>
              <span className="text-xs text-muted-foreground">Mill Park & Surrounding Areas</span>
            </div>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <a href="tel:0422851433" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Call Now:</span> 0422 851 433
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}