import { Users, Package, TrendingDown, Recycle, School } from "lucide-react";

export const ImpactSection = () => {
  const stats = [
    {
      icon: Users,
      number: "2,000+",
      label: "girls reached",
      color: "text-impact-purple"
    },
    {
      icon: Package,
      number: "4,500+",
      label: "reusable pads distributed",
      color: "text-growth-green"
    },
    {
      icon: TrendingDown,
      number: "30–50%",
      label: "reduction in school absenteeism",
      color: "text-warm-orange"
    },
    {
      icon: Recycle,
      number: "540,000+",
      label: "disposable pads saved from landfills",
      color: "text-impact-purple"
    },
    {
      icon: School,
      number: "5+",
      label: "active programs in schools",
      color: "text-growth-green"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold">{stat.number}</div>
                <div className="text-white/80 text-sm leading-tight">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Active programs in 5+ schools in Agbara, Ogun State
          </p>
        </div>
      </div>
    </section>
  );
};