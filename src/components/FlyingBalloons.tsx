const balloonColors = ['🎈', '🟣', '🔵', '🟢', '🟡', '🟠', '❤️', '💜'];
const balloonEmojis = ['🎈', '🎀', '🌟', '✨', '🎊', '🎉'];

const FlyingBalloons = () => (
  <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
    {[...Array(12)].map((_, i) => {
      const randomEmoji = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
      const randomLeft = Math.random() * 90 + 5; // 5% to 95%
      const randomDelay = Math.random() * 3; // 0 to 3 seconds
      const randomDuration = 6 + Math.random() * 4; // 6 to 10 seconds
      
      return (
        <div
          key={i}
          className="absolute text-3xl animate-fly-balloon"
          style={{
            left: `${randomLeft}%`,
            animationDelay: `${randomDelay}s`,
            animationDuration: `${randomDuration}s`,
            filter: `hue-rotate(${Math.random() * 360}deg) saturate(1.5) brightness(1.2)`,
          }}
        >
          {randomEmoji}
        </div>
      );
    })}
  </div>
);

export default FlyingBalloons;