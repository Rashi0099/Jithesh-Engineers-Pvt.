import { useState, useEffect } from 'react';
import { smoothScrollTo } from '@/lib/lenis';

/**
 * Custom hook to track active section in viewport during scroll
 * Uses requestAnimationFrame throttling to eliminate scroll jank & layout thrashing.
 * @param sectionIds Array of section IDs (without #) to monitor
 * @param offset Pixel offset from top of viewport (e.g. navbar height)
 */
export function useScrollSpy(sectionIds: string[], offset = 110): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'home');

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      // 1. If at the top of the page, activate 'home'
      if (window.scrollY < 80) {
        setActiveSection(sectionIds[0] || 'home');
        ticking = false;
        return;
      }

      // 2. Only if the user has reached the absolute bottom edge of the document
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const isAtTrueBottom = window.scrollY + clientHeight >= scrollHeight - 20;

      if (isAtTrueBottom && sectionIds.length > 0) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        ticking = false;
        return;
      }

      // 3. Find the section spanning the viewport offset threshold
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active when the section spans across the reading line (offset)
          if (rect.top <= offset && rect.bottom > offset) {
            setActiveSection(id);
            ticking = false;
            return;
          }
        }
      }

      // 4. Fallback: find section with nearest top boundary above offset
      let nearestId = sectionIds[0];
      let nearestTop = -Infinity;

      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset + 50 && rect.top > nearestTop) {
            nearestTop = rect.top;
            nearestId = id;
          }
        }
      }

      setActiveSection(nearestId);
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
 * @param offset Top offset in pixels (default: 0, since section[id] has CSS scroll-margin-top)
 */
export function scrollToSection(id: string, offset = 0): void {
  const cleanId = id.replace(/^#/, '');
  if (cleanId === 'home') {
    smoothScrollTo(0, 0);
    return;
  }

  const element = document.getElementById(cleanId);
  if (element) {
    smoothScrollTo(element, offset);
  }
}

