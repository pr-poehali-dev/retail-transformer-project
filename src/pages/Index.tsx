import HeroSection from '@/components/HeroSection';
import UniqueApproach from '@/components/UniqueApproach';
import WhenToCall from '@/components/WhenToCall';
import HowIWork from '@/components/HowIWork';
import KeyMetrics from '@/components/KeyMetrics';
import Philosophy from '@/components/Philosophy';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <UniqueApproach />
      <WhenToCall />
      <HowIWork />
      <KeyMetrics />
      <Philosophy />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;