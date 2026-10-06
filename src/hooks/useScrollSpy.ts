import { useState, useEffect } from 'react';
import { smoothScrollTo } from '@/lib/lenis';

/**
 * Custom hook to track active section in viewport during scroll
 * Uses requestAnimationFrame throttling to eliminate scroll jank & layout thrashing.
 * @param sectionIds Array of section IDs (without #) to monitor
 * @param offset Pixel offset from top of viewport (e.g. navbar height)
 */
export function useScrollSpy(sectionIds: string[], offset = 120): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'home');

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + offset;

      // Check if user is near bottom of the page -> activate last section (contact)
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (isAtBottom && sectionIds.length > 0) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        ticking = false;
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            ticking = false;
            return;
          }
        }
      }

      // Default to first section if above all
      setActiveSection(sectionIds[0] || 'home');
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveSection);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

/**
 * Utility function to smoothly scroll to a section with navbar offset
 * Powered by Lenis momentum physics with fallback to native smooth scroll.
 * @param id Section ID to scroll to (with or without #)
 * @param offset Top offset in pixels (default: 80)
 */
export function scrollToSection(id: string, offset = 80): void {
  const cleanId = id.replace(/^#/, '');
  const element = document.getElementById(cleanId);
  if (element) {
    smoothScrollTo(element, -offset);

    // Update URL hash without jumping
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${cleanId}`);
    }
  }
}

