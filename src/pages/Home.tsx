import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection, StatsBar, ServiceCardsRow, OurReachSection, ClientsSection } from '@/components/home';
import { AboutSection } from '@/components/about';
import { ServicesSection } from '@/components/services';
import { ProjectsSection } from '@/components/projects';
import { CareersSection } from '@/components/careers';
import { ContactSection } from '@/components/contact';
import { scrollToSection } from '@/hooks/useScrollSpy';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100);
    } else if (location.pathname !== '/') {
      const targetId = location.pathname.replace('/', '');
      if (['about', 'services', 'projects', 'clients', 'careers', 'reach', 'contact'].includes(targetId)) {
        setTimeout(() => {
          scrollToSection(targetId);
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="relative">
      <HeroSection />
      <StatsBar />
      <ServiceCardsRow />
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
