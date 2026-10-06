import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Common animation defaults and tokens
 */
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    deliberate: 1.4,
  },
  ease: {
    smooth: 'power2.out',
    power3: 'power3.out',
    cinematic: 'power4.out',
    expo: 'expo.out',
  },
};

/**
 * Utility helper to fade in an element or node list
 */
export const fadeIn = (
  target: gsap.DOMTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    target,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: ANIMATION_CONFIG.duration.normal,
      ease: ANIMATION_CONFIG.ease.smooth,
      ...options,
    }
  );
};

/**
 * Utility helper to stagger fade-in child elements with ScrollTrigger
 */
export const staggerFadeUp = (
  targets: gsap.DOMTarget,
  trigger?: gsap.DOMTarget,
  staggerDelay = 0.12
) => {
  return gsap.from(targets, {
    y: 30,
    opacity: 0,
    duration: ANIMATION_CONFIG.duration.normal,
    ease: ANIMATION_CONFIG.ease.smooth,
    stagger: staggerDelay,
    scrollTrigger: trigger
      ? {
          trigger,
          start: 'top 85%',
          once: true,
        }
      : undefined,
  });
};
