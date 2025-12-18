import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HowIWork = () => {
  const phases = [
    {
      period: 'Первые 30 дней',
      color: 'bg-blue-500/10 border-blue-500/30',
      icon: 'Search',
      iconColor: 'text-blue-500',
      tasks: [
        'Глубокое погружение в цифры, продукт и процессы',
        'Диагностика слабых мест на всех уровнях',
        'Первые быстрые решения, которые сразу стабилизируют ситуацию'
      ]
    },
    {
      period: '60–90 дней',
      color: 'bg-primary/10 border-primary/30',
      icon: 'Settings',
      iconColor: 'text-primary',
      tasks: [
        'Пересборка системы маркетинга и продаж',
        'Чистка и усиление команды',
        'Чёткий план роста с измеримыми метриками'
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">Как я работаю</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {phases.map((phase, index) => (
            <Card 
              key={index}
              className={`p-8 border-2 ${phase.color} animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center border-2">
                    <Icon name={phase.icon} className={phase.iconColor} size={28} />
                  </div>
                  <Badge variant="secondary" className="text-lg px-5 py-2 font-semibold">
                    {phase.period}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  {phase.tasks.map((task, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <p className="text-muted-foreground leading-relaxed">{task}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Target" className="text-primary" size={32} />
              <h3 className="text-2xl lg:text-3xl font-bold">Результат:</h3>
            </div>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
              контроль, скорость, управляемость и прибыль
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HowIWork;