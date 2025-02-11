
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight, Award, BookOpen, Code, Laptop, Star } from "lucide-react";
import { StartupDialog } from "./StartupDialog";
import { useInView } from "react-intersection-observer";

export const Portfolio = () => {
  const [selectedStartup, setSelectedStartup] = useState<{
    name: string;
    description: string;
    image: string;
    details?: string;
  } | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const partners = [
    { name: "Bihar Government", logo: "/placeholder.svg" },
    { name: "IIT Patna", logo: "/placeholder.svg" },
    { name: "NIT Patna", logo: "/placeholder.svg" },
    { name: "BIT Mesra", logo: "/placeholder.svg" },
    { name: "Startup Bihar", logo: "/placeholder.svg" },
  ];

  const successStories = [
    {
      name: "BioTech Bihar",
      description: "Revolutionizing agricultural practices with biotechnology solutions.",
      details: "Leading research in sustainable farming methods and crop improvement.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      stats: { funding: "₹50L+", users: "1000+", growth: "300%" }
    },
    {
      name: "TechEd Solutions",
      description: "Making quality education accessible to rural Bihar.",
      details: "Connecting over 10,000 students with quality educators across Bihar.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      icon: <Laptop className="h-8 w-8 text-accent" />,
      stats: { funding: "₹25L+", users: "10000+", growth: "200%" }
    },
    {
      name: "AI Innovations",
      description: "Developing AI solutions for local businesses.",
      details: "Implementing machine learning solutions for process optimization.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      icon: <Code className="h-8 w-8 text-accent" />,
      stats: { funding: "₹75L+", users: "500+", growth: "150%" }
    },
  ];

  const achievements = [
    {
      title: "Best Incubator",
      description: "Awarded by Startup India for excellence in startup support",
      icon: <Award className="h-12 w-12 text-accent" />
    },
    {
      title: "Innovation Hub",
      description: "Recognized as the top innovation center in Eastern India",
      icon: <Star className="h-12 w-12 text-accent" />
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className={`overflow-hidden group hover:shadow-xl transition-all duration-300 ${
                  inView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedStartup(story)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-white">
                      <div className="mb-2">{story.icon}</div>
                      View Details
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {story.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{story.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(story.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-accent">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-accent font-medium">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="my-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg bg-[#FDF7F0] hover:bg-[#FDF7F0] transition-colors duration-300 ${
                  inView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {achievement.icon}
                  <h3 className="text-xl font-bold ml-4">{achievement.title}</h3>
                </div>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`p-4 hover:shadow-lg transition-all duration-300 rounded-lg ${
                  inView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-16 object-contain filter hover:brightness-110 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <StartupDialog
        isOpen={!!selectedStartup}
        onClose={() => setSelectedStartup(null)}
        startup={selectedStartup}
      />
    </section>
  );
};
