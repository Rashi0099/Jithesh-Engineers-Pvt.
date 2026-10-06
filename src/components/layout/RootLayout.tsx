import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppWidget, BrochureModal } from '@/components/common';

export const RootLayout: React.FC = () => {
  const [brochureOpen, setBrochureOpen] = useState(false);

  useEffect(() => {
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

      {/* Corporate Brochure & Qualifications Dossier Modal */}
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
    </div>
  );
};
