
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Our Mentors</h1>
            <div className="grid md:grid-cols-3 gap-8">
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-center mb-2">{mentor.name}</h3>
                  <p className="text-accent text-center mb-2">{mentor.role}</p>
                  <p className="text-gray-600 text-center mb-4">{mentor.expertise}</p>
                  <p className="text-gray-700 text-center">{mentor.bio}</p>
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
