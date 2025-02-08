
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/lovable-uploads/cc2b17ac-d37f-4bc4-839b-c2341e83b815.png')] bg-cover bg-center"
        style={{
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.7)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-up">
            BITO<br />
            <span className="text-4xl md:text-6xl">
              Start-up Incubation<br />
              Centre (BSIC)
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-up max-w-2xl" style={{ animationDelay: "0.2s" }}>
            Bihar's leading startup incubation center providing mentorship, funding, and resources to scale your business.
          </p>
          <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors">
              Apply Now
            </button>
            <button className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-background rounded-md transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 pointer-events-none" />
    </section>
  );
};
