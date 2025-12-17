import HeroSection from '@/components/HeroSection';
import UniqueApproach from '@/components/UniqueApproach';
import Experience from '@/components/Experience';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <UniqueApproach />
      <Experience />
      <Philosophy />
      <Contact />
    </div>
  );
};

export default Index;