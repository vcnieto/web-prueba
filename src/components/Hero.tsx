import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";
import heroVideo from "@/assets/VIDEO PRINCIPAL.mp4";
import mainPhoto from "@/assets/foto_principal.jpg";
import { NavLink } from "@/components/NavLink";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "34699133105"; // +34 España sin el +
    const message = "Hola! Me gustaría reservar una cita en Belaos Beauty Salon.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden intro">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          poster={mainPhoto}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Salón de Belleza Integral</span>
            </div>

            <h1 className="heading-1 text-foreground leading-tight">
              Tu Belleza,
              <br />
              <span className="text-primary">Nuestra Pasión</span>
            </h1>

            <p className="body-text text-muted-foreground max-w-xl reveal">
              Experiencias de belleza personalizadas con técnicas avanzadas y un trato cercano. Tu momento de cuidado empieza aquí.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center pt-2 reveal">
              <NavLink to="/servicios">
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-text bg-background/80 backdrop-blur-sm hover:bg-background hover-pop"
                >
                  Ver Servicios
                </Button>
              </NavLink>
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="btn-text bg-primary hover:bg-primary-hover text-primary-foreground gap-2 hover-pop"
              >
                <Calendar className="w-5 h-5" />
                Reservar Ahora
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={mainPhoto}
              alt="Belaos Beauty Salon - imagen principal"
              className="w-full max-w-lg lg:max-w-xl mx-auto md:mx-0 rounded-2xl shadow-xl border border-white/10 reveal"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
