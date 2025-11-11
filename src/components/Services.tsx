import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import {
  Scissors,
  Sparkles,
  Hand,
  Eye,
  Heart,
  Calendar,
} from "lucide-react";

interface ServiceItem {
  name: string;
  duration: string;
  price: string;
}

interface ServiceGroup {
  title: string;
  items: ServiceItem[];
}

interface Category {
  title: string;
  icon: React.ReactNode;
  groups: ServiceGroup[];
}

interface ServicesProps {
  variant?: "featured" | "full";
}

const Services = ({ variant = "full" }: ServicesProps) => {
  const catalog: Category[] = [
    {
      title: "Pelo",
      icon: <Scissors className="w-6 h-6" />,
      groups: [
        {
          title: "SPA Capilar",
          items: [
            { name: "Essential Women", duration: "1 h 30 min", price: "120 €" },
            { name: "Detox Men", duration: "1 h", price: "100 €" },
          ],
        },
        {
          title: "Mechas",
          items: [
            { name: "Balayage (desde)", duration: "2 h", price: "70 €" },
            { name: "Babylights (desde)", duration: "2 h", price: "80 €" },
            { name: "Melting (desde)", duration: "2 h", price: "85 €" },
            { name: "Nordic Blonde (desde)", duration: "2 h", price: "90 €" },
            { name: "Punto de Luz (desde)", duration: "2 h", price: "35 €" },
          ],
        },
        {
          title: "Color",
          items: [
            { name: "Tonalidad Base (desde)", duration: "1 h 30 min", price: "40 €" },
            { name: "Tonalidad Completa (desde)", duration: "1 h 15 min", price: "60 €" },
            { name: "Gloss Color (Matiz) (desde)", duration: "30 min", price: "39 €" },
            { name: "Asesoramiento Color", duration: "15 min", price: "0,01 €" },
          ],
        },
        {
          title: "Combinados",
          items: [
            { name: "Tonalidad Base + Matiz + Secado (Pelo corto)", duration: "2 h 30 min", price: "99 €" },
            { name: "Tonalidad Base + Matiz + Secado (Pelo medio)", duration: "2 h 45 min", price: "103 €" },
            { name: "Tonalidad Base + Matiz + Secado (Pelo largo)", duration: "3 h", price: "107 €" },

            { name: "Tonalidad Base + Corte + Secado (Pelo corto)", duration: "1 h 45 min", price: "80 €" },
            { name: "Tonalidad Base + Corte + Secado (Pelo medio)", duration: "2 h", price: "84 €" },
            { name: "Tonalidad Base + Corte + Secado (Pelo largo)", duration: "2 h 15 min", price: "88 €" },

            { name: "Tonalidad Completa + Corte + Secado (Pelo corto)", duration: "1 h 45 min", price: "100 €" },
            { name: "Tonalidad Completa + Corte + Secado (Pelo medio)", duration: "2 h", price: "104 €" },
            { name: "Tonalidad Completa + Corte + Secado (Pelo largo)", duration: "2 h 15 min", price: "108 €" },

            { name: "Tonalidad Completa + Secado (Pelo corto)", duration: "1 h 30 min", price: "80 €" },
            { name: "Tonalidad Completa + Secado (Pelo medio)", duration: "1 h 45 min", price: "84 €" },
            { name: "Tonalidad Completa + Secado (Pelo largo)", duration: "2 h", price: "88 €" },

            { name: "Mechas + Matiz + Secado (Pelo corto)", duration: "4 h 30 min", price: "129 €" },
            { name: "Mechas + Matiz + Secado (Pelo medio)", duration: "4 h 45 min", price: "133 €" },
            { name: "Mechas + Matiz + Secado (Pelo largo)", duration: "5 h", price: "137 €" },

            { name: "Mechas + Matiz + Corte + Secado (Pelo corto)", duration: "4 h 45 min", price: "149 €" },
            { name: "Mechas + Matiz + Corte + Secado (Pelo medio)", duration: "5 h", price: "153 €" },
            { name: "Mechas + Matiz + Corte + Secado (Pelo largo)", duration: "5 h 15 min", price: "157 €" },

            { name: "Matiz + Secado (Pelo corto)", duration: "1 h 30 min", price: "59 €" },
            { name: "Matiz + Secado (Pelo medio)", duration: "1 h 45 min", price: "63 €" },
            { name: "Matiz + Secado (Pelo largo)", duration: "2 h", price: "67 €" },

            { name: "Matiz + Corte + Secado (Pelo corto)", duration: "1 h 45 min", price: "79 €" },
            { name: "Matiz + Corte + Secado (Pelo medio)", duration: "2 h", price: "83 €" },
            { name: "Matiz + Corte + Secado (Pelo largo)", duration: "2 h 15 min", price: "87 €" },
          ],
        },
        {
          title: "Secado",
          items: [
            { name: "Lavar + Secar (Pelo corto)", duration: "30 min", price: "20 €" },
            { name: "Lavar + Secar (Pelo medio)", duration: "45 min", price: "24 €" },
            { name: "Lavar + Secar (Pelo largo)", duration: "1 h", price: "28 €" },
            { name: "Lavar + Ondas (Pelo corto)", duration: "40 min", price: "22 €" },
            { name: "Lavar + Ondas (Pelo medio)", duration: "55 min", price: "26 €" },
            { name: "Lavar + Ondas (Pelo largo)", duration: "1 h 10 min", price: "30 €" },
          ],
        },
        {
          title: "Corte y Secado",
          items: [
            { name: "Corte + Secado a Mano (Pelo corto)", duration: "45 min", price: "40 €" },
            { name: "Corte + Secado a Mano (Pelo medio)", duration: "1 h", price: "44 €" },
            { name: "Corte + Secado a Mano (Pelo largo)", duration: "1 h 15 min", price: "48 €" },
            { name: "Corte + Secado al Aire (Pelo corto)", duration: "20 min", price: "24 €" },
            { name: "Corte + Secado al Aire (Pelo medio)", duration: "30 min", price: "26 €" },
            { name: "Corte + Secado al Aire (Pelo largo)", duration: "30 min", price: "28 €" },
            { name: "Diseño de Corte (desde)", duration: "1 h 15 min", price: "45 €" },
            { name: "Corte Flequillo", duration: "10 min", price: "10 €" },
          ],
        },
        {
          title: "Tratamientos Capilares",
          items: [
            { name: "Balancing + Secado (desde)", duration: "1 h 30 min", price: "60 €" },
            { name: "Purifying + Secado (desde)", duration: "1 h 30 min", price: "60 €" },
            { name: "Vitalizing + Secado (desde)", duration: "1 h 30 min", price: "60 €" },
            { name: "Invigorating + Secado (desde)", duration: "1 h 30 min", price: "60 €" },
            { name: "Sensitive + Secado (desde)", duration: "1 h 30 min", price: "60 €" },
            { name: "Mud Therapy + Secado (desde)", duration: "1 h 30 min", price: "60 €" },
            { name: "Hidracore + Secado (desde)", duration: "1 h 30 min", price: "50 €" },
            { name: "Bioregenerante + Secado (desde)", duration: "1 h 30 min", price: "45 €" },
          ],
        },
        {
          title: "Tratamiento K18 + Secado",
          items: [
            { name: "Pelo corto", duration: "30 min", price: "35 €" },
            { name: "Pelo medio", duration: "40 min", price: "45 €" },
            { name: "Pelo largo", duration: "55 min", price: "55 €" },
          ],
        },
        {
          title: "Antifrizz / Permanente / Alisado",
          items: [
            { name: "Trat. Capilar Antifrizz Complex (Pelo corto)", duration: "1 h", price: "70 €" },
            { name: "Trat. Capilar Antifrizz Complex (Pelo medio)", duration: "1 h 15 min", price: "80 €" },
            { name: "Trat. Capilar Antifrizz Complex (Pelo largo)", duration: "1 h 30 min", price: "90 €" },
            { name: "Permanente Rizada (desde)", duration: "1 h 30 min", price: "70 €" },
            { name: "Alisado Orgánico (precio gramo)", duration: "3 h", price: "1,50 €/g" },
          ],
        },
        {
          title: "Tratamiento K-18 (secado al aire)",
          items: [
            { name: "Pelo corto", duration: "15 min", price: "20 €" },
            { name: "Pelo medio", duration: "15 min", price: "25 €" },
            { name: "Pelo largo", duration: "15 min", price: "30 €" },
          ],
        },
        {
          title: "Barber Ritual",
          items: [
            { name: "Corte", duration: "30 min", price: "20 €" },
            { name: "Rapado", duration: "30 min", price: "15 €" },
            { name: "Barba", duration: "30 min", price: "15 €" },
            { name: "Corte + Barba", duration: "45 min", price: "28 €" },
            { name: "Rapado + Barba", duration: "45 min", price: "25 €" },
          ],
        },
        {
          title: "Eventos",
          items: [
            { name: "Recogido Invitada", duration: "1 h", price: "45 €" },
            { name: "Peinado Fallera", duration: "1 h", price: "40 €" },
            { name: "Recogido Novia (asesoramiento previo)", duration: "1 h 30 min", price: "0,01 €" },
            { name: "Arreglo Trenzas de Fallera", duration: "5 min", price: "15 €" },
          ],
        },
      ],
    },
    {
      title: "Uñas",
      icon: <Sparkles className="w-6 h-6" />,
      groups: [
        {
          title: "Servicios de Uñas",
          items: [
            { name: "Manicura Clásica", duration: "45 min", price: "25 €" },
            { name: "Manicura Semipermanente", duration: "60 min", price: "35 €" },
            { name: "Extensiones de Uñas", duration: "90 min", price: "Desde 50 €" },
            { name: "Pedicura Spa", duration: "60 min", price: "40 €" },
          ],
        },
      ],
    },
    {
      title: "Depilación",
      icon: <Hand className="w-6 h-6" />,
      groups: [
        {
          title: "Servicios de Depilación",
          items: [
            { name: "Cejas y Pestañas", duration: "20 min", price: "15 €" },
            { name: "Depilación con Cera", duration: "30-60 min", price: "Desde 20 €" },
            { name: "Depilación Láser Diodo", duration: "Variable", price: "Consultar" },
          ],
        },
      ],
    },
    {
      title: "Facial",
      icon: <Eye className="w-6 h-6" />,
      groups: [
        {
          title: "Servicios de Facial",
          items: [
            { name: "Tratamiento Facial Básico", duration: "60 min", price: "50 €" },
            { name: "Tratamiento Facial Premium", duration: "90 min", price: "85 €" },
            { name: "Extensión de Pestañas", duration: "120 min", price: "70 €" },
            { name: "Maquillaje Profesional", duration: "60 min", price: "45 €" },
          ],
        },
      ],
    },
    {
      title: "Masaje & Cuerpo",
      icon: <Heart className="w-6 h-6" />,
      groups: [
        {
          title: "Servicios de Masaje y Cuerpo",
          items: [
            { name: "Masaje Relajante", duration: "60 min", price: "55 €" },
            { name: "Maderoterapia", duration: "60 min", price: "60 €" },
            { name: "Presoterapia", duration: "45 min", price: "40 €" },
            { name: "Sculpt Therapy", duration: "60 min", price: "70 €" },
          ],
        },
      ],
    },
  ];

  const categories = useMemo(() => ["Todos", ...catalog.map((c) => c.title)], [catalog]);
  const [active, setActive] = useState<string>(categories[0]);

  const filtered = useMemo(() => {
    if (active === "Todos") return catalog;
    return catalog.filter((c) => c.title === active);
  }, [active, catalog]);

  const listToRender = useMemo(() => {
    if (variant !== "featured") return filtered;
    // En Home mostrar TODAS las categorías, pero resumidas (máx 2 grupos y 2 items por grupo)
    return catalog.map((c) => ({
      ...c,
      groups: c.groups.slice(0, 2).map((g) => ({ ...g, items: g.items.slice(0, 2) })),
    }));
  }, [variant, catalog, filtered]);

  const openWhatsApp = () => {
    const phoneNumber = "34699133105"; // +34 España sin el +
    const message = "Hola! Me gustaría reservar una cita en Belaos Beauty Salon.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 intro">
          <h2 className="heading-2 text-foreground mb-3">Nuestros Servicios</h2>
          <p className="body-text text-muted-foreground max-w-2xl mx-auto">
            Explora nuestro catálogo completo por categorías
          </p>
        </div>

        {variant === "full" && (
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActive(cat);
                  const top = document.getElementById("servicios");
                  if (top) top.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`px-4 py-2 rounded-full border transition-smooth ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listToRender.map((category, idx) => (
            <Card
              key={idx}
              className="border-2 border-border hover:border-primary transition-smooth hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.groups.map((group, gIdx) => (
                    <details key={gIdx} className="group border border-border rounded-lg">
                      <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between gap-3">
                        <span className="font-semibold text-foreground">{group.title}</span>
                        <span className="transition-smooth group-open:rotate-180 text-muted-foreground">⌄</span>
                      </summary>
                      <div className="px-4 pb-3 space-y-3">
                        {group.items.map((item, iIdx) => (
                          <div
                            key={iIdx}
                            className="pb-3 border-b border-border last:border-0 last:pb-0"
                          >
                            <div className="flex justify-between items-center">
                              <h4 className="text-foreground">{item.name}</h4>
                              <span className="font-semibold text-primary">{item.price}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{item.duration}</p>
                          </div>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>

                <Button
                  onClick={openWhatsApp}
                  className="w-full mt-6 bg-primary hover:bg-primary-hover text-primary-foreground gap-2 hover-pop"
                >
                  <Calendar className="w-4 h-4" />
                  Reservar por WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {variant === "featured" && (
          <div className="text-center mt-10">
            <NavLink to="/servicios">
              <Button className="btn-text bg-primary text-primary-foreground hover:bg-primary-hover hover-pop">
                Ver todos los servicios
              </Button>
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
