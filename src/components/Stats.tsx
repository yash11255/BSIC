
export const Stats = () => {
  const stats = [
    { number: "200+", label: "Startups Accelerated", icon: "🚀" },
    { number: "₹50Cr+", label: "Funding Raised", icon: "💰" },
    { number: "100+", label: "Active Mentors", icon: "👥" },
    { number: "85%", label: "Success Rate", icon: "📈" },
  ];

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </section>
  );
};
