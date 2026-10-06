import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { scrollToSection } from '@/hooks/useScrollSpy';
import { assetUrl } from '@/lib/assets';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[600px] h-[100vh] max-h-[960px] overflow-hidden bg-slate-950 text-white flex flex-col justify-between"
    >
      {/* High-priority Architectural Hero Image */}
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet={assetUrl('/hero-modern-house.webp')} type="image/webp" />
        <img
          src={assetUrl('/hero-modern-house.png')}
          alt="Cinematic Modern Architectural Structure at Twilight"
          className="w-full h-full object-cover object-[75%_center] md:object-center"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
        />
      </picture>

      {/* Subtle, Cinematic Architectural Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

      {/* Main Center Content: Clean, Minimal, High-Impact */}
      <div className="relative z-10 my-auto pt-28 sm:pt-32 pb-8">
        <Container size="xl">
          <div className="max-w-2xl">

            {/* Ultra-Modern, Elegant Architectural Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-6 sm:mb-8 leading-[1.14]">
              Engineering Structures <br />
              <span className="font-semibold text-white">for a Better Tomorrow.</span>
            </h1>

            {/* Single Clean Modern Action Button */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-slate-950 hover:bg-slate-100 font-semibold text-sm rounded-lg transition-all shadow-md active:scale-95 group cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg text-white font-medium text-sm transition-all active:scale-95 cursor-pointer"
              >
                <span>About Firm</span>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar: Clean Minimal Footprint */}
      <div className="relative z-10 pb-6 sm:pb-8">
        <Container size="xl">
          <div className="flex items-center border-t border-white/10 pt-4 sm:pt-5 pr-16 md:pr-0">
            <div className="flex items-center gap-2 text-slate-300 font-mono text-[10px] sm:text-xs tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
              <span>Kerala • Pan-India • Saudi Arabia</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
