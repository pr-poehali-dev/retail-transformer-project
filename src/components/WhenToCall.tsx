import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const WhenToCall = () => {
  const situations = [
    {
      icon: 'AlertCircle',
      text: 'застрял и буксует в бесконечных процессах'
    },
    {
      icon: 'TrendingDown',
      text: 'теряет деньги, но не понимает почему'
    },
    {
      icon: 'Users',
      text: 'держит лишних людей и теряет сильных'
    },
    {
      icon: 'Target',
      text: 'живёт без единого центра принятия решений'
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Когда меня зовут
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Меня зовут, когда больше нельзя терять время
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Меня приглашают, когда бизнес:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {situations.map((situation, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={situation.icon} className="text-primary" size={24} />
                  </div>
                  <p className="text-muted-foreground leading-relaxed pt-2">{situation.text}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-primary/5 rounded-xl border-2 border-primary/20 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <p className="text-xl font-semibold text-foreground">
              Я вхожу, когда поле выжжено — и превращаю его в систему роста.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenToCall;
