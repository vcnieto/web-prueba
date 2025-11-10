import { Award, Leaf, Home, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyUs = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Equipo Experto",
      description: "Profesionales altamente capacitados con años de experiencia en el sector de la belleza.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Productos de Calidad",
      description: "Utilizamos solo productos de primera calidad, respetuosos con tu piel y cabello.",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Ambiente Relajante",
      description: "Un espacio elegante y acogedor diseñado para tu comodidad y bienestar.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Resultados Duraderos",
      description: "Tratamientos efectivos que garantizan resultados visibles y de larga duración.",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experiencia y Cuidado en Cada Detalle
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre por qué somos la mejor elección para tu cuidado personal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="bg-card border-none shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
