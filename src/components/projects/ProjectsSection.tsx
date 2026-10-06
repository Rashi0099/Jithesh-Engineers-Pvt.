import React, { useState, useEffect } from 'react';
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

const INITIAL_VISIBLE_COUNT = 6;

export const ProjectsSection: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
            Selected structural engineering projects across residential, commercial, industrial, and specialized sectors.
          </p>
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
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Showcase */}
              <div className="relative aspect-[16/10] w-full bg-slate-950">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-blue-300">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {activeModalProject.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                    <span>{activeModalProject.location}</span>
                    {activeModalProject.year && (
                      <>
                        <span>•</span>
                        <Calendar className="w-3.5 h-3.5 text-brand-accent" />
                        <span>{activeModalProject.year}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Body Info */}
              <div className="p-6 sm:p-8 space-y-6">
                {activeModalProject.scope && (
                  <div className="p-4 rounded-xl bg-brand-light border border-slate-200 flex items-start gap-3">
                    <Layers className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block">
                        Structural Engineering Scope
                      </span>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">
                        {activeModalProject.scope}
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-mono">
                    IS & International Structural Standards Compliant
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveModalProject(null);
                      scrollToSection('contact');
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-blue transition-colors shadow-sm active:scale-95"
                  >
                    <span>Inquire for Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
