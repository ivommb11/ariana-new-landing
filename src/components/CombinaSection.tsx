import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CombinaSection = () => {
  // Array de imágenes...
  const carouselImages = [
    { id: 1, src: "/images/k1.jpeg", alt: "Primavera 1" },
    { id: 2, src: "/images/k2.jpeg", alt: "Primavera 2" },
    { id: 3, src: "/images/k3.jpeg", alt: "Primavera 3" },
    { id: 4, src: "/images/k4.jpeg", alt: "Primavera 4" },
  ];

  return (
    // === CAMBIO AQUÍ: 'pt-20' ELIMINADO ===
    <section id="combina" className="relative w-full overflow-hidden bg-secondary">

      {/* ... (El texto en escalera está bien) ... */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white drop-shadow-lg">
        <div className="flex flex-col items-start">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-abril tracking-tight">
            EL COLOR
          </h2>
          <p className="text-2xl md:text-3xl font-light tracking-widest my-1 md:my-2 ml-8 md:ml-52">
            QUE DESPIERTA
          </p>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-abril tracking-tight ml-16 md:ml-32">
            LA PRIMAVERA
          </h3>
        </div>
      </div>


      {/* Carrusel de imágenes de fondo */}
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3500,
          }),
        ]}
        className="w-full h-[80vh] md:h-[90vh]" // altura del carrusel
      >
        <CarouselContent>
          {carouselImages.map((image) => (
            <CarouselItem key={image.id} className="basis-full">
              <div className="relative w-full h-full">

                {/* Esta <img> está correcta. NO es 'absolute'. */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover brightness-[0.6]"
                />

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 z-30 bg-white/40 hover:bg-white/60 text-black rounded-full" />
        <CarouselNext className="right-4 z-30 bg-white/40 hover:bg-white/60 text-black rounded-full" />
      </Carousel>
    </section>
  );
};

export default CombinaSection;