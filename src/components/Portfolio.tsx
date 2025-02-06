
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const Portfolio = () => {
  const companies = Array(6).fill({
    name: "Startup Name",
    description: "Brief description of the startup and its achievements.",
    image: "/placeholder.svg",
    category: "Technology",
  });

  return (
    <section className="py-20 bg-secondary relative overflow-hidden" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Success Stories
          </span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Portfolio Companies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet some of the innovative startups that have gone through our program
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="text-sm text-accent mb-2">{company.category}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {company.name}
                </h3>
                <p className="text-muted-foreground mb-4">{company.description}</p>
                <div className="flex items-center text-accent font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </section>
  );
};
