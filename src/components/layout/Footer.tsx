import React from 'react';
import { MapPin, Phone, Mail, Clock, FileDown } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO, SOCIAL_LINKS } from '@/data/navigation';
import { SERVICES_DATA } from '@/data/services';
import { Container, Logo } from '@/components/common';
import { scrollToSection } from '@/hooks/useScrollSpy';

interface FooterProps {
  onOpenBrochure?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 relative z-10 border-t border-slate-800/80">
      {/* Main Footer Body */}
      <div className="py-14 sm:py-16">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Col 1: Brand */}
            <div className="space-y-4">
              <div className="pb-1">
                <Logo
                  variant="dark"
                  onClick={() => scrollToSection('home')}
                  imgClassName="h-8 sm:h-9 w-auto"
                />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                A premier structural engineering consultancy delivering reliable, efficient, and technically sound engineering solutions across India and Saudi Arabia.
              </p>
              <div className="text-xs text-slate-400 font-mono">
                Established {COMPANY_INFO.established} • Headquartered in {COMPANY_INFO.headquarters}
              </div>
              {onOpenBrochure && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenBrochure}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all border border-white/15"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download Corporate Profile (PDF)</span>
                  </button>
                </div>
              )}
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-5 font-semibold">
                Navigation
              </h3>
              <ul className="space-y-2.5 text-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.targetId}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.targetId)}
                      className="text-slate-400 hover:text-white transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-5 font-semibold">
                Core Expertise
              </h3>
              <ul className="space-y-2.5 text-sm">
                {SERVICES_DATA.slice(0, 5).map((s) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection('services')}
                      className="text-slate-400 hover:text-white transition-colors text-left"
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Office */}
            <div className="space-y-3.5 text-sm">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-5 font-semibold">
                Contact Office
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-slate-400">{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-white/10 py-6 text-xs text-slate-400">
        <Container size="xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
