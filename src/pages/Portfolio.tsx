
import { Navigation } from "@/components/Navigation";
import { Portfolio as PortfolioSection } from "@/components/Portfolio";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="pt-20">
          <PortfolioSection />
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Portfolio;
