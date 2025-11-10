import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Belaos Beauty Salon</h3>
            <p className="text-footer-foreground/80 mb-4">
              Tu salón de belleza de confianza. Especialistas en cuidado capilar, 
              estética, tratamientos corporales y faciales.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-footer-foreground/10 hover:bg-footer-foreground/20 flex items-center justify-center transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-footer-foreground/10 hover:bg-footer-foreground/20 flex items-center justify-center transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {["Inicio", "Servicios", "Galería", "Testimonios", "Contacto"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-footer-foreground/80 hover:text-footer-foreground transition-smooth"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-footer-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center gap-2 text-footer-foreground/80">
                <Mail className="w-4 h-4" />
                <span>info@belaosbeauty.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Horario</h5>
              <p className="text-sm text-footer-foreground/80">Lun-Vie: 10:00-20:00</p>
              <p className="text-sm text-footer-foreground/80">Sábados: 10:00-18:00</p>
              <p className="text-sm text-footer-foreground/80">Domingos: Cerrado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-footer-foreground/60">
            © {currentYear} Belaos Beauty Salon. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
