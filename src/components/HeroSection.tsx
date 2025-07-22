import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Heart, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-impact-purple">Empowering Girls.</span>
                <br />
                <span className="text-growth-green">Protecting the Planet.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                End period poverty with sustainable menstrual products and education.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Donate Now
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Join Us
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-soft">
              <img 
                src={heroImage} 
                alt="Empowered girls in education"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};