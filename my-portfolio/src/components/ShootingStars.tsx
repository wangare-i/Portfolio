function ShootingStars() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="shooting-star absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`, // Limit stars to top half
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
}

export default ShootingStars;
