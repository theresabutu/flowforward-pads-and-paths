import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, UserPlus, Heart } from "lucide-react";

export const GetInvolvedSection = () => {
  const ways = [
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "Are you an NGO, school, company, or donor? Let's work together to scale impact.",
      buttonText: "Partner With Us",
      variant: "pink" as const
    },
    {
      icon: UserPlus,
      title: "Volunteer",
      description: "Join our growing team of changemakers from across Nigeria.",
      buttonText: "Become a Volunteer",
      variant: "soft" as const
    },
    {
      icon: Heart,
      title: "Donate",
      description: "Your donation helps a girl stay in school and care for her health and future.",
      buttonText: "Donate Now",
      variant: "hero" as const
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Get Involved</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ways.map((way, index) => (
            <Card key={index} className="border-none shadow-soft hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <way.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{way.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{way.description}</p>
                </div>
                <Button variant={way.variant} className="w-full">
                  {way.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};