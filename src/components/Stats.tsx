
export const Stats = () => {
  const stats = [
    { number: "500+", label: "Startups Supported", icon: "🏢" },
    { number: "50+", label: "Active Mentors", icon: "👥" },
    { number: "100k+", label: "Community Members", icon: "🌐" },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Bihar's First <span className="bg-yellow-200 px-2">Startup Incubation Centre</span>
          </h2>
          <p className="text-muted-foreground">Supported by Bihar Government</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">About BSIC</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vision",
                description: "To make Bihar the startup hub of Eastern India"
              },
              {
                title: "Mission",
                description: "Supporting innovative startups through incubation & mentorship"
              },
              {
                title: "Goal",
                description: "Creating a sustainable startup ecosystem in Bihar"
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="p-6 rounded-lg bg-secondary hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Locations</h3>
          <div className="flex justify-between items-center">
            {["Patna", "Bhagalpur", "Muzaffarpur", "Gaya", "Darbhanga"].map((city) => (
              <div key={city} className="text-center">
                <div className="w-16 h-16 mx-auto mb-2">
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M3 7v14M21 7v14M6 11h.01M6 15h.01M6 19h.01M14 11h.01M14 15h.01M14 19h.01M10 11h.01M10 15h.01M10 19h.01M18 11h.01M18 15h.01M18 19h.01M4 7h16V5a2 2 0 00-2-2H6a2 2 0 00-2 2v2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </section>
  );
};
