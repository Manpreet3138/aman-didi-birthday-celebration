import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RefObject } from 'react';

interface VideoSectionProps {
  visibleSections: Set<string>;
  uploadedVideo: string | null;
  videoRef: RefObject<HTMLVideoElement>;
  onVideoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const VideoSection = ({ visibleSections, uploadedVideo, videoRef, onVideoUpload }: VideoSectionProps) => (
  <section id="gallery" className="min-h-screen flex items-center justify-center py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className={`text-4xl md:text-5xl font-bold birthday-text mb-12 ${
        visibleSections.has('gallery') ? 'animate-slide-up' : 'opacity-0'
      }`}>
        Special Moments 🎬
      </h2>
      
      {/* Special moments sticker */}
      <div className={`flex justify-center mb-8 ${
        visibleSections.has('gallery') ? 'animate-slide-up animation-delay-300' : 'opacity-0'
      }`}>
        <img 
          src="/lovable-uploads/154f73af-b3dd-4f09-a3a6-2a232d1ebd6c.png" 
          alt="Special family moments" 
          className="w-54 h-36 md:w-72 md:h-48 object-cover rounded-2xl border-2 border-primary/30 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <Card className={`celebration-card p-8 ${
        visibleSections.has('gallery') ? 'animate-slide-up animation-delay-500' : 'opacity-0'
      }`}>
        {uploadedVideo ? (
          <div className="bg-black rounded-lg overflow-hidden flex items-center justify-center min-h-[400px]">
            <video
              ref={videoRef}
              className="max-w-full max-h-[70vh] object-contain"
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
                onChange={onVideoUpload}
                className="max-w-xs mx-auto"
              />
            </div>
          </div>
        )}
      </Card>
    </div>
  </section>
);

export default VideoSection;