import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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
          {isHome ? (
            <button
              onClick={() => scrollToSection("hero")}
              className="transition-smooth hover-pop"
              aria-label="Ir al inicio"
            >
              <img src={logo} alt="Belaôs Beauty Salon" className="h-12 md:h-14 w-auto" />
            </button>
          ) : (
            <NavLink to="/" className="transition-smooth hover-pop" aria-label="Ir al inicio">
              <img src={logo} alt="Belaôs Beauty Salon" className="h-12 md:h-14 w-auto" />
            </NavLink>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.id === "hero") {
                return isHome ? (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground hover:text-primary transition-smooth font-medium"
                  >
                    {item.name}
                  </button>
                ) : (
                  <NavLink
                    key={item.id}
                    to="/"
                    className="text-foreground hover:text-primary transition-smooth font-medium"
                  >
                    {item.name}
                  </NavLink>
                );
              }

              // Servicios sí navega a página
              if (item.id === "servicios") {
                return (
                  <NavLink
                    key={item.id}
                    to="/servicios"
                    className="text-foreground hover:text-primary transition-smooth font-medium"
                  >
                    {item.name}
                  </NavLink>
                );
              }

              // Galería / Testimonios / Contacto: scroll en Home, hash desde otras páginas
              const hashTo = `/#${item.id}`;
              return isHome ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <NavLink
                  key={item.id}
                  to={hashTo}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  {item.name}
                </NavLink>
              );
            })}
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
            {navItems.map((item) => {
              if (item.id === "hero") {
                return isHome ? (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-3 text-foreground hover:text-primary transition-smooth font-medium"
                  >
                    {item.name}
                  </button>
                ) : (
                  <NavLink
                    key={item.id}
                    to="/"
                    className="block w-full text-left py-3 text-foreground hover:text-primary transition-smooth font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                );
              }

              if (item.id === "servicios") {
                return (
                  <NavLink
                    key={item.id}
                    to="/servicios"
                    className="block w-full text-left py-3 text-foreground hover:text-primary transition-smooth font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                );
              }

              const hashTo = `/#${item.id}`;
              return isHome ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-foreground hover:text-primary transition-smooth font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <NavLink
                  key={item.id}
                  to={hashTo}
                  className="block w-full text-left py-3 text-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              );
            })}
            <Button
              onClick={() => {
                if (isHome) scrollToSection("contacto");
                else window.location.href = "/#contacto";
              }}
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
