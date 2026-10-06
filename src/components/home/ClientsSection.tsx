import React from 'react';
import { CLIENTS_DATA } from '@/data/clients';
import { Container } from '@/components/common/Container';
import { assetUrl } from '@/lib/assets';
import { Building2 } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  // Balanced distribution of all 13 partners across two smooth scrolling tracks
  const row1 = CLIENTS_DATA.slice(0, 7);
  const row2 = CLIENTS_DATA.slice(7);

  // 4x duplicate ensures 100% seamless infinite loop without gaps on all screen sizes up to 4K
  const marqueeRow1 = [...row1, ...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="clients" className="py-10 sm:py-14 bg-slate-50/75 border-y border-slate-200/80 relative overflow-hidden w-full max-w-full">
      <Container size="xl">
        {/* Sleek Architectural Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-2">
              <Building2 className="w-3.5 h-3.5 text-slate-800" />
              <span>Trusted Partnerships</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Our Esteemed Clients
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md">
            Delivering structural engineering consultancy for premier builders, developers, and corporate institutions.
          </p>
        </div>
      </Container>

      {/* Infinite Horizontal Scrolling Tracks */}
      <div className="relative w-full max-w-full overflow-hidden space-y-3.5 sm:space-y-4">
        {/* Left & Right Edge Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        {/* Line 1: Smooth Left Scroll */}
        <div className="w-full max-w-full overflow-hidden">
          <div className="animate-marquee gap-3.5 sm:gap-5 flex items-center pr-3.5 sm:pr-5">
            {marqueeRow1.map((client, idx) => (
              <div
                key={`r1-${client.id}-${idx}`}
                className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 px-5 sm:px-6 h-20 sm:h-22 w-48 sm:w-56 shrink-0 flex items-center justify-center group cursor-pointer"
                title={`${client.name} — ${client.category}`}
              >
                <img
                  src={assetUrl(client.logo)}
                  alt={client.name}
                  className="h-11 sm:h-12 md:h-13 w-auto max-w-[84%] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Line 2: Smooth Right (Reverse) Scroll */}
        <div className="w-full max-w-full overflow-hidden">
          <div className="animate-marquee-reverse gap-3.5 sm:gap-5 flex items-center pr-3.5 sm:pr-5">
            {marqueeRow2.map((client, idx) => (
              <div
                key={`r2-${client.id}-${idx}`}
                className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 px-5 sm:px-6 h-20 sm:h-22 w-48 sm:w-56 shrink-0 flex items-center justify-center group cursor-pointer"
                title={`${client.name} — ${client.category}`}
              >
                <img
                  src={assetUrl(client.logo)}
                  alt={client.name}
                  className="h-11 sm:h-12 md:h-13 w-auto max-w-[84%] object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
