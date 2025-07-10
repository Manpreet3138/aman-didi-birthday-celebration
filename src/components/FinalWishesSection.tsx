import { Card } from "@/components/ui/card";

interface FinalWishesSectionProps {
  visibleSections: Set<string>;
}

const FinalWishesSection = ({ visibleSections }: FinalWishesSectionProps) => (
  <section id="section5" className="min-h-screen flex items-center justify-center py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className={`text-4xl md:text-5xl font-bold birthday-text mb-12 ${
        visibleSections.has('section5') ? 'animate-slide-up' : 'opacity-0'
      }`}>
        Best Wishes for Your Future ✨
      </h2>
      
      {/* Best wishes sticker */}
      <div className={`flex justify-center mb-8 ${
        visibleSections.has('section5') ? 'animate-slide-up animation-delay-200' : 'opacity-0'
      }`}>
        <img 
          src="/lovable-uploads/9acdc1be-390e-4c04-bedc-5ecd97d3fefe.png" 
          alt="Best wishes" 
          className="w-56 h-32 md:w-64 md:h-36 object-cover rounded-lg border-2 border-primary/30 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <Card className={`celebration-card p-8 mb-8 ${
        visibleSections.has('section5') ? 'animate-slide-up animation-delay-300' : 'opacity-0'
      }`}>
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