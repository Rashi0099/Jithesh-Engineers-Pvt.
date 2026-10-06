import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppWidget } from '@/components/common';
import { initLenis } from '@/lib/lenis';

// Code-split BrochureModal so it only loads on-demand
const BrochureModal = lazy(() =>
  import('@/components/common/BrochureModal').then((m) => ({ default: m.BrochureModal }))
);

export const RootLayout: React.FC = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);

  useEffect(() => {
    // Initialize buttery smooth momentum scrolling
    initLenis();

    const handleOpenBrochure = () => setBrochureOpen(true);
    window.addEventListener('open-brochure-modal', handleOpenBrochure);
    return () => window.removeEventListener('open-brochure-modal', handleOpenBrochure);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 w-full max-w-full overflow-x-hidden">
      <Navbar onOpenBrochure={() => setBrochureOpen(true)} />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer onOpenBrochure={() => setBrochureOpen(true)} />

      {/* Floating WhatsApp Quick Inquiries Widget */}
      <WhatsAppWidget />

      {/* On-demand Corporate Brochure & Qualifications Dossier Modal */}
      {brochureOpen && (
        <Suspense fallback={null}>
          <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
        </Suspense>
      )}
    </div>
  );
};

