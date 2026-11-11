import awarenessImage from "@/assets/flowzy-endometriosis-awareness.png.asset.json";
import introductionImage from "@/assets/flowzy-introduction.jpg.asset.json";
import { ArrowDownRight, Heart, MessageCircleHeart, Sparkles } from "lucide-react";

const highlights = [
  { icon: MessageCircleHeart, label: "Menstrual health educator" },
  { icon: Heart, label: "Girls’ empowerment advocate" },
  { icon: Sparkles, label: "A friendly voice for every Flowster" },
];

export const FlowzySection = () => (
  <>
    <section className="overflow-hidden border-y border-primary/10 bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase text-primary">Meet our digital ambassador</p>
          <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">Flowzy, your period bestie.</h2>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            She’s the friendly, virtual big sister behind FlowForward—making conversations about periods, body confidence, and wellbeing feel easier, more welcoming, and stigma-free.
          </p>
          <ul className="space-y-3" aria-label="What Flowzy stands for">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-foreground">
                <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-2 pt-2 font-medium text-primary">
            Dignity in every cycle <ArrowDownRight aria-hidden="true" className="h-5 w-5" />
          </p>
        </div>
        <div className="mx-auto w-full max-w-xl overflow-hidden rounded-md border border-primary/15 bg-background shadow-soft">
          <img
            src={introductionImage.url}
            alt="Meet Flowzy, FlowForward’s period bestie and menstrual health educator."
            className="block h-auto w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section className="bg-background py-16 md:py-20" aria-labelledby="flowzy-awareness-title">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase text-primary">A conversation worth having</p>
            <h2 id="flowzy-awareness-title" className="text-3xl font-bold text-foreground md:text-4xl">
              Let’s talk about endometriosis.
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Flowzy shares age-appropriate health information and encourages girls to speak up when something doesn’t feel right.
          </p>
        </div>
        <div className="overflow-hidden rounded-md border border-primary/15 bg-secondary/20">
          <img
            src={awarenessImage.url}
            alt="Flowzy’s endometriosis awareness carousel: what endometriosis is and symptoms that can include severe menstrual cramps and chronic pelvic pain."
            className="mx-auto block h-auto w-full max-w-5xl"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          This educational overview is not a diagnosis. Persistent or severe pain deserves a conversation with a qualified health professional.
        </p>
      </div>
    </section>
  </>
);