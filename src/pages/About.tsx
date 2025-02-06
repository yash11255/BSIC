
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-center mb-8">About IndiaAcc</h1>
              <div className="prose prose-lg mx-auto">
                <p className="mb-6">
                  IndiaAcc is India's leading startup accelerator program, dedicated to empowering entrepreneurs and fostering innovation across the country.
                </p>
                <p className="mb-6">
                  Since our inception, we have supported over 200+ startups, helped raise $50M+ in funding, and created a network of 500+ mentors and industry experts.
                </p>
                <p className="mb-6">
                  Our mission is to transform early-stage startups into sustainable businesses through mentorship, funding, and access to our extensive network.
                </p>
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
