import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input"; // Input is no longer used if the upload section is removed

interface PhotoGalleryProps {
  visibleSections: Set<string>;
  uploadedImages: string[];
  onImageUpload?: (event: React.ChangeEvent<HTMLInputElement>) => void; // This prop is now optional as per previous fix
}

const PhotoGallery = ({ visibleSections, uploadedImages, onImageUpload }: PhotoGalleryProps) => (
  <section id="section4" className="min-h-screen flex items-center justify-center py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-4xl md:text-5xl font-bold birthday-text text-center mb-12 ${
        visibleSections.has('section4') ? 'animate-slide-up' : 'opacity-0'
      }`}>
        Funny Memes 😂
      </h2>
      
      {/* Funny moments sticker */}
      <div className={`flex justify-center mb-8 ${
        visibleSections.has('section4') ? 'animate-slide-up animation-delay-200' : 'opacity-0'
      }`}>
        <img 
          src="/lovable-uploads/0058b61c-f766-49ff-a2b5-b2795bbaacbf.png" 
          alt="Funny moments" 
          className="w-36 h-48 md:w-42 md:h-56 object-cover rounded-2xl border-2 border-primary/30 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* The following Card component, which contained the "Upload More Memes" section,
        has been completely removed as per your request.
      */}
      {/* <Card className={`celebration-card p-8 mb-8 ${
        visibleSections.has('section4') ? 'animate-slide-up animation-delay-300' : 'opacity-0'
      }`}>
        <div className="text-center mb-6">
          <p className="text-lg birthday-text font-semibold mb-4">Upload More Memes</p>
          <Input
            type="file"
            accept="image/
            multiple
            onChange={onImageUpload}
            className="max-w-md mx-auto"
          />
        </div>
      </Card> */}

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

      {uploadedImages.length === 0 && (
        <div className={`text-center ${
          visibleSections.has('section4') ? 'animate-slide-up animation-delay-500' : 'opacity-0'
        }`}>
          <div className="aspect-video bg-gradient-to-br from-muted to-accent/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📷</div>
              <p className="text-xl birthday-text font-semibold">Waiting for your amazing photos!</p>
              <p className="text-muted-foreground mt-2">Upload multiple images to create a scrollable gallery</p>
            </div>
          </div>
        </div>
      )}
    </div>
  </section>
);

export default PhotoGallery;