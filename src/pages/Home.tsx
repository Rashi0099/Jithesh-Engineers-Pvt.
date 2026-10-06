import React, { useEffect } from 'react';
import { HeroSection, StatsBar, ServiceCardsRow, OurReachSection, ClientsSection } from '@/components/home';
import { AboutSection } from '@/components/about';
import { ServicesSection } from '@/components/services';
import { ProjectsSection } from '@/components/projects';
import { CareersSection } from '@/components/careers';
import { ContactSection } from '@/components/contact';
export const Home: React.FC = () => {
  useEffect(() => {
    // Disable browser scroll restoration so refresh always stays cleanly at top on Home
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="relative">
      <div className="bg-slate-950">
        <HeroSection />
        <StatsBar />
        <ServiceCardsRow />
      </div>
      <div className="section-deferred"><AboutSection /></div>
      <div className="section-deferred"><ClientsSection /></div>
      <div className="section-deferred"><ServicesSection /></div>
      <div className="section-deferred"><ProjectsSection /></div>
      <div className="section-deferred"><CareersSection /></div>
      <div className="section-deferred"><OurReachSection /></div>
      <div className="section-deferred"><ContactSection /></div>
    </div>
  );
};
