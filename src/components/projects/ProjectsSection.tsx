import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Container } from '@/components/common/Container';
import { PROJECTS_DATA, ProjectItem } from '@/data/projects';
import {
  MapPin,
  X,
  Layers,
  Calendar,
  Maximize2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from 'lucide-react';
import { scrollToSection } from '@/hooks/useScrollSpy';
import { getLenis } from '@/lib/lenis';

const INITIAL_VISIBLE_COUNT = 6;

export const ProjectsSection: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape key & Lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };

    if (activeModalProject) {
      window.addEventListener('keydown', handleKeyDown);
      const lenis = getLenis();
      lenis?.stop();
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
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
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [activeModalProject]);

  const visibleProjects = showAll
    ? PROJECTS_DATA
    : PROJECTS_DATA.slice(0, INITIAL_VISIBLE_COUNT);

  const hasMore = PROJECTS_DATA.length > INITIAL_VISIBLE_COUNT;

  const toggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      scrollToSection('projects');
    } else {
      setShowAll(true);
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-24 bg-white relative">
      <Container size="xl">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Our Projects
          </h2>
          <div className="w-16 h-1 bg-brand-navy mt-2.5 rounded-full" />
          
        </div>

        {/* Photo-First Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200/90 bg-white hover:border-brand-accent/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              onClick={() => setActiveModalProject(project)}
            >
              {/* Photo Showcase Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  width="400"
                  height="275"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle Gradient for Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20" />

                {/* Year Top Right */}
                {project.year && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-0.5 rounded-md bg-black/50 backdrop-blur-md text-white text-[11px] font-mono font-medium">
                      {project.year}
                    </span>
                  </div>
                )}

                {/* Hover Quick-View Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-navy/30 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-brand-navy text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5 text-brand-accent" />
                    View Structure
                  </span>
                </div>
              </div>

              {/* Minimal Clean Card Footer (Without Right Arrow Button) */}
              <div className="p-5">
                <h3 className="text-base sm:text-lg font-black text-brand-navy tracking-tight group-hover:text-brand-accent transition-colors leading-snug">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-brand-muted mt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Toggle Button (Compact & Minimal) */}
        {hasMore && (
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              type="button"
              onClick={toggleShowAll}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300 hover:border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-200 text-xs font-semibold shadow-xs hover:shadow-sm active:scale-95 group"
            >
              <span>
                {showAll
                  ? 'View Less'
                  : `View More Projects (${PROJECTS_DATA.length - INITIAL_VISIBLE_COUNT})`}
              </span>
              {showAll ? (
                <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}

        {/* ─── INTERACTIVE PHOTO LIGHTBOX MODAL ────────────────────────────── */}
        {activeModalProject &&
          typeof document !== 'undefined' &&
          createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 select-none overflow-y-auto"
              onClick={() => setActiveModalProject(null)}
              onWheel={(e) => {
                if (e.target === e.currentTarget) e.preventDefault();
              }}
              onTouchMove={(e) => {
                if (e.target === e.currentTarget) e.preventDefault();
              }}
              data-lenis-prevent
            >
              <div
                className="relative w-full max-w-xl lg:max-w-2xl max-h-[88vh] sm:max-h-[84vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 my-auto"
                onClick={(e) => e.stopPropagation()}
                data-lenis-prevent
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-3.5 right-3.5 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all backdrop-blur-md shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Cinematic Image Header with enhanced height */}
                <div className="relative h-60 sm:h-72 md:h-80 shrink-0 w-full bg-slate-950 overflow-hidden">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    width="800"
                    height="450"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    decoding="sync"
                  />
                  {/* Subtle gradient focused only at bottom for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3.5 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 text-white">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-blue-300">
                      {activeModalProject.category}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black text-white mt-0.5 leading-tight">
                      {activeModalProject.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>{activeModalProject.location}</span>
                      {activeModalProject.year && (
                        <>
                          <span className="text-slate-500">•</span>
                          <Calendar className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                          <span>{activeModalProject.year}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Scrollable Modal Body Info */}
                <div
                  className="overflow-y-auto overscroll-contain p-4 sm:p-5 space-y-3.5 sm:space-y-4 flex-1"
                  data-lenis-prevent
                  data-modal-scrollable
                >
                  {activeModalProject.scope && (
                    <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-navy shrink-0 mt-0.5">
                        <Layers className="w-4 h-4 text-brand-accent" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-navy block">
                          Structural Engineering Scope
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                          {activeModalProject.scope}
                        </p>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Project Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {activeModalProject.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-[11px] text-slate-500 font-mono text-center sm:text-left">
                      IS & International Structural Standards Compliant
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveModalProject(null);
                        scrollToSection('contact');
                      }}
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 sm:py-2.5 rounded-xl bg-brand-navy hover:bg-brand-blue text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer"
                    >
                      <span>Inquire for Similar Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )}
      </Container>
    </section>
  );
};
