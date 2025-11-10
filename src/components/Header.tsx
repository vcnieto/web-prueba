import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Inicio", id: "hero" },
    { name: "Servicios", id: "servicios" },
    { name: "Galería", id: "galeria" },
    { name: "Testimonios", id: "testimonios" },
    { name: "Contacto", id: "contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-primary transition-smooth hover:text-primary-hover"
          >
            Belaos Beauty
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary-hover text-primary-foreground gap-2"
            >
              <Calendar className="w-4 h-4" />
              Reservar Cita
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contacto")}
              className="w-full mt-4 bg-primary hover:bg-primary-hover text-primary-foreground gap-2"
            >
              <Calendar className="w-4 h-4" />
              Reservar Cita
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
