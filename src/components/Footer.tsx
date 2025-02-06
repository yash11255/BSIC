
export const Footer = () => {
  const links = {
    Company: ["About", "Team", "Careers", "Contact"],
    Resources: ["Blog", "Press", "Events", "FAQ"],
    Legal: ["Privacy", "Terms", "Security"],
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">IndiaAcc</h3>
            <p className="text-gray-400">
              Empowering startups to build, grow, and scale their businesses.
            </p>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 IndiaAcc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
