import { Hero } from '@/components/Hero';
import { ServicesGrid } from '@/components/ServicesGrid';
import { AboutSection } from '@/components/AboutSection';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <ContactForm />
    </div>
  );
}
