import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/constants";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // const handleDownloadCV = () => {
  //   const link = document.createElement("a");
  //   link.href = personalInfo.cvUrl;
  //   link.download = "CV.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  const handleDownloadCV = () => {
  window.open(personalInfo.cvUrl, "_blank");
};

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            {personalInfo?.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link?.label}
                  </button>
                ))}
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </>
            )}
            <Button onClick={handleDownloadCV} size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {isHomePage ? (
              <>
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left py-2 px-4 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </>
            ) : (
              <>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-left py-2 px-4 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                >
                  Home
                </Link>
              </>
            )}
            <Button onClick={handleDownloadCV} size="sm" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
