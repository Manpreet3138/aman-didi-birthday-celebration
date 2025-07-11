import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";

interface PhotoGalleryProps {
  visibleSections: Set<string>;
  uploadedImages: string[];
}

const PhotoGallery = ({ visibleSections, uploadedImages }: PhotoGalleryProps) => (
  <section id="section4" className="min-h-screen flex items-center justify-center py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-4xl md:text-5xl font-bold birthday-text text-center mb-12 ${
        visibleSections.has('section4') ? 'animate-slide-up' : 'opacity-0'
      }`}>
        Funny Memes 😂
      </h2>
      

      {uploadedImages.length > 0 && (
        <div className={`${
          visibleSections.has('section4') ? 'animate-slide-up animation-delay-500' : 'opacity-0'
        }`}>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent className="-ml-4">
              {uploadedImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="celebration-card p-2">
                    <div className="flex items-center justify-center min-h-[200px] max-h-[400px] bg-muted/20 rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`Memory ${index + 1}`}
                        className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}

    </div>
  </section>
);

export default PhotoGallery;