import { Card } from "@/components/ui/card";
import { RefObject } from 'react';

interface CongratulationsSectionProps {
  visibleSections: Set<string>;
  audioPlaying: boolean;
  audioRef: RefObject<HTMLAudioElement>;
}

const CongratulationsSection = ({ visibleSections, audioPlaying, audioRef }: CongratulationsSectionProps) => (
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

        <div className={`text-lg px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold ${
          audioPlaying ? 'animate-pulse' : ''
        }`}>
          🎵 {audioPlaying ? 'Playing Birthday Song!' : 'Song will play automatically!'} 🎵
        </div>
        
        <audio
          ref={audioRef}
          loop
          className="hidden"
        >
          <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </Card>
    </div>
  </section>
);

export default CongratulationsSection;