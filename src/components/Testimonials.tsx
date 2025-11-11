import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const GOLD = "#FFD700";

const Testimonials = () => {
  const testimonials = [
    { name: "María García", text: "El mejor salón de belleza en el que he estado. El equipo es profesional y el ambiente es increíblemente relajante. ¡Siempre salgo sintiéndome renovada!", rating: 5, date: "Oct 2025" },
    { name: "Laura Martínez", text: "Los tratamientos faciales son espectaculares. Mi piel nunca se ha visto tan bien. Definitivamente volveré para probar más servicios.", rating: 5, date: "Sep 2025" },
    { name: "Carmen Rodríguez", text: "Excelente atención y productos de alta calidad. Mi manicura duró semanas perfecta. Totalmente recomendado para cualquier servicio de belleza.", rating: 5, date: "Ago 2025" },
    { name: "Ana López", text: "Me hice balayage y quedó espectacular. Muy buen asesoramiento y resultados perfectos.", rating: 5, date: "Ago 2025" },
    { name: "Paula Fernández", text: "Pedicura Jelly SPA súper relajante. Repetiré sin duda.", rating: 5, date: "Jul 2025" },
    { name: "Lucía Gómez", text: "Depilación láser rápida y eficaz. Trato 10.", rating: 5, date: "Jun 2025" },
    { name: "Sofía Ruiz", text: "El lifting de pestañas me encantó, muy naturales.", rating: 5, date: "May 2025" },
    { name: "Elena Torres", text: "Masaje relajante de los mejores que he probado.", rating: 5, date: "Apr 2025" },
  ];

  const perPage = 3; // en móvil el grid es 1 columna, así que se verán 1-3 apilados, ok
  const totalPages = Math.ceil(testimonials.length / perPage);
  const [page, setPage] = useState(0);

  const visible = useMemo(() => {
    const start = page * perPage;
    return testimonials.slice(start, start + perPage);
  }, [page, testimonials]);

  const gotoTop = () => {
    const top = document.getElementById("testimonios");
    if (top) top.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const prev = () => {
    setPage((p) => (p - 1 + totalPages) % totalPages);
    gotoTop();
  };
  const next = () => {
    setPage((p) => (p + 1) % totalPages);
    gotoTop();
  };

  return (
    <section id="testimonios" className="py-24 bg-card-light relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 intro">
          <h2 className="heading-2 text-foreground mb-3">Lo Que Dicen Nuestras Clientas</h2>
          <p className="body-text text-muted-foreground max-w-2xl mx-auto">
            Reseñas verificadas de Google y experiencias reales de nuestras clientas
          </p>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-between max-w-6xl mx-auto mb-4">
          <button onClick={prev} className="px-3 py-2 rounded-md border hover:border-primary transition-smooth">Anterior</button>
          <div className="flex gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${i === page ? "bg-primary" : "bg-border"}`} />
            ))}
          </div>
          <button onClick={next} className="px-3 py-2 rounded-md border hover:border-primary transition-smooth">Siguiente</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visible.map((t, idx) => (
            <Card key={`${page}-${idx}`} className="border border-border shadow-sm hover:shadow-md transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3" aria-label={`${t.rating} estrellas`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ fill: GOLD, color: GOLD }} />
                  ))}
                </div>
                <p className="text-foreground mb-5 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.date} · Cliente verificada</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Insignia estilo Google */}
        <div className="mt-8 md:mt-12 relative">
          <div className="md:absolute md:bottom-0 md:left-0">
            <div className="bg-white/95 text-foreground rounded-xl shadow-md border border-border backdrop-blur-sm p-4 flex items-center gap-4 w-full max-w-md hover:shadow-lg transition-smooth">
              <div className="flex items-center gap-2">
                {/* Estrella dorada estilo Google */}
                <Star className="w-6 h-6" style={{ fill: GOLD, color: GOLD }} />
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">5.0</span>
                  <span className="text-sm text-muted-foreground">/ 5</span>
                </div>
              </div>
              <div className="ml-auto text-right">
                <p className="text-xs text-muted-foreground">Calificación verificada por Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
