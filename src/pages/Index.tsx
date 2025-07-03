import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const playBirthdaySong = () => {
    if (!audioPlaying) {
      // Create audio element for birthday song
      const audio = new Audio();
      audio.src = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmgbBjiR2O/AciQFJnXH8N6QQgkTV7Xs7axUFApFn+Dzvmhi..."; // Placeholder for actual audio
      audio.play().catch(() => {
        // Fallback for browsers that require user interaction
        console.log("Audio playback requires user interaction");
      });
      setAudioPlaying(true);
      setTimeout(() => setAudioPlaying(false), 30000); // Reset after 30 seconds
    }
  };

  // Flying balloons component
  const FlyingBalloons = () => (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="balloon absolute w-12 h-16 rounded-full animate-fly-balloon"
          style={{
            left: `${10 + i * 12}%`,
            animationDelay: `${i * 0.8}s`,
            backgroundColor: [
              'hsl(var(--birthday-pink))',
              'hsl(var(--birthday-gold))',
              'hsl(var(--birthday-purple))',
              'hsl(var(--birthday-blue))',
              'hsl(var(--birthday-green))',
              'hsl(var(--birthday-red))',
            ][i % 6],
          }}
        >
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gray-400"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-[hsl(var(--birthday-pink)/0.1)] overflow-x-hidden">
      <FlyingBalloons />
      
      {/* Section 1: Hero Birthday Message */}
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
          <div className="flex justify-center space-x-4 text-4xl animate-bounce-in animation-delay-1000">
            <span className="animate-float animation-delay-200">🎂</span>
            <span className="animate-float animation-delay-400">🎈</span>
            <span className="animate-float animation-delay-600">🎊</span>
            <span className="animate-float animation-delay-800">🎁</span>
            <span className="animate-float animation-delay-1000">✨</span>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-float"></div>
          </div>
        </div>
      </section>

      {/* Section 2: Congratulations & Song */}
      <section id="congratulations" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className={`celebration-card p-8 md:p-12 mb-12 ${
            visibleSections.has('congratulations') ? 'animate-slide-up' : 'opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold birthday-text mb-8">
              Congratulations! 🎊
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Celebrating your amazing <span className="birthday-text font-bold">28th birthday</span>! 
              May this new year of your life be filled with joy, love, laughter, and countless beautiful moments.
            </p>
            
            <div className="bg-muted rounded-lg p-6 mb-8">
              <blockquote className="text-lg md:text-xl italic text-foreground">
                "Count your age by friends, not years. Count your life by smiles, not tears. 
                And with friends like you, life is beautiful every day!"
              </blockquote>
              <cite className="block mt-4 text-sm text-muted-foreground">— Birthday Wishes for Aman Didi</cite>
            </div>

            <Button 
              onClick={playBirthdaySong}
              className={`bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-lg px-8 py-3 rounded-full transition-all duration-300 ${
                audioPlaying ? 'animate-pulse' : ''
              }`}
              size="lg"
            >
              🎵 {audioPlaying ? 'Playing Birthday Song!' : 'Play Birthday Song!'} 🎵
            </Button>
          </Card>
        </div>
      </section>

      {/* Section 3: Image Gallery Placeholder */}
      <section id="gallery" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold birthday-text text-center mb-12 ${
            visibleSections.has('gallery') ? 'animate-slide-up' : 'opacity-0'
          }`}>
            Memory Lane 📸
          </h2>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
            visibleSections.has('gallery') ? 'animate-slide-up animation-delay-500' : 'opacity-0'
          }`}>
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="celebration-card p-4 hover:scale-105 transition-transform duration-300">
                <div className="aspect-square bg-gradient-to-br from-muted to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="text-sm text-muted-foreground">Image Placeholder {i + 1}</p>
                    <p className="text-xs text-muted-foreground mt-1">Ready for your photos!</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              This section is ready for your beautiful memories! 
              <br />
              <span className="text-sm">Upload your favorite photos to see them come to life here ✨</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: (Incomplete - waiting for user input) */}
      <section id="section4" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className={`celebration-card p-8 md:p-12 ${
            visibleSections.has('section4') ? 'animate-slide-up' : 'opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold birthday-text mb-8">
              Section 4 🎭
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              This section is waiting for your creative ideas!
            </p>
            <div className="text-6xl mb-4">🎨</div>
            <p className="text-lg text-muted-foreground">
              What would you like to add here? More wishes? Games? Special message?
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;