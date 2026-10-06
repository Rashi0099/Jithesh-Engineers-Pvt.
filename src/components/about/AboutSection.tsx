import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '@/components/common/Container';
import { COMPANY_INFO } from '@/data/navigation';
import { CheckCircle2, Award, Shield, ArrowRight, Quote, X, ExternalLink, FileDown } from 'lucide-react';
import { scrollToSection } from '@/hooks/useScrollSpy';
import { assetUrl } from '@/lib/assets';
import { getLenis } from '@/lib/lenis';

const FOUNDER_PHOTO = assetUrl('/real-assets/director.webp');
const CERTIFICATE_IMAGE = assetUrl('/real-assets/certificate_02.webp');
const PAPER_CUT_IMAGE = assetUrl('/real-assets/paper_cut_01.webp');
const CERTIFICATE_THUMB = assetUrl('/real-assets/certificate_02_thumb.webp');
const PAPER_CUT_THUMB = assetUrl('/real-assets/paper_cut_01_thumb.webp');

export const AboutSection: React.FC = () => {
  const [activeAwardModal, setActiveAwardModal] = useState<{ title: string; image: string } | null>(null);

  // Close modal on Escape key & Lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveAwardModal(null);
    };

    if (activeAwardModal) {
      window.addEventListener('keydown', handleKeyDown);
      const lenis = getLenis();
      lenis?.stop();
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const preventTouchScroll = (e: TouchEvent) => {
        const target = e.target as HTMLElement | null;
        if (!target?.closest('[data-modal-scrollable]')) {
          e.preventDefault();
        }
      };
      window.addEventListener('touchmove', preventTouchScroll, { passive: false });

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('touchmove', preventTouchScroll);
        lenis?.start();
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
      };
    }
  }, [activeAwardModal]);

  return (
    <section id="about" className="py-16 sm:py-20 bg-white relative">
      <Container size="xl">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block mb-1">
            CONSULTANCY BACKGROUND & LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            About the Firm
          </h2>
          <div className="w-16 h-1 bg-slate-900 mt-2.5 rounded-full" />
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Firm Profile & Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Established in <strong>{COMPANY_INFO.established}</strong> in Calicut (initially as <em>Jithesh & Associates</em>), <strong>{COMPANY_INFO.legalName}</strong> is a premier structural engineering consultancy delivering high-performance, cost-effective, and code-compliant structural solutions across India and Saudi Arabia.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Led by Chief Structural Engineer <strong>Er. K. Jithesh</strong>, practicing in the construction industry since <strong>1991</strong>, our consultancy collaborates directly with leading architects, developers, and government bodies from conceptual framing through computerized 3D finite element analysis to comprehensive site supervision.
              </p>
            </div>

            {/* Director's Thought / Quote */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 relative">
              <Quote className="w-6 h-6 text-slate-300 absolute top-4 right-4" />
              <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed pr-6">
                “A dream doesn't become reality through magic; it takes hard work, dedication and engineering precision. When I founded this consultancy in Calicut in 2008, our commitment was straightforward: absolute structural integrity, economic efficiency, and lasting architectural value.”
              </p>
              <div className="mt-2.5 pt-2 border-t border-slate-200/70 flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-slate-900">Er. K. Jithesh, MTech, MIE, CEng</span>
                <span className="text-slate-500">Managing Director</span>
              </div>
            </div>


            {/* Awards & Recognition Strip */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 font-mono mb-3">
                National Awards & Recognition
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setActiveAwardModal({ title: 'Fastest Growing Indian Company Excellence Award', image: CERTIFICATE_IMAGE })}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-white hover:border-slate-400 hover:shadow-sm transition-all text-left group"
                >
                  <img
                    src={CERTIFICATE_THUMB}
                    alt="Fastest Growing Indian Company Excellence Award"
                    width="48"
                    height="48"
                    className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0 group-hover:scale-105 transition-transform"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-slate-600 font-semibold block">IAC Excellence Award</span>
                    <span className="text-xs font-bold text-slate-900 truncate block">Fastest Growing Indian Company</span>
                    <span className="text-[11px] text-slate-600 flex items-center gap-1 mt-0.5">
                      <span>View Certificate</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveAwardModal({ title: '10 Most Promising Engineering Consultants in India - 2017', image: PAPER_CUT_IMAGE })}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-white hover:border-slate-400 hover:shadow-sm transition-all text-left group"
                >
                  <img
                    src={PAPER_CUT_THUMB}
                    alt="SiliconIndia 10 Most Promising Engineering Consultants"
                    width="48"
                    height="48"
                    className="w-12 h-12 rounded-lg object-cover border border-slate-200 shrink-0 group-hover:scale-105 transition-transform"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-slate-600 font-semibold block">SiliconIndia Feature</span>
                    <span className="text-xs font-bold text-slate-900 truncate block">10 Most Promising Consultants</span>
                    <span className="text-[11px] text-slate-600 flex items-center gap-1 mt-0.5">
                      <span>View Feature</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Founder & Leadership Card with Real Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden group">
              {/* Photo Frame Container */}
              <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                <img
                  src={FOUNDER_PHOTO}
                  alt="Er. K. Jithesh - Managing Director & Chief Structural Engineer"
                  width="600"
                  height="450"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
                
                {/* Overlay Name Tag */}
                <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-medium block">
                      Founder & Chief Structural Engineer
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      Er. K. Jithesh
                    </h3>
                  </div>
                  <div className="px-2 py-1 rounded bg-white/20 backdrop-blur-md border border-white/30 font-mono font-bold text-[11px] text-white">
                    MTech • CEng
                  </div>
                </div>
              </div>

              {/* Details & Credentials Below Photo */}
              <div className="p-5 sm:p-6 space-y-4">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Managing Director & Principal Consultant
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 font-medium">
                    MTech (Structural Engineering) • Practicing Since 1991
                  </div>
                </div>

                <div className="space-y-2.5 border-t border-slate-100 pt-3.5">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <Award className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>Chartered Engineer (CEng) — India</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <Shield className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>Member, Institution of Engineers (India) [MIE]</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>Member, Indian Concrete Institute (ICI)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                    <span>Approved Valuer & Structural Consultant</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-all text-xs font-semibold uppercase tracking-wider shadow-sm active:scale-95"
                  >
                    <span>Connect With Our Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-brochure-modal'))}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-all text-xs font-semibold uppercase tracking-wider active:scale-95"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download Corporate Profile (PDF)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Award Modal Lightbox */}
      {activeAwardModal &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 select-none overflow-y-auto"
            onClick={() => setActiveAwardModal(null)}
            data-lenis-prevent
          >
            <div
              className="bg-white rounded-2xl max-w-lg sm:max-w-xl w-full p-4 sm:p-5 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[76vh] my-auto border border-slate-200/80"
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 shrink-0">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate pr-3">
                  {activeAwardModal.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveAwardModal(null)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div
                className="overflow-hidden rounded-xl border border-slate-200 bg-slate-900/5 flex items-center justify-center p-2 flex-1 max-h-[60vh]"
                data-modal-scrollable
              >
                <img
                  src={activeAwardModal.image}
                  alt={activeAwardModal.title}
                  className="w-auto h-auto max-h-[56vh] max-w-full object-contain rounded-lg shadow-sm"
                  loading="eager"
                  decoding="sync"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
