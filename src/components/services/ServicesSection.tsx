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
    <section id="services" className="py-8 sm:py-12 lg:py-10 xl:py-12 bg-slate-50/80 relative border-t border-slate-200">
      <Container size="xl">
        {/* Section Header */}
        <div className="mb-4 sm:mb-6 lg:mb-5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-0.5 bg-brand-accent rounded-full" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-brand-accent">
                  Core Engineering Capabilities
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-black text-brand-navy tracking-tight">
                Core Structural Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md sm:text-right">
              From high-rise analysis to BIM rebar detailing and structural health audits.
            </p>
          </div>
        </div>

        {/* Dynamic Photo-First Spotlight Showcase */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md sm:shadow-lg overflow-hidden p-4 sm:p-6 lg:p-6 mb-4 sm:mb-5 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-8 xl:gap-10 items-center">
            
            {/* Left: Cinematic Photo Showcase (7 cols) */}
            <div className="lg:col-span-7 relative h-60 sm:h-80 lg:h-[280px] xl:h-[310px] rounded-xl sm:rounded-2xl overflow-hidden group shadow-sm bg-slate-950">
              <img
                key={activeService.id}
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20" />

              {/* Floating Top Badge: Service Number & Icon */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-white">
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
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3 sm:space-y-4 lg:space-y-3.5">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-navy">
                    <ActiveIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-accent">
                    Discipline {activeService.number} of 06
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-2xl font-black text-brand-navy tracking-tight leading-snug">
                  {activeService.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {activeService.subtitle}
                </p>
              </div>

              {/* Real Technical Deliverables Checklist */}
              <div className="space-y-2 pt-0.5">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Key Technical Scope & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5">
                  {activeService.tags.map((tag, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-xs xl:text-sm text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span className="font-medium">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Trigger */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => handleConsult(activeService.title)}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 px-5 rounded-xl bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-blue transition-all shadow-md active:scale-95"
                >
                  <span>Consult On {activeService.shortTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Visual Photo Thumbnails (Click to Switch Spotlight) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === activeId;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveId(service.id)}
                className={`group relative h-20 sm:h-24 lg:h-[76px] xl:h-[82px] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 text-left transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? 'ring-2 ring-brand-accent shadow-md -translate-y-0.5'
                    : 'opacity-70 hover:opacity-100 hover:shadow-sm hover:-translate-y-0.5'
                }`}
              >
                {/* Photo Background */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-black/20" />

                {/* Content */}
                <div className="absolute inset-0 p-2 sm:p-2.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-blue-300">
                      {service.number}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-sm ring-2 ring-brand-accent/40" />
                    )}
                  </div>
                  <div>
                    <h5 className="text-[11px] sm:text-xs font-bold text-white leading-tight truncate">
                      {service.shortTitle}
                    </h5>
                    <p className="text-[9px] font-mono text-slate-300 truncate mt-0.5">
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
