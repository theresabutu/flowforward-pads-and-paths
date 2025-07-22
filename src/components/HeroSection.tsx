import { HeroSlider } from "@/components/HeroSlider";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

export const HeroSection = () => {
  const slides = [
    {
      image: heroSlide1,
      title: "Empowering Girls",
      subtitle: "Through Education & Support",
      description: "End period poverty with sustainable menstrual products and education. Every girl deserves to reach her full potential."
    },
    {
      image: heroSlide2,
      title: "Sustainable Solutions",
      subtitle: "Protecting the Planet",
      description: "Our reusable sanitary pads last 12-18 months, reducing waste and providing long-term value for communities."
    },
    {
      image: heroSlide3,
      title: "Breaking Barriers",
      subtitle: "Building Confidence",
      description: "Through workshops and education, we're creating a future where menstruation is never a barrier to opportunity."
    }
  ];

  return (
    <section className="relative">
      <HeroSlider slides={slides} />
    </section>
  );
};