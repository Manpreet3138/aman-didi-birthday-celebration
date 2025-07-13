import { Card } from "@/components/ui/card";
import { useState, useEffect } from 'react'; // Re-import useState and useEffect

interface VideoSectionProps {
  visibleSections: Set<string>;
}

const VideoSection = ({ visibleSections }: VideoSectionProps) => {
  // Your Cloudinary video URL that was working
  const myCloudVideoUrl = "https://res.cloudinary.com/dot8ky1xl/video/upload/v1752406343/InShot_20250704_175157382_gybwel.mp4"; 
  
  const [blobVideoUrl, setBlobVideoUrl] = useState<string | null>(null); // State to store the Blob URL

  useEffect(() => {
    const fetchVideoAsBlob = async () => {
      try {
        const response = await fetch(myCloudVideoUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Optional: Log content length for debugging
        const contentLength = response.headers.get('Content-Length');
        console.log("Content-Length header:", contentLength ? `${contentLength} bytes` : "Not available");

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setBlobVideoUrl(url);

        // Optional: Log blob size for debugging
        console.log("Video fetched. Blob size:", blob.size, "bytes");
        if (contentLength && blob.size !== parseInt(contentLength)) {
            console.warn("WARNING: Blob size does not match Content-Length. File might be incomplete.");
        } else if (contentLength) {
            console.log("Is full file fetched?", blob.size === parseInt(contentLength));
        }

      } catch (error) {
        console.error("Error fetching video as blob:", error);
        setBlobVideoUrl(null); // Set to null so the fallback message is shown
      }
    };

    if (myCloudVideoUrl) {
      fetchVideoAsBlob();
    }

    // Cleanup function: revoke the Object URL when the component unmounts
    // to free up memory and resources.
    // The cleanup will now only depend on the component unmounting or myCloudVideoUrl changing,
    // making the blobVideoUrl more stable during component renders.
    return () => {
      if (blobVideoUrl) {
        URL.revokeObjectURL(blobVideoUrl);
      }
    };
  }, [myCloudVideoUrl]); // DEPENDENCY ARRAY CHANGED: Removed blobVideoUrl from dependencies

  return (
    <section id="gallery" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl md::text-5xl font-bold birthday-text mb-12 ${
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
            className="w-54 h-36 md:w-72 md:h-48 object-contain rounded-2xl border-2 border-primary/30 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <Card className={`celebration-card p-8 ${
          visibleSections.has('gallery') ? 'animate-slide-up animation-delay-500' : 'opacity-0'
        }`}>
          {/* Render the video player using the blob URL if it's available */}
          {blobVideoUrl ? (
            <div className="bg-black rounded-lg overflow-hidden flex items-center justify-center min-h-[400px]">
              <video
                className="max-w-full max-h-[70vh] object-contain"
                controls
                muted
                loop
                autoPlay // Optional: video starts playing automatically
                playsInline // Important for iOS to play inline, not fullscreen
              >
                <source src={blobVideoUrl} type="video/mp4" /> {/* Use the blob URL here */}
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            // Fallback message while video is loading or if there's an error
            <div className="aspect-video bg-gradient-to-br from-muted to-accent/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary">
              <div className="text-center">
                <div className="text-6xl mb-4">🎥</div>
                <p className="text-xl birthday-text font-semibold">Loading video...</p>
                <p className="text-muted-foreground mt-2">Please wait or check your network connection.</p>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* The Avatar element and its associated text/logic have been removed */}
    </section>
  );
};

export default VideoSection;
