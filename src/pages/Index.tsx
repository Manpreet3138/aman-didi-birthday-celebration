import { useEffect, useState, useRef } from 'react';
import FlyingBalloons from '@/components/FlyingBalloons';
import Hero from '@/pages/Hero';
import Congratulations from '@/pages/Congratulations';
import Video from '@/pages/Video';
import Gallery from '@/pages/Gallery';
import FinalWishes from '@/pages/FinalWishes';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2 } from 'lucide-react';

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[hsl(var(--birthday-pink)/0.05)] to-[hsl(var(--birthday-purple)/0.08)] overflow-x-hidden">
      <audio
        ref={audioRef}
        src="/background-song.mp3"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      {/* Audio Controls */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={toggleAudio}
          variant="outline"
          size="icon"
          className="bg-background/80 backdrop-blur-sm border-[hsl(var(--birthday-pink)/0.3)] hover:bg-[hsl(var(--birthday-pink)/0.1)]"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-[hsl(var(--birthday-pink))]" />
          ) : (
            <Play className="h-4 w-4 text-[hsl(var(--birthday-pink))]" />
          )}
        </Button>
      </div>

      <FlyingBalloons />
      <Hero visibleSections={visibleSections} />
      <Congratulations visibleSections={visibleSections} />
      <Video visibleSections={visibleSections} />
      <Gallery visibleSections={visibleSections} />
      <FinalWishes visibleSections={visibleSections} />
    </div>
  );
};

export default Index;