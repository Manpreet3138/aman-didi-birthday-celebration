import { useState } from 'react';
import HeroSection from '@/components/HeroSection';

interface HeroProps {
  visibleSections: Set<string>;
}

const Hero = ({ visibleSections }: HeroProps) => {
  const [cakeSliced, setCakeSliced] = useState(false);

  const handleCakeClick = () => {
    setCakeSliced(true);
  };

  return (
    <HeroSection 
      visibleSections={visibleSections}
      cakeSliced={cakeSliced}
      onCakeClick={handleCakeClick}
    />
  );
};

export default Hero;