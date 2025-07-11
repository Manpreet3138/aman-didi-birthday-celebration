import { useState } from 'react';
import PhotoGallery from '@/components/PhotoGallery';

interface GalleryProps {
  visibleSections: Set<string>;
}

const Gallery = ({ visibleSections }: GalleryProps) => {
  // Local meme images
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
  
  const [uploadedImages] = useState<string[]>(defaultMemes);

  return (
    <PhotoGallery 
      visibleSections={visibleSections}
      uploadedImages={uploadedImages}
    />
  );
};

export default Gallery;