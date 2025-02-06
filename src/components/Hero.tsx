
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-up">
            Accelerate Your Startup Growth
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Join India's leading startup accelerator program and get access to mentorship, funding, and resources to scale your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="text-lg px-8">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 top-0 left-0 right-0 h-full bg-gradient-to-b from-accent/5 to-transparent" />
    </section>
  );
};
