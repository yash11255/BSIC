
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Programs", href: "#programs" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Mentors", href: "#mentors" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary">
            IndiaAcc
          </a>

          {isMobile ? (
            <div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>

              {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-4 animate-fade-in">
                  <div className="container mx-auto px-4 flex flex-col space-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-gray-600 hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button>Apply Now</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
