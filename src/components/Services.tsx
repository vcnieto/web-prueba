import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scissors,
  Sparkles,
  Hand,
  Eye,
  Heart,
  Calendar,
} from "lucide-react";

interface Service {
  name: string;
  duration: string;
  price: string;
}

interface ServiceCategory {
  title: string;
  icon: React.ReactNode;
  services: Service[];
}

const Services = () => {
  const serviceCategories: ServiceCategory[] = [
    {
      title: "Pelo",
      icon: <Scissors className="w-6 h-6" />,
      services: [
        { name: "Spa Capilar", duration: "60 min", price: "Desde €45" },
        { name: "Mechas & Color", duration: "120 min", price: "Desde €80" },
        { name: "Corte y Secado", duration: "45 min", price: "Desde €35" },
        { name: "Tratamientos Capilares", duration: "45 min", price: "Desde €40" },
      ],
    },
    {
      title: "Uñas",
      icon: <Sparkles className="w-6 h-6" />,
      services: [
        { name: "Manicura Clásica", duration: "45 min", price: "€25" },
        { name: "Manicura Semipermanente", duration: "60 min", price: "€35" },
        { name: "Extensiones de Uñas", duration: "90 min", price: "Desde €50" },
        { name: "Pedicura Spa", duration: "60 min", price: "€40" },
      ],
    },
    {
      title: "Depilación",
      icon: <Hand className="w-6 h-6" />,
      services: [
        { name: "Cejas y Pestañas", duration: "20 min", price: "€15" },
        { name: "Depilación con Cera", duration: "30-60 min", price: "Desde €20" },
        { name: "Depilación Láser Diodo", duration: "Variable", price: "Consultar" },
      ],
    },
    {
      title: "Facial",
      icon: <Eye className="w-6 h-6" />,
      services: [
        { name: "Tratamiento Facial Básico", duration: "60 min", price: "€50" },
        { name: "Tratamiento Facial Premium", duration: "90 min", price: "€85" },
        { name: "Extensión de Pestañas", duration: "120 min", price: "€70" },
        { name: "Maquillaje Profesional", duration: "60 min", price: "€45" },
      ],
    },
    {
      title: "Masaje & Cuerpo",
      icon: <Heart className="w-6 h-6" />,
      services: [
        { name: "Masaje Relajante", duration: "60 min", price: "€55" },
        { name: "Maderoterapia", duration: "60 min", price: "€60" },
        { name: "Presoterapia", duration: "45 min", price: "€40" },
        { name: "Sculpt Therapy", duration: "60 min", price: "€70" },
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos de belleza personalizados para ti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, idx) => (
            <Card
              key={idx}
              className="border-2 border-border hover:border-primary transition-smooth hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.services.map((service, serviceIdx) => (
                    <div
                      key={serviceIdx}
                      className="pb-4 border-b border-border last:border-0 last:pb-0"
                    >
                      <h4 className="font-semibold text-foreground mb-1">{service.name}</h4>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{service.duration}</span>
                        <span className="font-semibold text-primary">{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  className="w-full mt-6 bg-primary hover:bg-primary-hover text-primary-foreground gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Reservar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
