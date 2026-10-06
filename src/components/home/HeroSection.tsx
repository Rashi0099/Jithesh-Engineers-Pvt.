import React from 'react';
import { ArrowRight, Award, Globe2, Calendar, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { scrollToSection } from '@/hooks/useScrollSpy';
import { assetUrl } from '@/lib/assets';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[100svh] min-h-[560px] md:min-h-[600px] md:h-[100vh] md:max-h-[960px] overflow-hidden bg-slate-950 text-white flex flex-col justify-between"
    >
      {/* High-priority Architectural Hero Image */}
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet={assetUrl('/hero-modern-house.webp')} type="image/webp" />
        <img
          src={assetUrl('/hero-modern-house.png')}
          alt="Cinematic Modern Architectural Structure at Twilight"
          width="1920"
          height="1080"
          className="w-full h-full object-cover object-[75%_center] md:object-center"
          {...({ fetchpriority: 'high' } as any)}
          loading="eager"
          decoding="sync"
        />
      </picture>

      {/* Subtle, Cinematic Architectural Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />

      <div className="relative z-10 my-auto pt-20 sm:pt-24 md:pt-32 pb-4 md:pb-8">
        <Container size="xl">
          <div className="max-w-2xl md:mb-[100px]">
            {/* Ultra-Modern, Elegant Architectural Headline */}
            <h1 className="text-[28px] sm:text-[34px] md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4 sm:mb-6 leading-[1.14]">
              Engineering Structures <br />
              <span className="font-bold text-white">for a Better Tomorrow.</span>
            </h1>

            {/* Two Action Buttons side by side on mobile */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-6 h-9 sm:h-auto sm:py-3.5 bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-lg sm:rounded-xl transition-all shadow-md active:scale-95 group cursor-pointer whitespace-nowrap"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center justify-center px-3.5 sm:px-5 h-9 sm:h-auto sm:py-3.5 bg-white/15 hover:bg-white/20 backdrop-blur-md border border-white/25 rounded-lg sm:rounded-xl text-white font-medium text-xs sm:text-sm transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>About Firm</span>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile-Only 2×2 Dark Glassmorphic Statistics Card (Elevated higher on mobile) */}
      <div
        className="relative z-20 md:hidden pb-14 sm:pb-16 px-4"
        style={{ paddingBottom: 'max(3.5rem, calc(3rem + env(safe-area-inset-bottom, 0px)))' }}
      >
        <div className="pure-glass-card rounded-2xl p-3.5 text-white shadow-2xl">
          <div className="grid grid-cols-2 divide-x divide-white/15">
            {/* Left Column */}
            <div className="space-y-3 pr-3">
              {/* 18+ Years of Practice */}
              <div className="flex items-center gap-2.5">
                <div className="w-8.5 h-8.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner">
                  <Award className="w-4 h-4 text-white" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-extrabold text-white leading-tight">18+</div>
                  <div className="text-[11px] font-medium text-slate-300 leading-none mt-0.5">Years of Practice</div>
                </div>
              </div>

              {/* 2008 Year Established */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-white/15">
                <div className="w-8.5 h-8.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner">
                  <Calendar className="w-4 h-4 text-white" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-extrabold text-white leading-tight">2008</div>
                  <div className="text-[11px] font-medium text-slate-300 leading-none mt-0.5">Year Established</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3 pl-3">
              {/* Multiple States */}
              <div className="flex items-center gap-2.5">
                <div className="w-8.5 h-8.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner">
                  <Globe2 className="w-4 h-4 text-white" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-extrabold text-white leading-tight truncate">Multiple States</div>
                  <div className="text-[11px] font-medium text-slate-300 leading-none mt-0.5 truncate">India & Saudi Arabia</div>
                </div>
              </div>

              {/* 100+ Projects */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-white/15">
                <div className="w-8.5 h-8.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner">
                  <ShieldCheck className="w-4 h-4 text-white" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-extrabold text-white leading-tight truncate">100+ Projects</div>
                  <div className="text-[11px] font-medium text-slate-300 leading-none mt-0.5 truncate">Trusted by Builders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
