import { useState, useRef, useEffect } from 'react';
import './ClientsCarousel.css';

function ClientsCarousel({ clients }) {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;
    const containerWidth = scrollContainer.scrollWidth / 2;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= containerWidth) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div
      className="clients-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="scroll-container" ref={scrollContainerRef}>
        {[...clients, ...clients].map((client, index) => (
          <div key={`${client.id}-${index}`} className="carousel-item">
            <img src={client.logo} alt={client.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientsCarousel;
