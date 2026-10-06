import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, FileDown, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '@/data/navigation';
import { useScroll } from '@/hooks/useScroll';
import { useScrollSpy, scrollToSection } from '@/hooks/useScrollSpy';
import { Logo } from '@/components/common';
import { Container } from '@/components/common/Container';

interface NavbarProps {
  onOpenBrochure?: () => void;
}

const SECTION_IDS = NAV_ITEMS.map((item) => item.targetId);

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrochure }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScroll(40);
  const activeSection = useScrollSpy(SECTION_IDS, 120);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (targetId: string) => {
    scrollToSection(targetId);
    setMobileMenuOpen(false);
  };

  const isDarkNav = isScrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkNav
          ? 'glass-nav border-b border-slate-200/90 shadow-md py-3'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <Container size="xl">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Official Brand Logo slightly indented to the right */}
          <div className="shrink-0 flex items-center pl-1 sm:pl-3">
            <Logo
              isDarkNav={isDarkNav}
              onClick={() => handleNavClick('home')}
              imgClassName="h-7 sm:h-7.5 md:h-8 lg:h-8.5 xl:h-9 w-auto max-w-[170px] sm:max-w-[195px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-11">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <button
                  key={item.targetId}
                  type="button"
                  onClick={() => handleNavClick(item.targetId)}
                  className={`relative py-1.5 text-sm lg:text-[14.5px] font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? isDarkNav
                        ? 'text-slate-950 font-bold'
                        : 'text-white font-bold'
                      : isDarkNav
                      ? 'text-slate-600 hover:text-slate-950'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                        isDarkNav ? 'bg-slate-950' : 'bg-white'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Brochure Download + Consultation */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {onOpenBrochure && (
              <button
                type="button"
                onClick={onOpenBrochure}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
                  isDarkNav
                    ? 'border-slate-300 text-slate-700 hover:bg-slate-100'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
                title="Download Jithesh Engineers Corporate Profile"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Brochure</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95 ${
                isDarkNav
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-white text-slate-950 hover:bg-slate-100'
              }`}
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions: Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors focus:outline-none ${
                isDarkNav
                  ? 'border-slate-200 text-slate-800 hover:bg-slate-100'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-5 border-t border-slate-200 pt-3 bg-white rounded-2xl shadow-2xl px-4 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.targetId;
                return (
                  <button
                    key={item.targetId}
                    type="button"
                    onClick={() => handleNavClick(item.targetId)}
                    className={`flex items-center justify-between px-3.5 py-2.5 text-sm rounded-lg transition-all text-left ${
                      isActive
                        ? 'text-slate-950 bg-slate-100 font-bold'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-medium'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    )}
                  </button>
                );
              })}

              <div className="pt-3 space-y-2 border-t border-slate-100 mt-2">
                <button
                  type="button"
                  onClick={() => handleNavClick('contact')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm active:scale-95"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  {onOpenBrochure && (
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenBrochure();
                      }}
                      className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-50"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>Brochure</span>
                    </button>
                  )}

                  <a
                    href={`https://wa.me/${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}?text=Hello%20Jithesh%20Engineers,%20I%20would%20like%20to%20inquire%20about%20structural%20consultancy.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
