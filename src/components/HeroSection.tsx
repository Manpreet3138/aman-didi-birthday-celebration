import BirthdayCake from './BirthdayCake';

interface HeroSectionProps {
  visibleSections: Set<string>;
  cakeSliced: boolean;
  onCakeClick: () => void;
}

const HeroSection = ({ visibleSections, cakeSliced, onCakeClick }: HeroSectionProps) => (
  <section id="hero" className="min-h-screen flex items-center justify-center relative">
    <div className="text-center z-20 px-4 max-w-4xl mx-auto">
      <h1 className={`text-6xl md:text-8xl font-bold mb-8 birthday-text animate-bounce-in ${
        visibleSections.has('hero') ? 'animate-tada' : ''
      }`}>
        Happy Birthday
      </h1>
      <h2 className="text-4xl md:text-6xl font-semibold text-accent mb-12 animate-bounce-in animation-delay-500">
        Aman Didi! 🎉
      </h2>
      
      {/* Birthday sticker */}
      <div className="flex justify-center mb-8">
        <img 
          src="/lovable-uploads/6920d9af-fd39-4e72-9b7b-9ab87d1fab47.png" 
          alt="Aman Didi" 
          className="w-36 h-48 md:w-42 md:h-56 object-cover rounded-2xl border-4 border-primary/30 shadow-lg animate-bounce-in animation-delay-700 hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex justify-center space-x-4 text-4xl animate-bounce-in animation-delay-1000">
        <span className="animate-float animation-delay-200">🎂</span>
        <span className="animate-float animation-delay-400">🎈</span>
        <span className="animate-float animation-delay-600">🎊</span>
        <span className="animate-float animation-delay-800">🎁</span>
        <span className="animate-float animation-delay-1000">✨</span>
      </div>
      
      <BirthdayCake cakeSliced={cakeSliced} onCakeClick={onCakeClick} />
    </div>
    
    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
        <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-float"></div>
      </div>
    </div>
  </section>
);

export default HeroSection;