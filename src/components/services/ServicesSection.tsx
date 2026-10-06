import React, { useState } from 'react';
import { Container } from '@/components/common/Container';
import { SERVICES_DATA, ServiceItem } from '@/data/services';
import {
  Layers,
  FileText,
  Wrench,
  Search,
  ShieldAlert,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { scrollToSection } from '@/hooks/useScrollSpy';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  'structural-design': Layers,
  'structural-detailing': FileText,
  'steel-structures': Wrench,
  'structural-inspection': Search,
  'retrofitting-strengthening': ShieldAlert,
  'specialized-structures': Cpu,
};

export const ServicesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('structural-design');

  const activeService: ServiceItem =
    SERVICES_DATA.find((s) => s.id === activeId) || SERVICES_DATA[0];
  const ActiveIcon = SERVICE_ICONS[activeService.id] || Layers;

  const handleConsult = (serviceTitle: string) => {
    scrollToSection('contact');
    const select = document.querySelector('select[name="subject"]') as HTMLSelectElement | null;
    if (select) {
      if (serviceTitle.includes('Inspection') || serviceTitle.includes('Audit')) {
        select.value = 'Structural Audit';
      } else if (serviceTitle.includes('Detailing') || serviceTitle.includes('BIM')) {
        select.value = 'Detailing & BIM';
      } else {
        select.value = 'Project Inquiry';
      }
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50/80 relative border-t border-slate-200">
      <Container size="xl">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Core Structural Services
          </h2>
          <div className="w-16 h-1 bg-brand-navy mt-2.5 rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
            From high-rise analysis to BIM rebar detailing and structural health audits.
          </p>
        </div>

        {/* Dynamic Photo-First Spotlight Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden p-6 sm:p-8 lg:p-10 mb-8 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Cinematic Photo Showcase (7 cols) */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden group shadow-md bg-slate-950">
              <img
                key={activeService.id}
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20" />

              {/* Floating Top Badge: Service Number & Icon */}
              <div className="absolute top-4 left-4 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-white">
                <span className="font-mono font-black text-xs text-blue-300">
                  {activeService.number}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span className="text-xs font-semibold tracking-wide">
                  {activeService.shortTitle}
                </span>
              </div>
            </div>

            {/* Right: Technical Deliverables & Action (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-navy">
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent">
                    Discipline {activeService.number} of 06
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight leading-snug">
                  {activeService.title}
                </h3>

                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {activeService.subtitle}
                </p>
              </div>

              {/* Real Technical Deliverables Checklist */}
              <div className="space-y-2.5 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Key Technical Scope & Deliverables
                </h4>
                <div className="space-y-2">
                  {activeService.tags.map((tag, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span className="font-medium">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Trigger */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleConsult(activeService.title)}
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-blue transition-all shadow-md active:scale-95"
                >
                  <span>Consult On {activeService.shortTitle}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Visual Photo Thumbnails (Click to Switch Spotlight) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === activeId;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveId(service.id)}
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 text-left transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? 'ring-2 ring-brand-accent shadow-lg -translate-y-1'
                    : 'opacity-70 hover:opacity-100 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Photo Background */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-3 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-blue-300">
                      {service.number}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-brand-accent" />
                    )}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white leading-tight">
                      {service.shortTitle}
                    </h5>
                    <p className="text-[9px] font-mono text-slate-300 mt-0.5">
                      {service.codes[0]}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
