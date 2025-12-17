import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Александр свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const contacts = [
    { icon: 'Phone', label: 'Телефон', value: '+7 968 958 91 86', href: 'tel:+79689589186' },
    { icon: 'Mail', label: 'Email', value: 'a.kuzikov@example.com', href: 'mailto:a.kuzikov@example.com' },
    { icon: 'Send', label: 'Telegram', value: '@aleksandr_kuzikov', href: 'https://t.me/aleksandr_kuzikov' }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Готов вывести вашу компанию
            <br />
            <span className="text-primary">на новый уровень</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Свяжитесь со мной для обсуждения вашего проекта или консалтинговой поддержки
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
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
                <h3 className="text-xl font-semibold">Ключевые сообщения</h3>
                <ul className="space-y-3">
                  {[
                    'Системный интегратор и лидер',
                    'Измеримая финансовая ценность',
                    'Эксперт в digital-трансформации и AI',
                    'Построение больших команд',
                    'Практик, решающий сложные задачи'
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

          <Card className="p-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-semibold">Форма быстрой связи</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Ваше имя *</label>
                <Input
                  required
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Компания</label>
                <Input
                  placeholder="ООО «Ваша компания»"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email *</label>
                <Input
                  required
                  type="email"
                  placeholder="i.ivanov@company.ru"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Сообщение *</label>
                <Textarea
                  required
                  placeholder="Опишите вашу задачу или вопрос..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg">
                Обсудить вашу задачу
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </form>
          </Card>
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