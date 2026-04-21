import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
    alt: "Electrical panel installation"
  },
  {
    url: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
    alt: "Modern switchboard upgrade"
  },
  {
    url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    alt: "LED lighting installation"
  },
  {
    url: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8e6?w=600&q=80",
    alt: "Commercial electrical work"
  },
  {
    url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    alt: "Electrical wiring and cables"
  },
  {
    url: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=80",
    alt: "Power outlet installation"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a look at some of our completed electrical installations and repairs across Mill Park and Melbourne.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
            {selectedImage !== null && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full rounded-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}