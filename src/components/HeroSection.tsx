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
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Александр Кузиков — системный антикризисный лидер ритейла.
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Я вхожу туда, где бизнес буксует, теряет деньги и людей, и пересобираю его в управляемую, прибыльную систему. Я — плечо собственника, когда тыла больше нет.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="AlertTriangle" className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-lg font-semibold text-foreground">Когда бизнес теряет деньги — я возвращаю контроль</p>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>• Пересобираю бизнес там, где решения больше не работают</p>
                <p>• Системная трансформация маркетинга, продаж и команд</p>
                <p>• Из хаоса — в управляемую прибыль</p>
              </div>
            </div>
            
            <div className="bg-primary/10 p-6 rounded-lg space-y-3">
              <p className="text-lg font-bold text-foreground">15+ лет опыта</p>
              <p className="text-muted-foreground">Останавливаю потери до –30% выручки, сокращаю путь к результату на 6 месяцев.</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => scrollToSection('experience')}
              >
                Смотреть результаты
                <Icon name="TrendingUp" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => scrollToSection('contact')}
              >
                Обсудить задачу
                <Icon name="MessageSquare" className="ml-2" size={20} />
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary/10 shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/files/Изображение WhatsApp 2025-10-24 в 12.17.11_7fb21fbb.jpg" 
                alt="Александр Кузиков"
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;