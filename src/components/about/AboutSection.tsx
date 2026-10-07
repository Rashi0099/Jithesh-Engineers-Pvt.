import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '@/components/common/Container';
import { COMPANY_INFO } from '@/data/navigation';
import { ArrowRight, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';
import { assetUrl } from '@/lib/assets';
import { getLenis } from '@/lib/lenis';

const FOUNDER_PHOTO = assetUrl('/real-assets/director.webp');
const CERTIFICATE_IMAGE = assetUrl('/real-assets/certificate_02.webp');
const PAPER_CUT_IMAGE = assetUrl('/real-assets/paper_cut_01.webp');
const CERTIFICATE_THUMB = assetUrl('/real-assets/certificate_02_thumb.webp');
const PAPER_CUT_THUMB = assetUrl('/real-assets/paper_cut_01_thumb.webp');

export const AboutSection: React.FC = () => {
  const [activeAwardModal, setActiveAwardModal] = useState<{ title: string; image: string } | null>(null);
  const awardsRowRef = useRef<HTMLDivElement>(null);

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

  const handleScrollAwards = (direction: 'left' | 'right') => {
    if (awardsRowRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      awardsRowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative bg-gradient-to-b from-[#e1eefc] via-[#ecf4fd] to-[#eaf2fc] overflow-hidden py-10 sm:py-14">
      {/* Decorative Wave Shapes & Liquid Background matching reference image */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Top-left soft flowing curve */}
        <svg
          className="absolute -top-12 -left-12 w-[520px] h-[520px] text-[#bedbfa] opacity-65"
          viewBox="0 0 520 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C180,60 300,30 380,160 C460,290 340,430 520,520 L0,520 Z"
            fill="currentColor"
            fillOpacity="0.45"
          />
        </svg>

        {/* Top-right soft blue blur */}
        <div className="absolute top-8 -right-16 w-80 h-80 rounded-full bg-[#c9e3fc]/50 blur-3xl" />
        
        {/* Mid-section wave ribbon flowing across quote area */}
        <svg
          className="absolute top-[38%] -right-10 w-[720px] h-[340px] text-[#b9daf9] opacity-55"
          viewBox="0 0 720 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720,0 C560,50 400,190 240,170 C100,150 40,240 0,340 L720,340 Z"
            fill="currentColor"
            fillOpacity="0.5"
          />
        </svg>
        <svg
          className="absolute top-[40%] -left-16 w-[400px] h-[300px] text-[#cce4fd] opacity-45"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 C120,40 260,180 400,160 L400,300 L0,300 Z"
            fill="currentColor"
            fillOpacity="0.4"
          />
        </svg>

        {/* Bottom-left soft glow */}
        <div className="absolute bottom-10 left-4 w-72 h-72 rounded-full bg-[#dbeefe]/40 blur-3xl" />
      </div>

      <Container size="xl" className="relative">
        {/* ========================================================= */}
        {/* TIER 1: CONSULTANCY BACKGROUND & FOUNDER CARD             */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Background & Leadership Info */}
          <div className="lg:col-span-6 space-y-3.5">
            <div>
              {/* Kicker with dash */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-5 h-0.5 bg-slate-500 inline-block" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-slate-600 font-bold">
                  CONSULTANCY BACKGROUND & LEADERSHIP
                </span>
              </div>

              {/* Heading with Dot Matrix Accent */}
              <div className="relative inline-block">
                <h2 className="text-3xl sm:text-[34px] font-black text-slate-900 tracking-tight leading-tight">
                  About the Firm
                </h2>
                
                {/* 6x4 Dot Matrix decorative grid beside title */}
                <div className="absolute -top-1 -right-16 hidden sm:grid grid-cols-6 gap-1 opacity-25 pointer-events-none">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-blue-700" />
                  ))}
                </div>
              </div>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed max-w-xl">
              <p>
                Established in <strong className="text-slate-900 font-semibold">{COMPANY_INFO.established}</strong> in Calicut (initially as <em className="italic">Jithesh & Associates</em>), <strong className="text-slate-900 font-semibold">{COMPANY_INFO.legalName}</strong> is a premier structural engineering consultancy delivering high-performance, cost-effective, and code-compliant structural solutions across India and Saudi Arabia.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Led by Chief Structural Engineer <strong className="text-slate-900 font-semibold">Er. K. Jithesh</strong>, practicing in the construction industry since <strong className="text-slate-900 font-semibold">1991</strong>, our consultancy collaborates directly with leading architects, developers, and government bodies from conceptual framing through computerized 3D finite element analysis to comprehensive site supervision.
              </p>
            </div>

            {/* Our Story Link */}
            <div className="pt-0.5">
              <a
                href="#about-quote"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about-quote')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 font-bold text-slate-900 border-b border-slate-900 pb-0.5 hover:text-blue-700 hover:border-blue-700 transition-colors text-xs sm:text-[13px] group"
              >
                <span>Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Center/Right Column: Founder Card (Compact & Elegant) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[340px] sm:max-w-[360px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-[#07162e] group transition-all duration-300 hover:shadow-2xl">
              {/* Founder Photo */}
              <div className="relative aspect-[16/11] max-h-[220px] bg-slate-950 overflow-hidden">
                <img
                  src={FOUNDER_PHOTO}
                  alt="Er. K. Jithesh - Founder & Chief Structural Engineer"
                  width="600"
                  height="412"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Bottom Dark Navy Card Overlay */}
              <div className="p-4 sm:p-4.5 bg-[#07162e] text-white">
                <div className="flex items-start justify-between gap-2.5 mb-1.5">
                  <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    FOUNDER & CHIEF STRUCTURAL ENGINEER
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/10 backdrop-blur-md border border-white/20 font-mono text-[10px] text-white font-medium shrink-0">
                    MTech • CEng
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Er. K. Jithesh
                </h3>
                
                <div className="mt-0.5 space-y-0.5">
                  <p className="text-[11.5px] sm:text-xs text-slate-200 font-medium">
                    Managing Director & Principal Consultant
                  </p>
                  <p className="text-[10.5px] text-slate-400">
                    MTech (Structural Engineering) • Practicing Since 1991
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Far Right Vertical Margin Tag (Desktop) */}
          <div className="hidden lg:col-span-1 lg:flex flex-col items-end justify-center text-right select-none pr-1">
            <div className="space-y-1 text-[8.5px] font-mono font-bold tracking-[0.22em] text-slate-500 uppercase leading-snug">
              <div>PEOPLE</div>
              <div>IDEAS</div>
              <div>STRUCTURES</div>
              <div className="text-slate-800">REAL IMPACT</div>
            </div>
            <div className="w-6 h-0.5 bg-slate-300 mt-2.5" />
          </div>

        </div>

        {/* ========================================================= */}
        {/* TIER 2: QUOTE & PHILOSOPHY RIBBON                        */}
        {/* ========================================================= */}
        <div id="about-quote" className="my-7 sm:my-9 pt-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            
            {/* Main Quote Box */}
            <div className="lg:col-span-11 flex items-start gap-3 sm:gap-5">
              {/* Large Stylized Light Blue Quote Icon */}
              <div className="shrink-0 text-blue-400 font-serif text-4xl sm:text-5xl leading-none select-none -mt-1">
                “
              </div>

              {/* Quote Content & Signature */}
              <div className="space-y-2 pt-0.5">
                <blockquote className="text-slate-700 italic font-medium text-xs sm:text-[13.5px] leading-relaxed max-w-3xl">
                  “A dream doesn't become reality through magic; it takes hard work, dedication and engineering precision. When I founded this consultancy in Calicut in 2008, our commitment was straightforward: absolute structural integrity, economic efficiency, and lasting architectural value.”
                </blockquote>
                
                <div className="flex items-center gap-1.5 pt-0.5 text-xs">
                  <span className="w-4 h-0.5 bg-slate-400 inline-block" />
                  <span className="font-bold text-slate-900">Er. K. Jithesh,</span>
                  <span className="text-slate-600 font-mono text-[10.5px]">MTech, MIE, CEng</span>
                </div>
                <div className="pl-5 text-[11px] text-slate-500 font-medium">
                  Managing Director
                </div>
              </div>
            </div>

            {/* Far Right Vertical Margin Tag (Desktop) */}
            <div className="hidden lg:col-span-1 lg:flex flex-col items-end justify-center text-right select-none pr-1">
              <div className="space-y-1 text-[8.5px] font-mono font-bold tracking-[0.22em] text-slate-500 uppercase leading-snug">
                <div>BUILDING</div>
                <div>SAFER</div>
                <div className="text-slate-900 font-black">STRONGER</div>
                <div>TOMORROW</div>
              </div>
              <div className="w-6 h-0.5 bg-slate-300 mt-2.5" />
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* TIER 3: NATIONAL AWARDS & RECOGNITION (OUR ACHIEVEMENTS)   */}
        {/* ========================================================= */}
        <div className="pt-1">
          {/* Header Row */}
          <div className="flex items-end justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-0.5 bg-slate-500 inline-block" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-slate-600 font-bold">
                  NATIONAL AWARDS & RECOGNITION
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Our Achievements
              </h3>
            </div>

            {/* Slider / Carousel Navigation Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleScrollAwards('left')}
                className="w-8 h-8 rounded-full bg-blue-50/90 hover:bg-blue-100 text-blue-900 border border-blue-200/60 flex items-center justify-center transition-colors shadow-xs active:scale-95 cursor-pointer"
                aria-label="Previous achievement"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScrollAwards('right')}
                className="w-8 h-8 rounded-full bg-blue-50/90 hover:bg-blue-100 text-blue-900 border border-blue-200/60 flex items-center justify-center transition-colors shadow-xs active:scale-95 cursor-pointer"
                aria-label="Next achievement"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div
            ref={awardsRowRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 overflow-x-auto pb-1 scroll-smooth"
          >
            {/* Award Card 1: IAC Excellence Award */}
            <button
              type="button"
              onClick={() => setActiveAwardModal({ title: 'Fastest Growing Indian Company Excellence Award', image: CERTIFICATE_IMAGE })}
              className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-white border border-blue-100/90 shadow-[0_3px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-blue-300 transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <img
                  src={CERTIFICATE_THUMB}
                  alt="Fastest Growing Indian Company Excellence Award"
                  width="96"
                  height="68"
                  className="w-18 h-13 sm:w-22 sm:h-16 rounded-lg object-cover border border-slate-100 shadow-sm shrink-0 group-hover:scale-102 transition-transform"
                  loading="lazy"
                  decoding="async"
                />
                <div className="min-w-0">
                  <span className="text-[9.5px] font-mono uppercase text-slate-500 font-semibold tracking-wider block mb-0.5">
                    IAC EXCELLENCE AWARD
                  </span>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 group-hover:text-blue-900 transition-colors truncate">
                    Fastest Growing Indian Company
                  </h4>
                  <span className="text-[11px] text-blue-600 font-medium hover:underline flex items-center gap-1 mt-1">
                    <span>View Certificate</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#07162e] text-white flex items-center justify-center group-hover:bg-[#0f2044] group-hover:scale-105 transition-all shrink-0 ml-2.5 shadow-sm">
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
            </button>

            {/* Award Card 2: SiliconIndia Feature */}
            <button
              type="button"
              onClick={() => setActiveAwardModal({ title: '10 Most Promising Engineering Consultants in India - 2017', image: PAPER_CUT_IMAGE })}
              className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-white border border-blue-100/90 shadow-[0_3px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-blue-300 transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <img
                  src={PAPER_CUT_THUMB}
                  alt="SiliconIndia 10 Most Promising Engineering Consultants"
                  width="96"
                  height="68"
                  className="w-18 h-13 sm:w-22 sm:h-16 rounded-lg object-cover border border-slate-100 shadow-sm shrink-0 group-hover:scale-102 transition-transform"
                  loading="lazy"
                  decoding="async"
                />
                <div className="min-w-0">
                  <span className="text-[9.5px] font-mono uppercase text-slate-500 font-semibold tracking-wider block mb-0.5">
                    SILICONINDIA FEATURE
                  </span>
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 group-hover:text-blue-900 transition-colors truncate">
                    10 Most Promising Consultants
                  </h4>
                  <span className="text-[11px] text-blue-600 font-medium hover:underline flex items-center gap-1 mt-1">
                    <span>View Feature</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#07162e] text-white flex items-center justify-center group-hover:bg-[#0f2044] group-hover:scale-105 transition-all shrink-0 ml-2.5 shadow-sm">
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
            </button>
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

