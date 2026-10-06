import React from 'react';
import { Award, Globe2, Calendar, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/common/Container';

const STATS = [
  {
    icon: Award,
    value: '18+',
    label: 'Years of Practice',
  },
  {
    icon: Globe2,
    value: 'Multiple States',
    label: 'India & Saudi Arabia',
  },
  {
    icon: Calendar,
    value: '2008',
    label: 'Year Established',
  },
  {
    icon: ShieldCheck,
    value: '100+ Projects',
    label: 'Trusted by Builders',
  },
];

export const StatsBar: React.FC = () => {
  return (
    <section className="hidden md:block relative z-30 -mt-28 lg:-mt-32">
      <Container size="xl">
        {/* Floating Pure Architectural Glass Card - Refined, Small & Proper */}
        <div className="pure-glass-card max-w-5xl mx-auto rounded-2xl py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 sm:gap-3 pt-2 sm:pt-0 first:pt-0 sm:px-2 lg:px-4 first:pl-0 last:pr-0 group"
              >
                {/* Pure Glass Capsule Icon Box - Compact & Monochrome */}
                <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-white/20 transition-all">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" strokeWidth={1.75} />
                </div>

                {/* Pure 2-Line Typography - Crisp & Compact */}
                <div className="min-w-0 flex-1">
                  <div className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-tight drop-shadow-xs">
                    {value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-slate-300 leading-none mt-0.5 truncate">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
