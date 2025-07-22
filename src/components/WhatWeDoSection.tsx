import { Package, GraduationCap, Megaphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhatWeDoSection = () => {
  const services = [
    {
      icon: Package,
      title: "Reusable Sanitary Pads",
      description: "We design and distribute high-quality, washable pads that last 12–18 months—saving costs and reducing waste.",
      color: "text-brand-pink",
      bgColor: "from-brand-pink/10 to-brand-pink/5"
    },
    {
      icon: GraduationCap,
      title: "Menstrual Health Education",
      description: "We deliver workshops in schools and communities to teach girls about menstrual hygiene, confidence, and reproductive health.",
      color: "text-brand-pink",
      bgColor: "from-soft-pink/20 to-soft-pink/10"
    },
    {
      icon: Megaphone,
      title: "Advocacy & Awareness",
      description: "We engage parents, teachers, and leaders to break menstrual stigma and promote inclusion.",
      color: "text-warm-accent",
      bgColor: "from-warm-accent/10 to-warm-accent/5"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">What We Do</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-soft hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 space-y-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};