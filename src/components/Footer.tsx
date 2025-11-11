import { Instagram, Mail, Phone } from "lucide-react";

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
                href="https://www.instagram.com/belaosbeautysalon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-footer-foreground/10 hover:bg-footer-foreground/20 flex items-center justify-center transition-smooth hover-pop"
              >
                <Instagram className="w-5 h-5" />
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
                <span>699 13 31 05</span>
              </li>
              <li className="flex items-center gap-2 text-footer-foreground/80">
                <Mail className="w-4 h-4" />
                <span>info@belaosbeauty.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Horario</h5>
              <p className="text-sm text-footer-foreground/80">Lunes: Cerrado</p>
              <p className="text-sm text-footer-foreground/80">Martes: 9:30–19:30</p>
              <p className="text-sm text-footer-foreground/80">Miércoles: 9:30–19:30</p>
              <p className="text-sm text-footer-foreground/80">Jueves: 9:30–19:30</p>
              <p className="text-sm text-footer-foreground/80">Viernes: 9:30–19:30</p>
              <p className="text-sm text-footer-foreground/80">Sábado: 9:30–13:30</p>
              <p className="text-sm text-footer-foreground/80">Domingo: Cerrado</p>
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
