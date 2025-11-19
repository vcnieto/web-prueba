import foto1 from "@/assets/foto_1.png";
import foto2 from "@/assets/foto_2.png";
import foto3 from "@/assets/foto_3.png";
import foto4 from "@/assets/foto_4.jpg";
import foto5 from "@/assets/foto_5.jpg";

const Gallery = () => {
  const images = [
    { src: foto1, alt: "Color y mechas profesionales" },
    { src: foto2, alt: "Manicura y cuidado de uñas" },
    { src: foto3, alt: "Tratamientos faciales y bienestar" },
    { src: foto4, alt: "Masaje y relax corporal" },
    { src: foto5, alt: "Resultados reales en el salón" },
  ];

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
      </div>
    </section>
  );
};

export default Gallery;
