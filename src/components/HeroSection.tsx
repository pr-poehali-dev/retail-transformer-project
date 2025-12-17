import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Системный лидер ритейла
              </h1>
              <p className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Трансформирую бизнес через стратегию, операционную эффективность и креатив
              </p>
            </div>
            
            <div className="flex items-center gap-3 text-lg text-muted-foreground">
              <Icon name="TrendingUp" className="text-primary" size={24} />
              <p className="font-medium">18+ лет опыта. Выстраиваю процессы с нуля для роста продаж на 30-50%</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => scrollToSection('experience')}
              >
                Смотреть кейсы и результаты
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => scrollToSection('contact')}
              >
                Связаться
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/10">
              <div className="w-full h-full rounded-2xl bg-muted/30 flex items-center justify-center">
                <Icon name="User" size={120} className="text-muted-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
