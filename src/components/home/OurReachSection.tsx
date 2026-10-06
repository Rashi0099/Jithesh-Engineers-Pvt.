import React from 'react';
import { Container } from '@/components/common/Container';
import { ExternalLink } from 'lucide-react';
import { scrollToSection } from '@/hooks/useScrollSpy';

export const OurReachSection: React.FC = () => {
  return (
    <section id="reach" className="py-12 sm:py-20 bg-white relative">
      <Container size="xl">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block mb-1">
            CROSS-BORDER CONSULTANCY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Our National & Global Reach
          </h2>
          <div className="w-16 h-1 bg-slate-900 mt-2.5 rounded-full" />
        </div>

        {/* Wide Architectural Construction Photo Banner */}
        <div className="relative rounded-2xl overflow-hidden min-h-[290px] sm:min-h-[300px] md:aspect-[21/9] shadow-lg group mb-6 sm:mb-8 bg-slate-950">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=75&auto=format&fit=crop"
            alt="Cross-Border Engineering Excellence"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40 flex items-center p-5 sm:p-10 lg:p-12">
            <div className="max-w-2xl text-white space-y-2.5 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-slate-300 font-semibold block">
                CROSS-BORDER ENGINEERING EXCELLENCE
              </span>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug sm:leading-tight tracking-tight break-words">
                Delivering safe, durable, and architecturally expressive structures worldwide.
              </h2>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white transition-colors"
                >
                  <span>DISCUSS YOUR INTERNATIONAL PROJECT</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Regional Cards (UNDER / BELOW THE IMAGE BANNER - Compact & Iconless) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Card 1: Kerala, India */}
          <div className="p-5 sm:p-5.5 rounded-2xl border border-slate-200/90 bg-slate-50 hover:bg-white shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200 shadow-2xs">
                  HEADQUARTERS
                </span>
                <span className="text-[10px] font-mono text-slate-500 font-semibold">Kerala</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-1.5">
                Kerala, India
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Headquartered in Calicut with active projects across Kozhikode, Kochi, Malappuram, Wayanad, and Kannur.
              </p>
            </div>
            <div className="pt-2.5 text-[11px] font-mono font-semibold text-slate-500 border-t border-slate-200/70">
              Karaparamba, Kozhikode - 673010
            </div>
          </div>

          {/* Card 2: Pan-India Operations */}
          <div className="p-5 sm:p-5.5 rounded-2xl border border-slate-200/90 bg-slate-50 hover:bg-white shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200 shadow-2xs">
                  NATIONAL
                </span>
                <span className="text-[10px] font-mono text-slate-500 font-semibold">Pan-India</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-1.5">
                Pan-India Operations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Providing structural analysis, PEB industrial sheds, and multi-story commercial consultancies across Indian states.
              </p>
            </div>
            <div className="pt-2.5 text-[11px] font-mono font-semibold text-slate-500 border-t border-slate-200/70">
              Residential, Commercial & Industrial
            </div>
          </div>

          {/* Card 3: Saudi Arabia & Gulf */}
          <div className="p-5 sm:p-5.5 rounded-2xl border border-slate-200/90 bg-slate-50 hover:bg-white shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200 shadow-2xs">
                  INTERNATIONAL
                </span>
                <span className="text-[10px] font-mono text-slate-500 font-semibold">Gulf Region</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-1.5">
                Saudi Arabia & Gulf
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                High-profile long-span spatial trusses, space frame canopies, and specialized structural consultancies.
              </p>
            </div>
            <div className="pt-2.5 text-[11px] font-mono font-semibold text-slate-500 border-t border-slate-200/70">
              Riyadh & Middle Eastern Sites
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
