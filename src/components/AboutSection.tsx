export const AboutSection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">About Flowforward</h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">Flowforward is a social impact initiative working to end menstrual poverty and promote menstrual health education across Nigeria. We provide affordable, disposable and reusable sanitary pads and deliver menstrual health literacy to girls aged 10-18 in underserved communities.</p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              We're building a future where no girl misses school, loses confidence, or suffers stigma because of her period.
            </p>
          </div>
        </div>
      </div>
    </section>;
};