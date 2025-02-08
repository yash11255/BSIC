
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ApplyForm } from "./ApplyForm";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApplyFormOpen, setIsApplyFormOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/#programs" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Mentors", href: "/mentors" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#9b87f5]/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] bg-clip-text text-transparent">
            BSIC
          </Link>

          {isMobile ? (
            <div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#6E59A5]"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>

              {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-[#9b87f5]/20 py-4 animate-fade-in">
                  <div className="container mx-auto px-4 flex flex-col space-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="text-gray-600 hover:text-[#9b87f5] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Button 
                      className="w-full bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] hover:opacity-90 transition-all"
                      onClick={() => {
                        setIsApplyFormOpen(true);
                        setIsMenuOpen(false);
                      }}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-gray-600 hover:text-[#9b87f5] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                className="bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] hover:opacity-90 transition-all"
                onClick={() => setIsApplyFormOpen(true)}
              >
                Apply Now
              </Button>
            </div>
          )}
        </div>
      </div>
      <ApplyForm isOpen={isApplyFormOpen} onClose={() => setIsApplyFormOpen(false)} />
    </nav>
  );
};
