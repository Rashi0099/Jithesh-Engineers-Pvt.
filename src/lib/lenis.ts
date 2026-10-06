type LenisType = import('lenis').default;

let lenisInstance: LenisType | null = null;

/**
 * Initialize Lenis smooth scrolling singleton
 */
export function initLenis(): void {
  if (typeof window === 'undefined') return;

  // On touch/mobile devices, native momentum scrolling is hardware accelerated & zero TBT
  const isTouchDevice =
    window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
  if (isTouchDevice) {
    return;
  }

  if (lenisInstance) {
    return;
  }

  import('lenis').then(({ default: Lenis }) => {
    if (lenisInstance) return;

    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    function raf(time: number) {
      lenisInstance?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
}

/**
 * Get current Lenis instance
 */
export function getLenis(): LenisType | null {
  return lenisInstance;
}

/**
 * Smooth scroll to target element or selector with custom offset
 */
export function smoothScrollTo(target: string | HTMLElement | number, offset = 0): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset,
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  } else if (typeof window !== 'undefined') {
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    } else if (typeof target === 'string') {
      const el = document.querySelector(target.startsWith('#') ? target : '#' + target);
      if (el) {
        const style = window.getComputedStyle(el);
        const sm = parseFloat(style.scrollMarginTop) || 88;
        const top = el.getBoundingClientRect().top + window.pageYOffset - sm + offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else if (target instanceof HTMLElement) {
      const style = window.getComputedStyle(target);
      const sm = parseFloat(style.scrollMarginTop) || 88;
      const top = target.getBoundingClientRect().top + window.pageYOffset - sm + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
