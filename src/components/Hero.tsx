
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-[#9b87f5]/10 via-background to-[#7E69AB]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-[#9b87f5]/10 text-[#6E59A5] animate-fade-in">
            BSIC - Building a Sustainable Innovation Community
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-up bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] bg-clip-text text-transparent">
            Bihar Startup Incubation Centre
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Join Bihar's leading startup incubation center and get access to mentorship, funding, and resources to scale your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="text-lg px-8 group bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] hover:opacity-90 transition-all">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 hover:bg-[#9b87f5]/5 border-[#9b87f5]/20">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#9b87f510_1px,transparent_1px),linear-gradient(to_bottom,#9b87f510_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    </section>
  );
};
