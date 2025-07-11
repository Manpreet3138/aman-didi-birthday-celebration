import { useState } from 'react';
import PhotoGallery from '@/components/PhotoGallery';

interface GalleryProps {
  visibleSections: Set<string>;
}

const Gallery = ({ visibleSections }: GalleryProps) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const imageUrls = files.map((file: File) => URL.createObjectURL(file));
    setUploadedImages(prev => [...prev, ...imageUrls]);
  };

  return (
    <PhotoGallery 
      visibleSections={visibleSections}
      uploadedImages={uploadedImages}
      onImageUpload={handleImageUpload}
    />
  );
};

export default Gallery;