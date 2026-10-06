import { useState, useEffect } from 'react';

/**
 * Custom hook to track active section in viewport during scroll
 * @param sectionIds Array of section IDs (without #) to monitor
 * @param offset Pixel offset from top of viewport (e.g. navbar height)
 */
export function useScrollSpy(sectionIds: string[], offset = 120): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Check if user is near bottom of the page -> activate last section (contact)
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (isAtBottom && sectionIds.length > 0) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }

      // Default to first section if above all
      setActiveSection(sectionIds[0] || 'home');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

/**
 * Utility function to smoothly scroll to a section with navbar offset
 * @param id Section ID to scroll to (with or without #)
 * @param offset Top offset in pixels (default: 80)
 */
export function scrollToSection(id: string, offset = 80): void {
  const cleanId = id.replace(/^#/, '');
  const element = document.getElementById(cleanId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    // Update URL hash without jumping
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${cleanId}`);
    }
  }
}
