import { Globe2 } from "lucide-react";

export const GlobalGoalsSection = () => (
  <section className="border-y border-primary/15 bg-secondary/30 py-16 md:py-24" aria-labelledby="global-goals-title">
    <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div className="flex flex-col items-start">
        <Globe2 aria-hidden="true" className="mb-6 h-10 w-10 text-primary" />
        <p className="mb-3 text-sm font-semibold uppercase text-primary">Our global goals</p>
        <h2 id="global-goals-title" className="max-w-lg text-4xl font-bold leading-tight text-foreground md:text-5xl">
          FLOWFORWARD INITIATIVE: OUR 2030 VISION
        </h2>
        <div className="mt-8 border-l-2 border-primary pl-5">
          <p className="text-4xl font-bold text-primary md:text-5xl">One million</p>
          <p className="mt-1 text-lg font-medium text-foreground">girls across Africa and beyond</p>
        </div>
      </div>

      <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
        <p>
          By 2030, FlowForward Initiative will become a globally recognised force for menstrual health equity and girl-child empowerment, reaching one million girls across Africa and beyond.
        </p>
        <p>
          Through education, technology, strategic partnerships, and sustainable social enterprise, we will work towards a world where every girl has access to accurate health information, affordable menstrual care, opportunities for personal growth, and the confidence to pursue her dreams without limitations.
        </p>
        <p>
          We envision a generation of girls who are informed about their bodies, confident in their identities, equipped to make decisions about their wellbeing, and empowered to become leaders and change-makers in their communities.
        </p>
        <blockquote className="border-l-2 border-primary pl-5 text-foreground">
          <span className="font-semibold text-primary">Our belief:</span> Every girl deserves the knowledge, resources, and opportunity to move forward.
        </blockquote>
        <p className="font-semibold text-primary">Dignity in Every Cycle. Possibilities Without Limits.</p>
      </div>
    </div>
  </section>
);