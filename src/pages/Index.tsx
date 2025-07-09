import { useEffect, useState } from 'react';
import FlyingBalloons from '@/components/FlyingBalloons';
import MovingCharacter from '@/components/MovingCharacter';
import Hero from '@/pages/Hero';
import Congratulations from '@/pages/Congratulations';
import Video from '@/pages/Video';
import Gallery from '@/pages/Gallery';
import FinalWishes from '@/pages/FinalWishes';

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

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


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[hsl(var(--birthday-pink)/0.05)] to-[hsl(var(--birthday-purple)/0.08)] overflow-x-hidden">
      <MovingCharacter />
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