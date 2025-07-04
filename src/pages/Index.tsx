import { useEffect, useState, useRef } from 'react';
import FlyingBalloons from '@/components/FlyingBalloons';
import HeroSection from '@/components/HeroSection';
import CongratulationsSection from '@/components/CongratulationsSection';
import VideoSection from '@/components/VideoSection';
import PhotoGallery from '@/components/PhotoGallery';
import FinalWishesSection from '@/components/FinalWishesSection';

const Index = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [cakeSliced, setCakeSliced] = useState(false);
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);
  const [uploadedEndVideo, setUploadedEndVideo] = useState<string | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const endVideoRef = useRef(null);

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
            
            // Auto-play videos when sections are visible
            if (entry.target.id === 'gallery' && videoRef.current) {
              videoRef.current.play().catch(console.log);
            }
            
            if (entry.target.id === 'section5' && endVideoRef.current) {
              endVideoRef.current.play().catch(console.log);
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
  }, [audioPlaying]);

  const playBirthdaySong = () => {
    if (!audioPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Audio playback requires user interaction");
      });
      setAudioPlaying(true);
      setTimeout(() => setAudioPlaying(false), 30000);
    }
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setUploadedVideo(videoUrl);
    }
  };

  const handleEndVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setUploadedEndVideo(videoUrl);
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
        uploadedEndVideo={uploadedEndVideo}
        endVideoRef={endVideoRef}
        onEndVideoUpload={handleEndVideoUpload}
      />
    </div>
  );
};

export default Index;