import React from 'react';
import { Award, Globe2, Calendar, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/common/Container';

const STATS = [
  {
    icon: Award,
    value: '18+',
    unit: 'Years',
    label: 'Consultancy Practice',
    detail: 'Continuous engineering excellence since inception',
  },
  {
    icon: Globe2,
    value: 'Multiple States',
    unit: 'Reach',
    label: 'India & Saudi Arabia',
    detail: 'Kerala, Pan-India & Middle East sites',
  },
  {
    icon: Calendar,
    value: '2008',
    unit: 'Est.',
    label: 'Year Established',
    detail: 'Founded by Er. K. Jithesh in Calicut',
  },
  {
    icon: ShieldCheck,
    value: '100+ Projects',
    unit: 'Delivered',
    label: 'Trusted by Builders',
    detail: 'Landmark, Pentium, KHRWS & more',
  },
];

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-200/80 relative z-20">
      <Container size="xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200/80">
          {STATS.map(({ icon: Icon, value, unit, label, detail }) => (
            <div
              key={label}
              className="bg-white group p-3.5 sm:p-6 lg:p-7 hover:bg-slate-50/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-600 transition-colors">
                  {unit}
                </span>
              </div>

              <div>
                <div className="text-base sm:text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {value}
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-700 mt-0.5 sm:mt-1 truncate sm:whitespace-normal">
                  {label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2 sm:line-clamp-none">
                  {detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
