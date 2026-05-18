import { useEffect, useRef, useState, useCallback } from 'react';

export function useSlideReveal(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Only apply on desktop
    if (window.innerWidth <= 1024) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when scrolling away for re-animation
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
