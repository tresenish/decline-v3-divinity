import { useEffect, useRef, useState, type RefObject } from 'react';

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export type UseRevealOnScrollOptions = {
  threshold?: number;
  rootMargin?: string;
};

/**
 * Reveals only when the section actually enters the viewport.
 * No time-based fallback — sitting on the hero must not reveal sections below.
 * Reveals immediately if the browser lacks IntersectionObserver or if the ref
 * never attaches (genuine failure modes, not a blind timer).
 */
export function useRevealOnScroll(options: UseRevealOnScrollOptions = {}): {
  ref: RefObject<HTMLDivElement | null>;
  isRevealed: boolean;
} {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (prefersReducedMotion()) {
      setIsRevealed(true);
      return;
    }

    if (typeof window === 'undefined' || typeof window.IntersectionObserver === 'undefined') {
      setIsRevealed(true);
      return;
    }

    const el = ref.current;
    if (!el) {
      setIsRevealed(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isRevealed };
}
