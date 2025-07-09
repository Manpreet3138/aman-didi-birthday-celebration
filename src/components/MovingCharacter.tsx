import { useEffect, useState } from 'react';

const MovingCharacter = () => {
  const [position, setPosition] = useState(-100);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      setPosition(-100);
      animateCharacter();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const animateCharacter = () => {
    const duration = 15000; // 15 seconds to cross the screen
    const startTime = Date.now();
    const startPosition = -100;
    const endPosition = window.innerWidth + 100;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth movement
      const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const easedProgress = easeInOut(progress);
      
      const currentPosition = startPosition + (endPosition - startPosition) * easedProgress;
      setPosition(currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Reset and restart animation
        setTimeout(() => {
          setPosition(-100);
          animateCharacter();
        }, 3000); // 3 second pause before restarting
      }
    };

    requestAnimationFrame(animate);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-4 z-50 transition-transform duration-100"
      style={{ 
        left: `${position}px`,
        transform: 'scale(0.8)',
      }}
    >
      <div className="relative">
        {/* Character image with festive border and glow effect */}
        <div className="relative w-24 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-[hsl(var(--birthday-pink))] to-[hsl(var(--birthday-purple))] shadow-lg shadow-[hsl(var(--birthday-pink)/0.5)]">
          <img 
            src="/lovable-uploads/d2eb421e-6ab5-437b-82a6-eb4658b84024.png"
            alt="Birthday Character"
            className="w-full h-full object-cover object-center"
          />
          {/* Festive sparkle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10"></div>
        </div>
        
        {/* Floating heart animation */}
        <div className="absolute -top-2 -right-2 text-[hsl(var(--birthday-pink))] animate-bounce">
          ❤️
        </div>
        
        {/* Walking motion effect */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-[hsl(var(--birthday-purple))] rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-[hsl(var(--birthday-pink))] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-[hsl(var(--birthday-purple))] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingCharacter;