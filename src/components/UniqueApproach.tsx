import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const UniqueApproach = () => {
  const approaches = [
    {
      icon: 'Target',
      title: 'Стратегия + Операционка + Креатив',
      description: 'Системный подход к развитию бизнеса на всех уровнях'
    },
    {
      icon: 'Users',
      title: 'Выращивание кадров',
      description: 'Формирую сильные команды и развиваю лидерский потенциал'
    },
    {
      icon: 'Settings',
      title: 'Налаживание систем',
      description: 'Внедряю процессы, которые работают без постоянного контроля'
    },
    {
      icon: 'Zap',
      title: 'Адаптация к сложным ситуациям',
      description: 'Быстро реагирую на изменения рынка и кризисные ситуации'
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Уникальный подход</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Четыре ключевых качества для системной трансформации вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {approaches.map((approach, index) => (
            <Card 
              key={index}
              className="p-8 hover-scale cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={approach.icon} className="text-primary" size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{approach.title}</h3>
                  <p className="text-muted-foreground">{approach.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueApproach;
