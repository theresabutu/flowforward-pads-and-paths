import { Button } from "@/components/ui/button";
import { Check, Copy, Heart } from "lucide-react";
import { useState } from "react";

export const DonationSection = () => {
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText("9038813259");
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="donate" className="scroll-mt-8 border-y border-primary/15 bg-secondary/30 py-16 md:py-20" aria-labelledby="donate-title">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Heart aria-hidden="true" className="mx-auto mb-4 h-8 w-8 text-primary" />
          <h2 id="donate-title" className="text-3xl font-bold text-foreground md:text-4xl">Help a girl move forward</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Your generosity supports menstrual health education and helps girls access the care they deserve.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl divide-y divide-border border-y border-border">
          <div className="flex flex-wrap items-center justify-between gap-2 py-4">
            <span className="text-muted-foreground">Bank</span>
            <span className="font-semibold text-foreground">MoniePoint Bank</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 py-4">
            <span className="text-muted-foreground">Account name</span>
            <span className="font-semibold text-foreground">Flowforward</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 py-4">
            <span className="text-muted-foreground">Account number</span>
            <span className="flex items-center gap-3 font-semibold text-foreground">
              9038813259
              <Button type="button" variant="outline" size="sm" onClick={copyAccountNumber} aria-label="Copy donation account number">
                {copied ? <Check aria-hidden="true" className="mr-2 h-4 w-4" /> : <Copy aria-hidden="true" className="mr-2 h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </span>
          </div>
        </div>
        <p className="mt-5 text-center text-sm text-muted-foreground" aria-live="polite">
          {copied ? "Account number copied." : "Thank you for supporting girls in our community."}
        </p>
      </div>
    </section>
  );
};