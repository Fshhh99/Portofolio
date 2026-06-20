import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ServicesSection } from '@/components/services-section';
import { ExperienceSection } from '@/components/experience-section';
import { SkillsSection } from '@/components/skills-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Rafly Firmansyah | Network Engineering & IT Professional',
  description: 'Portfolio of Rafly Firmansyah - Information Technology student at Telkom University with expertise in network engineering, system administration, and infrastructure design.',
};

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
