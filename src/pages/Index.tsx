import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MissionSection } from "@/components/MissionSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { ImpactSection } from "@/components/ImpactSection";
import { EventsSection } from "@/components/EventsSection";
import { GetInvolvedSection } from "@/components/GetInvolvedSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <WhatWeDoSection />
      <ImpactSection />
      <EventsSection />
      <GetInvolvedSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
