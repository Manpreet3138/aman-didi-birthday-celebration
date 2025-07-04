const FlyingBalloons = () => (
  <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute text-3xl animate-fly-balloon"
        style={{
          left: `${10 + i * 12}%`,
          animationDelay: `${i * 0.8}s`,
        }}
      >
        🎈
      </div>
    ))}
  </div>
);

export default FlyingBalloons;