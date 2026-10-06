import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { scrollToSection } from '@/hooks/useScrollSpy';
import { assetUrl } from '@/lib/assets';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[640px] h-[100vh] max-h-[960px] overflow-hidden bg-slate-950 text-white flex flex-col justify-between"
    >
      {/* High-priority Architectural Hero Image (Single image, no carousel) */}
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet={assetUrl('/hero-modern-house.webp')} type="image/webp" />
        <img
          src={assetUrl('/hero-modern-house.png')}
          alt="Cinematic Modern Architectural Structure at Twilight"
          className="w-full h-full object-cover object-[70%_center] md:object-center"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
        />
      </picture>

      {/* Clean Architectural Vignette & Dark Overlay for optimal text readability */}
      <div className="absolute inset-0 bg-slate-950/35 md:bg-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/35 md:from-slate-950/90 md:via-slate-950/55 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/50" />

      {/* Main Center Content */}
      <div className="relative z-10 my-auto pt-24 sm:pt-28 pb-8 sm:pb-10">
        <Container size="xl">
          <div className="max-w-3xl">
            {/* Understated Minimalist Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md bg-white/[0.08] backdrop-blur-md border border-white/15 text-slate-300 text-[10px] sm:text-xs font-mono tracking-wider uppercase mb-5 sm:mb-6 max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
              <span>Structural Engineering Consultancy • Est. 2008</span>
            </div>

            {/* Clean, Elegant Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.12] sm:leading-[1.1]">
              <span className="block text-white">Engineering Structures for a</span>
              <span className="block text-slate-200 font-extrabold">
                Better Tomorrow.
              </span>
            </h1>

            {/* Crisp Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl mb-7 sm:mb-9 font-normal text-balance">
              Delivering precision structural design, advanced analysis, and BIM detailing across India and Saudi Arabia.
            </p>

            {/* Minimalist Architectural Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-950 hover:bg-slate-100 font-semibold text-sm rounded-lg transition-all shadow-sm active:scale-95 group text-center cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm rounded-lg transition-all active:scale-95 text-center cursor-pointer"
              >
                <span>Our Services</span>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar: Static Refined Status & Scroll Down Cue */}
      <div className="relative z-10 pb-6 sm:pb-8">
        <Container size="xl">
          <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-5 sm:pt-6 pr-14 sm:pr-20 md:pr-24">
            
            {/* Left: Refined Architectural Status Badge */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[10.5px] sm:text-xs font-mono text-slate-300 tracking-wider uppercase">
                Structural Consultants • ISO 9001:2015
              </span>
            </div>

            {/* Right: Clean Scroll Down Cue */}
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer group"
            >
              <span className="tracking-wider uppercase text-[11px]">Scroll to explore</span>
              <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:translate-y-0.5 transition-all">
                <ArrowRight className="w-3 h-3 rotate-90 text-slate-300 group-hover:text-white" />
              </span>
            </button>

          </div>
        </Container>
      </div>
    </section>
  );
};
