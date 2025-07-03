import { useEffect, useState, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
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

  // Birthday Cake Component
  const BirthdayCake = () => (
    <div className="flex flex-col items-center mt-8 cursor-pointer" onClick={handleCakeClick}>
      <div className="relative">
        <div className={`cake-container ${cakeSliced ? 'sliced' : ''}`}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`cake-piece piece-${i} ${cakeSliced ? 'animate-slice' : ''}`}
              style={{
                animationDelay: `${i * 0.1}s`
              }}
            >
              🍰
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-lg birthday-text font-semibold">
            {cakeSliced ? "Make a wish! 🌟" : "Click the cake! 🎂"}
          </p>
        </div>
      </div>
    </div>
  );

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
          
          <BirthdayCake />
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

      {/* Section 3: Video Upload */}
      <section id="gallery" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold birthday-text mb-12 ${
            visibleSections.has('gallery') ? 'animate-slide-up' : 'opacity-0'
          }`}>
            Special Moments 🎬
          </h2>
          
          <Card className={`celebration-card p-8 ${
            visibleSections.has('gallery') ? 'animate-slide-up animation-delay-500' : 'opacity-0'
          }`}>
            {uploadedVideo ? (
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  muted
                  loop
                >
                  <source src={uploadedVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="aspect-video bg-gradient-to-br from-muted to-accent/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-xl birthday-text font-semibold mb-4">Upload a Special Video</p>
                  <p className="text-muted-foreground mb-6">Share a beautiful memory that will auto-play when scrolled</p>
                  <Input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="max-w-xs mx-auto"
                  />
                </div>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Section 4: Memes and Photos Gallery */}
      <section id="section4" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold birthday-text text-center mb-12 ${
            visibleSections.has('section4') ? 'animate-slide-up' : 'opacity-0'
          }`}>
            Memories & Memes 😄
          </h2>
          
          <Card className={`celebration-card p-8 mb-8 ${
            visibleSections.has('section4') ? 'animate-slide-up animation-delay-300' : 'opacity-0'
          }`}>
            <div className="text-center mb-6">
              <p className="text-lg birthday-text font-semibold mb-4">Upload Photos & Memes</p>
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="max-w-md mx-auto"
              />
            </div>
          </Card>

          {uploadedImages.length > 0 && (
            <div className={`${
              visibleSections.has('section4') ? 'animate-slide-up animation-delay-500' : 'opacity-0'
            }`}>
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent className="-ml-4">
                  {uploadedImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="celebration-card p-2">
                        <div className="aspect-square">
                          <img
                            src={image}
                            alt={`Memory ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          )}

          {uploadedImages.length === 0 && (
            <div className={`text-center ${
              visibleSections.has('section4') ? 'animate-slide-up animation-delay-500' : 'opacity-0'
            }`}>
              <div className="aspect-video bg-gradient-to-br from-muted to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📷</div>
                  <p className="text-xl birthday-text font-semibold">Waiting for your amazing photos!</p>
                  <p className="text-muted-foreground mt-2">Upload multiple images to create a scrollable gallery</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 5: Final Video and Quotes */}
      <section id="section5" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold birthday-text mb-12 ${
            visibleSections.has('section5') ? 'animate-slide-up' : 'opacity-0'
          }`}>
            Best Wishes for Your Future ✨
          </h2>
          
          <Card className={`celebration-card p-8 mb-8 ${
            visibleSections.has('section5') ? 'animate-slide-up animation-delay-300' : 'opacity-0'
          }`}>
            {uploadedEndVideo ? (
              <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
                <video
                  ref={endVideoRef}
                  className="w-full h-full object-cover"
                  controls
                  muted
                  loop
                >
                  <source src={uploadedEndVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="aspect-video bg-gradient-to-br from-muted to-accent/20 rounded-lg flex items-center justify-center border-2 border-dashed border-accent mb-6">
                <div className="text-center">
                  <div className="text-5xl mb-4">🎥</div>
                  <p className="text-lg birthday-text font-semibold mb-4">Upload Final Special Video</p>
                  <Input
                    type="file"
                    accept="video/*"
                    onChange={handleEndVideoUpload}
                    className="max-w-xs mx-auto"
                  />
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-6">
                <blockquote className="text-lg md:text-xl italic text-foreground">
                  "As you blow out the candles on your cake, may all your wishes come true. 
                  May this new year of life bring you endless happiness, success, and beautiful adventures!"
                </blockquote>
                <cite className="block mt-4 text-sm text-muted-foreground">— Future Blessings</cite>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
                <blockquote className="text-lg md:text-xl italic text-foreground">
                  "May your path be filled with sunshine, your heart with joy, and your life with laughter. 
                  Here's to another year of making incredible memories and achieving amazing dreams!"
                </blockquote>
                <cite className="block mt-4 text-sm text-muted-foreground">— With Love & Best Wishes</cite>
              </div>

              <div className="bg-secondary/20 rounded-lg p-6">
                <blockquote className="text-lg md:text-xl italic text-foreground">
                  "Life is a journey, and every birthday is a milestone. 
                  May this milestone mark the beginning of the most wonderful chapter of your life yet!"
                </blockquote>
                <cite className="block mt-4 text-sm text-muted-foreground">— Always & Forever</cite>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;