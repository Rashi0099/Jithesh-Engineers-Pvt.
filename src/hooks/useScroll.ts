import { useState, useEffect, useRef } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolled: boolean;
}

/**
 * Custom hook to track window scroll position and direction with high performance.
 * Utilizes requestAnimationFrame and selective state dispatch to eliminate re-render thrashing.
 * @param threshold Pixel threshold to toggle `isScrolled` (default: 40)
 */
export function useScroll(threshold = 40): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    isScrolled: false,
  });

  const stateRef = useRef(scrollState);
  stateRef.current = scrollState;

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const direction: 'up' | 'down' | null =
        currentScrollY > lastScrollY ? 'down' : currentScrollY < lastScrollY ? 'up' : null;
      const scrolled = currentScrollY > threshold;

      const prev = stateRef.current;
      // Only set state if scrolled threshold flipped or direction changed or scroll position changed noticeably
      if (
        prev.isScrolled !== scrolled ||
        (direction && prev.scrollDirection !== direction) ||
        Math.abs(prev.scrollY - currentScrollY) >= 40
      ) {
        setScrollState({
          scrollY: currentScrollY,
          scrollDirection: direction,
          isScrolled: scrolled,
        });
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateScroll);
      }
    };

    // Initialize state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollState;
}

