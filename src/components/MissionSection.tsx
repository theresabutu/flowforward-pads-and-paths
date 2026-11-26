import { Target, Eye, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const MissionSection = () => {
  const items = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower girls and young women, regardless of their background, with the knowledge, resources, opportunities, and support they need to overcome barriers, unlock their potential, and build fulfilling futures.",
      gradient: "from-brand-pink/10 to-brand-pink/5"
    },
    {
      icon: Eye,
      title: "Our Vision", 
      description: "A world where every girl and young woman has the opportunity to thrive, lead, and shape her future, and where inclusive opportunities and sustainable communities enable everyone to reach their full potential.",
      gradient: "from-soft-pink/20 to-soft-pink/10"
    },
    {
      icon: BookOpen,
      title: "Our Story",
      description: "FlowForward Initiative was born out of a passion for girl empowerment, social inclusion, and sustainable development. What began as a commitment to addressing period poverty, menstrual health illiteracy, and environmental waste has grown into a broader vision of creating opportunities for girls and young women to thrive.\n\nRecognising that the challenges facing girls extend beyond access to menstrual products, we envision a world where every girl has the knowledge, resources, confidence, and support to pursue her aspirations without limitations.\n\nToday, FlowForward brings together passionate volunteers and changemakers from across Nigeria to drive impact through education, health and well-being, economic empowerment, leadership development, innovation, and environmental sustainability.\n\nThrough community-driven initiatives, advocacy, partnerships, and innovative solutions, we are working to break barriers, amplify opportunities, and build stronger, more inclusive communities.\n\nWe believe that when girls move forward, communities move forward. And when communities thrive, the future becomes brighter for everyone.",
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
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};