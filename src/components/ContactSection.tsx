import { Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "flowforwardgirls@gmail.com",
      href: "mailto:flowforwardgirls@gmail.com"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@flowforward",
      href: "https://instagram.com/flowforward"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Flowforward",
      href: "https://facebook.com/flowforward"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+234 903 881 3259",
      href: "https://wa.me/2349038813259"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="group flex flex-col items-center p-6 rounded-lg hover:bg-accent transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <contact.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-foreground mb-1">{contact.label}</div>
                <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {contact.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};