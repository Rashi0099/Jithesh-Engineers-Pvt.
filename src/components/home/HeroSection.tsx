import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { scrollToSection } from '@/hooks/useScrollSpy';

interface HeroSlide {
  id: number;
  bg: string;
  badge: string;
  headlinePrefix: string;
  headlineHighlight: string;
  sub: string;
  featured: {
    tag: string;
    title: string;
    location: string;
    thumb: string;
  };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=85&auto=format&fit=crop',
    badge: 'Structural Engineering Consultancy • Est. 2008',
    headlinePrefix: 'Engineering Structures for a',
    headlineHighlight: 'Better Tomorrow.',
    sub: 'Delivering precision structural design, advanced analysis, and BIM detailing across India and Saudi Arabia.',
    featured: {
      tag: 'Featured Project',
      title: 'Pentium Eternia',
      location: 'Karaparamba, Kozhikode',
      thumb: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&q=80&auto=format&fit=crop',
    },
  },
  {
    id: 2,
    bg: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=85&auto=format&fit=crop',
    badge: 'Structural Design & Detailing',
    headlinePrefix: 'Precision & Technical Rigor in',
    headlineHighlight: 'Every Blueprint.',
    sub: 'From computational modeling and 3D BIM coordination to heavy steel fabrication drawings — comprehensive solutions under one roof.',
    featured: {
      tag: 'Commercial Landmark',
      title: 'Business Complex',
      location: 'Kozhikode, Kerala',
      thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80&auto=format&fit=crop',
    },
  },
  {
    id: 3,
    bg: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=85&auto=format&fit=crop',
    badge: 'International Reach • India & Saudi Arabia',
    headlinePrefix: 'Built with Integrity.',
    headlineHighlight: 'Trusted Regionally.',
    sub: 'With projects spanning Kerala, multiple Indian states, and Saudi Arabia, we bring world-class structural engineering to every site.',
    featured: {
      tag: 'Specialized Structure',
      title: 'Space Frame Canopy',
      location: 'Riyadh, Saudi Arabia',
      thumb: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80&auto=format&fit=crop',
    },
  },
];

export const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 280);
  };

  const prev = () => goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => goTo((current + 1) % HERO_SLIDES.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 6500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current]);

  const slide = HERO_SLIDES[current];

  return (
    <section id="home" className="relative w-full min-h-[680px] h-[100vh] max-h-[960px] overflow-hidden bg-slate-950 text-white flex flex-col justify-between">
      {/* Background Architectural Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 transform ${
          animating ? 'opacity-30 scale-102' : 'opacity-75 scale-100'
        }`}
        style={{ backgroundImage: `url('${slide.bg}')` }}
      />

      {/* Clean Architectural Vignette & Dark Overlay (No fake color blurs) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/50" />

      {/* Main Center Content */}
      <div className="relative z-10 my-auto pt-24 sm:pt-28 pb-8 sm:pb-10">
        <Container size="xl">
          <div className="max-w-3xl">
            {/* Understated Minimalist Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-md bg-white/[0.08] backdrop-blur-md border border-white/15 text-slate-300 text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-5 sm:mb-6 max-w-full truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
              <span className="truncate">{slide.badge}</span>
            </div>

            {/* Clean, Elegant Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.12] sm:leading-[1.1]">
              <span className="block text-white">{slide.headlinePrefix}</span>
              <span className="block text-slate-200 font-extrabold">
                {slide.headlineHighlight}
              </span>
            </h1>

            {/* Crisp Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl mb-7 sm:mb-9 font-normal text-balance">
              {slide.sub}
            </p>

            {/* Minimalist Architectural Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-950 hover:bg-slate-100 font-semibold text-sm rounded-lg transition-all shadow-sm active:scale-95 group text-center"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm rounded-lg transition-all active:scale-95 text-center"
              >
                <span>Our Services</span>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar: Clean Minimal Slide Controls & Featured Project Card */}
      <div className="relative z-10 pb-6 sm:pb-8">
        <Container size="xl">
          <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-5 sm:pt-6">
            
            {/* Left: Minimal Slide Trackers */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-xs font-mono font-medium text-slate-300 tracking-wider">
                {String(current + 1).padStart(2, '0')}
              </span>
              <div className="flex gap-1.5">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-white' : 'w-4 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-slate-500 font-mono">
                / {String(HERO_SLIDES.length).padStart(2, '0')}
              </span>

              <div className="flex items-center gap-1.5 ml-4">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous slide"
                  className="w-8 h-8 rounded-md border border-white/15 bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-95"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next slide"
                  className="w-8 h-8 rounded-md border border-white/15 bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-95"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Featured Project Quick-Card (Architectural Glass) */}
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="group hidden md:flex items-center gap-3 bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-md border border-white/15 rounded-xl p-2 pr-4 transition-all text-left shadow-sm"
            >
              <img
                src={slide.featured.thumb}
                alt={slide.featured.title}
                className="w-11 h-11 rounded-lg object-cover border border-white/10 shrink-0"
              />
              <div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-medium">
                  {slide.featured.tag}
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-slate-200 transition-colors">
                  {slide.featured.title}
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{slide.featured.location}</span>
                </div>
              </div>
              <div className="w-7 h-7 rounded-md bg-white/10 group-hover:bg-white group-hover:text-slate-950 flex items-center justify-center text-slate-300 transition-all ml-2">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>

          </div>
        </Container>
      </div>
    </section>
  );
};
