
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { StartupDialog } from "./StartupDialog";

export const Portfolio = () => {
  const [selectedStartup, setSelectedStartup] = useState<{
    name: string;
    description: string;
    image: string;
    details?: string;
  } | null>(null);

  const partners = [
    { name: "Partner 1", logo: "/placeholder.svg" },
    { name: "Partner 2", logo: "/placeholder.svg" },
    { name: "Partner 3", logo: "/placeholder.svg" },
    { name: "Partner 4", logo: "/placeholder.svg" },
    { name: "Partner 5", logo: "/placeholder.svg" },
  ];

  const successStories = [
    {
      name: "TechStart Innovation",
      description: "A revolutionary AI-powered startup transforming healthcare.",
      details: "Founded in 2021, TechStart Innovation has raised $5M in seed funding and is currently serving over 100 healthcare institutions across the country.",
      image: "/placeholder.svg",
    },
    {
      name: "GreenEco Solutions",
      description: "Pioneering sustainable energy solutions for urban spaces.",
      details: "GreenEco has successfully implemented their technology in 50+ cities, reducing carbon emissions by 40% in participating communities.",
      image: "/placeholder.svg",
    },
    {
      name: "FinTech Revolution",
      description: "Democratizing financial services through blockchain technology.",
      details: "With over 1 million users, FinTech Revolution has processed transactions worth $2B and continues to grow exponentially.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Expert Mentorship From Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-4 hover:shadow-lg transition-all duration-300 rounded-lg animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={partner.logo} alt={partner.name} className="w-full h-12 object-contain" />
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Success Stories from Our Community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedStartup(story)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {story.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{story.description}</p>
                  <div className="flex items-center text-accent font-medium">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <StartupDialog
        isOpen={!!selectedStartup}
        onClose={() => setSelectedStartup(null)}
        startup={selectedStartup}
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </section>
  );
};
