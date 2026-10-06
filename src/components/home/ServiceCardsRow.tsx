import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SERVICES_DATA } from '@/data/services';
import { scrollToSection } from '@/hooks/useScrollSpy';

const SERVICE_IMAGES: Record<string, string> = {
  'structural-design':
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80&auto=format&fit=crop',
  'structural-detailing':
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&auto=format&fit=crop',
  'steel-structures':
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop',
  'structural-inspection':
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&auto=format&fit=crop',
  'retrofitting-strengthening':
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format&fit=crop',
  'specialized-structures':
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80&auto=format&fit=crop',
};

const TOTAL_CARDS = SERVICES_DATA.length;
const START_INDEX = 2; // Card 03 ("Steel & PEB Structures") by default

export const ServiceCardsRow: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Active floating index (default starts at Card 03: index 2)
  const [activeIndexFloat, setActiveIndexFloat] = useState(START_INDEX);
  const [activeInt, setActiveInt] = useState(START_INDEX);

  const targetPosRef = useRef<number>(START_INDEX);
  const animPosRef = useRef<{ pos: number }>({ pos: START_INDEX });

  // Update card transform, scale, opacity, and glow smoothly
  const applyCardTransforms = useCallback((currentPos: number, isMob: boolean) => {
    const stepX = isMob ? 190 : 230;

    SERVICES_DATA.forEach((_, idx) => {
      const cardEl = cardElementsRef.current[idx];
      if (!cardEl) return;

      const diff = idx - currentPos;
      const absDiff = Math.abs(diff);

      const x = diff * stepX;
      const scale = Math.max(0.78, 1.05 - absDiff * 0.12);
      const opacity = Math.max(0.35, 1.0 - absDiff * 0.28);
      const zIndex = Math.round(20 - absDiff * 2);
      const isCenter = absDiff < 0.45;

      // Direct high-performance transform update
      cardEl.style.transform = `translateX(${x}px) scale(${scale})`;
      cardEl.style.opacity = `${opacity}`;
      cardEl.style.zIndex = `${zIndex}`;

      // Center card visual prominence (glow border & yellow CTA)
      const glowBorder = cardEl.querySelector('.card-border-glow') as HTMLElement | null;
      const yellowBtn = cardEl.querySelector('.card-yellow-btn') as HTMLElement | null;
      const imgEl = cardEl.querySelector('img') as HTMLElement | null;

      if (glowBorder) {
        glowBorder.style.opacity = `${Math.max(0, 1 - absDiff * 2.2)}`;
      }
      if (yellowBtn) {
        yellowBtn.style.opacity = `${Math.max(0, 1 - absDiff * 2.5)}`;
        yellowBtn.style.transform = `scale(${Math.max(0.6, 1 - absDiff * 0.5)})`;
      }
      if (imgEl) {
        imgEl.style.filter = isCenter
          ? 'brightness(1.06) contrast(1.05)'
          : `brightness(${0.92 - absDiff * 0.1})`;
      }
    });
  }, []);

  // Smoothly animate to target card index with fast, snappy response on mobile
  const goToCard = useCallback((targetIdx: number) => {
    const clamped = Math.max(0, Math.min(TOTAL_CARDS - 1, targetIdx));
    targetPosRef.current = clamped;
    setActiveInt(clamped);

    const isMob = typeof window !== 'undefined' && window.innerWidth < 768;

    gsap.killTweensOf(animPosRef.current);
    gsap.to(animPosRef.current, {
      pos: clamped,
      duration: isMob ? 0.35 : 0.65,
      ease: 'power2.out',
      onUpdate: () => {
        const p = animPosRef.current.pos;
        setActiveIndexFloat(p);
        applyCardTransforms(p, isMob);
      },
    });
  }, [applyCardTransforms]);

  // Handle smooth, natural scroll wheel & trackpad gestures
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let deltaAcc = 0;
    let accTimer: number;

    const onWheel = (e: WheelEvent) => {
      // Support both horizontal trackpad swipes and vertical mouse wheel
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : e.deltaY;

      // Ignore microscopic mouse jitters
      if (Math.abs(delta) < 4) return;

      const current = targetPosRef.current;

      if (delta > 0) {
        // User wants to go forward / right
        if (current < TOTAL_CARDS - 1) {
          e.preventDefault();
          e.stopPropagation();

          deltaAcc += delta;
          if (deltaAcc > 52) {
            deltaAcc = 0;
            goToCard(current + 1);
          }
        }
        // At Card 06 (last card): allow natural page scroll down to next section
      } else {
        // User wants to go backward / left
        if (current > 0) {
          e.preventDefault();
          e.stopPropagation();

          deltaAcc += delta;
          if (deltaAcc < -52) {
            deltaAcc = 0;
            goToCard(current - 1);
          }
        }
        // At Card 01 (first card): allow natural page scroll up to hero
      }

      // Decay accumulator smoothly
      clearTimeout(accTimer);
      accTimer = window.setTimeout(() => {
        deltaAcc = 0;
      }, 300);
    };

    // Live pointer / touch drag tracking (fast & snappy on mobile)
    let startX = 0;
    let startTime = 0;
    let isDragging = false;
    let dragDistance = 0;

    const onPointerDown = (e: PointerEvent) => {
      // Don't drag if clicking buttons or links
      if ((e.target as HTMLElement).closest('button, a')) return;
      startX = e.clientX;
      startTime = Date.now();
      isDragging = true;
      dragDistance = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      dragDistance = e.clientX - startX;
      const isMob = window.innerWidth < 768;
      // Live interactive resistance (1:1 tracking on mobile for fast response)
      const divisor = isMob ? 170 : 230;
      const liveOffset = targetPosRef.current - dragDistance / divisor;
      const clampedLive = Math.max(0, Math.min(TOTAL_CARDS - 1, liveOffset));
      setActiveIndexFloat(clampedLive);
      applyCardTransforms(clampedLive, isMob);
    };

    const onPointerUp = () => {
      if (!isDragging) return;
      isDragging = false;

      const elapsed = Math.max(1, Date.now() - startTime);
      const velocity = Math.abs(dragDistance) / elapsed;
      const threshold = velocity > 0.22 ? 18 : 28;

      if (dragDistance < -threshold) {
        goToCard(targetPosRef.current + 1);
      } else if (dragDistance > threshold) {
        goToCard(targetPosRef.current - 1);
      } else {
        goToCard(targetPosRef.current);
      }
    };

    const onPointerCancel = () => {
      if (!isDragging) return;
      isDragging = false;
      goToCard(targetPosRef.current);
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerCancel);

    // Initial layout pass: ensure Card 03 is centered on load
    applyCardTransforms(START_INDEX, window.innerWidth < 768);

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerCancel);
      clearTimeout(accTimer);
    };
  }, [goToCard, applyCardTransforms]);

  const handlePrev = () => {
    goToCard(activeInt - 1);
  };

  const handleNext = () => {
    goToCard(activeInt + 1);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-950 text-white pt-4 sm:pt-14 pb-10 sm:pb-14 lg:py-16 overflow-hidden z-10"
    >
      <div
        ref={containerRef}
        className="w-full flex flex-col justify-center overflow-hidden py-2 select-none"
      >
        <Container size="xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4 sm:mb-6 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#d4af37] uppercase font-semibold">
              <span className="w-6 h-px bg-[#d4af37]" />
              <span>Our Services</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed hidden sm:block">
              From conceptual design to construction support, we deliver precision engineering across sectors.
            </p>
          </div>

          {/* Interactive Carousel Stage */}
          <div className="relative flex items-center justify-center py-2 select-none touch-pan-y">
            {/* Previous Arrow Button */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeInt === 0}
              aria-label="Previous service"
              className={`absolute left-0 sm:left-2 lg:left-6 z-30 w-10 h-10 rounded-full border border-white/15 backdrop-blur-md flex items-center justify-center transition-all ${
                activeInt === 0
                  ? 'bg-white/5 text-white/30 cursor-not-allowed opacity-30'
                  : 'bg-white/10 hover:bg-white/20 active:scale-95 text-white cursor-pointer shadow-lg'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Horizontally Managed Track */}
            <div
              ref={trackRef}
              className="relative w-full h-[270px] sm:h-[285px] flex items-center justify-center overflow-visible"
            >
              {SERVICES_DATA.map((service, idx) => {
                const img = SERVICE_IMAGES[service.id];
                const diff = Math.abs(idx - activeIndexFloat);
                const isNearCenter = diff < 0.45;

                return (
                  <div
                    key={service.id}
                    ref={(el) => {
                      cardElementsRef.current[idx] = el;
                    }}
                    onClick={() => {
                      if (isNearCenter) {
                        scrollToSection('services');
                      } else {
                        goToCard(idx);
                      }
                    }}
                    className="absolute w-[200px] sm:w-[225px] lg:w-[240px] h-[245px] sm:h-[260px] lg:h-[270px] rounded-2xl overflow-hidden bg-slate-900 text-left transition-shadow duration-300 cursor-pointer shadow-xl will-change-transform border border-white/15"
                  >
                    {/* Golden Glow Border on Center Card */}
                    <div className="card-border-glow absolute inset-0 rounded-2xl border-2 border-amber-400 shadow-[0_0_28px_rgba(245,158,11,0.32)] ring-1 ring-amber-400/50 pointer-events-none" />

                    {/* Background Image */}
                    <img
                      src={img}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Dark Gradient Overlay for optimal readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-black/25 pointer-events-none" />

                    {/* Card Content */}
                    <div className="absolute inset-0 p-3.5 sm:p-4 flex flex-col justify-between">
                      {/* Step Number Top Left */}
                      <span className="font-mono font-bold tracking-wider text-xs sm:text-sm text-white/80">
                        {service.number}
                      </span>

                      {/* Title & Yellow Arrow Button */}
                      <div className="flex items-end justify-between gap-1.5">
                        <h4 className="font-bold text-white text-xs sm:text-[13px] lg:text-sm leading-snug tracking-tight">
                          {service.title}
                        </h4>

                        {/* Yellow Round Button on Center Card */}
                        <div
                          aria-label="View Service Details"
                          className="card-yellow-btn w-8 h-8 rounded-full bg-[#f59e0b] hover:bg-[#fbbf24] text-slate-950 flex items-center justify-center font-bold shadow-md transition-all hover:scale-110 shrink-0 ml-1 cursor-pointer"
                        >
                          <ArrowRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Arrow Button */}
            <button
              type="button"
              onClick={handleNext}
              disabled={activeInt === TOTAL_CARDS - 1}
              aria-label="Next service"
              className={`absolute right-0 sm:right-2 lg:right-6 z-30 w-10 h-10 rounded-full border border-white/15 backdrop-blur-md flex items-center justify-center transition-all ${
                activeInt === TOTAL_CARDS - 1
                  ? 'bg-white/5 text-white/30 cursor-not-allowed opacity-30'
                  : 'bg-white/10 hover:bg-white/20 active:scale-95 text-white cursor-pointer shadow-lg'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Minimal Progress Indicator Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-3 sm:mt-5">
            {SERVICES_DATA.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToCard(i)}
                aria-label={`Go to service ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeInt
                    ? 'w-6 bg-amber-400'
                    : 'w-2 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};
