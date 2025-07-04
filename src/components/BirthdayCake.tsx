interface BirthdayCakeProps {
  cakeSliced: boolean;
  onCakeClick: () => void;
}

const BirthdayCake = ({ cakeSliced, onCakeClick }: BirthdayCakeProps) => (
  <div className="flex flex-col items-center mt-8 cursor-pointer" onClick={onCakeClick}>
    <div className="relative">
      <div className={`cake-container ${cakeSliced ? 'sliced' : ''}`}>
        {cakeSliced ? (
          // Show 4 separate cake pieces flying apart
          [...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`cake-piece-separate piece-${i} animate-slice`}
              style={{
                animationDelay: `${i * 0.15}s`
              }}
            >
              🍰
            </div>
          ))
        ) : (
          // Show whole cake
          <div className="whole-cake text-8xl">
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