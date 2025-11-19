import { useEffect, useState } from "react";
import foto1 from "@/assets/foto_1.png";
import foto2 from "@/assets/foto_2.png";
import foto3 from "@/assets/foto_3.png";
import foto4 from "@/assets/foto_4.jpg";
import foto5 from "@/assets/foto_5.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

const AUTO_INTERVAL_MS = 5000;

const Gallery = () => {
  const images = [
    { src: foto1, alt: "Color y mechas profesionales" },
    { src: foto2, alt: "Manicura y cuidado de uñas" },
    { src: foto3, alt: "Tratamientos faciales y bienestar" },
    { src: foto4, alt: "Masaje y relax corporal" },
    { src: foto5, alt: "Resultados reales en el salón" },
  ];

  const isMobile = useIsMobile();

  const [current, setCurrent] = useState(0);

  // Cambio automático cada X segundos solo en móvil
  useEffect(() => {
    if (!isMobile) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [images.length, isMobile]);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  const loopImages = [...images, ...images];

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Galería
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un vistazo a nuestro salón y algunos de nuestros mejores trabajos
          </p>
        </div>

        {isMobile ? (
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-lg aspect-square sm:aspect-[4/3] md:aspect-[16/9] bg-muted">
              <img
                src={images[current].src}
                alt={images[current].alt}
                className="w-full h-full object-cover transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Dots para navegación manual */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`h-2.5 w-2.5 rounded-full border transition-smooth ${
                    idx === current
                      ? "bg-primary border-primary"
                      : "bg-transparent border-border hover:border-primary"
                  }`}
                  aria-label={`Ver imagen ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="overflow-hidden">
            <div className="flex animate-marquee will-change-transform">
              {loopImages.map((image, idx) => (
                <div key={idx} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/4 box-border">
                  <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer transform scale-95 md:scale-90 px-2 md:px-3">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
