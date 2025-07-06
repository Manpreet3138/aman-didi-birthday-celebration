import { useEffect, useState, useRef } from 'react';
import FlyingBalloons from '@/components/FlyingBalloons';
import HeroSection from '@/components/HeroSection';
import CongratulationsSection from '@/components/CongratulationsSection';
import VideoSection from '@/components/VideoSection';
import PhotoGallery from '@/components/PhotoGallery';
import FinalWishesSection from '@/components/FinalWishesSection';

const Index = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [backgroundMusicPlaying, setBackgroundMusicPlaying] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [cakeSliced, setCakeSliced] = useState(false);
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);
  
  // Add default meme images
  const defaultMemes = [
    '/lovable-uploads/889669f0-046c-4ab7-957c-a54fc069465a.png',
    '/lovable-uploads/0fa66439-17cf-427c-909e-2b591853e249.png',
    '/lovable-uploads/3c1da0b6-b3b5-476f-971d-bfd9a243fe8f.png',
    '/lovable-uploads/d70039e4-255c-4b02-a5de-42242093b960.png',
    '/lovable-uploads/b49bd606-f6fe-4c65-aecd-9972bed53b6e.png',
    '/lovable-uploads/3f7dceac-956e-4336-8b4c-6a9575794706.png',
    '/lovable-uploads/d8c5e4d2-669f-46c0-9d34-4baf7efde17f.png',
    '/lovable-uploads/9bd72442-5cd2-429c-8dbd-798a1b4e632f.png'
  ];
  
  const [uploadedImages, setUploadedImages] = useState<string[]>(defaultMemes);
  const audioRef = useRef(null);
  const backgroundMusicRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
            
            // Auto-play birthday song when congratulations section is visible
            if (entry.target.id === 'congratulations' && !audioPlaying) {
              playBirthdaySong();
            }
            
            // Start background music when hero section is visible
            if (entry.target.id === 'hero' && !backgroundMusicPlaying) {
              playBackgroundMusic();
            }
            
            // Auto-play videos when sections are visible
            if (entry.target.id === 'gallery' && videoRef.current) {
              videoRef.current.play().catch(console.log);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [audioPlaying, backgroundMusicPlaying]);

  const playBirthdaySong = () => {
    if (!audioPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Audio playback requires user interaction");
      });
      setAudioPlaying(true);
      setTimeout(() => setAudioPlaying(false), 30000);
    }
  };

  const playBackgroundMusic = () => {
    if (!backgroundMusicPlaying && backgroundMusicRef.current) {
      backgroundMusicRef.current.play().catch(() => {
        console.log("Background music playback requires user interaction");
      });
      setBackgroundMusicPlaying(true);
    }
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create a permanent copy in public folder
      const reader = new FileReader();
      reader.onload = (e) => {
        const videoData = e.target?.result as string;
        setUploadedVideo(videoData);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const imageUrls = files.map((file: File) => URL.createObjectURL(file));
    setUploadedImages(prev => [...prev, ...imageUrls]);
  };

  const handleCakeClick = () => {
    setCakeSliced(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[hsl(var(--birthday-pink)/0.05)] to-[hsl(var(--birthday-purple)/0.08)] overflow-x-hidden">
      <FlyingBalloons />
      <HeroSection 
        visibleSections={visibleSections}
        cakeSliced={cakeSliced}
        onCakeClick={handleCakeClick}
      />
      <CongratulationsSection 
        visibleSections={visibleSections}
        audioPlaying={audioPlaying}
        audioRef={audioRef}
      />
      <VideoSection 
        visibleSections={visibleSections}
        uploadedVideo={uploadedVideo}
        videoRef={videoRef}
        onVideoUpload={handleVideoUpload}
      />
      <PhotoGallery 
        visibleSections={visibleSections}
        uploadedImages={uploadedImages}
        onImageUpload={handleImageUpload}
      />
      <FinalWishesSection 
        visibleSections={visibleSections}
      />
      
      {/* Background Music */}
      <audio
        ref={backgroundMusicRef}
        loop
        className="hidden"
        preload="auto"
      >
        <source src="/background-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Index;