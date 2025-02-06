
import { Card } from "@/components/ui/card";

export const Portfolio = () => {
  const companies = Array(6).fill({
    name: "Startup Name",
    description: "Brief description of the startup and its achievements.",
    image: "/placeholder.svg",
  });

  return (
    <section className="py-20 bg-secondary" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio Companies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet some of the innovative startups that have gone through our program
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={company.image}
                alt={company.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                <p className="text-gray-600">{company.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
