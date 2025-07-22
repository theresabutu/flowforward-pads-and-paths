import { Target, Eye, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const MissionSection = () => {
  const items = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To ensure that every girl, regardless of background, has access to safe menstrual products, accurate information, and the confidence to live fully.",
      gradient: "from-brand-pink/10 to-brand-pink/5"
    },
    {
      icon: Eye,
      title: "Our Vision", 
      description: "A world where menstruation is never a barrier to opportunity and where girls and the planet thrive together.",
      gradient: "from-soft-pink/20 to-soft-pink/10"
    },
    {
      icon: BookOpen,
      title: "Our Story",
      description: "Born out of a passion for girl empowerment and sustainability, Flowforward was founded to address the triple threat of period poverty, menstrual illiteracy, and environmental waste. Our team comprises volunteers from across Nigeria, united by the goal to make menstruation safe, dignified, and sustainable.",
      gradient: "from-warm-accent/10 to-warm-accent/5"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Us</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <Card key={index} className="border-none shadow-soft hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-6">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-brand-pink" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};