import { useState, useEffect } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolled: boolean;
}

/**
 * Custom hook to track window scroll position and direction
 * @param threshold Pixel threshold to toggle `isScrolled` (default: 40)
 */
export function useScroll(threshold = 40): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      const scrolled = currentScrollY > threshold;

      setScrollState({
        scrollY: currentScrollY,
        scrollDirection: currentScrollY === lastScrollY ? null : direction,
        isScrolled: scrolled,
      });

      lastScrollY = currentScrollY;
    };

    // Initialize state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollState;
}
