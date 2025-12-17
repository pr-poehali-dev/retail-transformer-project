import { Badge } from '@/components/ui/badge';

const Philosophy = () => {
  const skills = [
    'Brand Strategy',
    'P&L Management',
    'Omnichannel',
    'AI Marketing',
    'Data Analytics',
    'CRM Systems',
    'Team Building',
    'Digital Transformation',
    'Retail Operations',
    'Customer Experience',
    'E-commerce',
    'Performance Marketing',
    'Product Development',
    'Supply Chain',
    'Change Management'
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Не просто маркетинг.
              <br />
              <span className="text-primary">Это системная трансформация бизнеса</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '200ms' }}>
            <p className="leading-relaxed">
              Я не верю в изолированные решения. Настоящий рост возможен только через системную трансформацию — 
              когда стратегия, данные, технологии и люди работают как единый механизм.
            </p>
            <p className="leading-relaxed">
              Мой подход основан на глубоком анализе данных, внедрении омниканальных систем и использовании 
              AI для принятия решений. Но главное — я вижу потенциал в людях и умею выращивать команды, 
              которые продолжают развивать бизнес после завершения проекта.
            </p>
            <p className="leading-relaxed font-medium text-foreground">
              Я не просто улучшаю показатели — я создаю устойчивые системы роста.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-semibold text-center">Ключевые компетенции</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="text-base px-5 py-2 hover-scale cursor-default transition-all hover:bg-primary hover:text-primary-foreground"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
