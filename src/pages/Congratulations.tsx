import { useRef } from 'react';
import CongratulationsSection from '@/components/CongratulationsSection';

interface CongratulationsProps {
  visibleSections: Set<string>;
}

const Congratulations = ({ visibleSections }: CongratulationsProps) => {
  const audioRef = useRef(null);

  return (
    <CongratulationsSection 
      visibleSections={visibleSections}
      audioPlaying={false}
      audioRef={audioRef}
    />
  );
};

export default Congratulations;