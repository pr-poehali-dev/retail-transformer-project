import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Experience = () => {
  const experiences = [
    {
      company: 'Shopping Live',
      position: 'Директор по маркетингу и продажам',
      period: '2021 - 2025',
      description: 'Трансформировал маркетинг в омниканальную систему, запустив Live Commerce и внедрив AI, что привело к удвоению среднего чека и росту узнаваемости бренда',
      achievements: [
        { label: 'Рост оборота', value: '+50%', icon: 'TrendingUp' },
        { label: 'Снижение CAC', value: '-30%', icon: 'ArrowDown' },
        { label: 'Команда', value: '40+ человек', icon: 'Users' }
      ]
    },
    {
      company: 'MODIS',
      position: 'Директор по маркетингу',
      period: '2018 - 2021',
      description: 'Выстроил маркетинг с нуля: запустил омниканал, внедрил Data-driven подход и автоматизировал процессы, увеличив эффективность в 2 раза',
      achievements: [
        { label: 'Рост продаж', value: 'x2', icon: 'TrendingUp' },
        { label: 'ROI кампаний', value: '+120%', icon: 'Target' },
        { label: 'Команда', value: '25 человек', icon: 'Users' }
      ]
    },
    {
      company: 'O\'STIN',
      position: 'Руководитель отдела маркетинга',
      period: '2016 - 2018',
      description: 'Запустил e-commerce с нуля, внедрил CRM и Performance Marketing, что увеличило онлайн-продажи в 5 раз',
      achievements: [
        { label: 'Онлайн-продажи', value: 'x5', icon: 'TrendingUp' },
        { label: 'CRM база', value: '500K+', icon: 'Users' },
        { label: 'Доля онлайн', value: '15%', icon: 'ShoppingCart' }
      ]
    },
    {
      company: 'SELA',
      position: 'Руководитель digital-маркетинга',
      period: '2014 - 2016',
      description: 'Трансформировал digital из поддерживающей функции в драйвер роста, запустив Performance и контент-стратегию',
      achievements: [
        { label: 'Трафик', value: 'x4', icon: 'TrendingUp' },
        { label: 'Конверсия', value: '+85%', icon: 'Target' },
        { label: 'ROI digital', value: '+200%', icon: 'DollarSign' }
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

                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  {exp.achievements.map((achievement, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={achievement.icon} className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{achievement.value}</div>
                        <div className="text-sm text-muted-foreground">{achievement.label}</div>
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