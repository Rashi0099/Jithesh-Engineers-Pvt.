import React from 'react';
import { CLIENTS_DATA } from '@/data/clients';
import { Container } from '@/components/common/Container';
import { assetUrl } from '@/lib/assets';

export const ClientsSection: React.FC = () => {
  // Split clients into two rows for dynamic dual-direction marquee
  const row1 = CLIENTS_DATA.slice(0, 8);
  const row2 = CLIENTS_DATA.slice(8);

  // Duplicate for seamless infinite loop
  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <section id="clients" className="py-14 sm:py-16 bg-slate-50/70 border-y border-slate-200/80 relative overflow-hidden w-full max-w-full">
      <Container size="xl">
        {/* Clean Header matching user reference */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Our Clients
          </h2>
          <div className="w-12 h-1 bg-slate-900 mt-2 rounded-full" />
        </div>
      </Container>

      {/* Infinite Horizontal Scrolling Tracks */}
      <div className="relative w-full max-w-full overflow-hidden space-y-4">
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        {/* Row 1: Smooth Left Scroll */}
        <div className="w-full max-w-full overflow-hidden">
          <div className="animate-marquee gap-5 flex items-center pr-5">
            {marqueeRow1.map((client, idx) => (
              <div
                key={`r1-${client.id}-${idx}`}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-accent/50 transition-all duration-300 px-6 py-3 h-20 w-48 sm:w-56 shrink-0 flex items-center justify-center group cursor-pointer"
                title={`${client.name} — ${client.category}`}
              >
                <img
                  src={assetUrl(client.logo)}
                  alt={client.name}
                  className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Smooth Right (Reverse) Scroll */}
        <div className="w-full max-w-full overflow-hidden">
          <div className="animate-marquee-reverse gap-5 flex items-center pr-5">
            {marqueeRow2.map((client, idx) => (
              <div
                key={`r2-${client.id}-${idx}`}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-accent/50 transition-all duration-300 px-6 py-3 h-20 w-48 sm:w-56 shrink-0 flex items-center justify-center group cursor-pointer"
                title={`${client.name} — ${client.category}`}
              >
                <img
                  src={assetUrl(client.logo)}
                  alt={client.name}
                  className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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
