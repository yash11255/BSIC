
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const startups = [
    {
      name: "BioTech Bihar",
      description: "Revolutionizing agricultural practices with biotechnology solutions.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      funding: "₹50L+",
      users: "1000+",
      growth: "300%"
    },
    {
      name: "TechEd Solutions",
      description: "Making quality education accessible to rural Bihar.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      funding: "₹25L+",
      users: "10000+",
      growth: "200%"
    },
    {
      name: "AI Innovations",
      description: "Developing AI solutions for local businesses.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      funding: "₹75L+",
      users: "500+",
      growth: "150%"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Success Stories
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how we've helped startups grow and succeed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {startups.map((startup, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-up bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={startup.image}
                    alt={startup.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {startup.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {startup.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="font-bold text-primary">{startup.funding}</div>
                      <div className="text-sm text-muted-foreground">Funding</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">{startup.users}</div>
                      <div className="text-sm text-muted-foreground">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">{startup.growth}</div>
                      <div className="text-sm text-muted-foreground">Growth</div>
                    </div>
                  </div>
                  <Button 
                    className="w-full group bg-primary hover:bg-primary/90"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
