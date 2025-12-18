import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Experience = () => {
  const experiences = [
    {
      company: 'Shopping Live',
      position: 'Director of Marketing & Sales',
      period: '2021–2025',
      description: 'Управление каналами: E-com, Live Commerce, Social Media, Offline',
      achievements: [
        { label: '+Avg', value: 'с 1.7 до 3.5', icon: 'TrendingUp' },
        { label: 'Рост оборота', value: '+10%', icon: 'TrendingUp' },
        { label: 'Brand Awareness', value: '+64%', icon: 'Target' },
        { label: 'Новая ЦА', value: '+43%', icon: 'Users' },
        { label: 'Retention', value: '+8%', icon: 'RefreshCw' },
        { label: 'Бюджет контента', value: '-35%', icon: 'ArrowDown' },
        { label: 'CTR', value: '+22%', icon: 'MousePointer' },
        { label: 'Time-to-market', value: '-70%', icon: 'Zap' }
      ]
    },
    {
      company: 'MODIS / O\'STIN / SELA',
      position: 'Marketing Director and Merchandising',
      period: '2014–2021',
      description: 'Системная трансформация маркетинга, продукта и розничных процессов',
      achievements: [
        { label: 'Рост продаж LFL', value: '+50%', icon: 'TrendingUp' },
        { label: 'Рекламные затраты', value: '-50%', icon: 'ArrowDown' },
        { label: 'Opex', value: '-20%', icon: 'ArrowDown' },
        { label: 'Товарные остатки', value: '-15%', icon: 'Package' },
        { label: 'CR', value: '+20%', icon: 'Target' },
        { label: 'Адаптация персонала', value: 'x2', icon: 'Users' }
      ]
    },
    {
      company: 'New Yorker / Charuel / RESERVED',
      position: 'Operations / Development',
      period: '2007–2014',
      description: '200+ точек | +300% выручки | 15 регионов СНГ',
      achievements: [
        { label: 'Точки продаж', value: '200+', icon: 'Store' },
        { label: 'Рост выручки', value: '+300%', icon: 'TrendingUp' },
        { label: 'Регионы', value: '15', icon: 'MapPin' }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Опыт и результаты</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Подтвержденная эффективность в крупнейших retail-компаниях
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <p className="text-lg text-primary font-medium">{exp.position}</p>
                    <p className="text-muted-foreground">{exp.period}</p>
                  </div>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    Системная трансформация
                  </Badge>
                </div>

                <p className="text-lg text-muted-foreground">{exp.description}</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                  {exp.achievements.map((achievement, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={achievement.icon} className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-primary">{achievement.value}</div>
                        <div className="text-xs text-muted-foreground">{achievement.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;