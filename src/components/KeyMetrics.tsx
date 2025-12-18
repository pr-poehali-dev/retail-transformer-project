import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const KeyMetrics = () => {
  const metrics = [
    {
      icon: 'TrendingDown',
      value: 'до –30%',
      label: 'потерь выручки, которые я останавливаю',
      color: 'text-red-500'
    },
    {
      icon: 'Clock',
      value: '–6 месяцев',
      label: 'экономии времени на принятии решений',
      color: 'text-blue-500'
    },
    {
      icon: 'Users',
      value: '40–120+',
      label: 'человек в командах',
      color: 'text-purple-500'
    },
    {
      icon: 'TrendingUp',
      value: 'до +50%',
      label: 'рост оборота',
      color: 'text-green-500'
    },
    {
      icon: 'MapPin',
      value: '15 регионов',
      label: 'масштабирование в СНГ',
      color: 'text-orange-500'
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Цифры
          </h2>
          <p className="text-xl text-muted-foreground">
            Измеримые результаты системной трансформации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#ffffff]">
          {metrics.map((metric, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={metric.icon} className={metric.color} size={32} />
                </div>
                <div className="text-4xl font-bold text-foreground">
                  {metric.value}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {metric.label}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;