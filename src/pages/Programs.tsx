
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, GraduationCap, Building, Rocket } from "lucide-react";

const Programs = () => {
  const offerings = [
    {
      title: "Co-Working Space",
      description: "Access to state-of-the-art workspace with high-speed internet, meeting rooms, and networking opportunities.",
      features: [
        "24/7 access to workspace",
        "High-speed internet",
        "Conference rooms",
        "Networking events",
      ],
      duration: "Flexible",
      investment: "Starting at ₹2000/month",
      icon: <Building className="w-12 h-12" />,
    },
    {
      title: "Incubation Program",
      description: "Comprehensive support system for early-stage startups including mentorship, funding, and resources.",
      features: [
        "Expert mentorship",
        "Seed funding",
        "Legal support",
        "Market access",
      ],
      duration: "6 months",
      investment: "Up to ₹10L funding",
      icon: <GraduationCap className="w-12 h-12" />,
    },
    {
      title: "Acceleration Program",
      description: "Intensive program for startups ready to scale with investor connections and market expansion support.",
      features: [
        "Investor networking",
        "Scale-up strategy",
        "Global market access",
        "Advanced mentoring",
      ],
      duration: "3 months",
      investment: "Up to ₹25L funding",
      icon: <Rocket className="w-12 h-12" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-secondary/50">
      <Navigation />
      <main className="flex-grow pt-20">
        {/* Animated Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Our Programs
          </h1>
          <p className="text-lg text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
            Choose the right program that aligns with your startup's stage and goals
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((program, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-6">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Duration: {program.duration}</p>
                  <p>Investment: {program.investment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
