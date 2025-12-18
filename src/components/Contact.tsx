import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contact = () => {

  const contacts = [
    { icon: 'Phone', label: 'Телефон', value: '+7 968 958 91 86', href: 'tel:+79689589186' },
    { icon: 'Mail', label: 'Email', value: 'alexander.kuzikov@mail.ru', href: 'mailto:alexander.kuzikov@mail.ru' },
    { icon: 'Send', label: 'Telegram', value: '@AVKuzikov', href: 'https://t.me/AVKuzikov' }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Если вам нужен не подрядчик,
            <br />
            <span className="text-primary">а плечо — давайте поговорим</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Я беру ответственность за результат, а не за процесс
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Card className="p-8 space-y-6">
              <h3 className="text-2xl font-semibold">Контактная информация</h3>
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={contact.icon} className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    <div className="font-medium group-hover:text-primary transition-colors">{contact.value}</div>
                  </div>
                </a>
              ))}
            </Card>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Что я делаю</h3>
                <ul className="space-y-3">
                  {[
                    'Останавливаю потери до –30% выручки',
                    'Сокращаю путь к результату на 6 месяцев',
                    'Чищу и усиливаю команды',
                    'Пересобираю системы маркетинга и продаж',
                    'Возвращаю контроль и прибыль'
                  ].map((message, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{message}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>


        </div>
      </div>

      <div className="text-center mt-16 pt-16 border-t">
        <p className="text-muted-foreground">
          © 2024 Александр Кузиков. Системный лидер ритейла.
        </p>
      </div>
    </section>
  );
};

export default Contact;