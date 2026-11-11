import { Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Music2 } from "lucide-react";

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
      href: "https://www.instagram.com/flowforward?xtok=MT"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Flowforward",
      href: "https://www.facebook.com/share/1CDyBXWUfS/"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+234 903 881 3259",
      href: "https://whatsapp.com/channel/0029VahZHmj47XeKIQqgHq3H"
    },
    {
      icon: Music2,
      label: "TikTok",
      value: "@flow_forward",
      href: "https://www.tiktok.com/@flow_forward"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto"></div>
        </div>
        
        <div id="contact" className="grid scroll-mt-8 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
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