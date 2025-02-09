
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary to-white">
      <Navigation />
      <main className="flex-grow pt-20">
        {/* Animated Blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-72 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-fade-up">
                About BSIC
              </h1>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <p className="text-lg mb-6 leading-relaxed">
                  Bihar's First Startup Incubation Centre (BSIC) is a pioneering initiative dedicated to fostering innovation and entrepreneurship in Bihar. Our state-of-the-art facility provides a nurturing environment for startups to grow and succeed.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="p-6 bg-secondary rounded-xl hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Our Mission</h3>
                    <p>To empower Bihar's entrepreneurs with resources, mentorship, and funding opportunities to build successful startups.</p>
                  </div>
                  <div className="p-6 bg-secondary rounded-xl hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Our Vision</h3>
                    <p>To make Bihar a leading startup hub in India and create a thriving ecosystem for innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
