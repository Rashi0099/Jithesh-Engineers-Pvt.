import React from 'react';
import { Container } from '@/components/common/Container';
import { SERVICES_DATA } from '@/data/services';

const SERVICE_IMAGES: Record<string, string> = {
  'structural-design':
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&q=75&auto=format&fit=crop',
  'structural-detailing':
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=75&auto=format&fit=crop',
  'steel-structures':
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=75&auto=format&fit=crop',
  'structural-inspection':
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&q=75&auto=format&fit=crop',
  'retrofitting-strengthening':
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=75&auto=format&fit=crop',
  'specialized-structures':
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&q=75&auto=format&fit=crop',
};

export const ServiceCardsRow: React.FC = () => {
  return (
    <section className="pt-10 sm:pt-14 pb-4 bg-white relative z-10">
      <Container size="xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {SERVICES_DATA.map((service, idx) => {
            const img = SERVICE_IMAGES[service.id];

            return (
              <div
                key={service.id}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-950 text-left shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-default select-none border border-slate-100 hover:border-slate-300"
              >
                {/* Background Image */}
                <img
                  src={img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                  decoding="async"
                />

                {/* Dark Gradient Overlay for High Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/10 group-hover:from-slate-950/80 transition-colors" />

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-4.5 flex flex-col justify-between">
                  {/* Step Number Top Left */}
                  <span className="text-xs font-mono font-bold text-white/70 group-hover:text-white tracking-wider">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Title Bottom */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug tracking-tight group-hover:text-slate-100 transition-colors">
                      {service.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
