import galleryHair from "@/assets/gallery-hair.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";
import galleryFacial from "@/assets/gallery-facial.jpg";
import galleryMassage from "@/assets/gallery-massage.jpg";

const Gallery = () => {
  const images = [
    { src: galleryHair, alt: "Tratamiento de peluquería profesional" },
    { src: galleryNails, alt: "Servicio de manicura elegante" },
    { src: galleryFacial, alt: "Tratamiento facial relajante" },
    { src: galleryMassage, alt: "Masaje terapéutico" },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-background">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
