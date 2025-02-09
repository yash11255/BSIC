
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LinkedIn, Mail } from "lucide-react";

const Mentors = () => {
  const mentors = [
    {
      name: "Dr. Rajiv Kumar",
      role: "Technology Expert",
      expertise: "AI & Machine Learning",
      image: "/placeholder.svg",
      bio: "20+ years of experience in building and scaling technology companies",
    },
    {
      name: "Priya Sharma",
      role: "Investment Advisor",
      expertise: "Venture Capital",
      image: "/placeholder.svg",
      bio: "Partner at leading VC firm with focus on early-stage startups",
    },
    {
      name: "Amit Patel",
      role: "Business Strategy",
      expertise: "Growth & Operations",
      image: "/placeholder.svg",
      bio: "Former CEO of multiple successful startups",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary to-white">
      <Navigation />
      <main className="flex-grow pt-20">
        {/* Animated Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-fade-up">
              Our Mentors
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                  />
                  <h3 className="text-xl font-bold text-center mb-2 text-primary">{mentor.name}</h3>
                  <p className="text-accent text-center mb-2">{mentor.role}</p>
                  <p className="text-muted-foreground text-center mb-4">{mentor.expertise}</p>
                  <p className="text-gray-700 text-center mb-4">{mentor.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                      <LinkedIn className="w-5 h-5 text-primary" />
                    </button>
                    <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mentors;
