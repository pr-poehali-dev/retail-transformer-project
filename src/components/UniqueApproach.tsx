import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const UniqueApproach = () => {
  const approaches = [
    {
      icon: 'Target',
      title: 'Стратегия, которая работает в реальности',
      description: 'Я строю стратегии, опираясь на полевой опыт продаж и реальный путь клиента, а не на абстрактные модели.'
    },
    {
      icon: 'TrendingDown',
      title: 'Жёсткая работа с эффективностью',
      description: 'Без меня бизнес теряет до 30% выручки из-за некорректной работы с продуктом и спросом. Я возвращаю фокус, приоритеты и деньги.'
    },
    {
      icon: 'Users',
      title: 'Чистка и усиление команд',
      description: 'Я убираю ленивых процессников, токсичных «энерговампиров», людей «день прошёл — и ладно». И удерживаю идейных и сильных, создавая точку опоры для роста.'
    },
    {
      icon: 'Zap',
      title: 'Быстрая реакция на кризис',
      description: 'Я улавливаю колебания результатов раньше отчётов и принимаю микро- и экстра-решения, пока другие согласовывают процессы.'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Моя уникальность
          </h2>
          <p className="text-2xl lg:text-3xl font-light text-foreground max-w-4xl mx-auto leading-relaxed">
            Я не «маркетинг». Я — система, которая зарабатывает.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Моя сила — в соединении аналитики, креатива и психологии потребителя.
            Я не трачу бюджеты — я инвестирую только туда, где есть выхлоп.
            Я понимаю продукт снизу вверх: от свойств товара и поведения клиента — до P&L и стратегии роста.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {approaches.map((approach, index) => (
            <Card 
              key={index}
              className="p-8 hover-scale cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={approach.icon} className="text-primary" size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{approach.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
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
