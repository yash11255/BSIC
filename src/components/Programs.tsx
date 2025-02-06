
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Programs = () => {
  const programs = [
    {
      title: "Seed Program",
      description: "For early-stage startups looking for their first investment and mentorship.",
      duration: "4 months",
      funding: "Up to ₹50L",
    },
    {
      title: "Growth Program",
      description: "For startups ready to scale their operations and enter new markets.",
      duration: "6 months",
      funding: "Up to ₹2Cr",
    },
    {
      title: "Scale Program",
      description: "For established startups preparing for Series A and beyond.",
      duration: "8 months",
      funding: "Up to ₹5Cr",
    },
  ];

  return (
    <section className="py-20" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the right program for your startup's stage and goals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className="p-8 hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{program.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Funding:</span>
                  <span className="font-semibold">{program.funding}</span>
                </div>
              </div>
              <Button className="w-full">Learn More</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
