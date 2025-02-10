
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// export const Stats = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   const stats = [
//     { number: 500, label: "Startups Supported", icon: "🏢" },
//     { number: 50, label: "Active Mentors", icon: "👥" },
//     { number: 100000, label: "Community Members", icon: "🌐" },
//   ];

//   return (
//     <section className="py-20 relative overflow-hidden" ref={ref}>
//       {/* Background with gradient and pattern */}
//       <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
//       <div className="absolute inset-0 opacity-10 bg-[url('/lovable-uploads/cc2b17ac-d37f-4bc4-839b-c2341e83b815.png')] bg-repeat bg-center"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
//             Bihar's First <span className="bg-primary/20 text-primary px-2 py-1 rounded">Startup Incubation Centre</span>
//           </h2>
//           <p className="text-muted-foreground">Supported by Bihar Government</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {stats.map((stat, index) => (
//             <div
//               key={stat.label}
//               className="text-center p-8 rounded-xl bg-secondary/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-up transform hover:-translate-y-1"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="text-5xl mb-4">{stat.icon}</div>
//               <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
//                 {inView && (
//                   <CountUp
//                     end={stat.number}
//                     duration={2.5}
//                     separator=","
//                     suffix={stat.number > 1000 ? "+" : "+"}
//                   />
//                 )}
//               </div>
//               <div className="text-white/80 font-medium">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-20">
//           <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-white">About BSIC</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Vision",
//                 description: "To make Bihar the startup hub of Eastern India"
//               },
//               {
//                 title: "Mission",
//                 description: "Supporting innovative startups through incubation & mentorship"
//               },
//               {
//                 title: "Goal",
//                 description: "Creating a sustainable startup ecosystem in Bihar"
//               }
//             ].map((item, index) => (
//               <div 
//                 key={item.title}
//                 className="p-8 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-up transform hover:-translate-y-1"
//                 style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
//               >
//                 <h4 className="text-lg md:text-xl font-semibold mb-3 text-white">{item.title}</h4>
//                 <p className="text-white/70">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-20">
//           <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-white">Our Locations</h3>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
//             {["Patna", "Bhagalpur", "Muzaffarpur", "Gaya", "Darbhanga"].map((city, index) => (
//               <div 
//                 key={city} 
//                 className="text-center p-4 rounded-lg bg-secondary/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-up transform hover:-translate-y-1"
//                 style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
//               >
//                 <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 text-primary">
//                   <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M3 21h18M3 7v14M21 7v14M6 11h.01M6 15h.01M6 19h.01M14 11h.01M14 15h.01M14 19h.01M10 11h.01M10 15h.01M10 19h.01M18 11h.01M18 15h.01M18 19h.01M4 7h16V5a2 2 0 00-2-2H6a2 2 0 00-2 2v2z" />
//                   </svg>
//                 </div>
//                 <span className="text-sm md:text-base font-medium text-white/80">{city}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };














// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// export const Stats = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   const stats = [
//     { number: 500, label: "Startups Supported", icon: "🏢" },
//     { number: 50, label: "Active Mentors", icon: "👥" },
//     { number: 100000, label: "Community Members", icon: "🌐" },
//   ];

//   return (
//     <section className="py-20 text-center relative overflow-hidden bg-[#FAF3E0]" ref={ref}>
//       {/* Background with warm tone */}
//       <div className="absolute inset-0 opacity-10 bg-[url('/lovable-uploads/cc2b17ac-d37f-4bc4-839b-c2341e83b815.png')] bg-repeat bg-center"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#5C3D2E]">
//             Bihar's First{" "}
//             <span className="bg-[#E8D6C1] text-[#5C3D2E] px-2 py-1 rounded">
//               Startup Incubation Centre
//             </span>
//           </h2>
//           <p className="text-[#7C5A48]">Supported by Bihar Government</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {stats.map((stat, index) => (
//             <div
//               key={stat.label}
//               className="text-center p-8 rounded-xl bg-[#FDF7F0] border border-[#D4B49A] hover:border-[#B98B6D] transition-all duration-300 shadow-md hover:shadow-lg"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="text-5xl mb-4 text-[#B98B6D]">{stat.icon}</div>
//               <div className="text-4xl md:text-5xl font-bold text-[#5C3D2E] mb-2">
//                 {inView && (
//                   <CountUp
//                     end={stat.number}
//                     duration={2.5}
//                     separator=","
//                     suffix={stat.number > 1000 ? "+" : "+"}
//                   />
//                 )}
//               </div>
//               <div className="text-[#7C5A48] font-medium">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-20">
//           <h3 className="text-xl md:text-2xl font-bold mb-8 text-[#5C3D2E]">About BSIC</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Vision",
//                 description: "To make Bihar the startup hub of Eastern India",
//               },
//               {
//                 title: "Mission",
//                 description:
//                   "Supporting innovative startups through incubation & mentorship",
//               },
//               {
//                 title: "Goal",
//                 description:
//                   "Creating a sustainable startup ecosystem in Bihar",
//               },
//             ].map((item, index) => (
//               <div
//                 key={item.title}
//                 className="p-8 rounded-lg bg-[#FDF7F0] border border-[#D4B49A] hover:border-[#B98B6D] transition-all duration-300 shadow-md hover:shadow-lg"
//                 style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
//               >
//                 <h4 className="text-lg md:text-xl font-semibold mb-3 text-[#5C3D2E]">{item.title}</h4>
//                 <p className="text-[#7C5A48]">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-20">
//           <h3 className="text-xl md:text-2xl font-bold mb-8 text-[#5C3D2E]">Our Locations</h3>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
//             {["Patna", "Bhagalpur", "Muzaffarpur", "Gaya", "Darbhanga"].map(
//               (city, index) => (
//                 <div
//                   key={city}
//                   className="text-center p-4 rounded-lg bg-[#FDF7F0] border border-[#D4B49A] hover:border-[#B98B6D] transition-all duration-300 shadow-md hover:shadow-lg"
//                   style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
//                 >
//                   <span className="text-sm md:text-base font-medium text-[#7C5A48]">{city}</span>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { number: 500, label: "Startups Supported", icon: "🏢" },
    { number: 50, label: "Active Mentors", icon: "👥" },
    { number: 100000, label: "Community Members", icon: "🌐" },
  ];

  return (
    <section className="py-20 text-center relative overflow-hidden bg-[#FAF3E0]" ref={ref}>
      {/* Background with warm tone */}
      <div className="absolute inset-0 opacity-10 bg-[url('/lovable-uploads/cc2b17ac-d37f-4bc4-839b-c2341e83b815.png')] bg-repeat bg-center"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#5C3D2E]">
            Bihar's First{" "}
            <span className="bg-[#E8D6C1] text-[#5C3D2E] px-2 py-1 rounded">
              Startup Incubation Centre
            </span>
          </h2>
          <p className="text-[#7C5A48]">Supported by Bihar Government</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-xl bg-[#FDF7F0] border border-[#D4B49A] hover:border-[#B98B6D] transition-all duration-300 shadow-md hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 text-[#B98B6D]">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-[#5C3D2E] mb-2">
                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    separator=","
                    suffix={stat.number > 1000 ? "+" : "+"}
                  />
                )}
              </div>
              <div className="text-[#7C5A48] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vision, Mission, Goal Section with Images */}
        <div className="mt-20">
          <h3 className="text-xl md:text-2xl font-bold mb-8 text-[#5C3D2E]">About BSIC</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Vision",
                description: "To make Bihar the startup hub of Eastern India",
                image: "/images/vision.png", // Replace this with your image
              },
              {
                title: "Mission",
                description:
                  "Supporting innovative startups through incubation & mentorship",
                image: "/images/mission.png", // Replace this with your image
              },
              {
                title: "Goal",
                description:
                  "Creating a sustainable startup ecosystem in Bihar",
                image: "/images/goal.png", // Replace this with your image
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-8 rounded-lg bg-[#FDF7F0] border border-[#D4B49A] hover:border-[#B98B6D] transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                {/* Image Placeholder */}
                <img src={item.image} alt={item.title} className="w-24 h-24 mb-4 object-contain" />
                <h4 className="text-lg md:text-xl font-semibold mb-3 text-[#5C3D2E]">
                  {item.title}
                </h4>
                <p className="text-[#7C5A48] text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Locations Section */}
        <div className="mt-20">
          <h3 className="text-xl md:text-2xl font-bold mb-8 text-[#5C3D2E]">Our Locations</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {["Patna", "Bhagalpur", "Muzaffarpur", "Gaya", "Darbhanga"].map(
              (city, index) => (
                <div
                  key={city}
                  className="text-center p-4 rounded-lg bg-[#FDF7F0] border border-[#D4B49A] hover:border-[#B98B6D] transition-all duration-300 shadow-md hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
                >
                  <span className="text-sm md:text-base font-medium text-[#7C5A48]">{city}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};