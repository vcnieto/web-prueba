import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María García",
      text: "El mejor salón de belleza en el que he estado. El equipo es profesional y el ambiente es increíblemente relajante. ¡Siempre salgo sintiéndome renovada!",
      rating: 5,
    },
    {
      name: "Laura Martínez",
      text: "Los tratamientos faciales son espectaculares. Mi piel nunca se ha visto tan bien. Definitivamente volveré para probar más servicios.",
      rating: 5,
    },
    {
      name: "Carmen Rodríguez",
      text: "Excelente atención y productos de alta calidad. Mi manicura duró semanas perfecta. Totalmente recomendado para cualquier servicio de belleza.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-24 bg-card-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestras Clientas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Cliente Verificada</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
