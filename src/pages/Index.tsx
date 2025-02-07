
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Programs } from "@/components/Programs";
import { Portfolio } from "@/components/Portfolio";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <Portfolio />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
