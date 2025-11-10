import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Belaos Beauty Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Salón de Belleza Integral</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Tu Belleza,
            <br />
            <span className="text-primary">Nuestra Pasión</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Descubre un espacio donde el cuidado personal se convierte en arte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={() => scrollToSection("servicios")}
              size="lg"
              variant="outline"
              className="bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              Ver Servicios
            </Button>
            <Button
              onClick={() => scrollToSection("contacto")}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground gap-2"
            >
              <Calendar className="w-5 h-5" />
              Reservar Ahora
            </Button>
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
