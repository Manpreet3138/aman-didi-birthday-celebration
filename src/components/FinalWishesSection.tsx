import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RefObject } from 'react';

interface FinalWishesSectionProps {
  visibleSections: Set<string>;
  uploadedEndVideo: string | null;
  endVideoRef: RefObject<HTMLVideoElement>;
  onEndVideoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FinalWishesSection = ({ visibleSections, uploadedEndVideo, endVideoRef, onEndVideoUpload }: FinalWishesSectionProps) => (
  <section id="section5" className="min-h-screen flex items-center justify-center py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className={`text-4xl md:text-5xl font-bold birthday-text mb-12 ${
        visibleSections.has('section5') ? 'animate-slide-up' : 'opacity-0'
      }`}>
        Best Wishes for Your Future ✨
      </h2>
      
      <Card className={`celebration-card p-8 mb-8 ${
        visibleSections.has('section5') ? 'animate-slide-up animation-delay-300' : 'opacity-0'
      }`}>
        {uploadedEndVideo ? (
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
            <video
              ref={endVideoRef}
              className="w-full h-full object-cover"
              controls
              muted
              loop
            >
              <source src={uploadedEndVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div className="aspect-video bg-gradient-to-br from-muted to-accent/20 rounded-lg flex items-center justify-center border-2 border-dashed border-accent mb-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🎥</div>
              <p className="text-lg birthday-text font-semibold mb-4">Upload Final Special Video</p>
              <Input
                type="file"
                accept="video/*"
                onChange={onEndVideoUpload}
                className="max-w-xs mx-auto"
              />
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div className="bg-muted rounded-lg p-6">
            <blockquote className="text-lg md:text-xl italic text-foreground">
              "As you blow out the candles on your cake, may all your wishes come true. 
              May this new year of life bring you endless happiness, success, and beautiful adventures!"
            </blockquote>
            <cite className="block mt-4 text-sm text-muted-foreground">— Future Blessings</cite>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
            <blockquote className="text-lg md:text-xl italic text-foreground">
              "May your path be filled with sunshine, your heart with joy, and your life with laughter. 
              Here's to another year of making incredible memories and achieving amazing dreams!"
            </blockquote>
            <cite className="block mt-4 text-sm text-muted-foreground">— With Love & Best Wishes</cite>
          </div>

          <div className="bg-secondary/20 rounded-lg p-6">
            <blockquote className="text-lg md:text-xl italic text-foreground">
              "Life is a journey, and every birthday is a milestone. 
              May this milestone mark the beginning of the most wonderful chapter of your life yet!"
            </blockquote>
            <cite className="block mt-4 text-sm text-muted-foreground">— Always & Forever</cite>
          </div>
        </div>
      </Card>
    </div>
  </section>
);

export default FinalWishesSection;