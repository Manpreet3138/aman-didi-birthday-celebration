interface BirthdayCakeProps {
  cakeSliced: boolean;
  onCakeClick: () => void;
}

const BirthdayCake = ({ cakeSliced, onCakeClick }: BirthdayCakeProps) => (
  <div className="flex flex-col items-center mt-8 cursor-pointer" onClick={onCakeClick}>
    <div className="relative">
      <div className={`cake-container ${cakeSliced ? 'sliced' : ''}`}>
        {cakeSliced ? (
          // Show 8 separate cake pieces flying apart
          [...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`cake-piece-separate piece-${i} animate-slice`}
              style={{
                animationDelay: `${i * 0.15}s`,
                filter: 'hue-rotate(25deg) saturate(1.8) brightness(0.9) contrast(1.2)',
                textShadow: '0 0 15px rgba(255, 182, 193, 0.8)'
              }}
            >
              🍰
            </div>
          ))
        ) : (
          // Show whole cake with darker, more vibrant styling
          <div className="whole-cake text-8xl filter drop-shadow-lg" style={{
            filter: 'hue-rotate(15deg) saturate(2) brightness(0.8) contrast(1.3)',
            textShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 105, 180, 0.6)'
          }}>
            🎂
          </div>
        )}
      </div>
      <div className="text-center mt-4">
        <p className="text-lg birthday-text font-semibold">
          {cakeSliced ? "Make a wish! 🌟" : "Click the cake! 🎂"}
        </p>
      </div>
    </div>
  </div>
);

export default BirthdayCake;