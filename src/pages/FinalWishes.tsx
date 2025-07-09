import FinalWishesSection from '@/components/FinalWishesSection';

interface FinalWishesProps {
  visibleSections: Set<string>;
}

const FinalWishes = ({ visibleSections }: FinalWishesProps) => {
  return (
    <FinalWishesSection 
      visibleSections={visibleSections}
    />
  );
};

export default FinalWishes;