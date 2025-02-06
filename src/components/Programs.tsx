
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const Programs = () => {
  const programs = [
    {
      title: "Seed Program",
      description: "For early-stage startups looking for their first investment and mentorship.",
      duration: "4 months",
      funding: "Up to ₹50L",
      icon: "🌱",
    },
    {
      title: "Growth Program",
      description: "For startups ready to scale their operations and enter new markets.",
      duration: "6 months",
      funding: "Up to ₹2Cr",
      icon: "📈",
    },
    {
      title: "Scale Program",
      description: "For established startups preparing for Series A and beyond.",
      duration: "8 months",
      funding: "Up to ₹5Cr",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Our Programs
          </span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Choose Your Growth Path
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the right program for your startup's stage and goals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className="p-8 hover:shadow-xl transition-all duration-300 group animate-fade-up border-accent/10 hover:border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              <p className="text-muted-foreground mb-6">{program.description}</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-semibold">{program.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Funding:</span>
                  <span className="font-semibold">{program.funding}</span>
                </div>
              </div>
              <Button className="w-full group-hover:bg-accent transition-colors">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    </section>
  );
};
