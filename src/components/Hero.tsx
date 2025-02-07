
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const stats = [
    { number: "100+", label: "Active Startups" },
    { number: "₹10Cr+", label: "Funding Raised" },
    { number: "50+", label: "Mentors" },
  ];

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-accent/10 text-accent animate-fade-in">
            BSIC - Building a Sustainable Innovation Community
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-up bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Bihar Startup Incubation Centre
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Join Bihar's leading startup incubation center and get access to mentorship, funding, and resources to scale your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="group relative overflow-hidden text-lg px-8 bg-gradient-to-r from-accent to-primary hover:opacity-90 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 hover:bg-accent/5 border-accent/20"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Featured Startups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-full bg-accent/10 mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Featured Startup {index}</h3>
                <p className="text-muted-foreground mb-4">
                  Innovative solution in {index === 1 ? 'AgriTech' : index === 2 ? 'FinTech' : 'HealthTech'}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="px-2 py-1 rounded-full bg-accent/10 text-accent">Funded</span>
                  <span className="ml-2">Series {index === 1 ? 'A' : index === 2 ? 'B' : 'Seed'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="flex justify-center gap-8 mt-16 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary/10 opacity-30" />
      </div>
    </section>
  );
};
