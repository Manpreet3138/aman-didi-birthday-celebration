import { useState, useRef } from 'react';
import VideoSection from '@/components/VideoSection';

interface VideoProps {
  visibleSections: Set<string>;
}

const Video = ({ visibleSections }: VideoProps) => {
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);
  const videoRef = useRef(null);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const videoData = e.target?.result as string;
        setUploadedVideo(videoData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <VideoSection 
      visibleSections={visibleSections}
      uploadedVideo={uploadedVideo}
      videoRef={videoRef}
      onVideoUpload={handleVideoUpload}
    />
  );
};

export default Video;