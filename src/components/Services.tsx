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
      title: "Manicuras",
      icon: <Sparkles className="w-6 h-6" />,
      groups: [
        {
          title: "Manicuras",
          items: [
            { name: "Manicura masculina", duration: "", price: "23 €" },
            { name: "Manicura rusa sin esmalte", duration: "", price: "20 €" },
            { name: "Manicura rusa con esmaltado tradicional", duration: "", price: "23 €" },
            { name: "Esmaltado semi + capa de refuerzo", duration: "", price: "27 €" },
            { name: "Puesta nueva uñas esculpidas", duration: "", price: "Desde 50 €" },
            { name: "Relleno uñas esculpidas", duration: "", price: "33 €" },
            { name: "Tratamiento parafina manos", duration: "", price: "10 €" },
          ],
        },
      ],
    },
    {
      title: "Pedicuras",
      icon: <Sparkles className="w-6 h-6" />,
      groups: [
        {
          title: "Pedicuras",
          items: [
            { name: "Esmaltado semi", duration: "", price: "25 €" },
            { name: "Esmaltado tradicional", duration: "", price: "20 €" },
            { name: "Pedicura spa sin esmaltado", duration: "", price: "35 €" },
            { name: "Pedicura spa tradicional", duration: "", price: "28 €" },
            { name: "Pedicura spa masculina", duration: "", price: "28 €" },
            { name: "Pedicura spa con esmaltado semi", duration: "", price: "35 €" },
            { name: "Pedicura jelly spa con esmaltado semi", duration: "", price: "45 €" },
          ],
        },
      ],
    },
    {
      title: "Cejas y Pestañas",
      icon: <Hand className="w-6 h-6" />,
      groups: [
        {
          title: "Cejas y Pestañas",
          items: [
            { name: "Repaso depilación cejas", duration: "", price: "10 €" },
            { name: "Definición de cejas", duration: "", price: "15 €" },
            { name: "Tinte cejas", duration: "", price: "6 €" },
            { name: "Lifting de pestañas", duration: "", price: "40 €" },
            { name: "Laminado de cejas", duration: "", price: "45 €" },
            { name: "Microblading cejas", duration: "", price: "200 €" },
          ],
        },
        {
          title: "Extensiones de Pestañas",
          items: [
            { name: "CLÁSICAS (primera puesta)", duration: "1 h 30 min", price: "55 €" },
            { name: "HIBRIDAS (primera puesta)", duration: "1 h 30 min", price: "60 €" },
            { name: "VOLUMEN (primera puesta)", duration: "1 h 30 min", price: "65 €" },
            { name: "RELLENO CLÁSICAS", duration: "1 h", price: "40 €" },
            { name: "RELLENO HÍBRIDAS", duration: "1 h", price: "45 €" },
            { name: "RELLENO VOLUMEN", duration: "1 h", price: "50 €" },
          ],
        },
      ],
    },
    {
      title: "Depilación Cera",
      icon: <Scissors className="w-6 h-6" />,
      groups: [
        {
          title: "Mujer",
          items: [
            { name: "Nariz", duration: "", price: "3 €" },
            { name: "Labio superior", duration: "", price: "3 €" },
            { name: "Mentón", duration: "", price: "5 €" },
            { name: "Axilas", duration: "", price: "8 €" },
            { name: "Brazos", duration: "", price: "10 €" },
            { name: "Línea alba", duration: "", price: "5 €" },
            { name: "Ingles brasileñas", duration: "", price: "15 €" },
            { name: "Pubis completo", duration: "", price: "20 €" },
            { name: "Glúteos", duration: "", price: "10 €" },
            { name: "Interglúteo", duration: "", price: "10 €" },
            { name: "Medias piernas", duration: "", price: "15 €" },
            { name: "Piernas enteras", duration: "", price: "20 €" },
          ],
        },
        {
          title: "Hombre",
          items: [
            { name: "Nariz u orejas", duration: "", price: "3 €" },
            { name: "Axilas", duration: "", price: "10 €" },
            { name: "Brazos", duration: "", price: "15 €" },
            { name: "Hombros", duration: "", price: "8 €" },
            { name: "Espalda", duration: "", price: "20 €" },
            { name: "Tórax y abdomen", duration: "", price: "25 €" },
            { name: "Glúteos", duration: "", price: "12 €" },
            { name: "Medias piernas", duration: "", price: "17 €" },
            { name: "Piernas enteras", duration: "", price: "22 €" },
          ],
        },
      ],
    },
    {
      title: "Láser Diodo Trionda",
      icon: <Eye className="w-6 h-6" />,
      groups: [
        {
          title: "ZONA XS",
          items: [
            { name: "Labio superior · Patillas · Entrecejo · Mentón · Pómulos · Línea alba", duration: "", price: "10 €" },
          ],
        },
        {
          title: "ZONA S",
          items: [
            { name: "Axilas · Hombros · Ingles simples · Interglúteo · Nuca · Lumbares", duration: "", price: "20 €" },
          ],
        },
        {
          title: "ZONA M",
          items: [
            { name: "Medios brazos · Pubis completo", duration: "", price: "35 €" },
          ],
        },
        {
          title: "ZONA L",
          items: [
            { name: "Brazos completos · Espalda · Pecho · Medias piernas", duration: "", price: "45 €" },
          ],
        },
        {
          title: "ZONA XL",
          items: [
            { name: "Piernas completas", duration: "", price: "60 €" },
          ],
        },
      ],
    },
    {
      title: "Tratamientos Faciales",
      icon: <Eye className="w-6 h-6" />,
      groups: [
        {
          title: "Tratamientos Faciales",
          items: [
            { name: "Higiene profunda", duration: "", price: "60 €" },
            { name: "Tratamiento ácidos (Sesión)", duration: "", price: "60 €" },
            { name: "Tratamiento ácidos (Bono 4 sesiones)", duration: "", price: "200 €" },
            { name: "Tratamiento efecto flash", duration: "", price: "60 €" },
            { name: "Radiofrecuencia facial (Sesión)", duration: "", price: "60 €" },
            { name: "Radiofrecuencia facial (Bono 4 sesiones)", duration: "", price: "200 €" },
            { name: "Dermapen (diagnóstico previo)", duration: "", price: "Desde 60 €" },
            { name: "Maquillaje día / noche", duration: "", price: "50 €" },
          ],
        },
      ],
    },
    {
      title: "Tratamientos Corporales",
      icon: <Heart className="w-6 h-6" />,
      groups: [
        {
          title: "Tratamientos Corporales",
          items: [
            { name: "Limpieza de espalda", duration: "", price: "50 €" },
            { name: "Masaje relajante", duration: "45 min", price: "50 €" },
            { name: "Maderoterapia", duration: "30 min", price: "45 €" },
            { name: "Tratamiento detox", duration: "90 min", price: "80 €" },
            { name: "Sculpt therapy (Sesión)", duration: "30 min", price: "30 €" },
            { name: "Sculpt therapy (Bono 6 sesiones)", duration: "", price: "150 €" },
            { name: "Presoterapia (Sesión)", duration: "30 min", price: "25 €" },
            { name: "Presoterapia (Bono 6 sesiones)", duration: "", price: "120 €" },
          ],
        },
      ],
    },
    {
      title: "Combinaciones Corporales",
      icon: <Heart className="w-6 h-6" />,
      groups: [
        {
          title: "Combinaciones Corporales",
          items: [
            {
              name: "FUSIÓN CORPORAL: MADEROTERAPIA + SCULPT + PRESO (Sesión)",
              duration: "90 min",
              price: "100 €",
            },
            {
              name: "FUSIÓN CORPORAL: MADEROTERAPIA + SCULPT + PRESO (Bono 4 sesiones)",
              duration: "",
              price: "360 €",
            },
            {
              name: "MADEROTERAPIA + PRESO (Sesión)",
              duration: "60 min",
              price: "65 €",
            },
            {
              name: "MADEROTERAPIA + PRESO (Bono 4 sesiones)",
              duration: "",
              price: "220 €",
            },
            {
              name: "MADEROTERAPIA + SCULPT THERAPY (Sesión)",
              duration: "60 min",
              price: "70 €",
            },
            {
              name: "MADEROTERAPIA + SCULPT THERAPY (Bono 4 sesiones)",
              duration: "",
              price: "240 €",
            },
            {
              name: "SCULPT THERAPY + PRESO (Sesión)",
              duration: "60 min",
              price: "50 €",
            },
            {
              name: "SCULPT THERAPY + PRESO (Bono 4 sesiones)",
              duration: "",
              price: "160 €",
            },
          ],
        },
      ],
    },
    {
      title: "Peluquería",
      icon: <Scissors className="w-6 h-6" />,
      groups: [
        {
          title: "Spa capilar",
          items: [
            { name: "Essential women", duration: "", price: "120 €" },
            { name: "Detox men", duration: "", price: "100 €" },
          ],
        },
        {
          title: "Mechas",
          items: [
            { name: "Balayage", duration: "", price: "Desde 70 €" },
            { name: "Punto de luz", duration: "", price: "Desde 35 €" },
            { name: "Nordic blonde", duration: "", price: "Desde 90 €" },
            { name: "Corrección de color (diagnóstico previo)", duration: "", price: "diagnóstico previo" },
            { name: "Babylights", duration: "", price: "Desde 80 €" },
            { name: "Melting", duration: "", price: "Desde 85 €" },
          ],
        },
        {
          title: "Color",
          items: [
            { name: "Tonalidad completa", duration: "", price: "Desde 60 €" },
            { name: "Tonalidad en la base", duration: "", price: "Desde 40 €" },
            { name: "Matiz", duration: "", price: "39 €" },
          ],
        },
        {
          title: "Corte",
          items: [
            { name: "Corte", duration: "", price: "Desde 20 €" },
          ],
        },
        {
          title: "Secado",
          items: [
            { name: "Corto", duration: "", price: "20 €" },
            { name: "Medio", duration: "", price: "24 €" },
            { name: "Largo", duration: "", price: "28 €" },
          ],
        },
        {
          title: "Tratamientos capilares",
          items: [
            {
              name: "Reparación, hidratación, nutrición, cuero cabelludo",
              duration: "",
              price: "Desde 25 €",
            },
            { name: "Alisado orgánico", duration: "", price: "1,50 €/gr" },
            { name: "Antifrezz", duration: "", price: "Desde 70 €" },
          ],
        },
        {
          title: "Eventos",
          items: [
            { name: "Recogido de invitada", duration: "", price: "45 €" },
            { name: "Peinado de fallera", duration: "", price: "40 €" },
            { name: "Recogido de novia", duration: "", price: "Consultar en el salón" },
          ],
        },
        {
          title: "Barber Ritual",
          items: [
            { name: "Corte", duration: "", price: "20 €" },
            { name: "Rapado", duration: "", price: "15 €" },
            { name: "Barba", duration: "", price: "15 €" },
            { name: "Corte + barba", duration: "", price: "28 €" },
            { name: "Rapado + barba", duration: "", price: "25 €" },
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
          {variant === "full" ? (
            <>
              <h2 className="heading-2 text-foreground mb-3">Nuestros Servicios</h2>
              <p className="body-text text-muted-foreground max-w-2xl mx-auto">
                Explora nuestro catálogo completo por categorías
              </p>
            </>
          ) : (
            <>
              <h2 className="heading-2 text-foreground mb-3">Nuestros Servicios Más Destacados</h2>
              <p className="body-text text-muted-foreground max-w-2xl mx-auto">
                Explora nuestro catálogo completo por categorías y descubre los tratamientos favoritos de nuestras clientas
              </p>
            </>
          )}
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
                    <details
                      key={gIdx}
                      className="group border border-border rounded-lg"
                      onToggle={(e) => {
                        const el = e.currentTarget as HTMLDetailsElement;
                        if (el.open) {
                          document.querySelectorAll('details[open]').forEach((d) => {
                            if (d !== el) (d as HTMLDetailsElement).open = false;
                          });
                        }
                      }}
                    >
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
