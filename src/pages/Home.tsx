import React, { useEffect } from 'react';
import { HeroSection, StatsBar, ServiceCardsRow, OurReachSection, ClientsSection } from '@/components/home';
import { AboutSection } from '@/components/about';
import { ServicesSection } from '@/components/services';
import { ProjectsSection } from '@/components/projects';
import { CareersSection } from '@/components/careers';
import { ContactSection } from '@/components/contact';
import { getLenis } from '@/lib/lenis';

export const Home: React.FC = () => {
  useEffect(() => {
    // Disable browser scroll restoration so refresh always stays cleanly at top on Home
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const navEntry = window.performance?.getEntriesByType?.('navigation')?.[0] as PerformanceNavigationTiming | undefined;
    const isReload = navEntry?.type === 'reload' || (window.performance as unknown as { navigation?: { type?: number } })?.navigation?.type === 1;

    if (isReload || window.location.hash) {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      window.scrollTo(0, 0);
      const resetScroll = () => {
        window.scrollTo(0, 0);
        const lenis = getLenis();
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        }
      };
      resetScroll();
      requestAnimationFrame(resetScroll);
      setTimeout(resetScroll, 50);
    }
  }, []);

  return (
    <div className="relative">
      <div className="bg-slate-950">
        <HeroSection />
        <StatsBar />
        <ServiceCardsRow />
      </div>
      <AboutSection />
      <ClientsSection />
      <ServicesSection />
      <ProjectsSection />
      <CareersSection />
      <OurReachSection />
      <ContactSection />
    </div>
  );
};
