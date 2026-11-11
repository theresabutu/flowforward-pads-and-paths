import faveImage from "@/assets/fave-flowforward.png.asset.json";
import signupQr from "@/assets/flowforward-email-signup-qr.png.asset.json";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail } from "lucide-react";

const signupUrl = "https://forms.gle/sJcWSc1NwzBWbdPv9";

export const FaveSection = () => (
  <section className="overflow-hidden border-y border-primary/15 bg-secondary/30 py-16 md:py-24" aria-labelledby="fave-email-title">
    <div className="container mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase text-primary">With love from Fave</p>
        <h2 id="fave-email-title" className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
          Have you joined the FlowForward email family yet? 💌
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          This is where the real love lives—inspiring letters from Fave, menstrual health tips, confidence boosters, exciting opportunities, and all our important updates straight to your inbox.
        </p>
        <p className="text-xl font-semibold text-foreground">Don’t just watch us grow, grow with us.</p>
        <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center">
          <div className="w-fit rounded-md border border-primary/20 bg-background p-3 text-center">
            <a href={signupUrl} target="_blank" rel="noreferrer" aria-label="Scan or open the FlowForward email-family signup form">
              <img src={signupQr.url} alt="QR code to join the FlowForward email family" className="mx-auto h-36 w-36" />
            </a>
            <span className="mt-2 block text-sm text-muted-foreground">Scan to join</span>
          </div>
          <div className="flex flex-col items-start gap-3">
            <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Mail aria-hidden="true" className="h-4 w-4 text-primary" />
              Let’s grow, learn, and move forward together! 🌸
            </span>
            <Button asChild size="lg">
              <a href={signupUrl} target="_blank" rel="noreferrer">
                Join the email family <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <p className="text-sm font-medium text-primary">
          #FlowForwardInitiative&nbsp; #FlowForwardFamily&nbsp; #WithLoveFromFave&nbsp; #LearnThriveMoveForward
        </p>
      </div>
      <div className="mx-auto w-full max-w-xl overflow-hidden rounded-md border border-primary/15 bg-background shadow-soft">
        <img
          src={faveImage.url}
          alt="Fave, FlowForward’s caring big-sister mentor and voice for girls’ confidence and growth."
          className="block h-auto w-full"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);