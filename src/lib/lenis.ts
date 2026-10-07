import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

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
}

/**
 * Get current Lenis instance
 */
export function getLenis(): Lenis | null {
  return lenisInstance;
}

/**
 * Smooth scroll to target element or selector with custom offset
 */
export function smoothScrollTo(target: string | HTMLElement | number, offset = 0): void {
  if (typeof window === 'undefined') return;

  let targetEl: HTMLElement | null = null;
  if (typeof target === 'string') {
    targetEl = document.querySelector(target.startsWith('#') ? target : '#' + target) as HTMLElement | null;
  } else if (target instanceof HTMLElement) {
    targetEl = target;
  }

  // Calculate navbar clearance (defaults to -88px to clear fixed navbar)
  const sm = targetEl
    ? parseFloat(window.getComputedStyle(targetEl).scrollMarginTop) || 88
    : 88;
  const computedOffset = offset !== 0 ? offset : -sm;

  if (lenisInstance) {
    if (typeof target === 'number') {
      lenisInstance.scrollTo(target, {
        offset: 0,
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (targetEl) {
      lenisInstance.scrollTo(targetEl, {
        offset: computedOffset,
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  } else {
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    } else if (targetEl) {
      const top = targetEl.getBoundingClientRect().top + window.pageYOffset + computedOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
